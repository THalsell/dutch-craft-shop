import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { CollectionCard } from "@/features/collections/components/collection-card";
import { getAllCollections } from "@/features/collections/utils";

export const metadata = { title: "Collections" };

export default function CollectionsPage() {
  const collections = getAllCollections();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-fog border-b border-border">
          <Container className="py-12">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
              Shop by Collection
            </p>
          </Container>
        </section>

        {/* Grid */}
        <Container className="py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {collections.map((collection, i) => (
              <CollectionCard key={collection.id} collection={collection} index={i} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
