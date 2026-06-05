import type { Product } from "@/types/product";
import type { SortOption } from "@/lib/constants/filters";

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  switch (sort) {
    case "price-asc":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...products].sort((a, b) => b.price - a.price);
    case "newest":
      return [...products].reverse();
    default:
      return products;
  }
}

