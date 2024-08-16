import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatVideoDuration = (seconds: number) => {
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format based on duration
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ${minutes} minute${
      minutes !== 1 ? "s" : ""
    } ${secs} second${secs !== 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ${secs} second${
      secs !== 1 ? "s" : ""
    }`;
  } else {
    return `${secs} second${secs !== 1 ? "s" : ""}`;
  }
};
