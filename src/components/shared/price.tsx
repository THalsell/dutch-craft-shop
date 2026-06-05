import { cn } from "@/lib/utils/cn";
import { formatPrice } from "@/lib/utils/format-price";

type PriceProps = {
  amount: number;
  compareAt?: number;
  currencyCode?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "font-display text-2xl font-semibold",
};

export function Price({
  amount,
  compareAt,
  currencyCode = "USD",
  className,
  size = "md",
}: PriceProps) {
  return (
    <span className={cn("text-charcoal", sizeClasses[size], className)}>
      {formatPrice(amount, currencyCode)}
      {compareAt && compareAt > amount && (
        <span className="ml-2 text-muted line-through text-sm font-sans font-normal">
          {formatPrice(compareAt, currencyCode)}
        </span>
      )}
    </span>
  );
}
