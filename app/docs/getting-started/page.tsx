// app/docs/getting-started/page.tsx (add Calendly CTA)
import { CalendlyPopupButton } from "@/components/calendly-modal";

export default function DocsGettingStarted() {
  return (
    <section className="container-prose py-16">
      <h1>Getting started</h1>
      <ol className="mt-4 list-decimal pl-5 text-slate-700 dark:text-slate-200">
        <li>Book a demo and define intents</li>
        <li>Connect CRM / ticketing & knowledge base</li>
        <li>Test, tune, go live</li>
      </ol>
      <div className="mt-6">
        <CalendlyPopupButton label="Book a 30-min demo" />
      </div>
    </section>
  );
}
