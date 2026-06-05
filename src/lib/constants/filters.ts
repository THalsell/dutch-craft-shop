export const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number]["value"];

export const SIZE_OPTIONS = [
  "Twin",
  "Twin XL",
  "Full",
  "Queen",
  "King",
  "Cal King",
] as const;

export type SizeOption = (typeof SIZE_OPTIONS)[number];

export const PRICE_RANGES = [
  { label: "Under $800", min: 0, max: 799 },
  { label: "$800 – $1,200", min: 800, max: 1200 },
  { label: "$1,200 – $1,800", min: 1200, max: 1800 },
  { label: "Over $1,800", min: 1800, max: Infinity },
] as const;
