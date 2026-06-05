// PRICES ARE PLACEHOLDERS — update when real pricing is confirmed.
// SIZE VARIANTS will be added once pricing by size is provided.
// Feel options are modeled as variants for now.

import type { Product } from "@/types/product";

function variants(
  handle: string,
  feels: string[],
  basePrice: number,
  diagrams: Record<string, string> = {}
): Product["variants"] {
  return feels.map((feel) => ({
    id: `${handle}-${feel.toLowerCase().replace(/[\s/]+/g, "-")}`,
    title: feel,
    price: basePrice + (feel.toLowerCase().includes("pillow") ? 150 : 0),
    available: true,
    diagram: diagrams[feel],
  }));
}

export const MOCK_PRODUCTS: Product[] = [

  // ─── Comfort ──────────────────────────────────────────────────────────────

  {
    id: "prod-winfield",
    handle: "winfield",
    name: "Winfield",
    collectionHandle: "comfort",
    collectionName: "Comfort",
    shortDescription:
      "Luxury Firm — also available in Firm. Flippable two-sided mattress with an open coil system and Aloe Vera fabric.",
    description:
      "The Winfield is built on an open coil system designed for durability and consistent support. Two-sided construction lets you flip the mattress for extended longevity. The Aloe Vera cover fabric adds a soft, skin-friendly touch. Available in Luxury Firm and Firm. 10-Year Warranty.",
    price: 899,
    priceRange: { min: 899, max: 899 },
    images: [],
    cardImage: "/collections/comfort/comfort-winfield.png",
    mattressImage: "/collections/comfort/winfield.png",
    iconsImage: "/collections/comfort/winfield-icons.png",
    variants: variants("winfield", ["Luxury Firm", "Firm"], 899),
    features: [
      "Durable, long-lasting open coil design that remains stable throughout the life of the mattress",
      "Long-lasting sleep surface that springs back to its original shape after each use",
      "Balanced support and comfort for everyday sleepers",
      "Firm feel with responsive comfort layers",
    ],
    construction:
      "Open coil construction for durability and consistent support",
    specs: {
      "Comfort Level": "Luxury Firm",
      Height: '11.5"',
      "Cover Fabric": "Aloe Vera Fabric",
      Flippable: "Yes (Two-Sided Design)",
      Warranty: "10-Year Warranty",
    },
    tags: ["comfort", "flippable", "featured"],
  },

  {
    id: "prod-crestview",
    handle: "crestview",
    name: "Crestview",
    collectionHandle: "comfort",
    collectionName: "Comfort",
    shortDescription:
      "Flippable two-sided pillow top with an open coil system and Aloe Vera fabric.",
    description:
      "The Crestview brings a plush pillow-top feel to the Comfort collection's two-sided construction. Built on the same open coil system as the Winfield, the Crestview adds soft cushioning without sacrificing the durability of a flippable design. 10-year non-prorated warranty.",
    price: 999,
    priceRange: { min: 999, max: 999 },
    images: [],
    cardImage: "/collections/comfort/comfort-crestview.png",
    mattressImage: "/collections/comfort/crestview.png",
    iconsImage: "/collections/comfort/winfield-icons.png",
    variants: variants("crestview", ["Pillow Top"], 999),
    features: [
      "Durable, long-lasting open coil design that remains stable throughout the life of the mattress",
      "Long-lasting sleep surface that springs back to its original shape after each use",
      "Plush pillow-top feel combined with reliable underlying support",
      "Designed for comfort without sacrificing durability",
    ],
    construction:
      "Open coil construction for long-lasting durability and stability",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '13"',
      "Cover Fabric": "Aloe Vera Fabric",
      Flippable: "Yes (Two-Sided Design)",
      Warranty: "10-Year Warranty",
    },
    tags: ["comfort", "flippable", "pillow-top"],
  },

  // ─── Comfort Response ─────────────────────────────────────────────────────

  {
    id: "prod-kinsley",
    handle: "kinsley",
    name: "Kinsley",
    collectionHandle: "comfort-response",
    collectionName: "Comfort Response",
    shortDescription:
      "Plush — also available in Firm. Dutch Craft's exclusive 768 pocketed coil system with foam encasement.",
    description:
      "The Kinsley introduces Dutch Craft's proprietary 768 pocketed coil system encased in high-density foam for a firm 360-degree edge. Available in Plush and Firm. 15-Year Warranty.",
    price: 1099,
    priceRange: { min: 1099, max: 1099 },
    images: [],
    cardImage: "/collections/comfort-response/comfort-response-kinsley.png",
    mattressImage: "/collections/comfort-response/kinsley.png",
    iconsImage: "/collections/comfort-response/comfort-response-icon.png",
    variants: variants("kinsley", ["Plush", "Firm"], 1099),
    features: [
      "Enhanced edge-to-edge support for a more usable sleep surface",
      "Plush comfort feel with strong underlying support",
      "Designed for durability, comfort, and long-term performance",
    ],
    construction:
      "Individually wrapped coils encased in high-density foam enclosure providing firm 360-degree durable and comfortable border",
    specs: {
      "Comfort Level": "Plush",
      Height: '12.5"',
      "Cover Fabric": "Individually wrapped coils with foam encasement",
      Warranty: "15-Year Warranty",
    },
    tags: ["comfort-response", "featured"],
  },

  {
    id: "prod-olivia",
    handle: "olivia",
    name: "Olivia",
    collectionHandle: "comfort-response",
    collectionName: "Comfort Response",
    shortDescription:
      "Firm — Plush & Pillow Top models also available. 1\" gel-infused memory foam on the 768 pocketed coil system.",
    description:
      "The Olivia adds 1 inch of gel-infused memory foam to the Comfort Response platform for cooler, more pressure-relieving sleep. Available in Firm, Plush, and Pillow Top. 15-Year Warranty.",
    price: 1199,
    priceRange: { min: 1199, max: 1349 },
    images: [],
    cardImage: "/collections/comfort-response/comfort-response-olivia.png",
    mattressImage: "/collections/comfort-response/olivia.png",
    iconsImage: "/collections/comfort-response/olivia-icon.png",
    variants: variants("olivia", ["Firm", "Plush", "Pillow Top"], 1199),
    features: [
      "Enhanced edge-to-edge support for maximum usable sleep surface",
      "Cooling gel memory foam helps regulate temperature",
      "Firm support feel with responsive comfort layers",
    ],
    construction:
      "Individually wrapped coils encased in high-density foam enclosure with firm 360-degree border for durability and edge stability",
    specs: {
      "Comfort Level": "Firm",
      Height: '14"',
      "Cover Fabric": "Individually wrapped coils with high-density foam encasement",
      Warranty: "15-Year Warranty",
    },
    tags: ["comfort-response"],
  },

  {
    id: "prod-alaina",
    handle: "alaina",
    name: "Alaina",
    collectionHandle: "comfort-response",
    collectionName: "Comfort Response",
    shortDescription:
      "Hybrid construction combining pressure relief with responsive support on the 768 pocketed coil system.",
    description:
      "The Alaina is a hybrid featuring 2 inches of HD Gel Flex over the 768 pocketed coil base. Gel Flex delivers responsive pressure relief with better airflow than standard memory foam. 15-Year Warranty.",
    price: 1299,
    priceRange: { min: 1299, max: 1299 },
    images: [],
    cardImage: "/collections/comfort-response/comfort-response-alaina.png",
    mattressImage: "/collections/comfort-response/alaina.png",
    iconsImage: "/collections/comfort-response/alaina-icon.png",
    variants: variants("alaina", ["Hybrid"], 1299),
    features: [
      "Firm 360-degree border for durability and enhanced edge support",
      "Gel flex foam promotes comfort and temperature regulation",
      "Designed for long-term durability and consistent performance",
    ],
    construction:
      "Hybrid construction combines pressure relief with responsive support",
    specs: {
      "Comfort Level": "Hybrid (balanced comfort and support)",
      Height: '13.5"',
      "Cover Fabric": "Individually wrapped coils with high-density foam encasement",
      Warranty: "15-Year Warranty",
    },
    tags: ["comfort-response", "hybrid"],
  },

  {
    id: "prod-sophia",
    handle: "sophia",
    name: "Sophia",
    collectionHandle: "comfort-response",
    collectionName: "Comfort Response",
    shortDescription:
      "Pillow Top. Deep pillow-top comfort with 2\" HD Cool Gel on the 768 pocketed coil system.",
    description:
      "The Sophia is a 16-inch pillow top featuring 2 inches of HD Cool Gel for superior cooling alongside the Comfort Response's 768 pocketed coil base. 15-Year Warranty.",
    price: 1399,
    priceRange: { min: 1399, max: 1399 },
    images: [],
    cardImage: "/collections/comfort-response/comfort-response-sophia.png",
    mattressImage: "/collections/comfort-response/sophia.png",
    iconsImage: "/collections/comfort-response/comfort-response-icon.png",
    variants: variants("sophia", ["Pillow Top"], 1399),
    features: [
      "Firm 360-degree border provides durable, edge-to-edge support",
      "Gel flex foam helps regulate temperature while maintaining plush feel",
      "Designed for long-term durability and consistent comfort",
    ],
    construction:
      "Deep pillow-top comfort with enhanced pressure relief",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": "Individually wrapped coils with high-density foam encasement",
      Warranty: "15-Year Warranty",
    },
    tags: ["comfort-response", "pillow-top"],
  },

  {
    id: "prod-julianna",
    handle: "julianna",
    name: "Julianna",
    collectionHandle: "comfort-response",
    collectionName: "Comfort Response",
    shortDescription:
      "Hybrid construction delivering pressure relief with responsive support on the 768 pocketed coil system.",
    description:
      "The Julianna is Dutch Craft's deeper hybrid in the Comfort Response line, featuring 4 inches of HD Gel Flex over the 768 pocketed coil system. 15-Year Warranty.",
    price: 1449,
    priceRange: { min: 1449, max: 1449 },
    images: [],
    cardImage: "/collections/comfort-response/comfort-response-julianna.png",
    mattressImage: "/collections/comfort-response/julianna.png",
    iconsImage: "/collections/comfort-response/alaina-icon.png",
    variants: variants("julianna", ["Hybrid"], 1449),
    features: [
      "Firm 360-degree border for durable, edge-to-edge support",
      "Gel flex foam enhances comfort and helps regulate temperature",
      "Designed for long-term durability and consistent performance",
    ],
    construction:
      "Hybrid construction delivers pressure relief with responsive support",
    specs: {
      "Comfort Level": "Hybrid",
      Height: '13.5"',
      "Cover Fabric": "Individually wrapped coils with high-density foam encasement",
      Warranty: "15-Year Warranty",
    },
    tags: ["comfort-response", "hybrid"],
  },

  {
    id: "prod-makayla",
    handle: "makayla",
    name: "Makayla",
    collectionHandle: "comfort-response",
    collectionName: "Comfort Response",
    shortDescription:
      "Pillow Top. Hybrid pillow top with Energex and Joma Wool on the 768 pocketed coil system.",
    description:
      "The Makayla tops the Comfort Response line with a hybrid pillow top built from Energex foam and natural Joma Wool over the 768 pocketed coil system. Avena® foam delivers responsive cushioning with outstanding breathability. 15-Year Warranty.",
    price: 1599,
    priceRange: { min: 1599, max: 1599 },
    images: [],
    cardImage: "/collections/comfort-response/comfort-response-makayla.png",
    mattressImage: "/collections/comfort-response/makayla.png",
    iconsImage: "/collections/comfort-response/comfort-response-icon.png",
    variants: variants("makayla", ["Pillow Top"], 1599),
    features: [
      "Avena® foam provides cushioning support with greater bounce, durability, and breathability",
      "Firm 360-degree border delivers durable edge-to-edge support",
      "Designed for long-term comfort and structural integrity",
    ],
    construction:
      "Reduces motion transfer while maintaining a plush, responsive feel",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": "Individually wrapped coils with high-density foam encasement",
      Warranty: "15-Year Warranty",
    },
    tags: ["comfort-response", "hybrid", "pillow-top"],
  },

  // ─── Heirloom ─────────────────────────────────────────────────────────────

  {
    id: "prod-jade",
    handle: "jade",
    name: "Jade",
    collectionHandle: "heirloom",
    collectionName: "Heirloom",
    shortDescription:
      "Pillow Top — Plush model also available. Two-sided flippable on the 805 Prodigy coil system.",
    description:
      "The Jade features a quilted 1½\" poly foam pillow top with 1¾\" HD plush foam, a breathable cotton insulator pad, and a continuous coil system with double edge support in a two-sided flippable construction. Also available in Plush. 12-Year Non-Prorated Warranty.",
    price: 1099,
    priceRange: { min: 1099, max: 1249 },
    images: [],
    variants: variants("jade", ["Pillow Top", "Plush"], 1099),
    features: [
      "Plush, quilted surface for added cushioning",
      "Two-sided flippable design for extended mattress life",
      "Double edge support for consistent edge-to-edge stability",
      "High-density foam construction for lasting durability",
    ],
    construction:
      "Quilted 1½\" poly foam with 1¾\" HD plush foam, breathable cotton insulator pad, and continuous coil system with double edge support in a two-sided flippable construction",
    specs: {
      "Comfort Level": "Pillow Top",
      "Cover Fabric": "Quilted to 1½\" Poly Foam",
      Flippable: "Yes (Two-Sided Design)",
      Warranty: "12-Year Non-Prorated Warranty",
    },
    tags: ["heirloom", "flippable", "featured"],
  },

  {
    id: "prod-opal",
    handle: "opal",
    name: "Opal",
    collectionHandle: "heirloom",
    collectionName: "Heirloom",
    shortDescription:
      "Firm — Plush model also available. Two-sided flippable on the 805 Prodigy coil system.",
    description:
      "The Opal features a quilted ¾\" poly foam top with 1½\" HD support foam, a breathable cotton insulator pad, and a continuous coil system with double edge support in a two-sided flippable construction. Available in Firm and Plush. 12-Year Non-Prorated Warranty.",
    price: 999,
    priceRange: { min: 999, max: 999 },
    images: [],
    variants: variants("opal", ["Firm", "Plush"], 999),
    features: [
      "Firm, supportive feel with minimal sink",
      "Two-sided flippable design for extended mattress life",
      "Double edge support for consistent edge-to-edge stability",
      "High-density foam construction for lasting durability",
    ],
    construction:
      "Quilted ¾\" poly foam with 1½\" HD support foam, breathable cotton insulator pad, and continuous coil system with double edge support in a two-sided flippable construction",
    specs: {
      "Comfort Level": "Firm",
      "Cover Fabric": "Quilted to ¾\" Poly Foam",
      Flippable: "Yes (Two-Sided Design)",
      Warranty: "12-Year Non-Prorated Warranty",
    },
    tags: ["heirloom", "flippable"],
  },

  // ─── Nightfall — Standard ─────────────────────────────────────────────────

  {
    id: "prod-grace",
    handle: "grace",
    name: "Grace",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top — Firm and Plush models also available. 12\" with the 1057 Pocket Coil system and 2\" HD Comfort Foam.",
    description:
      "The Grace is the entry point to the Nightfall collection, built on Dutch Craft's exclusive 1057 Pocket Coil system with 2\" HD comfort foam and a 1\" HD support base. Available in Pillow Top, Firm, and Plush. 10-Year Warranty.",
    price: 1099,
    priceRange: { min: 1099, max: 1249 },
    images: [],
    cardImage: "/collections/nightfall/grace.png",
    mattressImage: "/collections/nightfall/grace-mattress.png",
    iconsImage: "/collections/nightfall/grace-icons.png",
    variants: variants("grace", ["Pillow Top", "Firm", "Plush"], 1099, {
      "Pillow Top": "/collections/nightfall/grace-pt-diagram.png",
      "Firm": "/collections/nightfall/grace-firm-diagram.png",
      "Plush": "/collections/nightfall/grace-plush-diagram.png",
    }),
    features: [
      "Balanced comfort and support",
      "Improved edge-to-edge stability",
      "Reduced feeling of roll-off",
      "Consistent sleep surface",
    ],
    construction:
      "2\" HD comfort foam with 1\" HD support base and 8\" Caliber Edge® coil unit",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '12"',
      "Cover Fabric": '2" HD Comfort Foam',
      Warranty: "10-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard"],
  },

  {
    id: "prod-hope",
    handle: "hope",
    name: "Hope",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top — Firm and Plush models also available. 13\" with graphite memory foam on the 1057 Pocket Coil system.",
    description:
      "The Hope adds 1 inch of graphite memory foam to the Grace's platform for cooler, more pressure-relieving sleep. Built on the 1057 Pocket Coil system. Available in Pillow Top, Firm, and Plush. 10-Year Warranty.",
    price: 1199,
    priceRange: { min: 1199, max: 1349 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-hope.png",
    mattressImage: "/collections/nightfall/hope.png",
    iconsImage: "/collections/nightfall/grace-icons.png",
    variants: variants("hope", ["Pillow Top", "Firm", "Plush"], 1199, {
      "Pillow Top": "/collections/nightfall/hope-pt-diagram.png",
      "Firm": "/collections/nightfall/hope-firm-diagram.png",
      "Plush": "/collections/nightfall/hope-plush-diagram.png",
    }),
    features: [
      "Plush surface comfort with stable support",
      "Improved edge durability",
      "Consistent sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "1\" graphite memory foam with 2\" HD comfort foam, 1\" HD support base, and 8\" Caliber Edge® coil unit",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '13"',
      "Cover Fabric": '1" Graphite Memory Foam',
      Warranty: "10-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard"],
  },

  {
    id: "prod-zion",
    handle: "zion",
    name: "Zion",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Firm — Plush model also available. Bronze PCM cooling fabric on the 1057 Pocket Coil system.",
    description:
      "The Zion introduces Phase Change Material cooling fabric to the Nightfall standard line. Bronze PCM fabric actively manages heat while 1½\" HD firm poly foam over an 8\" elite pocket coil unit delivers consistent edge-to-edge support. Available in Firm and Plush. 15-Year Warranty.",
    price: 1299,
    priceRange: { min: 1299, max: 1299 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-zion.png",
    mattressImage: "/collections/nightfall/zion.png",
    iconsImage: "/collections/nightfall/zion-icons.png",
    variants: variants("zion", ["Firm", "Plush"], 1299, {
      "Firm": "/collections/nightfall/zion-firm-diagram.png",
      "Plush": "/collections/nightfall/zion-plush-diagram.png",
    }),
    features: [
      "Consistent support from center to edge",
      "Enhanced edge stability",
      "Maximized usable sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "Bronze PCM cooling fabric with 1½\" HD firm poly foam and 8\" elite pocket coil unit for consistent support and cooling",
    specs: {
      "Comfort Level": "Firm",
      Height: '12"',
      "Cover Fabric": "Bronze PCM Cooling Fabric",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard", "pcm"],
  },

  {
    id: "prod-solace",
    handle: "solace",
    name: "Solace",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Plush — also available in Firm. Bronze PCM cooling fabric with graphite memory foam on the 1057 Pocket Coil.",
    description:
      "The Solace pairs Bronze PCM cooling fabric with 1 inch of graphite memory foam over 2\" HD firm poly foam and an 8\" elite pocket coil unit. Dual cooling technologies for a noticeably cooler sleep. Available in Plush and Firm. 15-Year Warranty.",
    price: 1399,
    priceRange: { min: 1399, max: 1399 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-solace.png",
    mattressImage: "/collections/nightfall/solace.png",
    iconsImage: "/collections/nightfall/zion-icons.png",
    variants: variants("solace", ["Plush", "Firm"], 1399, {
      "Plush": "/collections/nightfall/solace-plush-diagram.png",
      "Firm": "/collections/nightfall/solace-firm-diagram.png",
    }),
    features: [
      "Consistent support from center to edge",
      "Enhanced edge stability",
      "Increased usable sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "Bronze PCM cooling fabric with 1\" graphite memory foam, 2\" HD firm poly foam, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Plush",
      Height: '13.5"',
      "Cover Fabric": "Bronze PCM Cooling Fabric",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard", "pcm"],
  },

  {
    id: "prod-essence",
    handle: "essence",
    name: "Essence",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Plush — also available in Firm. Cool Touch fabric with natural latex and Joma Wool on the 1057 Pocket Coil.",
    description:
      "The Essence takes a natural materials approach with Cool Touch fabric, 2\" of HD foam and Joma Wool, and 2\" natural latex over an 8\" elite pocket coil unit. Available in Plush and Firm. 15-Year Warranty.",
    price: 1499,
    priceRange: { min: 1499, max: 1499 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-essence.png",
    mattressImage: "/collections/nightfall/essence.png",
    iconsImage: "/collections/nightfall/essence-icons.png",
    variants: variants("essence", ["Plush", "Firm"], 1499, {
      "Plush": "/collections/nightfall/essence-plush-diagram.png",
      "Firm": "/collections/nightfall/essence-firm-diagram.png",
    }),
    features: [
      "Consistent support from center to edge",
      "Enhanced edge stability",
      "Increased usable sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "Cool touch fabric with 2\" HD foam & Joma wool, 2\" natural latex, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Plush",
      Height: '13"',
      "Cover Fabric": "Cool Touch Fabric",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard", "natural"],
  },

  {
    id: "prod-serenity",
    handle: "serenity",
    name: "Serenity",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top — Firm and Plush models also available. Gold PCM cold fabric with NanoCoil® technology.",
    description:
      "The Serenity features Gold PCM cold fabric with 1\" graphite-infused gel foam and a NanoCoil® layer over an 8\" elite pocket coil unit. Gold PCM is the top tier of PCM cooling in the Nightfall line. Available in Pillow Top, Firm, and Plush. 15-Year Warranty.",
    price: 1599,
    priceRange: { min: 1599, max: 1749 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-serenity.png",
    mattressImage: "/collections/nightfall/serenity.png",
    iconsImage: "/collections/nightfall/serenity-icons.png",
    variants: variants("serenity", ["Pillow Top", "Firm", "Plush"], 1599, {
      "Pillow Top": "/collections/nightfall/serenity-pt-diagram.png",
      "Firm": "/collections/nightfall/serenity-firm-diagram.png",
      "Plush": "/collections/nightfall/serenity-plush-diagram.png",
    }),
    features: [
      "Enhanced pressure relief",
      "Responsive, adaptive support",
      "Improved edge stability",
      "Reduced motion transfer",
    ],
    construction:
      "Gold PCM cold fabric with 1\" graphite-infused gel foam, NanoCoil® layer, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": "Gold PCM Cold Fabric",
      Warranty: "15-Year Warranty",
    },
    badge: "Best Seller",
    badgeVariant: "green",
    tags: ["nightfall", "nightfall-standard", "pcm", "featured"],
  },

  {
    id: "prod-ascend",
    handle: "ascend",
    name: "Ascend",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top. Gold PCM cold fabric with natural latex and HD plush foam on the 1057 Pocket Coil.",
    description:
      "The Ascend combines Gold PCM cold fabric with 2\" natural latex and 3\" HD plush foam over an 8\" elite pocket coil unit — a premium natural materials approach with active temperature regulation. 15-Year Warranty.",
    price: 1699,
    priceRange: { min: 1699, max: 1699 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-ascend.png",
    mattressImage: "/collections/nightfall/ascend.png",
    iconsImage: "/collections/nightfall/essence-icons.png",
    variants: variants("ascend", ["Pillow Top"], 1699, {
      "Pillow Top": "/collections/nightfall/ascend-pt-diagram.png",
    }),
    features: [
      "Consistent support from center to edge",
      "Enhanced edge stability",
      "Increased usable sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "Gold PCM cold fabric with 2\" natural latex, 3\" HD plush foam, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": "Gold PCM Cold Fabric",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard", "pcm", "natural"],
  },

  {
    id: "prod-peace",
    handle: "peace",
    name: "Peace",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Hybrid. Gold PCM cold fabric with removable zippered cover and graphite memory foam.",
    description:
      "The Peace is a hybrid featuring Gold PCM cold fabric with a removable zippered cover and 2\" graphite memory foam over an 8\" elite pocket coil unit. The removable cover makes cleaning easy. 15-Year Warranty.",
    price: 1399,
    priceRange: { min: 1399, max: 1399 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-peace.png",
    mattressImage: "/collections/nightfall/peace.png",
    iconsImage: "/collections/nightfall/zion-icons.png",
    variants: variants("peace", ["Hybrid"], 1399, {
      "Hybrid": "/collections/nightfall/peace-hybrid-diagram.png",
    }),
    features: [
      "Consistent support from center to edge",
      "Enhanced edge stability",
      "Increased usable sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "Gold PCM cold fabric with removable zippered cover, 2\" graphite memory foam, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Hybrid",
      Height: '13"',
      "Cover Fabric": "Gold PCM Cold Fabric with Removable Zippered Cover",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard", "hybrid", "removable-cover"],
  },

  {
    id: "prod-patience",
    handle: "patience",
    name: "Patience",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Hybrid. Gold PCM cold fabric with removable zippered cover and graphite memory foam.",
    description:
      "The Patience shares the same construction as the Peace — Gold PCM cold fabric with removable zippered cover, 2\" graphite memory foam, and an 8\" elite pocket coil unit — in a distinct comfort profile. 15-Year Warranty.",
    price: 1399,
    priceRange: { min: 1399, max: 1399 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-patience.png",
    mattressImage: "/collections/nightfall/patience.png",
    iconsImage: "/collections/nightfall/zion-icons.png",
    variants: variants("patience", ["Hybrid"], 1399, {
      "Hybrid": "/collections/nightfall/patience-hybrid-diagram.png",
    }),
    features: [
      "Consistent support from center to edge",
      "Enhanced edge stability",
      "Increased usable sleep surface",
      "Reduced motion transfer",
    ],
    construction:
      "Gold PCM cold fabric with removable zippered cover, 2\" graphite memory foam, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Hybrid",
      Height: '13"',
      "Cover Fabric": "Gold PCM Cold Fabric with Removable Zippered Cover",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-standard", "hybrid", "removable-cover"],
  },

  // ─── Nightfall — Two-Sided Flippable ──────────────────────────────────────

  {
    id: "prod-bliss",
    handle: "bliss",
    name: "Bliss",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top — Firm and Plush models also available. Hand-tufted 16\" with Gold PCM cold fabric.",
    description:
      "The Bliss is a hand-tufted, two-sided flippable mattress featuring Gold PCM cold fabric and 1¾\" HD plush poly foam over an 8\" elite pocket coil unit. Hand tufting keeps layers secure and adds a refined finish. Available in Pillow Top, Firm, and Plush. 15-Year Warranty.",
    price: 1599,
    priceRange: { min: 1599, max: 1749 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-bliss.png",
    mattressImage: "/collections/nightfall/bliss.png",
    iconsImage: "/collections/nightfall/cambridge-icons.png",
    variants: variants("bliss", ["Pillow Top", "Firm", "Plush"], 1599, {
      "Pillow Top": "/collections/nightfall/bliss-pt-diagram.png",
      "Firm": "/collections/nightfall/bliss-firm-diagram.png",
      "Plush": "/collections/nightfall/bliss-plush-diagram.png",
    }),
    features: [
      "Even support from center to edge",
      "Enhanced edge stability",
      "Reduced motion transfer",
      "Durable, long-lasting comfort",
    ],
    construction:
      "Hand tufted construction with Gold PCM cold fabric, 1¾\" HD plush poly foam, and 8\" elite pocket coil unit",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": "Gold PCM Cold Fabric",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-two-sided", "flippable", "hand-tufted"],
  },

  {
    id: "prod-cambridge",
    handle: "cambridge",
    name: "Cambridge",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top — Firm and Plush models also available. Two-sided flippable 16\" with PCM cool fabric.",
    description:
      "The Cambridge brings PCM cool fabric to the Nightfall two-sided flippable lineup, with 1¾\" plush poly foam, 1\" HD support foam, and an 8\" elite pocket coil unit in a flippable construction. Available in Pillow Top, Firm, and Plush. 15-Year Warranty.",
    price: 1699,
    priceRange: { min: 1699, max: 1849 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-cambridge.png",
    mattressImage: "/collections/nightfall/cambridge.png",
    iconsImage: "/collections/nightfall/cambridge-icons.png",
    variants: variants("cambridge", ["Pillow Top", "Firm", "Plush"], 1699, {
      "Pillow Top": "/collections/nightfall/cambridge-tp-diagram.png",
      "Firm": "/collections/nightfall/cambridge-firm-diagram.png",
      "Plush": "/collections/nightfall/cambridge-plush-diagram.png",
    }),
    features: [
      "Flippable construction for extended durability",
      "Consistent support across the sleep surface",
      "Reduced edge roll-off",
      "Balanced comfort and stability",
    ],
    construction:
      "PCM cool fabric with 1¾\" plush poly foam, 1\" HD support foam, and 8\" elite pocket coil unit in a two-sided flippable construction",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": "PCM Cool Fabric",
      Flippable: "Yes (Two-Sided Design)",
      Warranty: "15-Year Warranty",
    },
    tags: ["nightfall", "nightfall-two-sided", "flippable", "pcm"],
  },

  {
    id: "prod-allure",
    handle: "allure",
    name: "Allure",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Pillow Top — Firm and Plush models also available. Two-sided flippable 16\" on the Caliber Edge® coil unit.",
    description:
      "The Allure is the entry-level two-sided flippable model in the Nightfall collection, featuring 1¾\" plush poly foam with 5⁄8\" comfort foam and an 8\" Caliber Edge® coil unit. Available in Pillow Top, Firm, and Plush. 10-Year Warranty.",
    price: 1499,
    priceRange: { min: 1499, max: 1649 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-allure.png",
    mattressImage: "/collections/nightfall/allure.png",
    iconsImage: "/collections/nightfall/allure-icons.png",
    variants: variants("allure", ["Pillow Top", "Firm", "Plush"], 1499, {
      "Pillow Top": "/collections/nightfall/allure-pt-diagram.png",
      "Firm": "/collections/nightfall/allure-firm-diagram.png",
      "Plush": "/collections/nightfall/allure-plush-diagram.png",
    }),
    features: [
      "Flippable design for longer mattress life",
      "Improved edge stability",
      "Balanced comfort and support",
      "Reduced motion transfer",
    ],
    construction:
      "1¾\" plush poly foam with 5⁄8\" comfort foam and 8\" Caliber Edge® coil unit in a two-sided flippable construction",
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16"',
      "Cover Fabric": '1¾" Plush Poly Foam',
      Flippable: "Yes (Two-Sided Design)",
      Warranty: "10-Year Warranty",
    },
    tags: ["nightfall", "nightfall-two-sided", "flippable"],
  },

  // ─── Nightfall — Resurgence Plus ──────────────────────────────────────────

  {
    id: "prod-regena-firm",
    handle: "regena-firm",
    name: "Regena Firm",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Firm. Aarogy fabric, Joma Wool, copper memory foam, and natural latex over Quantum Edge® coils. 20-Year Warranty.",
    description:
      "The Regena Firm is part of the Nightfall Resurgence Plus tier, featuring Aarogy antimicrobial fabric, Joma Wool, 1½\" copper memory foam, and 3\" firm natural latex over an 8\" Quantum Edge® coil unit. Copper-infused memory foam adds antimicrobial properties and enhanced cooling. 20-Year Warranty.",
    price: 1999,
    priceRange: { min: 1999, max: 1999 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-resurgence-regena-firm.png",
    mattressImage: "/collections/nightfall/regena-firm.png",
    iconsImage: "/collections/nightfall/regena-firm-icons.png",
    variants: variants("regena-firm", ["Firm"], 1999, {
      "Firm": "/collections/nightfall/regena-firm-diagram.png",
    }),
    features: [
      "Strong, stable support",
      "Enhanced edge durability",
      "Reduced motion transfer",
      "Long-term structural integrity",
    ],
    construction:
      "Aarogy fabric with Joma wool, 1½\" copper memory foam, 3\" firm natural latex, and 8\" Quantum Edge® coil unit",
    specs: {
      "Comfort Level": "Firm",
      Height: '14.5"',
      "Cover Fabric": "Aarogy Fabric with Joma Wool",
      Warranty: "20-Year Warranty",
    },
    badge: "20-Year Warranty",
    badgeVariant: "navy",
    tags: ["nightfall", "nightfall-resurgence-plus", "premium"],
  },

  {
    id: "prod-regena-plush",
    handle: "regena-plush",
    name: "Regena Plush",
    collectionHandle: "nightfall",
    collectionName: "Nightfall",
    shortDescription:
      "Plush. Aarogy fabric, Joma Wool, copper memory foam, and natural latex over Quantum Edge® coils. 20-Year Warranty.",
    description:
      "The Regena Plush shares the Resurgence Plus construction with the Regena Firm — Aarogy fabric, Joma Wool, copper memory foam, and 3\" natural latex over Quantum Edge® coils — in a plush comfort profile. 20-Year Warranty.",
    price: 1999,
    priceRange: { min: 1999, max: 1999 },
    images: [],
    cardImage: "/collections/nightfall/nightfall-resurgence-regena-plush.png",
    mattressImage: "/collections/nightfall/regena-plush.png",
    iconsImage: "/collections/nightfall/regena-firm-icons.png",
    variants: variants("regena-plush", ["Plush"], 1999, {
      "Plush": "/collections/nightfall/regena-plush-diagram.png",
    }),
    features: [
      "Naturally breathable comfort",
      "Enhanced edge stability",
      "Responsive, pressure-relieving support",
      "Reduced partner disturbance",
    ],
    construction:
      "Aarogy fabric with Joma wool, 1½\" copper memory foam, 3\" firm natural latex, and 8\" Quantum Edge® coil unit",
    specs: {
      "Comfort Level": "Plush",
      Height: '14.5"',
      "Cover Fabric": "Aarogy Fabric with Joma Wool",
      Warranty: "20-Year Warranty",
    },
    badge: "20-Year Warranty",
    badgeVariant: "navy",
    tags: ["nightfall", "nightfall-resurgence-plus", "premium"],
  },

  // ─── Posture Perfect Gel ──────────────────────────────────────────────────

  {
    id: "prod-silverthorne",
    handle: "silverthorne",
    name: "Silverthorne",
    collectionHandle: "posture-perfect-gel",
    collectionName: "Posture Perfect Gel",
    shortDescription:
      "Plush — also available in Firm. 10\" graphite-infused memory foam with removable zipper cover.",
    description:
      "The Silverthorne features 2\" of graphite-infused memory foam over an 8\" high-density foam core with a removable zipper cover for easy cleaning. Available in Plush and Firm. 12-Year Warranty.",
    price: 799,
    priceRange: { min: 799, max: 799 },
    images: [],
    cardImage: "/collections/posture-perfect-gel/posture-perfect-gel-silverthorne.png",
    mattressImage: "/collections/posture-perfect-gel/silverthorne.png",
    iconsImage: "/collections/posture-perfect-gel/aurora-icon.png",
    variants: variants("silverthorne", ["Plush", "Firm"], 799),
    features: [
      "100% graphite-infused memory foam for enhanced heat dissipation",
      "Cool Sleep Nitro cover for temperature regulation",
      "Outstanding support with high-density foam core",
      "Reduced motion transfer for undisturbed sleep",
    ],
    construction:
      "2\" graphite-infused memory foam, 8\" high-density foam with removable zipper cover",
    specs: {
      "Comfort Level": "Plush",
      Height: '10"',
      "Cover Fabric": "Removable Zipper Cover",
      Warranty: "12-Year Warranty",
    },
    tags: ["posture-perfect-gel", "removable-cover"],
  },

  {
    id: "prod-aurora",
    handle: "aurora",
    name: "Aurora",
    collectionHandle: "posture-perfect-gel",
    collectionName: "Posture Perfect Gel",
    shortDescription:
      "Plush — also available in Firm. 12\" graphite-infused memory foam with removable zipper cover.",
    description:
      "The Aurora steps up from the Silverthorne with 3\" of graphite-infused memory foam, a 2\" transitional foam layer, and a 7\" high-density foam core with a removable zipper cover. Available in Plush and Firm. 12-Year Warranty.",
    price: 899,
    priceRange: { min: 899, max: 899 },
    images: [],
    cardImage: "/collections/posture-perfect-gel/posture-perfect-gel-aurora.png",
    mattressImage: "/collections/posture-perfect-gel/aurora.png",
    iconsImage: "/collections/posture-perfect-gel/aurora-icon.png",
    variants: variants("aurora", ["Plush", "Firm"], 899),
    features: [
      "100% graphite-infused memory foam for enhanced heat dissipation",
      "Cool Sleep Nitro cover for temperature regulation",
      "Outstanding support with high-density foam core",
      "Reduced motion transfer for undisturbed sleep",
    ],
    construction:
      "3\" graphite-infused memory foam, 2\" transitional foam, and 7\" high-density foam with removable zipper cover",
    specs: {
      "Comfort Level": "Plush",
      Height: '12"',
      "Cover Fabric": "Removable Zipper Cover",
      Warranty: "12-Year Warranty",
    },
    tags: ["posture-perfect-gel", "removable-cover"],
  },

  {
    id: "prod-glenwood-springs",
    handle: "glenwood-springs",
    name: "Glenwood Springs",
    collectionHandle: "posture-perfect-gel",
    collectionName: "Posture Perfect Gel",
    shortDescription:
      "Plush. 12.5\" with Quantum Edge® coils and Cool Touch cover.",
    description:
      "The Glenwood Springs introduces Quantum Edge® individually encased coils to the Posture Perfect Gel line with a Cool Touch cover and graphite-infused memory foam for temperature regulation. Plush only. 12-Year Warranty.",
    price: 999,
    priceRange: { min: 999, max: 999 },
    images: [],
    cardImage: "/collections/posture-perfect-gel/posture-perfect-gel-glenwood-springs.png",
    mattressImage: "/collections/posture-perfect-gel/glenwood-springs.png",
    iconsImage: "/collections/posture-perfect-gel/estes-park-icon.png",
    variants: variants("glenwood-springs", ["Plush"], 999),
    features: [
      "Cool touch cover helps regulate surface temperature",
      "Graphite-infused memory foam assists with heat dissipation and pressure relief",
      "Individually encased coil system minimizes motion transfer",
      "Quantum Edge® design enhances edge-to-edge support and reduces roll-off",
      "Plush feel with balanced underlying support",
    ],
    construction:
      "Individually encased coils with Quantum Edge® design for edge-to-edge support",
    specs: {
      "Comfort Level": "Plush",
      Height: '12.5"',
      "Cover Fabric": "Cool Touch Cover",
      Warranty: "12-Year Warranty",
    },
    tags: ["posture-perfect-gel", "quantum-edge"],
  },

  {
    id: "prod-estes-park",
    handle: "estes-park",
    name: "Estes Park",
    collectionHandle: "posture-perfect-gel",
    collectionName: "Posture Perfect Gel",
    shortDescription:
      "Plush. 13.5\" with Quantum Edge® coils and Cool Touch cover.",
    description:
      "The Estes Park is the flagship Posture Perfect Gel model at 13.5 inches, featuring Quantum Edge® coils with a Cool Touch cover and graphite-infused memory foam for maximum pressure relief and temperature regulation. Plush only. 12-Year Warranty.",
    price: 1099,
    priceRange: { min: 1099, max: 1099 },
    images: [],
    cardImage: "/collections/posture-perfect-gel/posture-perfect-gel-estes-park.png",
    mattressImage: "/collections/posture-perfect-gel/estes-park.png",
    iconsImage: "/collections/posture-perfect-gel/estes-park-icon.png",
    variants: variants("estes-park", ["Plush"], 1099),
    features: [
      "Cool touch cover helps regulate surface temperature",
      "Graphite-infused memory foam aids in heat dissipation and pressure relief",
      "Individually encased coils minimize motion transfer",
      "Reduces the feeling of roll-off while maximizing usable sleep surface",
    ],
    construction:
      "Individually encased coils with Quantum Edge® coil system for edge-to-edge support",
    specs: {
      "Comfort Level": "Plush",
      Height: '13.5"',
      "Cover Fabric": "Cool Touch Cover",
      Warranty: "12-Year Warranty",
    },
    tags: ["posture-perfect-gel", "quantum-edge"],
  },

  // ─── Posture Perfect ICE ──────────────────────────────────────────────────

  {
    id: "prod-pp-ice-hybrid-hd",
    handle: "pp-ice-hybrid-hd",
    name: "Hybrid HD",
    collectionHandle: "posture-perfect-ice",
    collectionName: "Posture Perfect ICE",
    shortDescription:
      "Available in Firm, Medium, and Plush. SNŌ zipper cover with LURACOR® foam and Quantum foam encased coils.",
    description:
      "The Hybrid HD is the premium ICE hybrid, featuring LURACOR® bio-based foam, HD memory foam, and Quantum foam encased coils under the SNŌ cool-to-the-touch zipper cover with inner-cool PCM. Each comfort level has a distinct layer stack. 12-Year Warranty.",
    price: 1299,
    priceRange: { min: 1299, max: 1299 },
    images: [],
    variants: [
      {
        id: "pp-ice-hybrid-hd-firm",
        title: "Firm",
        price: 1299,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/hybrid-hd-firm-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 1½\" 4 lb memory foam, 1½\" 6 lb memory foam, 2\" LURACOR® firm foam, 8\" Quantum foam encased coils, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "6 lb memory foam provides ultimate durability, highest density, comfort & support",
          "LURACOR® firm foam delivers deep, responsive support for proper alignment",
          "Quantum foam encased coils provide 360-degree edge support",
        ],
        diagram: "/collections/posture-perfect-ice/hybrid-hd-firm-diagram.png",
      },
      {
        id: "pp-ice-hybrid-hd-medium",
        title: "Medium",
        price: 1299,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 1½\" 4 lb memory foam, 1½\" 6 lb memory foam, 2\" LURACOR® soft foam, 8\" Quantum foam encased coils, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "6 lb memory foam provides ultimate durability, highest density, comfort & support",
          "LURACOR® soft foam provides adaptive support with gentle responsiveness",
          "Quantum foam encased coils provide 360-degree edge support",
        ],
        diagram: "/collections/posture-perfect-ice/hybrid-hd-med-diagram.png",
      },
      {
        id: "pp-ice-hybrid-hd-plush",
        title: "Plush",
        price: 1299,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" graphite-infused memory foam, 2\" 4 lb memory foam, 2\" LURACOR® soft foam, 8\" Quantum foam encased coils, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "Graphite-infused memory foam dissipates heat for a cooler, more durable sleep",
          "LURACOR® soft foam provides adaptive support with gentle responsiveness",
          "Quantum foam encased coils provide 360-degree edge support",
        ],
        diagram: "/collections/posture-perfect-ice/hybrid-hd-plush-diagram.png",
      },
    ],
    features: [
      "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
      "Inner-cool phase change material regulates temperature throughout the night",
      "6 lb memory foam provides ultimate durability, highest density, comfort & support",
      "LURACOR® foam delivers deep, responsive support for proper alignment",
      "Quantum foam encased coils provide a 360-degree comfortable border with great edge support",
    ],
    specs: {
      "Comfort Level": "Firm / Medium / Plush",
      Height: '14"',
      "Cover Fabric": "SNŌ Zipper Cover",
      Warranty: "12-Year Warranty",
    },
    tags: ["posture-perfect-ice", "hybrid", "quantum-edge", "luracor", "featured"],
  },

  {
    id: "prod-pp-ice-foam-hd",
    handle: "pp-ice-foam-hd",
    name: "Foam HD",
    collectionHandle: "posture-perfect-ice",
    collectionName: "Posture Perfect ICE",
    shortDescription:
      "Available in Firm, Medium, and Plush. SNŌ zipper cover with LURACOR® foam and high-density foam core.",
    description:
      "The Foam HD is an all-foam ICE mattress combining LURACOR® bio-based foam with an 8\" HD foam core under the SNŌ zipper cover with inner-cool PCM. Each comfort level has a distinct layer stack. 15-Year Warranty.",
    price: 1099,
    priceRange: { min: 1099, max: 1099 },
    images: [],
    variants: [
      {
        id: "pp-ice-foam-hd-firm",
        title: "Firm",
        price: 1099,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/hybrid-hd-firm-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® firm foam, 8\" high-density foam core, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "LURACOR® firm foam delivers deep, responsive support for proper alignment",
          "8\" high-density foam core provides strength, durability, comfort & support",
        ],
        diagram: "/collections/posture-perfect-ice/foam-hd-firm-diagram.png",
      },
      {
        id: "pp-ice-foam-hd-medium",
        title: "Medium",
        price: 1099,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® soft foam, 8\" high-density foam core, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "LURACOR® soft foam provides adaptive support with gentle responsiveness",
          "8\" high-density foam core provides strength, durability, comfort & support",
        ],
        diagram: "/collections/posture-perfect-ice/foam-hd-medium-diagram.png",
      },
      {
        id: "pp-ice-foam-hd-plush",
        title: "Plush",
        price: 1099,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" graphite-infused memory foam, 2\" 4 lb memory foam, 2\" Avena soft foam, 6\" HD foam core, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "Graphite-infused memory foam dissipates heat for a cooler, more durable sleep",
          "Avena soft foam provides a buoyant, springy, responsive feel",
        ],
        diagram: "/collections/posture-perfect-ice/foam-hd-plush.png",
      },
    ],
    features: [
      "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
      "Inner-cool phase change material regulates temperature throughout the night",
      "LURACOR® foam delivers deep, responsive support for proper alignment",
      "High-density foam core provides strength, durability, comfort & support",
    ],
    specs: {
      "Comfort Level": "Firm / Medium / Plush",
      Height: '12"',
      "Cover Fabric": "SNŌ Zipper Cover",
      Warranty: "15-Year Warranty",
    },
    tags: ["posture-perfect-ice", "all-foam", "luracor"],
  },

  {
    id: "prod-pp-ice-hybrid",
    handle: "pp-ice-hybrid",
    name: "Hybrid",
    collectionHandle: "posture-perfect-ice",
    collectionName: "Posture Perfect ICE",
    shortDescription:
      "Available in Firm, Medium, and Plush. SNŌ zipper cover with LURACOR® foam and Quantum Edge pocket coil.",
    description:
      "The Hybrid is the mid-range ICE hybrid option featuring Quantum Edge pocket coils with LURACOR® bio-based foam under the SNŌ zipper cover with inner-cool PCM. Each comfort level has a distinct layer stack. 12-Year Warranty.",
    price: 1199,
    priceRange: { min: 1199, max: 1199 },
    images: [],
    variants: [
      {
        id: "pp-ice-hybrid-firm",
        title: "Firm",
        price: 1199,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/hybrid-hd-firm-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® firm foam, 8\" Quantum Edge pocket coil, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "LURACOR® firm foam delivers deep, responsive support for proper alignment",
          "Quantum Edge pocket coil provides premium individually encased edge-to-edge support",
        ],
        diagram: "/collections/posture-perfect-ice/hybrid-firm-diagram.png",
      },
      {
        id: "pp-ice-hybrid-medium",
        title: "Medium",
        price: 1199,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" 4 lb memory foam, 2\" LURACOR® soft foam, 8\" Quantum Edge pocket coil, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "LURACOR® soft foam provides adaptive support with gentle responsiveness",
          "Quantum Edge pocket coil provides premium individually encased edge-to-edge support",
        ],
        diagram: "/collections/posture-perfect-ice/hybrid-medium-diagram.png",
      },
      {
        id: "pp-ice-hybrid-plush",
        title: "Plush",
        price: 1199,
        available: true,
        iconsImage: "/collections/posture-perfect-ice/foam-hd-plush-icons.png",
        construction:
          "SNŌ zipper cover with inner-cool PCM layer, 2\" graphite-infused memory foam, 2\" 4 lb memory foam, 8\" Quantum Edge pocket coil, and 1½\" base foam",
        performance: [
          "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
          "Inner-cool PCM regulates temperature throughout the night",
          "Graphite-infused memory foam dissipates heat for a cooler, more durable sleep",
          "Quantum Edge pocket coil provides premium individually encased edge-to-edge support",
        ],
        diagram: "/collections/posture-perfect-ice/hybrid-plush-diagram.png",
      },
    ],
    features: [
      "SNŌ cool-to-the-touch cover with advanced PE cooling fibers",
      "Inner-cool phase change material regulates temperature throughout the night",
      "LURACOR® foam delivers deep, responsive support for proper alignment",
      "Quantum Edge pocket coil provides premium individually encased edge-to-edge support",
    ],
    specs: {
      "Comfort Level": "Firm / Medium / Plush",
      Height: '13.5"',
      "Cover Fabric": "SNŌ Zipper Cover",
      Warranty: "12-Year Warranty",
    },
    tags: ["posture-perfect-ice", "hybrid", "quantum-edge"],
  },

  // ─── Legacy Elite HD ──────────────────────────────────────────────────────

  {
    id: "prod-endurance",
    handle: "endurance",
    name: "Endurance",
    collectionHandle: "legacy-elite-hd",
    collectionName: "Legacy Elite HD",
    shortDescription:
      "Firm — Plush and Pillow Top models also available. Natural latex with Quantum foam encased coils. 20-Year Warranty.",
    description:
      "The Endurance is the entry point into the Legacy Elite HD collection. Natural latex comfort layers are paired with Quantum foam encased coils for edge-to-edge support. Height and construction vary by comfort level. 20-Year Warranty.",
    price: 1699,
    priceRange: { min: 1699, max: 1849 },
    images: [],
    cardImage: "/collections/legacy-elite-hd/endurance.png",
    mattressImage: "/collections/legacy-elite-hd/endurance-firm.png",
    iconsImage: "/collections/legacy-elite-hd/harmony-hybrid-plush-icon.png",
    variants: [
      {
        id: "endurance-firm",
        title: "Firm",
        price: 1699,
        available: true,
        height: '12½"',
        construction: '12½" — 1" Natural Latex, 2" Support Foam, 8" Quantum Foam Encased',
        diagram: "/collections/legacy-elite-hd/endurance-firm-diagram.png",
      },
      {
        id: "endurance-plush",
        title: "Plush",
        price: 1749,
        available: true,
        height: '14½"',
        construction: '14½" — 2" Natural Latex, 2" Comfort Foam, 8" Quantum Foam Encased',
        diagram: "/collections/legacy-elite-hd/endurance-plush-diagram.png",
      },
      {
        id: "endurance-pillow-top",
        title: "Pillow Top",
        price: 1849,
        available: true,
        height: '16½"',
        construction: '16½" — 2" Natural Latex, 3" Comfort Foam, 8" Quantum Foam Encased',
        diagram: "/collections/legacy-elite-hd/endurance-pt-diagram.png",
      },
    ],
    features: [
      "Natural latex provides responsive, breathable comfort",
      "Quantum foam encased core delivers edge-to-edge support",
      "Available in three comfort levels for personalized feel",
      "20-year warranty for lasting durability",
    ],
    specs: {
      "Comfort Level": "Firm / Plush / Pillow Top",
      Height: '12½" / 14½" / 16½"',
      Warranty: "20-Year Warranty",
    },
    badge: "20-Year Warranty",
    badgeVariant: "navy",
    tags: ["legacy-elite-hd", "natural", "premium", "featured"],
  },

  {
    id: "prod-courage",
    handle: "courage",
    name: "Courage",
    collectionHandle: "legacy-elite-hd",
    collectionName: "Legacy Elite HD",
    shortDescription:
      "Pillow Top. 16½\" with Avena® foam, natural latex, and NanoCoil®. 20-Year Warranty.",
    description:
      "The Courage features 2\" Avena® foam, 1\" natural latex, and 1\" NanoCoil® over an 8\" Quantum foam encased support core. Avena® delivers exceptional breathability and a buoyant feel, while NanoCoil® adds targeted pressure relief. 20-Year Warranty.",
    price: 2099,
    priceRange: { min: 2099, max: 2099 },
    images: [],
    cardImage: "/collections/legacy-elite-hd/courage.png",
    mattressImage: "/collections/legacy-elite-hd/courage-pt.png",
    iconsImage: "/collections/legacy-elite-hd/courage-icons.png",
    variants: variants("courage", ["Pillow Top"], 2099, {
      "Pillow Top": "/collections/legacy-elite-hd/courage-pt-diagram.png",
    }),
    features: [
      "Avena® foam provides enhanced airflow and responsive comfort",
      "Natural latex layer adds durable, buoyant support",
      "NanoCoil® technology delivers targeted pressure relief",
      "Quantum foam encased core for edge-to-edge support",
    ],
    construction:
      '16½" pillow top with 2" Avena® foam, 1" natural latex, and 1" NanoCoil® over an 8" Quantum foam encased support core',
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16½"',
      Warranty: "20-Year Warranty",
    },
    badge: "20-Year Warranty",
    badgeVariant: "navy",
    tags: ["legacy-elite-hd", "natural", "premium"],
  },

  {
    id: "prod-paramount",
    handle: "paramount",
    name: "Paramount",
    collectionHandle: "legacy-elite-hd",
    collectionName: "Legacy Elite HD",
    shortDescription:
      "Pillow Top. 16½\" with 4-lb memory foam, natural latex, and comfort foam. 20-Year Warranty.",
    description:
      "The Paramount features 2\" of 4-lb memory foam, 2\" natural latex, and 2\" comfort foam over an 8\" Quantum foam encased support core. 4-lb memory foam maintains its shape for decades. 20-Year Warranty.",
    price: 2299,
    priceRange: { min: 2299, max: 2299 },
    images: [],
    cardImage: "/collections/legacy-elite-hd/courage.png",
    mattressImage: "/collections/legacy-elite-hd/courage-pt.png",
    iconsImage: "/collections/legacy-elite-hd/harmony-hybrid-plush-icon.png",
    variants: variants("paramount", ["Pillow Top"], 2299, {
      "Pillow Top": "/collections/legacy-elite-hd/paramount-pt-diagram.png",
    }),
    features: [
      "4-lb memory foam contours to the body for pressure relief",
      "Natural latex provides responsive, breathable support",
      "Comfort foam adds an extra layer of cushioning",
      "Quantum foam encased core for edge-to-edge support",
    ],
    construction:
      '16½" pillow top with 2" 4-lb memory foam, 2" natural latex, and 2" comfort foam over an 8" Quantum foam encased support core',
    specs: {
      "Comfort Level": "Pillow Top",
      Height: '16½"',
      Warranty: "20-Year Warranty",
    },
    badge: "20-Year Warranty",
    badgeVariant: "navy",
    tags: ["legacy-elite-hd", "natural", "premium"],
  },

  {
    id: "prod-harmony-hybrid",
    handle: "harmony-hybrid",
    name: "Harmony Hybrid",
    collectionHandle: "legacy-elite-hd",
    collectionName: "Legacy Elite HD",
    shortDescription:
      "Luxury Firm — Plush model also available. 15\" hybrid with 4-lb memory foam. 20-Year Warranty.",
    description:
      "The Harmony Hybrid combines 2\" of 4-lb memory foam and 2\" comfort foam over an 8\" Quantum foam encased support core at 15 inches. Available in Luxury Firm and Plush. 20-Year Warranty.",
    price: 1999,
    priceRange: { min: 1999, max: 1999 },
    images: [],
    cardImage: "/collections/legacy-elite-hd/courage.png",
    mattressImage: "/collections/legacy-elite-hd/courage-pt.png",
    iconsImage: "/collections/legacy-elite-hd/harmony-hybrid-plush-icon.png",
    variants: variants("harmony-hybrid", ["Luxury Firm", "Plush"], 1999, {
      "Luxury Firm": "/collections/legacy-elite-hd/harmony-firm-diagram.png",
      "Plush": "/collections/legacy-elite-hd/harmony-plush-diagram.png",
    }),
    features: [
      "4-lb memory foam contours to the body for pressure relief",
      "Comfort foam adds cushioning and responsiveness",
      "Quantum foam encased core for edge-to-edge support",
      "Available in Luxury Firm and Plush comfort levels",
    ],
    construction:
      '15" hybrid design with 2" 4-lb memory foam and 2" comfort foam over an 8" Quantum foam encased support core',
    specs: {
      "Comfort Level": "Luxury Firm / Plush",
      Height: '15"',
      Warranty: "20-Year Warranty",
    },
    badge: "20-Year Warranty",
    badgeVariant: "navy",
    tags: ["legacy-elite-hd", "hybrid", "premium", "featured"],
  },
];
