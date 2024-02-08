import { cn } from "@/lib/utils";

type AccordionItemProps = {
  author?: string;
  children?: string;
  defaultValue?: string;
  position: number;
};

export const AccordionItem = ({
  author,
  children,
  defaultValue,
  position,
}: AccordionItemProps) => {
  return (
    <li
      className={cn("p-2 pl-4 w-full flex justify-between", {
        "border-b-2": position === 0,
      })}
    >
      <span
        className={cn("text-xs", {
          "font-bold": children,
          "text-[#999999]": !children,
        })}
      >
        {children || defaultValue || "Aula Normal"}
      </span>
      <span className="text-xs">{author}</span>
    </li>
  );
};
