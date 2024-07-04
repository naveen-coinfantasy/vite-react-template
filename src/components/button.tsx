import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-xl px-4 py-3 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:opacity-75",
  {
    variants: {
      variant: {
        default: "bg-primary-gradient font-bold text-xs md:text-sm",
        ghost:
          "bg-transparent border-primary-blue-100 border hover:text-slate-900 hover:bg-slate-200 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
type ButtonVariants = VariantProps<typeof ButtonVariants>;
type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({ variant, className }))}
        {...props}
        ref={ref}
        disabled={isLoading}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
