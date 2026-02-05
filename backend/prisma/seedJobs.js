import prisma from "../src/config/prisma.js";
import { jobs } from "./jobs.seed.data.js";

async function seedAllJobs() {
  console.log(`🌱 Seeding ${jobs.length} jobs...`);

  for (const job of jobs) {
    await prisma.job.upsert({
      where: {
        title_company: {
          title: job.title,
          company: job.company,
        },
      },
      update: {},
      create: job,
    });
  }

  console.log("✅ All jobs seeded successfully");
  await prisma.$disconnect();
}

seedAllJobs().catch(async (err) => {
  console.error("❌ Seeding failed:", err);
  await prisma.$disconnect();
  process.exit(1);
});
