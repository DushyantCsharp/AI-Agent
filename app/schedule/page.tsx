// app/schedule/page.tsx (embed stays; this route is optional)
import { CalendlyPopupButton } from "@/components/calendly-modal";

export default function SchedulePage() {
  const href =
    (process.env.NEXT_PUBLIC_CALENDLY_URL ?? "").trim() ||
    "https://calendly.com/automate-hq/30min";
  const src = href.includes("?") ? `${href}&hide_gdpr_banner=1` : `${href}?hide_gdpr_banner=1`;

  return (
    <section className="container-prose py-16">
      <h1>Schedule a 30-minute call</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Pick a time that suits you. We’ll walk you through setup and ROI.
      </p>
      <div className="mt-6">
        <CalendlyPopupButton label="Open booking popup" />
      </div>
      <div className="mt-8">
        <iframe
          src={src}
          title="Calendly booking"
          className="w-full h-[820px] rounded-2xl border border-slate-200 dark:border-slate-800"
        />
      </div>
    </section>
  );
}
