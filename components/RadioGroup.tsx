import { FormEvent } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type RadioGroupComponentProps = {
  value: string;
  onChange: (...event: FormEvent<HTMLDivElement>[]) => void;
};

export const RadioGroupComponent = ({
  value,
  onChange,
}: RadioGroupComponentProps) => {
  return (
    <RadioGroup className="flex" onChange={onChange} defaultValue={value}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Prova" id="Prova" />
        <Label htmlFor="Prova">Prova</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Importante" id="Importante" />
        <Label htmlFor="Importante">Importante</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Normal" id="Normal" />
        <Label htmlFor="Normal">Normal</Label>
      </div>
    </RadioGroup>
  );
};
