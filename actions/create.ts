"use server"

import { Events } from "@prisma/client"
import db from "@/lib/db"

export const createEvent = async (event: Events) => {
    await db.events.create({data: event})
}