import type { Product } from "@/types/product";
import { MOCK_PRODUCTS } from "@/data/mock-products";

export function getProductByHandle(handle: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.handle === handle);
}

export function getAllProducts(): Product[] {
  return MOCK_PRODUCTS;
}

export function getProductsByCollection(collectionHandle: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.collectionHandle === collectionHandle);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.tags.includes("featured")).slice(0, limit);
}

