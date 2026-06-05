"use client";

import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils/format-price";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";

// ── Accordion panel ────────────────────────────────────────────────────────
function Panel({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-charcoal">
          {label}
        </h3>
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-charcoal">
          {open ? (
            <svg fill="none" viewBox="0 0 10 2" className="w-3 h-3" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
            </svg>
          ) : (
            <svg fill="none" viewBox="0 0 10 10" className="w-3 h-3" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
            </svg>
          )}
        </span>
      </button>
      {open && <div className="pb-8 text-sm text-slate leading-relaxed">{children}</div>}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Queen");
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = product.variants[selectedVariantIdx];

  const galleryImages = useMemo(() => {
    const imgs: { src: string; alt: string }[] = [];
    if (product.cardImage) imgs.push({ src: product.cardImage, alt: product.name });
    if (product.mattressImage && product.mattressImage !== product.cardImage)
      imgs.push({ src: product.mattressImage, alt: `${product.name} mattress` });
    if (selectedVariant.diagram) imgs.push({ src: selectedVariant.diagram, alt: `${product.name} construction` });
    return imgs;
  }, [product, selectedVariant]);

  function handleVariantChange(idx: number) {
    setSelectedVariantIdx(idx);
    setSelectedImageIdx(0);
  }

  const safeIdx = selectedImageIdx < galleryImages.length ? selectedImageIdx : 0;
  const activeImage = galleryImages[safeIdx];

  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  const performance = selectedVariant.performance ?? product.features;
  const construction = selectedVariant.construction ?? product.construction;
  const height = selectedVariant.height ?? product.specs["Height"];

  return (
    <div>
      {/* Back link */}
      <Link
        href={`/collections/${product.collectionHandle}`}
        className="inline-flex items-center gap-1 text-sm text-navy hover:underline mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to {product.collectionName}
      </Link>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* ── Left: Image Gallery ── */}
        <div>
          <div
            className="relative w-full bg-fog rounded-lg overflow-hidden"
            style={{ paddingTop: "80%" }}
          >
            {activeImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-20 h-20 text-border" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="10" rx="2" />
                  <path strokeLinecap="round" d="M5 7V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
                </svg>
              </div>
            )}
          </div>

          {galleryImages.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIdx(i)}
                  className={cn(
                    "flex-shrink-0 w-[72px] h-[58px] rounded border-2 overflow-hidden bg-fog transition-colors",
                    safeIdx === i ? "border-navy" : "border-transparent hover:border-border"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}

          {(selectedVariant.iconsImage ?? product.iconsImage) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={(selectedVariant.iconsImage ?? product.iconsImage)!}
              alt={`${product.name} materials`}
              className="w-full max-w-sm mt-4"
            />
          )}
        </div>

        {/* ── Right: Product Info ── */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-5">
          <Link
            href={`/collections/${product.collectionHandle}`}
            className="text-xs font-semibold uppercase tracking-widest text-navy hover:underline"
          >
            {product.collectionName}
          </Link>

          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              {product.name}
            </h1>
            {product.badge && (
              <Badge variant={product.badgeVariant ?? "default"} className="mt-2">
                {product.badge}
              </Badge>
            )}
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">Starting From</p>
            <p className="font-display text-3xl font-semibold text-charcoal mt-0.5">
              {lowestPrice > 0 ? formatPrice(lowestPrice) : "Call for pricing"}
            </p>
          </div>

          <p className="text-slate leading-relaxed text-sm">{product.shortDescription}</p>

          {product.variants.length > 1 && (
            <div>
              <p className="text-sm font-semibold text-charcoal mb-2">
                Choose your feel:{" "}
                <span className="font-normal text-slate">{selectedVariant.title}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => handleVariantChange(i)}
                    className={cn(
                      "px-4 py-2 rounded border text-sm font-medium transition-colors",
                      selectedVariantIdx === i
                        ? "border-navy bg-navy text-white"
                        : "border-border text-charcoal hover:border-navy"
                    )}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <ul className="space-y-2">
            {performance.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate">
                <svg className="w-4 h-4 text-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {(height || product.specs["Warranty"]) && (
            <div className="flex flex-wrap gap-6 text-sm border-t border-border pt-4">
              {height && (
                <div>
                  <span className="font-semibold text-charcoal">Height </span>
                  <span className="text-slate">{height}</span>
                </div>
              )}
              {product.specs["Warranty"] && (
                <div>
                  <span className="font-semibold text-charcoal">Warranty </span>
                  <span className="text-slate">{product.specs["Warranty"]}</span>
                </div>
              )}
            </div>
          )}

          {/* Size */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border border-border rounded px-3 py-2.5 text-sm text-charcoal bg-white"
            >
              <option>Twin</option>
              <option>Twin XL</option>
              <option>Full</option>
              <option>Full XL</option>
              <option>Queen</option>
              <option>King</option>
              <option>Cal King</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">Quantity</label>
            <div className="flex items-center border border-border rounded w-32">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-fog transition-colors"
                aria-label="Decrease quantity"
              >
                <svg fill="none" viewBox="0 0 10 2" className="w-3 h-3">
                  <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor" />
                </svg>
              </button>
              <span className="flex-1 text-center text-sm font-medium text-charcoal select-none">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-fog transition-colors"
                aria-label="Increase quantity"
              >
                <svg fill="none" viewBox="0 0 10 10" className="w-3 h-3">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          <button
            disabled
            className="w-full bg-navy text-white font-semibold py-4 px-6 rounded text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add To Cart
          </button>

          <p className="text-xs text-center text-muted">
            Online ordering coming soon — visit us in store or{" "}
            <Link href="/contact" className="underline hover:text-navy">contact us</Link> to order.
          </p>
        </div>
      </div>

      {/* ── Accordion sections ── */}
      <div className="mt-16 border-t border-border">

        {/* PRODUCT DETAILS */}
        <Panel label="Product Details">
          <p className="mb-6">{product.description}</p>
          {(construction || selectedVariant.diagram) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {construction && <p>{construction}</p>}
              {selectedVariant.diagram && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedVariant.diagram}
                  alt={`${product.name} ${selectedVariant.title} layer diagram`}
                  className="w-full rounded"
                />
              )}
            </div>
          )}
        </Panel>

        {/* SPECIFICATIONS */}
        {Object.keys(product.specs).length > 0 && (
          <Panel label="Specifications">
            <dl className="divide-y divide-border">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="py-3 flex gap-4">
                  <dt className="font-semibold text-charcoal w-36 shrink-0">{key}</dt>
                  <dd className="text-slate">{value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        )}

      </div>
    </div>
  );
}
