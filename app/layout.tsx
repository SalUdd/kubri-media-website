import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kubrimedia.com"),
  title: "Kubri Media — Technical Creator Marketing for B2B SaaS & DevTools",
  description:
    "We connect B2B SaaS and DevTool brands with vetted technical creators who actually build with your software. High-intent views, zero fluff.",
  keywords: [
    "B2B SaaS creator marketing",
    "technical creator marketing",
    "DevTool creator marketing",
    "technical YouTube sponsorships",
    "developer creator agency",
  ],
  openGraph: {
    title: "Kubri Media — Your bridge to technical audiences.",
    description:
      "A boutique B2B creator broker connecting SaaS and DevTool founders with vetted technical creators. High-intent views, zero fluff.",
    url: "https://kubrimedia.com",
    siteName: "Kubri Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kubri Media — Your bridge to technical audiences.",
    description:
      "Vetted technical creators for B2B SaaS and DevTools. High-intent views, zero fluff.",
  },
  icons: { icon: "/favicon.ico" },
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
      </body>
    </html>
  );
}