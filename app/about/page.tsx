// app/about/page.tsx (add Calendly CTA)
import { CalendlyPopupButton } from "@/components/calendly-modal";

export default function AboutPage() {
  return (
    <section className="container-prose py-16">
      <h1>About Automate-HQ</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        We build AI voice agents for South African call centres — faster-than-human, POPIA-ready, 24/7.
      </p>
      <div className="mt-6">
        <CalendlyPopupButton label="Book a 30-min demo" />
      </div>
    </section>
  );
}
