import express from "express";
import {
  getJobs,
  createJob,
  applyJob,
  toggleSaveJob,
  getSavedJobs,
  getAppliedJobs,
} from "../controllers/job.controller.js";

const router = express.Router();

/* JOBS */
router.get("/", getJobs);
router.post("/", createJob);

/* SAVE / UNSAVE */
router.post("/:jobId/save", toggleSaveJob);

/* APPLY */
router.post("/:jobId/apply", applyJob);

/* FETCH USER DATA */
router.get("/saved/:userId", getSavedJobs);
router.get("/applied/:userId", getAppliedJobs);

export default router;
