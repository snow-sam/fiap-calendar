import { AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

type AccordionHeaderProps = {
    title: string,
    badge: string,
}

export const AccordionHeader = ({ title, badge }: AccordionHeaderProps) => {
    return (
        <AccordionTrigger className="flex hover:no-underline p-2 pl-4 bg-[#141313] ">
            <span className="w-full text-start text-md font-bold">{title}</span>
            {badge &&
                <Badge variant="default" className="text-xs mr-2 py-1">{badge}</Badge>}
        </AccordionTrigger>
    )
}
