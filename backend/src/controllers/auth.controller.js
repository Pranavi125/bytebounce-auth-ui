import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "../config/db.js";
import { sendMail } from "../utils/mail.js";

/* ================= SIGNUP ================= */
export const signup = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    // 1. Validate input
    if (!full_name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Insert user
    const result = await db.query(
      `INSERT INTO users (full_name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email`,
      [full_name, email, hashedPassword]
    );

    res.status(201).json({
      message: "Signup successful",
      user: result.rows[0],
    });
  } catch (err) {
    console.error("Signup error:", err.message);

    // duplicate email
    if (err.code === "23505") {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    res.status(500).json({ message: "Signup failed" });
  }
};

/* ================= LOGIN ================= */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (!result.rows.length) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
};

/* ================= FORGOT PASSWORD ================= */
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const safeMessage =
      "If the email is registered, a password reset link has been sent.";

    if (!email) {
      return res.status(200).json({ message: safeMessage });
    }

    const result = await db.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (!result.rows.length) {
      return res.status(200).json({ message: safeMessage });
    }

    const userId = result.rows[0].id;

    // generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // ✅ FIX: use Date object (Postgres TIMESTAMP expects this)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    await db.query(
      `UPDATE users
       SET reset_token = $1,
           reset_token_expiry = $2
       WHERE id = $3`,
      [hashedToken, expiresAt, userId]
    );

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    await sendMail({
      to: email,
      subject: "Reset your ByteBounce password",
      html: `
        <h2>Password Reset</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link expires in 15 minutes.</p>
      `,
    });

    res.status(200).json({ message: safeMessage });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Unable to process request" });
  }
};

/* ================= RESET PASSWORD ================= */
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.query;
    const { password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: "Invalid request" });
    }

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const result = await db.query(
      `SELECT id FROM users
       WHERE reset_token = $1
       AND reset_token_expiry > $2`,
      [hashedToken, new Date()]
    );

    if (!result.rows.length) {
      return res
        .status(400)
        .json({ message: "Reset link is invalid or expired" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      `UPDATE users
       SET password_hash = $1,
           reset_token = NULL,
           reset_token_expiry = NULL
       WHERE id = $2`,
      [hashedPassword, result.rows[0].id]
    );

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Reset failed" });
  }
};
