/*
  Warnings:

  - Added the required column `className` to the `Schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedules" ADD COLUMN     "className" TEXT NOT NULL;
