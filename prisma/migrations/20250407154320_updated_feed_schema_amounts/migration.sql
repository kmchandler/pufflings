/*
  Warnings:

  - You are about to drop the column `amount` on the `feed` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "feed" DROP COLUMN "amount",
ADD COLUMN     "bottleAmount" DECIMAL(65,30),
ADD COLUMN     "solidAmount" TEXT;
