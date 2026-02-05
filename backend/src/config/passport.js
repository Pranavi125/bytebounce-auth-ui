import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import prisma from "./prisma.js";

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

        let user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              full_name: fullName,
              email,
              provider: "google",
              provider_id: profile.id,
              password_hash: null,
            },
          });
        }

        return done(null, user);
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
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email =
          profile.emails?.[0]?.value ||
          profile._json?.email ||
          `${profile.username}@github.com`;

        const fullName = profile.displayName || profile.username;

        let user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              full_name: fullName,
              email,
              provider: "github",
              provider_id: profile.id,
              password_hash: null,
            },
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("GitHub OAuth error:", err);
        return done(err, null);
      }
    }
  )
);

export default passport;
