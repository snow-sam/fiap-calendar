/*
  Warnings:

  - You are about to drop the `Classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('Normal', 'Importante', 'Prova');

-- DropForeignKey
ALTER TABLE "Classes" DROP CONSTRAINT "Classes_teacherId_fkey";

-- DropTable
DROP TABLE "Classes";

-- DropEnum
DROP TYPE "ClassType";

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "eventType" "EventType" NOT NULL,
    "scheduleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
