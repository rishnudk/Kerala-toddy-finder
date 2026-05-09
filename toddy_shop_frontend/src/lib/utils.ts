import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely, resolving conflicts.
 *
 * - Uses `clsx` for conditional class joining (handles strings, arrays, objects)
 * - Uses `tailwind-merge` to deduplicate conflicting Tailwind utilities
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-primary", "text-white")
 * cn("text-sm", variant === "lg" && "text-lg") // → "text-lg" (conflict resolved)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
