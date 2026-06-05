import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/features/home/components/hero";
import { ValueProps } from "@/features/home/components/value-props";
import { CollectionShowcase } from "@/features/home/components/collection-showcase";
import { FeaturedCollections } from "@/features/home/components/featured-collections";
import { ReviewsPreview } from "@/features/home/components/reviews-preview";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <CollectionShowcase />
        <FeaturedCollections />
        <ReviewsPreview />
      </main>
      <Footer />
    </>
  );
}
