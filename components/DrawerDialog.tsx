'use client'

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/DatePicker"
import { Combobox } from "@/components/Combobox"
import { RadioGroupComponent } from "@/components/RadioGroup"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectSingleEventHandler } from "react-day-picker"


export const DrawerDialog = ({ horarios }: { horarios: Array<HorarioWithProfessor> }) => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline"><Plus /></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[440px]">
                    <DialogHeader>
                        <DialogTitle>Adicione uma aula</DialogTitle>
                        <DialogDescription>
                            Defina a aula no formulário a seguir
                        </DialogDescription>
                    </DialogHeader>
                    <ClassForm horarios={horarios} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline"><Plus /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Adicione uma aula</DrawerTitle>
                    <DrawerDescription>
                        Defina a aula no formulário a seguir
                    </DrawerDescription>
                </DrawerHeader>
                <ClassForm className="px-4" horarios={horarios} />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

type ClassFormProps = React.ComponentProps<"form"> & { horarios: Array<HorarioWithProfessor> }

function ClassForm({ className, horarios }: ClassFormProps) {
    const [date, setDate] = useState<Date>(new Date())

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }

    const handleDateChange: SelectSingleEventHandler = (day: Date | undefined, selectedDay: Date) => {
        setDate(day || selectedDay)
    }


    return (
        <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <Label htmlFor="email">Descrição</Label>
                <Input type="text" id="description" placeholder="Checkpoint 1" />
            </div>
            <div className="flex gap-2">
                <div className="grid gap-2">
                    <Label>Data</Label>
                    <DatePicker date={date} onDateChange={handleDateChange} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="combobox">Professor</Label>
                    <Combobox date={date} horarios={horarios}/>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="combobox">Tipo</Label>
                <RadioGroupComponent />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
} 