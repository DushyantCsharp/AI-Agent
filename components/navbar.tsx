"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CalendlyButton } from "@/components/calendly-modal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition
      ${scrolled ? "border-b border-black/5 dark:border-white/10 backdrop-blur bg-white/80 dark:bg-black/50" : "bg-transparent"}
    `}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="font-semibold text-lg tracking-tight">Automate-HQ</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/solutions">Solutions</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <CalendlyButton label="Schedule a 30-minute call" />
        </div>
      </div>
    </header>
  );
}