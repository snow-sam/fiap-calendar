type HorarioWithProfessor = Prisma.HorariosGetPayload<{
    include: { firstProfessor: true, secondProfessor: true }
}>