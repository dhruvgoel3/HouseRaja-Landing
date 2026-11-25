import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { site } from "@/content/site";

import "./globals.css";

const jakarta = localFont({
  variable: "--font-jakarta",
  display: "swap",
  src: [
    { path: "./fonts/PlusJakartaSans-Regular.ttf", weight: "400" },
    { path: "./fonts/PlusJakartaSans-Medium.ttf", weight: "500" },
    { path: "./fonts/PlusJakartaSans-SemiBold.ttf", weight: "600" },
    { path: "./fonts/PlusJakartaSans-Bold.ttf", weight: "700" },
    { path: "./fonts/PlusJakartaSans-ExtraBold.ttf", weight: "800" },
  ],
});

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "household expense tracker",
    "milkman bill app",
    "maid attendance app",
    "ghar ka hisaab",
    "daily expense tracker India",
    "doodhwala hisaab",
  ],
  openGraph: {
    type: "website",
    title,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  other: { "google-play-app": "app-id=com.houseraja.app" },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
