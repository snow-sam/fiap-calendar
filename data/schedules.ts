import db from '@/lib/db'
import { SchedulesPerWeekDay, ScheduleWithTeacher } from '@/types';

export const getSchedulesPerWeek = async (firstDayOfWeek: Date, lastDayOfWeek: Date, schedulesWithTeacher?: ScheduleWithTeacher[]) => {
  try {
    // Consulta todos os 8 horários
    const schedules = schedulesWithTeacher || await db.schedules.findMany({
      include: {
        teacher: true
      },
      orderBy: {
        id: "asc"
      }
    });

    // Objeto para armazenar os horários com eventos agrupados por dia da semana
    const schedulesPerWeekDay: SchedulesPerWeekDay = {};

    // Itera sobre cada horário
    await Promise.all(schedules.map(async (schedule) => {
      // Consulta os eventos associados a este horário entre as datas X e Y
      const events = await db.events.findMany({
        where: {
          scheduleId: schedule.id,
          date: {
            lte: lastDayOfWeek,
            gt: firstDayOfWeek,
          },
        }
      });

      // Verifica se já existe uma entrada para o dia da semana no objeto
      if (!schedulesPerWeekDay[schedule.weekDay]) {
        // Se não existe, cria uma nova entrada com uma lista vazia
        schedulesPerWeekDay[schedule.weekDay] = [];
      }

      // Adiciona o horário com os eventos encontrados à lista correspondente ao dia da semana
      schedulesPerWeekDay[schedule.weekDay].push({
        schedule,
        events,
      });
    }));

    return schedulesPerWeekDay;
  } catch (error) {
    console.error('Erro ao recuperar os horários com eventos por dia da semana:', error);
    throw error;
  }
}
