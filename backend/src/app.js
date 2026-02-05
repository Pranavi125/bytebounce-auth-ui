import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";

import authRoutes from "./routes/auth.routes.js";
import newsletterRoutes from "./routes/newsletter.routes.js";
import jobRoutes from "./routes/job.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(passport.initialize());

await import("./config/passport.js");

app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
