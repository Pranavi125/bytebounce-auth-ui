import bcrypt from "bcryptjs";
import crypto from "crypto";
import prisma from "../config/prisma.js";
import { sendMail } from "../utils/mail.js";

/* ================= SIGNUP ================= */
export const signup = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName: full_name,
        email,
        passwordHash,
        provider: "local",
      },
      select: {
        id: true,
        fullName: true,
        email: true,
      },
    });

    res.status(201).json({
      message: "Signup successful",
      user,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed" });
  }
};

/* ================= LOGIN ================= */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.passwordHash) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      user: {
        id: user.id,
        full_name: user.fullName,
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

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(200).json({ message: safeMessage });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: hashedToken,
        resetTokenExpiry: expiresAt,
      },
    });

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

    const user = await prisma.user.findFirst({
      where: {
        resetToken: hashedToken,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Reset link is invalid or expired" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Reset failed" });
  }
};
