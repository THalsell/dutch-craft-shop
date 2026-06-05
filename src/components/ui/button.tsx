import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-dark focus-visible:outline-navy",
  secondary:
    "bg-fog text-charcoal hover:bg-border focus-visible:outline-navy",
  outline:
    "border border-navy text-navy bg-transparent hover:bg-navy hover:text-white focus-visible:outline-navy",
  ghost:
    "bg-transparent text-charcoal hover:bg-fog focus-visible:outline-navy",
  link:
    "bg-transparent text-navy underline-offset-4 hover:underline p-0 h-auto",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
