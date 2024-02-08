import { z } from "zod"
import { EventType } from "@prisma/client"

export const createEventFormSchema = z.object({
  date: z.date(),
  description: z.string().min(1),
  eventType: z.nativeEnum(EventType),
  scheduleDetails: z.object({
    scheduleId: z.number()
      .int()
      .positive()
      .finite(),
    period: z.number()
      .int()
      .lte(1)
      .gte(0)
  })
})