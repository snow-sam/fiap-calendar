import { prisma } from "@/lib/prisma"

export const getHorarios = async () => {
    const horarios = await prisma.horarios.findMany({
        orderBy: {
            id: 'asc'
        }, include: {
            firstProfessor: true,
            secondProfessor: true
        }
    })
    return horarios
}