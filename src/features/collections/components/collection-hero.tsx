import type { Collection } from "@/types/collection";

type CollectionHeroProps = {
  collection: Collection;
  productCount: number;
};

export function CollectionHero({ collection }: CollectionHeroProps) {
  if (collection.logoImage) {
    return (
      <section className="bg-white">
        <div className="flex items-center justify-center px-6 py-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={collection.logoImage}
            alt={collection.name}
            className="max-w-[550px] w-full h-auto object-contain max-h-36"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-fog border-b border-border">
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal">
          {collection.name}
        </h1>
        {collection.tagline && (
          <p className="mt-2 text-lg font-medium italic text-navy">{collection.tagline}</p>
        )}
      </div>
    </section>
  );
}
