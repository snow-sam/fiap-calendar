import { format, startOfWeek, endOfWeek, setDay } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Accordion } from "@/components/Accordion";
import { getSchedulesPerWeek } from "@/data/schedules";
import { ScheduleWithTeacher } from "@/types";

export const DatesContainer = async ({
  schedules,
}: {
  schedules: ScheduleWithTeacher[];
}) => {
  const hoje = new Date();
  const schedulesPerWeek = await getSchedulesPerWeek(
    startOfWeek(hoje),
    endOfWeek(hoje),
    schedules,
  );
  return (
    <div className="flex flex-col gap-2">
      {Object.entries(schedulesPerWeek).map(
        ([weekday, schedulesWithEvents]) => {
          const day = format(setDay(hoje, parseInt(weekday)), "EEEEEE, d", {
            locale: ptBR,
          });
          const formatedDay = day.charAt(0).toUpperCase() + day.slice(1);
          return (
            <Accordion.Root>
              <Accordion.Header>{formatedDay}</Accordion.Header>
              <Accordion.Content>
                {schedulesWithEvents.map(({ schedule, events }, position) => {
                  const actualEvent = events.find(
                    (event) => event.period === position,
                  );
                  return (
                    <Accordion.Item
                      author={schedule.teacher.name}
                      defaultValue={schedule.className}
                      position={position}
                    >
                      {actualEvent?.description}
                    </Accordion.Item>
                  );
                })}
              </Accordion.Content>
            </Accordion.Root>
          );
        },
      )}
    </div>
  );
};
