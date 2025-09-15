// components/footer.tsx
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-modal";
import type { Route } from "next";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold text-lg">Automate-HQ</div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            AI voice agents for South African call centres — faster-than-human,
            POPIA-ready, and measurable ROI.
          </p>
          <CalendlyPopupButton label="Book a 30-min demo" />
        </div>

        <nav aria-label="Company">
          <div className="font-medium mb-2">Company</div>
          <ul className="space-y-1 text-sm">
            <li><Link href={"/about" as Route}>About</Link></li>
            <li><Link href={"/legal/privacy" as Route}>Privacy</Link></li>
            <li><Link href={"/legal/terms" as Route}>Terms</Link></li>
            <li><Link href={"/legal/popia" as Route}>POPIA</Link></li>
          </ul>
        </nav>

        <nav aria-label="Product">
          <div className="font-medium mb-2">Product</div>
          <ul className="space-y-1 text-sm">
            <li><Link href={"/how-it-works" as Route}>How it works</Link></li>
            <li><Link href={"/solutions" as Route}>Solutions</Link></li>
            <li><Link href={"/pricing" as Route}>Pricing & ROI</Link></li>
            <li><Link href={"/docs/getting-started" as Route}>Docs</Link></li>
          </ul>
        </nav>

        <nav aria-label="Contact">
          <div className="font-medium mb-2">Contact</div>
          <ul className="space-y-1 text-sm">
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Automate-HQ. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
