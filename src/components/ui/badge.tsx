import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

type Variant = "default" | "navy" | "green" | "sky" | "muted";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  default: "bg-fog text-charcoal",
  navy: "bg-navy text-white",
  green: "bg-green text-white",
  sky: "bg-sky text-navy",
  muted: "bg-border text-muted",
};

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
