import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/features/products/components/product-card";
import { getFeaturedProducts } from "@/features/products/queries";

export function FeaturedProducts() {
  const products = getFeaturedProducts(4);

  return (
    <section className="py-20">
      <Container>
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-2">
              Most Popular
            </p>
            <h2 className="font-display text-4xl font-semibold text-charcoal">
              Featured Mattresses
            </h2>
          </div>
          <Link href="/products" className="hidden sm:block">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/products">
            <Button variant="outline">View All Mattresses</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
