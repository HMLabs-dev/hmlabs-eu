import type { Metadata } from "next";
import React from "react";

const baseUrl =
  process.env.NEXT_PUBLIC_LINKS_URL || "https://connect.henrymeyer.de";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    absolute: "Connect | HenryMM",
  },
  description: "Quick links for HenryMM.",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Connect | HenryMM",
    title: "Connect | HenryMM",
    description: "Quick links for HenryMM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect | HenryMM",
    description: "Quick links for HenryMM.",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070707]">
      {children}
    </div>
  );
}
