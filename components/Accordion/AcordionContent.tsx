import { ReactNode } from "react";

import { AccordionContent as AccordionContentShad } from "@/components/ui/accordion";

type AccordionContentProps = {
  children: ReactNode;
};

export const AccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <AccordionContentShad>
      <ul className="bg-[#393636]">{children}</ul>
    </AccordionContentShad>
  );
};
