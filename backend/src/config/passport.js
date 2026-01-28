import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import pool from "./db.js"; // ✅ FIXED PATH

/* ================= GOOGLE STRATEGY ================= */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const fullName = profile.displayName;

        if (!email) {
          return done(new Error("No email from Google"), null);
        }

        // 🔍 check user
        const existing = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );

        if (existing.rows.length) {
          return done(null, existing.rows[0]);
        }

        // ➕ create user
        const created = await pool.query(
          `INSERT INTO users (full_name, email)
           VALUES ($1, $2)
           RETURNING id, full_name, email`,
          [fullName, email]
        );

        return done(null, created.rows[0]);
      } catch (err) {
        console.error("Google OAuth error:", err);
        return done(err, null);
      }
    }
  )
);

/* ================= GITHUB STRATEGY ================= */
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email =
          profile.emails?.[0]?.value ||
          profile._json?.email ||
          `${profile.username}@github.com`;

        const fullName = profile.displayName || profile.username;

        const existing = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );

        if (existing.rows.length) {
          return done(null, existing.rows[0]);
        }

        const created = await pool.query(
          `INSERT INTO users (full_name, email)
           VALUES ($1, $2)
           RETURNING id, full_name, email`,
          [fullName, email]
        );

        return done(null, created.rows[0]);
      } catch (err) {
        console.error("GitHub OAuth error:", err);
        return done(err, null);
      }
    }
  )
);

export default passport;
