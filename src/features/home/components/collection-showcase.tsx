import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const COLLECTIONS = [
  {
    name: "Posture Perfect Gel Collection",
    handle: "posture-perfect-gel",
    logo: "/collections/posture-perfect-gel/pp-gel-icon.png",
    accentColor: "#38a8d4",
    description: "Gel-infused memory foam with posture support for a cooler sleep.",
    highlights: [
      "Gel-infused memory foam",
      "Removable zipper covers",
      "Posture support system",
      "Cooler sleep technology",
    ],
    image: "/collections/posture-perfect-gel/posture-perfect-gel-card.png",
    imageRight: false,
  },
  {
    name: "Comfort Response Collection",
    handle: "comfort-response",
    logo: "/collections/comfort-response/cr-icon.png",
    accentColor: "#4a6fa5",
    description: "A responsive hybrid collection balancing pressure relief and support.",
    highlights: [
      "Hybrid construction",
      "Enhanced pressure relief",
      "Better motion isolation",
      "Premium comfort layers",
    ],
    image: "/collections/comfort-response/comfort-response-card.png",
    imageRight: true,
  },
  {
    name: "Nightfall Collection",
    handle: "nightfall",
    logo: "/collections/nightfall/nightfall-icon.png",
    accentColor: "#3d3d5c",
    description: "Our most luxurious collection with advanced comfort technology and premium craftsmanship.",
    highlights: [
      "Luxury construction",
      "Advanced support systems",
      "Maximum comfort",
      "Premium sleep experience",
    ],
    image: "/collections/nightfall/nightfall-card.png",
    imageRight: false,
  },
];

export function CollectionShowcase() {
  return (
    <section className="py-16 bg-white">
      {/* Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {COLLECTIONS.map((collection) => (
          <div
            key={collection.handle}
            className={`flex flex-col ${collection.imageRight ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
          >
            {/* Image — natural ratio, drives block height */}
            <div className="w-full lg:w-[65%] flex-shrink-0">
              <Image
                src={collection.image}
                alt={collection.name}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            {/* Card — overlaps image with negative margin */}
            <div
              className={`relative z-10 w-full lg:w-[38%] ${
                collection.imageRight ? "lg:-mr-[3%]" : "lg:-ml-[3%]"
              }`}
            >
              <div className="bg-white shadow-xl overflow-hidden">
                {/* Color strip */}
                <div className="h-6" style={{ backgroundColor: collection.accentColor }} />

                <div className="px-8 py-6">
                  {/* Logo */}
                  <div className="mb-4">
                    <Image
                      src={collection.logo}
                      alt={`${collection.name} logo`}
                      width={240}
                      height={60}
                      className={`h-16 w-auto object-contain object-left ${
                        collection.handle === "nightfall" ? "rounded overflow-hidden" : ""
                      }`}
                    />
                  </div>

                  <p className="text-slate text-sm leading-relaxed">{collection.description}</p>

                  <ul className="mt-3 space-y-1">
                    {collection.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-charcoal">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <Button asChild size="sm" className="rounded-none">
                      <Link href={`/collections/${collection.handle}`}>Shop</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
