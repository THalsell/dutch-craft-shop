import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "main" | "article" | "aside";
};

export function Container({ as: Tag = "div", className, children, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
