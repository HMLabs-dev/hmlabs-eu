import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_LINKS_URL || "https://connect.henrymeyer.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
