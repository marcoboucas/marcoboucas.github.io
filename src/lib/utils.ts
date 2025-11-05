import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Determines if a color is light or dark and returns the appropriate contrasting text color
 * @param backgroundColor - The background color in hex format (e.g., "#ffffff" or "ffffff")
 * @returns "black" for light backgrounds, "white" for dark backgrounds
 */
export function getContrastColor(backgroundColor?: string): "black" | "white" {
  if (!backgroundColor) return "black"; // Default for white background
  
  // Remove # if present
  const hex = backgroundColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate relative luminance using WCAG formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return contrasting color
  return luminance > 0.5 ? "black" : "white";
}