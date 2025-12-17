// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourtravelblog.com"),
  title: {
    default: "Travel Blog – Explore the World",
    template: "%s | Travel Blog",
  },
  description:
    "Discover inspiring travel stories, tips, and guides from real adventurers. Plan your next trip with insights, photos, and travel inspiration.",
  keywords: [
    "travel",
    "travel blog",
    "adventure",
    "travel tips",
    "travel guides",
    "travel stories",
    "explore",
    "wanderlust",
  ],
  authors: [{ name: "Opitien Ejiroghene Edison", url: "https://yourtravelblog.com" }],
  creator: "Opitien Ejiroghene Edison",
  publisher: "Travel Blog",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourtravelblog.com",
    siteName: "Travel Blog",
    title: "Travel Blog – Explore the World",
    description:
      "Discover inspiring travel stories, tips, and guides from real adventurers. Plan your next trip with insights, photos, and travel inspiration.",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png", // replace with a blog-specific social image
        width: 1200,
        height: 630,
        alt: "Travel Blog Social Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtravelblog", // optional, replace with your Twitter handle
    creator: "@yourtravelblog",
    title: "Travel Blog – Explore the World",
    description:
      "Discover inspiring travel stories, tips, and guides from real adventurers. Plan your next trip with insights, photos, and travel inspiration.",
    images: ["/favicon/android-chrome-512x512.png"], // replace with blog social preview
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">{children}</body>
    </html>
  );
}
