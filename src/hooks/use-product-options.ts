"use client";

import { useState, useMemo } from "react";
import type { Product } from "@/types/product";

export function useProductOptions(product: Product) {
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants.find((v) => v.available)?.id ?? product.variants[0]?.id ?? ""
  );

  const selectedVariant = useMemo(
    () =>
      product.variants.find((v) => v.id === selectedVariantId) ??
      product.variants[0],
    [product.variants, selectedVariantId]
  );

  return { selectedVariant, selectedVariantId, setSelectedVariantId };
}
