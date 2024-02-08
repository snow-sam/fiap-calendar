/*
  Warnings:

  - You are about to drop the column `abreviacao` on the `Horarios` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ClassType" AS ENUM ('Normal', 'Importante', 'Prova');

-- AlterTable
ALTER TABLE "Horarios" DROP COLUMN "abreviacao";

-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "period" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "classType" "ClassType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedules" (
    "id" SERIAL NOT NULL,
    "weekDay" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "period" INTEGER NOT NULL,

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
