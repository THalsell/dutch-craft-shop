import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Container className="py-20">
          <h1 className="font-display text-4xl font-semibold text-charcoal">Checkout</h1>
          <p className="mt-4 text-slate">Coming soon.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
