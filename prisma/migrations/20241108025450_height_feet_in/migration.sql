/*
  Warnings:

  - You are about to drop the column `height` on the `height` table. All the data in the column will be lost.
  - Added the required column `feet` to the `height` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inches` to the `height` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "height" DROP COLUMN "height",
ADD COLUMN     "feet" TEXT NOT NULL,
ADD COLUMN     "inches" TEXT NOT NULL;
