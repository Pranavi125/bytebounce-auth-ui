import "dotenv/config"; // ✅ MUST be first (ESM-safe)

import express from "express";
import cors from "cors";
import passport from "passport";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(passport.initialize());

// load passport strategies AFTER env is ready
await import("./config/passport.js");

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
