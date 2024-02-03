import { cn } from "@/lib/utils"

type AccordionItemProps = {
    description: string,
    author: string,
    position: number
}

export const AccordionItem = ({ description, author, position }: AccordionItemProps) => {
    return (
        <li className={cn('p-2 pl-4 w-full flex justify-between', { 'border-b-2': position === 0 })}>
            <span className={cn("text-xs", { 'font-bold': description, 'text-[#999999]': !description })}>
                {description || 'Aula Normal'}
            </span>
            <span className="text-xs">
                {author}
            </span>
        </li>
    )
}