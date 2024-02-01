import db from "@/lib/db"

export const getHorarios = async () => {
    const horarios = await db.horarios.findMany({
        orderBy: {
            id: 'asc'
        }, include: {
            firstProfessor: true,
            secondProfessor: true
        }
    })
    return horarios
}