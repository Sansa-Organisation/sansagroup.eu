import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sansagroup.eu";
  const now = new Date();
  const pages = ["", "/services", "/about", "/sansavision", "/grasp", "/contact", "/privacy", "/terms", "/cookies", "/gdpr", "/ccpa"];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/contact" || p === "/services" ? 0.9 : 0.6,
  }));
}
