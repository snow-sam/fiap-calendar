import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Horarios, Prisma } from "@prisma/client"


type LineDatesProps = {
    aulas: Array<Prisma.ClassGetPayload<{include: {professor: true}}>> | [],
    day: number,
    horario: Horarios
}


export const LineDates = async ({ aulas, day, horario }: LineDatesProps) => {
    let badgeValue: string | undefined = undefined
    const mapaAulas = Object.fromEntries(aulas.map(({ turno, ...aula }) => {
        console.log(aula.tipo)
        switch (aula.tipo) {
            case 'Prova':
                badgeValue = aula.tipo
                break
            case 'Importante':
                badgeValue = !badgeValue ? aula.tipo : badgeValue
                break 
            default:
                badgeValue = undefined
        }
        return [turno, aula]
    }))
    const primeiraAula = mapaAulas[1] || null
    const segundaAula = mapaAulas[2] || null
    
    return (
        <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value={`${horario.abreviacao}, ${day}`}>
                <AccordionTrigger className="flex hover:no-underline p-2 pl-4 bg-[#141313] ">
                    <span className="w-full text-start text-md font-bold">{`${horario.abreviacao}, ${day}`}</span>
                    {badgeValue &&
                        <Badge variant="default" className="text-xs mr-2 py-1">{badgeValue}</Badge>}
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="bg-[#393636]">
                        <li className="p-2 pl-4 w-full flex justify-between">
                            {primeiraAula ?
                                <span className="text-xs font-bold">{primeiraAula.description}</span>
                                :
                                <span className="text-xs text-[#999999]">Aula Normal</span>}
                            <span className="text-xs"></span>
                        </li>
                        <Separator />
                        <li className="p-2 pl-4 w-full flex justify-between">
                            {segundaAula ?
                                <span className="text-xs font-bold">{segundaAula.description}</span>
                                :
                                <span className="text-xs text-[#999999]">Aula Normal</span>}
                            <span className="text-xs"></span>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}