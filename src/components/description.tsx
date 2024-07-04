import { cn } from "@/lib/utils";
import React from "react";
type DescriptionProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export const Description = React.forwardRef<
  HTMLParagraphElement,
  DescriptionProps
>(({ children, className, ...props }, ref) => {
  return (
    <p
      className={cn("text-xs font-light md:text-sm", className)}
      {...props}
      ref={ref}
    >
      {children}
    </p>
  );
});
