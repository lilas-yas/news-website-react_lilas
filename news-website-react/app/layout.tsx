import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/news/Header";
import { Footer } from "@/components/news/Footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsDaily - Breaking News & In-Depth Analysis",
  description:
    "Your trusted source for breaking news, in-depth analysis, and expert commentary on politics, economy, technology, sports, and more.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {/* Global Tracking SDK - Replace 'url-example' with your actual SDK URL */}
        <Script src="url-example" strategy="afterInteractive" />

        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5313554185887378"
          crossOrigin="anonymous"
        />

        {/* Ibrahim SDK */}
        <Script
          async
          strategy="afterInteractive"
          src="https://sdk-29qr.onrender.com/tag/1e03c4df-d487-4ab5-bd89-15b72b2e5d8a.js"
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}