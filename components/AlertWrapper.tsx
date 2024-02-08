import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import db from "@/lib/db";
import { EventWithSchedule } from "@/types";

export const AlertWrapper = async () => {
  const lastEvent: EventWithSchedule | null = await db.events.findFirst({
    where: {
      date: {
        gte: new Date(),
      },
    },
    include: {
      schedule: {
        include: {
          teacher: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  if (!lastEvent) return <></>;

  return (
    <div className="w-full flex bg-[#F21C5C] justify-between px-3 py-2 items-end mb-2">
      <div className="flex flex-col gap-2">
        <span className="text-md font-bold">{lastEvent.description}</span>
        <span className="text-sm font-medium">
          {lastEvent.schedule.teacher.name}
        </span>
      </div>
      <span className="text-sm font-medium">
        {format(lastEvent.date, "dd/LL", { locale: ptBR })}
      </span>
    </div>
  );
};
