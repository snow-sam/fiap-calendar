import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultList = (items: Array<any>, chave_function: (item: any) => any) => {
  return items.reduce((acc: Record<any, any>, item: any) => {
    
    const chave = chave_function(item)
    if (!acc[chave]) {
        acc[chave] = [];
    }
    acc[chave].push(item);
    return acc;
}, {})}