import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { config } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.site.url),
  title: {
    default: "Technical Influencer Marketing for DevTools & SaaS | Kubri",
    template: "%s | Kubri",
  },
  description:
    "Kubri connects DevTool and B2B SaaS brands with relevant technical creators. From creator research and outreach to campaign coordination, we manage the partnership.",
  keywords: [
    "technical influencer marketing",
    "developer creator marketing",
    "DevTool marketing",
    "B2B SaaS creator partnerships",
    "developer marketing agency",
  ],
  authors: [{ name: "Kubri Media" }],
  creator: "Kubri Media",
  publisher: "Kubri Media",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.site.url,
    siteName: "Kubri Media",
    title: "Technical Influencer Marketing for DevTools & SaaS | Kubri",
    description:
      "Kubri connects DevTool and B2B SaaS brands with relevant technical creators. From creator research and outreach to campaign coordination, we manage the partnership.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Influencer Marketing for DevTools & SaaS | Kubri",
    description:
      "Kubri connects DevTool and B2B SaaS brands with relevant technical creators. From creator research and outreach to campaign coordination, we manage the partnership.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kubri Media",
              url: config.site.url,
              email: config.contact.email,
              description:
                "Kubri connects DevTool and B2B SaaS brands with relevant technical creators. From creator research and outreach to campaign coordination, we manage the partnership.",
            }),
          }}
        />
      </body>
    </html>
  );
}