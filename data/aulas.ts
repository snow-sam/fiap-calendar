import { prisma } from "@/lib/prisma";

export const getFirstAndLastDayOfWeek = () => {
    // Obtém a data atual
    const firstDayOfWeek = new Date();
    const lastDayOfWeek = new Date();
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - (firstDayOfWeek.getDay() || 7))
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() - (lastDayOfWeek.getDay() || 7) + 5)
    console.log(firstDayOfWeek.getDate(), lastDayOfWeek.getDate())
    return {
        firstDayOfWeek,
        lastDayOfWeek,
    };
}

export const getClasses = async (firstDayOfWeek: Date, lastDayOfWeek: Date) => {
    const aulas = await prisma.class.findMany({
        where: {
            date: {
                lte: lastDayOfWeek,
                gt: firstDayOfWeek
            }
        },
        orderBy: {
            date: 'desc'
        }, include: {
            professor: true
        }
    })
    return aulas
}

export const getLastClass = async () => {
    const aulas = await prisma.class.findFirst({
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