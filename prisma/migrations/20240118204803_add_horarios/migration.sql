-- CreateTable
CREATE TABLE "Horarios" (
    "id" SERIAL NOT NULL,
    "firstProfessorId" INTEGER NOT NULL,
    "secondProfessorId" INTEGER NOT NULL,

    CONSTRAINT "Horarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_firstProfessorId_fkey" FOREIGN KEY ("firstProfessorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_secondProfessorId_fkey" FOREIGN KEY ("secondProfessorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
