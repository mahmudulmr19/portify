import React from "react";
import { cn } from "@/lib/utils";

export function WidthWrapper({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-2.5 md:px-20", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
