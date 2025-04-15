/*
  Warnings:

  - You are about to drop the column `type` on the `feed` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "feed" DROP COLUMN "type",
ADD COLUMN     "feedType" TEXT,
ADD COLUMN     "solidType" TEXT;
