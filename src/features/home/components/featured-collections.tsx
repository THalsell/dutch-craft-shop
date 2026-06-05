import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CollectionCard } from "@/features/collections/components/collection-card";
import { getAllCollections } from "@/features/collections/utils";

export function FeaturedCollections() {
  const collections = getAllCollections();

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
            Our Collections
          </p>
          <h2 className="font-display text-4xl font-semibold text-charcoal">
            Find Your Perfect Mattress
          </h2>
          <p className="mt-4 text-slate text-lg max-w-xl mx-auto">
            Every Dutch Craft collection is built around a distinct coil system and comfort
            philosophy — find the one that fits your sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((collection, i) => (
            <CollectionCard key={collection.id} collection={collection} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="text-sm font-medium text-navy hover:underline underline-offset-2"
          >
            View all collections →
          </Link>
        </div>
      </Container>
    </section>
  );
}
