"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/features/products/components/product-card";
import { Select } from "@/components/ui/select";
import { getAllProducts } from "@/features/products/queries";
import { sortProducts } from "@/features/products/utils";
import { getAllCollections } from "@/features/collections/utils";
import { SORT_OPTIONS, type SortOption } from "@/lib/constants/filters";

const ALL_PRODUCTS = getAllProducts();
const ALL_COLLECTIONS = getAllCollections();

export default function ProductsPage() {
  const [sort, setSort] = useState<SortOption>("featured");
  const [collectionFilter, setCollectionFilter] = useState("all");

  const filtered = collectionFilter === "all"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.collectionHandle === collectionFilter);

  const sorted = sortProducts(filtered, sort);

  const collectionOptions = [
    { label: "All Collections", value: "all" },
    ...ALL_COLLECTIONS.map((c) => ({ label: c.name, value: c.handle })),
  ];

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-fog border-b border-border">
          <Container className="py-12">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
              Shop All
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal">
              All Mattresses
            </h1>
            <p className="mt-4 text-slate max-w-xl leading-relaxed">
              Browse Dutch Craft's full lineup of handcrafted mattresses — from our entry-level Comfort
              collection to the flagship Legacy Elite HD.
            </p>
          </Container>
        </section>

        <Container className="py-10">
          {/* Filters bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
            <p className="text-sm text-slate">
              {sorted.length} {sorted.length === 1 ? "model" : "models"}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-52">
                <Select
                  options={collectionOptions}
                  value={collectionFilter}
                  onChange={(e) => setCollectionFilter(e.target.value)}
                />
              </div>
              <div className="w-44">
                <Select
                  options={SORT_OPTIONS.map((o) => ({ label: o.label, value: o.value }))}
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                />
              </div>
            </div>
          </div>

          {/* Grid */}
          {sorted.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sorted.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate">No products match your filters.</div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
