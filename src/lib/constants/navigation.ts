export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "All Collections", href: "/collections" },
      { label: "Comfort", href: "/collections/comfort" },
      { label: "Comfort Response", href: "/collections/comfort-response" },
      { label: "Heirloom", href: "/collections/heirloom" },
      { label: "Nightfall", href: "/collections/nightfall" },
      { label: "Posture Perfect", href: "/collections/posture-perfect" },
      { label: "Posture Perfect Gel", href: "/collections/posture-perfect-gel" },
      { label: "Posture Perfect ICE", href: "/collections/posture-perfect-ice" },
      { label: "Legacy Elite HD", href: "/collections/legacy-elite-hd" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Collections", href: "/collections" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Warranty & Care", href: "/warranty-and-care" },
    { label: "Register Mattress", href: "/register-mattress" },
  ],
};
