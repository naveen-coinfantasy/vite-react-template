import { cn } from "@/lib/utils";
import React from "react";

type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "alt" | "src"
> & {
  src: string;
  alt: string;
};
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, ...props }, ref) => {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("block max-w-full object-contain", className)}
        {...props}
        ref={ref}
      />
    );
  }
);
