import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { createEvent } from "@/actions/create";
import { TeacherSelect } from "@/components/TeacherSelect";
import { DatePicker } from "@/components/DatePicker";
import { RadioGroupComponent } from "@/components/RadioGroup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { createEventFormSchema } from "@/schemas/events";
import { ScheduleWithTeacher, FormData } from "@/types";

type ClassFormProps = React.ComponentProps<"form"> & {
  schedules: ScheduleWithTeacher[];
};

export const EventsForm = ({ className, schedules }: ClassFormProps) => {
  const form = useForm<z.infer<typeof createEventFormSchema>>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      description: "",
      date: new Date(),
      eventType: "Prova",
    },
  });

  const handleSubmit = async (values: FormData) => {
    console.log(values);
    form.reset();
    const { scheduleDetails, ...rest } = values;
    await createEvent({ ...scheduleDetails, ...rest });
  };

  return (
    <Form {...form}>
      <form
        className={cn("grid items-start gap-4", className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="grid gap-2">
          <FormField control={form.control} name="description" render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Checkpoint 1" type="text"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 items-center">
          <div className="grid gap-2">
            <FormField
              control={form.control} name="date" render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data</FormLabel>
                  <FormControl>
                    <DatePicker {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField control={form.control} name="scheduleDetails" render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Professor</FormLabel>
                  <FormControl>
                    <TeacherSelect
                      control={form.control}
                      placeholder="Select a teacher"
                      items={schedules}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professor</FormLabel>
                <FormControl>
                  <RadioGroupComponent
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    </Form>
  );
};
