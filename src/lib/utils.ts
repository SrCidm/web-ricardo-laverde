// Utilidad para combinar clases de Tailwind
// Patrón estándar de shadcn/ui

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind de forma inteligente
 * Usa clsx para condicionales y twMerge para evitar conflictos
 * 
 * @example
 * cn("px-4 py-2", isActive && "bg-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
