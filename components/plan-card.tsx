// components/plan-card.tsx (CTA opens Calendly instead of linking to /contact)
"use client";

import { CalendlyPopupButton } from "@/components/calendly-modal";
import { cn } from "@/lib/utils";

type PlanCardProps = {
  highlight?: boolean;
  name: string;
  price: string;
  frequency: string;
  blurb: string;
  features: string[];
  ctaText: string;
  badge?: string;
};

export function PlanCard({
  highlight,
  name,
  price,
  frequency,
  blurb,
  features,
  ctaText,
  badge,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 md:p-8 bg-white/70 dark:bg-slate-900/40 backdrop-blur",
        "border-slate-200 dark:border-slate-800",
        highlight && "ring-2 ring-blue-600 shadow-lg shadow-blue-600/10"
      )}
    >
      {badge ? (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 shadow">
          {badge}
        </div>
      ) : null}

      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{name}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{blurb}</p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {price}
        </span>
        <span className="mb-1 text-sm text-slate-600 dark:text-slate-300">{frequency}</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <CalendlyPopupButton label={ctaText} />
      </div>
    </div>
  );
}
