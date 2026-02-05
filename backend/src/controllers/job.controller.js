import prisma from "../config/prisma.js";

/* ================= ENSURE USER EXISTS ================= */
const ensureUserExists = async (userId) => {
  let user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: userId,
        email: `${userId}@bytebounce.dev`,
        full_name: "Auto Created User",
        provider: "local",
      },
    });
  }

  return user;
};

/* ================= ENSURE JOB EXISTS ================= */
const ensureJobExists = async (job) => {
  let dbJob = await prisma.job.findFirst({
    where: {
      title: job.title,
      company: job.company,
    },
  });

  if (!dbJob) {
    dbJob = await prisma.job.create({
      data: {
        title: job.title,
        company: job.company,
        description: job.description,
        type: job.type,
        experience: job.experience,
        location: job.location,
        isRemote: job.isRemote ?? false,
        tags: job.tags ?? [],
      },
    });
  }

  return dbJob;
};

/* ================= GET ALL JOBS ================= */
export const getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { created_at: "desc" },
    });
    res.json(jobs);
  } catch (err) {
    console.error("GET JOBS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
};

/* ================= CREATE JOB ================= */
export const createJob = async (req, res) => {
  try {
    const job = await prisma.job.create({ data: req.body });
    res.status(201).json(job);
  } catch (err) {
    console.error("CREATE JOB ERROR:", err);
    res.status(500).json({ message: "Job creation failed" });
  }
};

/* ================= SAVE / UNSAVE JOB ================= */
export const toggleSaveJob = async (req, res) => {
  try {
    const { userId, job } = req.body;
    const { jobId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "userId missing" });
    }

    await ensureUserExists(userId);

    // ✅ support BOTH DB jobs & frontend job object
    const dbJob = job
      ? await ensureJobExists(job)
      : await prisma.job.findUnique({ where: { id: jobId } });

    const exists = await prisma.savedJob.findUnique({
      where: {
        job_id_user_id: {
          job_id: dbJob.id,
          user_id: userId,
        },
      },
    });

    if (exists) {
      await prisma.savedJob.delete({
        where: {
          job_id_user_id: {
            job_id: dbJob.id,
            user_id: userId,
          },
        },
      });
      return res.json({ saved: false });
    }

    const saved = await prisma.savedJob.create({
      data: {
        job_id: dbJob.id,
        user_id: userId,
      },
    });

    res.json({ saved: true, data: saved });
  } catch (err) {
    console.error("SAVE JOB ERROR:", err);
    res.status(500).json({ message: "Save failed" });
  }
};

/* ================= APPLY JOB ================= */
export const applyJob = async (req, res) => {
  try {
    const { userId, job } = req.body;
    const { jobId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "userId missing" });
    }

    await ensureUserExists(userId);

    const dbJob = job
      ? await ensureJobExists(job)
      : await prisma.job.findUnique({ where: { id: jobId } });

    const applied = await prisma.jobApplication.create({
      data: {
        job_id: dbJob.id,
        user_id: userId,
      },
    });

    res.json({ applied: true, data: applied });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(409).json({ message: "Already applied" });
    }
    console.error("APPLY JOB ERROR:", err);
    res.status(500).json({ message: "Apply failed" });
  }
};

/* ================= FETCH USER DATA ================= */
export const getSavedJobs = async (req, res) => {
  try {
    const saved = await prisma.savedJob.findMany({
      where: { user_id: req.params.userId },
      include: { job: true },
    });
    res.json(saved.map((s) => s.job));
  } catch (err) {
    console.error("GET SAVED JOBS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch saved jobs" });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const applied = await prisma.jobApplication.findMany({
      where: { user_id: req.params.userId },
      include: { job: true },
    });
    res.json(applied);
  } catch (err) {
    console.error("GET APPLIED JOBS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch applied jobs" });
  }
};
