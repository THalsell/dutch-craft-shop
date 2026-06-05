export type Collection = {
  id: string;
  handle: string;
  name: string;
  tagline: string;
  description: string;
  heroImage?: string;
  cardImage?: string;
  logoImage?: string;
  badge?: string;
  badgeVariant?: "default" | "navy" | "green" | "sky" | "muted";
  productCount?: number;
};
