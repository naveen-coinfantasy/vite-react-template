import { cn } from "@/lib/utils";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        className={cn("text-lg font-bold md:text-2xl", className)}
        {...props}
        ref={ref}
      >
        {children}
      </h2>
    );
  }
);
