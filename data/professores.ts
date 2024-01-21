import { prisma } from "@/lib/prisma"

export const getProfessores = async () => {
    const professores = await prisma.professor.findMany({})
    return professores
}