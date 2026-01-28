import express from "express";
import passport from "passport";
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

/* ================= EMAIL ================= */
router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

/* ================= GOOGLE ================= */
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  (req, res) => {
    const user = req.user;

    // ✅ ONLY CHANGE IS HERE (/auth → /)
    const redirectUrl = new URL(`${process.env.FRONTEND_URL}/`);
    redirectUrl.searchParams.set(
      "user",
      JSON.stringify({
        name: user.full_name,
        email: user.email,
      })
    );

    res.redirect(redirectUrl.toString());
  }
);

/* ================= GITHUB ================= */
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
  }),
  (req, res) => {
    const user = req.user;

    // ✅ ONLY CHANGE IS HERE (/auth → /)
    const redirectUrl = new URL(`${process.env.FRONTEND_URL}/`);
    redirectUrl.searchParams.set(
      "user",
      JSON.stringify({
        name: user.full_name,
        email: user.email,
      })
    );

    res.redirect(redirectUrl.toString());
  }
);

export default router;
