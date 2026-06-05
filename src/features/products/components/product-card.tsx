import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils/format-price";
import { cn } from "@/lib/utils/cn";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));

  return (
    <Link
      href={`/products/${product.handle}`}
      className={cn(
        "group bg-white border border-border rounded-xl overflow-hidden",
        "hover:border-navy hover:shadow-md transition-all duration-200 flex flex-col",
        className
      )}
    >
      {/* Image */}
      <div className="h-48 bg-fog flex items-center justify-center border-b border-border flex-shrink-0">
        {product.cardImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.cardImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : product.images[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg className="w-16 h-16 text-border" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="10" rx="2" />
            <path strokeLinecap="round" d="M5 7V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
          </svg>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        {product.badge && (
          <Badge variant={product.badgeVariant ?? "default"} className="self-start">
            {product.badge}
          </Badge>
        )}

        <div>
          <p className="text-xs text-muted font-medium uppercase tracking-wide">
            {product.collectionName}
          </p>
          <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-navy transition-colors mt-0.5">
            {product.name}
          </h3>
          {product.variants.length > 1 && (
            <p className="text-xs text-slate mt-1">
              {product.variants.map((v) => v.title).join(" · ")}
            </p>
          )}
        </div>

        {product.features.length > 0 && (
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-slate">
                <svg className="w-3.5 h-3.5 text-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
          <span className="font-display text-2xl font-semibold text-charcoal">
            {lowestPrice > 0 ? (
              <>
                {product.variants.length > 1 ? "From " : ""}
                {formatPrice(lowestPrice)}
              </>
            ) : (
              <span className="text-base font-sans font-medium text-slate">Call for pricing</span>
            )}
          </span>
          <span className="text-sm font-medium text-navy group-hover:underline underline-offset-2">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
