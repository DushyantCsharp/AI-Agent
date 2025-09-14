// components/navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendlyPopupButton } from "@/components/calendly-modal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">Automate-HQ</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <CalendlyPopupButton label="Book a 30-min demo" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-300 dark:border-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white dark:bg-black">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            <Link href="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
            <Link href="/solutions" onClick={() => setOpen(false)}>Solutions</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <div className="pt-2">
              <CalendlyPopupButton label="Book a 30-min demo" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
