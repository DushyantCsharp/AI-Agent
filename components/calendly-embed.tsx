// components/calendly-embed.tsx (optional)
"use client";

const ENV_URL =
  (process.env.NEXT_PUBLIC_CALENDLY_URL ?? "").trim() ||
  "https://calendly.com/automate-hq/30min";

export function CalendlyEmbed({ url }: { url?: string }) {
  const href = (url ?? ENV_URL).trim();
  if (!href.startsWith("http")) return null;
  const src = href.includes("?") ? `${href}&hide_gdpr_banner=1` : `${href}?hide_gdpr_banner=1`;
  return (
    <iframe
      src={src}
      title="Schedule a call"
      className="w-full h-[820px] rounded-2xl border border-slate-200 dark:border-slate-800"
      allow="fullscreen"
    />
  );
}
