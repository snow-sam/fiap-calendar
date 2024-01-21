/*
  Warnings:

  - Added the required column `date` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorId` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "professorId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
