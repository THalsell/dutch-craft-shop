import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/collections`, lastModified: new Date() },
    { url: `${SITE_URL}/products`, lastModified: new Date() },
{ url: `${SITE_URL}/faq`, lastModified: new Date() },
    { url: `${SITE_URL}/contact`, lastModified: new Date() },
    { url: `${SITE_URL}/shipping`, lastModified: new Date() },
    { url: `${SITE_URL}/returns`, lastModified: new Date() },
    { url: `${SITE_URL}/warranty`, lastModified: new Date() },
    { url: `${SITE_URL}/warranty-and-care`, lastModified: new Date() },
  ];
}
