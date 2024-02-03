import { Accordion, AccordionItem } from "@/components/ui/accordion"

type AccordionRootProps = {
    children: JSX.Element,
    defaultOpen: boolean,
}


export const AccordionRoot = ({ children, defaultOpen }: AccordionRootProps) => {
    return (
        <Accordion type="single" collapsible defaultValue={`${defaultOpen ? 'unique' : ''}`}>
            <AccordionItem value="unique" className="border-none">
                {children}
            </AccordionItem>
        </Accordion>
    )
}