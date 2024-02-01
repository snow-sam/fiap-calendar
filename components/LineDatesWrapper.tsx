import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"


type LineDatesWrapperProps = {
    badge: string,
    children: JSX.Element,
    day: string,
} 


export const LineDatesWrapper: React.FC<LineDatesWrapperProps> = ({ badge, children, day }) => {
    const formatedDay = day.charAt(0).toUpperCase() + day.slice(1)
    return (
        <Accordion type="single" collapsible defaultValue={`${badge ? 'unique': ''}`}>
            <AccordionItem value="unique" className="border-none">
                <AccordionTrigger className="flex hover:no-underline p-2 pl-4 bg-[#141313] ">
                    <span className="w-full text-start text-md font-bold">{formatedDay}</span>
                    {badge &&
                        <Badge variant="default" className="text-xs mr-2 py-1">{badge}</Badge>}
                </AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}