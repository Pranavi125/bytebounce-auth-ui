/*
  Warnings:

  - A unique constraint covering the columns `[title,company]` on the table `jobs` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "applyUrl" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "postedAt" TEXT,
ADD COLUMN     "salary" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "jobs_title_company_key" ON "jobs"("title", "company");
