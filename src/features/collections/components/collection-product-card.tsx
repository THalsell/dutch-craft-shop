import Link from "next/link";
import { formatPrice } from "@/lib/utils/format-price";
import type { Product } from "@/types/product";

type CollectionProductCardProps = {
  product: Product;
};

export function CollectionProductCard({ product }: CollectionProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  const feels = product.variants.map((v) => v.title);
  const construction = product.specs["Construction"] ?? product.specs["construction"];

  return (
    <div className="flex flex-col bg-white border border-border rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative w-full" style={{ paddingBottom: "80%" }}>
        {product.cardImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.cardImage}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-fog flex items-center justify-center">
            <svg className="w-16 h-16 text-border" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="10" rx="2" />
              <path strokeLinecap="round" d="M5 7V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-xl font-semibold text-charcoal">{product.name}</h3>

        {feels.length > 0 && (
          <div className="text-sm text-slate">{feels.join(" · ")}</div>
        )}

        {construction && (
          <div className="text-sm text-slate">{construction}</div>
        )}

        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">Starting From</p>
            <p className="font-display text-xl font-semibold text-charcoal">
              {lowestPrice > 0 ? formatPrice(lowestPrice) : "Call for pricing"}
            </p>
          </div>
          <Link
            href={`/products/${product.handle}`}
            className="shrink-0 bg-navy text-white text-sm font-semibold px-4 py-2 rounded hover:bg-charcoal transition-colors"
          >
            Shop {product.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
