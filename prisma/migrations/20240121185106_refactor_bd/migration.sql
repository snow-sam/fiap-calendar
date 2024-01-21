/*
  Warnings:

  - You are about to drop the column `firstProfessorId` on the `Horarios` table. All the data in the column will be lost.
  - You are about to drop the column `secondProfessorId` on the `Horarios` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('Normal', 'Importante', 'Prova');

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Horarios" DROP CONSTRAINT "Horarios_firstProfessorId_fkey";

-- DropForeignKey
ALTER TABLE "Horarios" DROP CONSTRAINT "Horarios_secondProfessorId_fkey";

-- AlterTable
ALTER TABLE "Horarios" DROP COLUMN "firstProfessorId",
DROP COLUMN "secondProfessorId",
ADD COLUMN     "primeiroProfessorId" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "segundoProfessorId" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Class";

-- CreateTable
CREATE TABLE "Aula" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "turno" INTEGER NOT NULL DEFAULT 1,
    "tipo" "Tipo" NOT NULL DEFAULT 'Normal',
    "professorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_primeiroProfessorId_fkey" FOREIGN KEY ("primeiroProfessorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_segundoProfessorId_fkey" FOREIGN KEY ("segundoProfessorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
