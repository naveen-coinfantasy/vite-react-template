import { cn } from "@/lib/utils";
import React from "react";

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <>
        <label htmlFor={id} className="text-xs">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "rounded-xl border border-light-gray bg-transparent px-4 py-3 text-sm",
            className
          )}
          {...props}
        />
      </>
    );
  }
);
