// app/layout.tsx
import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Automate-HQ — AI Call Centre Agent",
  description:
    "Enterprise AI voice agent for South African call centres. POPIA-ready. Clear ROI.",
  metadataBase: new URL("https://automate-hq.example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Automate-HQ — AI Call Centre Agent",
    description: "Never miss a call again — answer, resolve, and hand off, 24/7.",
    url: "https://automate-hq.example.com",
    siteName: "Automate-HQ",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate-HQ",
    description: "AI Call Centre Agent",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563EB" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-white text-gray-900 dark:bg-black dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="aurora min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
