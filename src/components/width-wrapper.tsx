import { HTMLProps } from "react";
import { cn } from "@/lib/utils";

export function WidthWrapper({
  children,
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-5 md:px-10 lg:px-14",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
