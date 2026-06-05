import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Container className="py-16 max-w-lg">
          <h1 className="font-display text-4xl font-semibold text-charcoal">Contact Us</h1>
          <p className="mt-3 text-slate text-sm leading-relaxed">
            Have a question? Fill out the form below and we&apos;ll get back to you.
          </p>
          <ContactForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}
