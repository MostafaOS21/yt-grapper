import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// DownloadInput

import { DownloadCloud } from "lucide-react";
import { Button } from "./button";

const DownloadInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex p-2 items-center rounded-md border border-input focus-within:border-primary bg-white  text-sm ring-offset-background focus-within:ring-ring    space-x-3",
          className
        )}
      >
        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />

        <Button className="flex items-center gap-1">
          <DownloadCloud /> Start now!
        </Button>
      </div>
    );
  }
);
DownloadInput.displayName = "DownloadInput";

export { Input, DownloadInput };
