import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

/* ================= SAVE JOB ================= */
router.post("/:jobId/save", async (req, res) => {
  const { jobId } = req.params;
  const { userId } = req.body;

  if (!jobId || !userId) {
    return res.status(400).json({ message: "jobId or userId missing" });
  }

  try {
    const saved = await prisma.savedJob.create({
      data: {
        job_id: jobId,
        user_id: userId,
      },
    });

    res.json(saved);
  } catch (err) {
    // duplicate save → ignore
    if (err.code === "P2002") {
      return res.json({ message: "Already saved" });
    }

    console.error("SAVE JOB ERROR:", err);
    res.status(500).json({ message: "Failed to save job" });
  }
});

/* ================= FETCH SAVED JOBS ================= */
router.get("/saved/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const saved = await prisma.savedJob.findMany({
      where: { user_id: userId },
      include: { job: true },
    });

    // return only jobs
    res.json(saved.map((s) => s.job));
  } catch (err) {
    console.error("FETCH SAVED JOBS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch saved jobs" });
  }
});

export default router;
