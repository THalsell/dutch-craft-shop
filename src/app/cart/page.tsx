import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Container className="py-20">
          <h1 className="font-display text-4xl font-semibold text-charcoal">Your Cart</h1>
          <p className="mt-4 text-slate">Your cart is empty.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
