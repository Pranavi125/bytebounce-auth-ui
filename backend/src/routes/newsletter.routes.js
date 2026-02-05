import express from "express";
import {
  subscribeNewsletter,
  getSubscribers,
  unsubscribeNewsletter,
} from "../controllers/newsletter.controller.js";

const router = express.Router();

// Subscribe
router.post("/subscribe", subscribeNewsletter);

// Get all subscribers
router.get("/", getSubscribers);

// Unsubscribe
router.delete("/:email", unsubscribeNewsletter);

export default router;
