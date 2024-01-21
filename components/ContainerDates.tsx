import { defaultList } from "@/lib/utils"
import { LineDates } from "./LineDates"
import { getClasses, getFirstAndLastDayOfWeek } from '@/data/aulas'
import { getHorarios } from "@/data/horarios"
import { Horarios } from "@prisma/client"

export const ContainerDates = async () => {
    const { firstDayOfWeek, lastDayOfWeek } = getFirstAndLastDayOfWeek()
    const aulas = await getClasses(firstDayOfWeek, lastDayOfWeek)
    const horarios = await getHorarios()
    const mapaAulas = defaultList(aulas, (item: any) => item.date.getDay() + 1)

    return (
        <div className="flex flex-col gap-2">
            {
                horarios.map((horario: Horarios) => { 
                    const index = horario.id
                    const currentDay = new Date(firstDayOfWeek.getDate()) 
                    currentDay.setDate(firstDayOfWeek.getDate() + index)
                    
                    return <LineDates
                            aulas={mapaAulas[index] ? mapaAulas[index].reverse() : []}
                            day={currentDay.getDate()}
                            horario={horario}
                            key={horario.abreviacao} />
                })
            }
        </div>
    )
}