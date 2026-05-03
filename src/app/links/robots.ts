import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_LINKS_URL || "https://connect.henrymeyer.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
