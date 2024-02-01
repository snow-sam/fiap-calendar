import { LineDates } from "@/components/LineDates"
import { getClasses } from '@/data/aulas'
import { defaultList } from "@/lib/utils"


import { format, startOfWeek, endOfWeek, setDay, getDay } from 'date-fns'
import { ptBR } from 'date-fns/locale';

export const ContainerDates = async ({ horarios }: { horarios: Array<HorarioWithProfessor> }) => {
    const hoje = new Date()
    const aulas = await getClasses(startOfWeek(hoje), endOfWeek(hoje))
    const mapaAulas = defaultList(aulas, ({ date }: any) => getDay(date) + 1)

    return (
        <div className="flex flex-col gap-2">
            {
                horarios.map(({ id, firstProfessor, secondProfessor }: HorarioWithProfessor) => {
                    return <LineDates
                        aulas={mapaAulas[id] ? mapaAulas[id].reverse() : []}
                        day={format(setDay(hoje, id), 'EEEEEE, d', { locale: ptBR })}
                        professores={[firstProfessor, secondProfessor]}
                        key={id} />
                })
            }
        </div>
    )
}