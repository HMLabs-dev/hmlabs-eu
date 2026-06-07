import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/project-infos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://hmlabs.eu";

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-04"),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/code-of-conduct`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-05-04"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/imprint`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal/privacy`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return routes;
}
