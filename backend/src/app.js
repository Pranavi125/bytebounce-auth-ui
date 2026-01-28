import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import passport from "passport"; // ✅ REQUIRED
import authRoutes from "./routes/auth.routes.js";

// ⚠️ IMPORTANT: this imports your strategies
import "./config/passport.js"; // ✅ REQUIRED

const app = express();

app.use(cors());
app.use(express.json());

// ✅ PASSPORT INITIALIZE (THIS WAS MISSING)
app.use(passport.initialize());

app.use("/api/auth", authRoutes);

export default app;
