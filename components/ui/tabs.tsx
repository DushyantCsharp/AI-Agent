"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Tab = { id: string; label: string; content: React.ReactNode };

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map(t => (
          <button key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "px-3 h-10 rounded-xl border text-sm",
              active === t.id
                ? "border-brand-blue text-brand-blue bg-brand-blue/10"
                : "border-black/10 dark:border-white/15 hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
            )}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(t => (
          <div key={t.id} hidden={active !== t.id}>{t.content}</div>
        ))}
      </div>
    </div>
  );
}