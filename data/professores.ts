import db from "@/lib/db"

export const getProfessores = async () => {
    const professores = await db.professor.findMany({})
    return professores
}