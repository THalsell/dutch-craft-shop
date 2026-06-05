import { CollectionProductCard } from "@/features/collections/components/collection-product-card";
import { EmptyState } from "@/components/shared/empty-state";
import type { Product } from "@/types/product";

type CollectionGridProps = {
  products: Product[];
};

export function CollectionGrid({ products }: CollectionGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        title="No products yet"
        description="Products for this collection are coming soon."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <CollectionProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
