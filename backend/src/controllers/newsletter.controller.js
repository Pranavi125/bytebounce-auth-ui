import prisma from "../config/prisma.js";


/**
 * POST /api/newsletter/subscribe
 */
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // 1. Validation
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // 2. Check duplicate
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return res.status(409).json({
        message: "Email already subscribed",
      });
    }

    // 3. Create subscriber
    const subscriber = await prisma.newsletter.create({
      data: {
        email,
      },
    });

    return res.status(201).json({
      message: "Subscribed successfully",
      data: subscriber,
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return res.status(500).json({
      message: "Failed to subscribe",
    });
  }
};

/**
 * GET /api/newsletter
 */
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await prisma.newsletter.findMany({
      orderBy: {
        subscribed_at: "desc",
      },
    });

    return res.json(subscribers);
  } catch (error) {
    console.error("Get subscribers error:", error);
    return res.status(500).json({
      message: "Failed to fetch subscribers",
    });
  }
};

/**
 * DELETE /api/newsletter/:email
 */
export const unsubscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.params;

    await prisma.newsletter.delete({
      where: { email },
    });

    return res.json({
      message: "Unsubscribed successfully",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Subscriber not found",
    });
  }
};
