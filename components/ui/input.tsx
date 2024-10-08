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

import { LoaderCircle, Play } from "lucide-react";
import { Button } from "./button";

interface DownloadInputProps extends InputProps {
  isLoading?: boolean;
}

const DownloadInput = React.forwardRef<HTMLInputElement, DownloadInputProps>(
  ({ className, type, isLoading, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex p-[8px] items-center rounded-md border-[2px] transition-colors border-input focus-within:border-primary bg-white  text-sm ring-offset-background focus-within:ring-ring space-x-3",
          className
        )}
      >
        <input
          disabled={isLoading}
          {...props}
          type={type}
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />

        <Button
          className="flex items-center gap-1"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <LoaderCircle className="animate-spin" size={20} />
          ) : (
            <Play size={20} />
          )}
        </Button>
      </div>
    );
  }
);
DownloadInput.displayName = "DownloadInput";

export { Input, DownloadInput };
