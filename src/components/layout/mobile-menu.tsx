"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50"
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 w-72 bg-white flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <Link href="/" onClick={onClose}>
            <Image
              src="/dutch-craft-logo.png"
              alt="Dutch Craft Mattress"
              width={120}
              height={46}
              className="h-9 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-slate hover:text-navy transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block py-3 text-base font-medium text-charcoal hover:text-navy border-b border-fog transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 py-6 border-t border-border">
          <Link
            href="/cart"
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-navy hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth={1.75} />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
