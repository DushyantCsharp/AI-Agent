// app/legal/privacy/page.tsx (add Calendly CTA)
import { CalendlyPopupButton } from "@/components/calendly-modal";

export default function PrivacyPage() {
  return (
    <section className="container-prose py-16">
      <h1>Privacy Policy</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Your privacy is important to us.</p>
      <div className="mt-6">
        <CalendlyPopupButton label="Book a 30-min demo" />
      </div>
    </section>
  );
}
