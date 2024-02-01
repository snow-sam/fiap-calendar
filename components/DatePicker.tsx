"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ptBR } from 'date-fns/locale';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SelectSingleEventHandler } from "react-day-picker"

type DatePickerProps = {
  date: Date,
  onDateChange: SelectSingleEventHandler
}

export function DatePicker({date, onDateChange}: DatePickerProps) {

  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[180px] justify-start text-left font-normal",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {format(date || new Date(), "P", {locale: ptBR})}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day, selectedDay, activeModifiers, e) => {
            onDateChange(day, selectedDay, activeModifiers, e)
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
