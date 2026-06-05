import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { FOOTER_NAV } from "@/lib/constants/navigation";
import { SITE_NAME } from "@/lib/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white mt-auto">
      <Container className="py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block bg-white rounded px-3 py-2">
              <Image
                src="/dutch-craft-logo.png"
                alt={SITE_NAME}
                width={130}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Handcrafted mattresses built to deliver lasting comfort and quality sleep — made in America.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-sky mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_NAV.shop.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-sky mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_NAV.support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            <Link href="/returns" className="hover:text-white transition-colors">Returns</Link>
            <Link href="/warranty-and-care" className="hover:text-white transition-colors">Warranty</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
