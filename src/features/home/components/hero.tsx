import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-sky font-sans text-sm font-semibold uppercase tracking-widest mb-4">
            Handcrafted in America
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-white leading-tight mb-6">
            Sleep Better.{" "}
            <span className="text-sky">Live Better.</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
            Dutch Craft mattresses are built by hand using premium materials — designed for lasting comfort and delivered free to your door.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/collections">
              <Button size="lg" className="bg-white text-navy hover:bg-fog">
                Shop Collections
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                View All Mattresses
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
