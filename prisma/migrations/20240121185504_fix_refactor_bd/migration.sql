/*
  Warnings:

  - You are about to drop the column `primeiroProfessorId` on the `Horarios` table. All the data in the column will be lost.
  - You are about to drop the column `segundoProfessorId` on the `Horarios` table. All the data in the column will be lost.
  - You are about to drop the `Aula` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstProfessorId` to the `Horarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondProfessorId` to the `Horarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Aula" DROP CONSTRAINT "Aula_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Horarios" DROP CONSTRAINT "Horarios_primeiroProfessorId_fkey";

-- DropForeignKey
ALTER TABLE "Horarios" DROP CONSTRAINT "Horarios_segundoProfessorId_fkey";

-- AlterTable
ALTER TABLE "Horarios" DROP COLUMN "primeiroProfessorId",
DROP COLUMN "segundoProfessorId",
ADD COLUMN     "firstProfessorId" INTEGER NOT NULL,
ADD COLUMN     "secondProfessorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Aula";

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "turno" INTEGER NOT NULL DEFAULT 1,
    "tipo" "Tipo" NOT NULL DEFAULT 'Normal',
    "professorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_firstProfessorId_fkey" FOREIGN KEY ("firstProfessorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_secondProfessorId_fkey" FOREIGN KEY ("secondProfessorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
