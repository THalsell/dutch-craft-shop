export type ProductVariant = {
  id: string;
  title: string;
  price: number;
  available: boolean;
  sku?: string;
  height?: string;
  construction?: string;
  performance?: string[];
  diagram?: string;
  iconsImage?: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Product = {
  id: string;
  handle: string;
  name: string;
  collectionHandle: string;
  collectionName: string;
  description: string;
  shortDescription: string;
  price: number;
  priceRange: { min: number; max: number };
  images: ProductImage[];
  cardImage?: string;
  mattressImage?: string;
  iconsImage?: string;
  variants: ProductVariant[];
  features: string[];
  construction?: string;
  specs: Record<string, string>;
  badge?: string;
  badgeVariant?: "default" | "navy" | "green" | "sky" | "muted";
  tags: string[];
};
