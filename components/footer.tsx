import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold">Automate-HQ</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI Call Centre Agent — POPIA compliant, enterprise-ready.
          </p>
        </div>
        <div>
          <div className="font-medium mb-2">Product</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Company</div>
          <ul className="space-y-1 text-sm"
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Legal</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/legal/privacy">Privacy</Link></li>
            <li><Link href="/legal/terms">Terms</Link></li>
            <li><Link href="/legal/popia">POPIA</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-center text-gray-500 py-6 border-t border-black/5 dark:border-white/10">
        © {new Date().getFullYear()} Automate-HQ. All rights reserved.
      </div>
    </footer>
  );
}
