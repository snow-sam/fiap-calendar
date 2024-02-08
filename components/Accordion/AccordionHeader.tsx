import { AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type AccordionHeaderProps = {
  badge?: string;
  children: string;
};

export const AccordionHeader = ({ badge, children }: AccordionHeaderProps) => {
  return (
    <AccordionTrigger className="flex hover:no-underline p-2 pl-4 bg-[#141313] ">
      <span className="w-full text-start text-md font-bold">{children}</span>
      {badge && (
        <Badge variant="default" className="text-xs mr-2 py-1">
          {badge}
        </Badge>
      )}
    </AccordionTrigger>
  );
};
