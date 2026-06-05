import type { Collection } from "@/types/collection";
import { MOCK_COLLECTIONS } from "@/data/mock-collections";

export function getCollectionByHandle(handle: string): Collection | undefined {
  return MOCK_COLLECTIONS.find((c) => c.handle === handle);
}

export function getAllCollections(): Collection[] {
  return MOCK_COLLECTIONS;
}
