"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { NAV_ITEMS } from "@/lib/constants/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      <Container className="flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/dutch-craft-logo.png"
            alt="Dutch Craft Mattress"
            width={140}
            height={54}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal hover:text-navy transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
{/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="p-2 text-slate hover:text-navy transition-colors relative"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth={1.75} />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 text-slate hover:text-navy transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
