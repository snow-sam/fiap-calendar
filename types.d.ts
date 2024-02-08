import { Prisma, Events } from "@prisma/client"

type EventWithSchedule = Prisma.EventsGetPayload<{
    include: { schedule: { include: { teacher: true } } }
}>

type ScheduleWithTeacher = Prisma.SchedulesGetPayload<{
    include: { teacher: true }
}>


type SchedulesPerWeekDay = {
    [weekday: number]: {
        schedule: Prisma.SchedulesGetPayload<{ include: { teacher: true } }>
        events: Events[]
    }[];
}

type FormData = {
    date: Date;
    description: string;
    eventType: "Normal" | "Importante" | "Prova";
    scheduleDetails: {
        scheduleId: number;
        period: number;
    };
};