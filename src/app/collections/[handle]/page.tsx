import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { CollectionHero } from "@/features/collections/components/collection-hero";
import { CollectionGrid } from "@/features/collections/components/collection-grid";
import { getCollectionByHandle } from "@/features/collections/utils";
import { getProductsByCollection } from "@/features/products/queries";
import { MOCK_COLLECTIONS } from "@/data/mock-collections";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return MOCK_COLLECTIONS.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) return { title: "Collection Not Found" };
  return { title: collection.name };
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);

  if (!collection) notFound();

  const products = getProductsByCollection(handle);

  // For Nightfall, organize by sub-collection
  const nightfallGroups =
    handle === "nightfall"
      ? [
          {
            label: "Standard",
            products: products.filter((p) => p.tags.includes("nightfall-standard")),
          },
          {
            label: "Two-Sided Flippable",
            products: products.filter((p) => p.tags.includes("nightfall-two-sided")),
          },
          {
            label: "Resurgence Plus",
            products: products.filter((p) => p.tags.includes("nightfall-resurgence-plus")),
          },
        ].filter((g) => g.products.length > 0)
      : null;

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <CollectionHero collection={collection} productCount={products.length} />

        <Container className="py-10">
          {nightfallGroups ? (
            <div className="space-y-14">
              {nightfallGroups.map((group) => (
                <section key={group.label}>
                  <h2 className="font-display text-2xl font-semibold text-charcoal mb-6 pb-3 border-b border-border">
                    {group.label}
                  </h2>
                  <CollectionGrid products={group.products} />
                </section>
              ))}
            </div>
          ) : (
            <CollectionGrid products={products} />
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
