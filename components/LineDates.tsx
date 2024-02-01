import { Class, Professor } from "@prisma/client"
import { LineDatesWrapper } from "@/components/LineDatesWrapper"
import { cn } from "@/lib/utils"


type LineDatesProps = {
    aulas: Array<Class>,
    day: string,
    professores: Array<Professor>
}


export const LineDates = ({ aulas, day, professores }: LineDatesProps) => {
    const mapaAulas = Object.fromEntries(aulas.map(({ turno, ...aula }) => [turno, aula]))
    const badge = aulas.reduce((maiorTipo, { tipo }) => {
        if (tipo === 'Prova') return tipo
        if (tipo === 'Importante') return maiorTipo || tipo
        return ''
    }, '')
    return (
        <LineDatesWrapper badge={badge} day={day}>
            <ul className="bg-[#393636]">
                {professores.map(({ id, name }, nAula) => {
                    const descAula = mapaAulas[nAula+1]?.description
                    console.log(descAula)
                    return (
                        <li key={id} className={cn('p-2 pl-4 w-full flex justify-between', { 'border-b-2': nAula === 0 })}>
                            <span className={cn("text-xs", { 'font-bold': descAula, 'text-[#999999]': !descAula })}>
                                {descAula || 'Aula Normal'}
                            </span>
                            <span className="text-xs">
                                {name}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </LineDatesWrapper>
    )
}