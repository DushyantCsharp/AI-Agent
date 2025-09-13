import { CalendlyButton } from "@/components/calendly-modal";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Schedule a 30-minute call</h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Pick a time that suits you. We’ll map your call volumes, integrations and target KPIs.
      </p>
      <CalendlyButton label="Open scheduler" />
    </div>
  );
}