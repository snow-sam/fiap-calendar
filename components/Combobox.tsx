"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export const Combobox = ({date, horarios}: {date: Date, horarios: HorarioWithProfessor}) => {
  const [open, setOpen] = React.useState(false)
  const [currentProfessor, setCurrentProfessor] = React.useState<any>()

  const changeCurrentProfessors = () => {
    const currentHorario = horarios.find((horario: HorarioWithProfessor) => (horario.id === date.getDay()))
    return currentHorario ? [
        { value: currentHorario.firstProfessor.id, label: currentHorario.firstProfessor.name },
        { value: currentHorario.secondProfessor.id, label: currentHorario.secondProfessor.name },
    ] : []
  }

  const [professores, setProfessores] = React.useState(changeCurrentProfessors())
  
  React.useEffect(() => {
    setProfessores(changeCurrentProfessors())
  }, [date])

  React.useEffect(() => {
    setCurrentProfessor(professores[0])
  }, [professores])
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {currentProfessor ? currentProfessor.label : 'Sem professor no dia'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar professor..." />
          <CommandEmpty>Valor não encontrado</CommandEmpty>
          <CommandGroup>
            {professores.map((professor) => (
              <CommandItem
                key={professor.value}
                value={professor.value}
                onSelect={() => {
                  setCurrentProfessor(professor)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 opacity-100"
                  )}
                />
                {professor.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
