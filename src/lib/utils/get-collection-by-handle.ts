import type { Collection } from "@/types/collection";

export function getCollectionByHandle(
  collections: Collection[],
  handle: string
): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}
