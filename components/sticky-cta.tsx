"use client";
import { CalendlyButton } from "@/components/calendly-modal";

export function StickyCta() {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-4 md:hidden">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 backdrop-blur p-3 shadow-glass">
          <CalendlyButton label="Schedule a 30-minute call" />
        </div>
      </div>
    </div>
  );
}