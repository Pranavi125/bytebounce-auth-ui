import express from "express";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";

// 🔑 Load env FIRST
dotenv.config({ path: ".env" });

import authRoutes from "./routes/auth.routes.js";
import newsletterRoutes from "./routes/newsletter.routes.js";
import jobRoutes from "./routes/job.routes.js";

// (Optional) Just to verify env is loaded
console.log("DATABASE_URL =", process.env.DATABASE_URL);

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(passport.initialize());

/* ================= PASSPORT ================= */

await import("./config/passport.js");

/* ================= ROUTES ================= */

app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/jobs", jobRoutes);

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
