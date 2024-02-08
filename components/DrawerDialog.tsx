"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";

import { EventsForm } from "@/components/EventsForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ScheduleWithTeacher } from "@/types";

export const DrawerDialog = ({
  schedules,
}: {
  schedules: ScheduleWithTeacher[];
}) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[440px]">
          <DialogHeader>
            <DialogTitle>Adicione uma aula</DialogTitle>
            <DialogDescription>
              Defina a aula no formulário a seguir
            </DialogDescription>
          </DialogHeader>
          <EventsForm schedules={schedules} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Plus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Adicione uma aula</DrawerTitle>
          <DrawerDescription>
            Defina a aula no formulário a seguir
          </DrawerDescription>
        </DrawerHeader>
        <EventsForm className="px-4" schedules={schedules} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
