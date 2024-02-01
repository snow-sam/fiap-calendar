import db from "@/lib/db";

export const getClasses = async (firstDayOfWeek: Date, lastDayOfWeek: Date) => {
    const aulas = await db.class.findMany({
        where: {
            date: {
                lte: lastDayOfWeek,
                gt: firstDayOfWeek
            }
        },
        orderBy: {
            date: 'desc'
        }, select: {
            description: true,
            date: true,
            turno: true,
            tipo: true
        }
    })
    return aulas
}

export const getLastClass = async () => {
    const aulas = await db.class.findFirst({
        where: {
            date: {
                gte: new Date()
            }
        },
        orderBy: {
            date: 'asc'
        }, include: {
            professor: true
        }
    })
    return aulas
}