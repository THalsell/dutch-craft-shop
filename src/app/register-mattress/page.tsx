import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { RegistrationForm } from "./registration-form";

export const metadata = { title: "Register Your Mattress" };

export default function RegisterMattressPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Container className="py-16 max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-charcoal">
            Register Your Mattress
          </h1>
          <p className="mt-3 text-slate text-sm leading-relaxed">
            Complete the form below to register your Dutch Craft mattress warranty.
          </p>
          <RegistrationForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}
