
// Alert Exports
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

import BackgroundImage from '@/public/background.jpg'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const AlertWrapper = () => {
  return (
    <div className="w-full flex bg-[#F21C5C] justify-between px-3 py-2 items-end mb-2">
      <div className="flex flex-col gap-2">
        <span className="text-md font-bold">NAC 1 - Compiladores</span>
        <span className="text-sm font-medium">Sandro</span>
      </div>
      <span className="text-sm font-medium">18/01</span>
    </div>
  )
}

const LineDates = (props: any) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="border-none" value={props.day}>
        <AccordionTrigger className="flex hover:no-underline p-2 pl-4 bg-[#141313] ">
          <span className="w-full text-start text-md font-bold">{props.day}</span>
          {props.prova &&
            <Badge variant="default" className="text-xs mr-2 py-1">Prova</Badge>}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="bg-[#393636]">
            <li className="p-2 pl-4 w-full flex justify-between">
              <span className="text-xs font-bold">Checkpoint 2</span>
              <span className="text-xs">Sandro</span>
            </li>
            <Separator />
            <li className="p-2 pl-4 w-full flex justify-between">
              <span className="text-xs text-[#999999]">Aula Normal</span>
              <span className="text-xs">Pimentel</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


export default function Home() {
  return (
    <div className='w-full h-[100dvh] bg-black' style={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: 'cover'
    }}>
      <div className="w-full h-[100dvh] p-8 pt-16 bg-[linear-gradient(340deg,_rgba(0,_0,_0,_0.80)_33.25%,_rgba(0,_0,_0,_0.00)_100%)]">

        <AlertWrapper />
        <div className="flex flex-col gap-2">
          <LineDates day="Seg, 15" />
          <LineDates day="Ter, 16" />
          <LineDates day="Qui, 18" prova />
          <LineDates day="Sex, 19" />
        </div>

      </div>
    </div>
  )
}