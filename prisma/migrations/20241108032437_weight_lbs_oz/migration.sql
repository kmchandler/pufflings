/*
  Warnings:

  - You are about to drop the column `weight` on the `weight` table. All the data in the column will be lost.
  - Added the required column `ounces` to the `weight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pounds` to the `weight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "weight" DROP COLUMN "weight",
ADD COLUMN     "ounces" TEXT NOT NULL,
ADD COLUMN     "pounds" TEXT NOT NULL;
