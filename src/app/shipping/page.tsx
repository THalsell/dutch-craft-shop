import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Container className="py-20">
          <h1 className="font-display text-4xl font-semibold text-charcoal">Shipping Policy</h1>
          <p className="mt-4 text-slate">Shipping details coming soon.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
