// app/legal/terms/page.tsx (add Calendly CTA)
import { CalendlyPopupButton } from "@/components/calendly-modal";

export default function TermsPage() {
  return (
    <section className="container-prose py-16">
      <h1>Terms of Service</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Standard commercial terms apply.</p>
      <div className="mt-6">
        <CalendlyPopupButton label="Book a 30-min demo" />
      </div>
    </section>
  );
}
