import * as React from "react";
import { Control, useWatch } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScheduleWithTeacher, FormData } from "@/types";

type TeacherSelectProps = {
  items: ScheduleWithTeacher[];
  control: Control<FormData>;
  value: { scheduleId: number; period: number };
  onChange: (...event: string[]) => void;
  placeholder?: string;
  label?: string;
};

export function TeacherSelect({
  items,
  placeholder,
  label,
  value,
  onChange,
  control,
}: TeacherSelectProps) {
  const currentDate = useWatch({ control, name: "date" });
  const filtredItems = items.filter(
    ({ weekDay }) => weekDay === currentDate.getDay(),
  );

  return (
    <Select
      defaultValue={`${value}`}
      onValueChange={(strValue) => onChange(JSON.parse(strValue))}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder || "Select an item"} />
      </SelectTrigger>
      <SelectContent>
        {label && <SelectLabel>{label}</SelectLabel>}
        <SelectGroup>
          {filtredItems.map(({ teacher, period, id }) => (
            <SelectItem
              key={teacher.name}
              value={JSON.stringify({ scheduleId: id, period })}
            >
              {teacher.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
