import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <Image
        src="/home_hero.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

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
