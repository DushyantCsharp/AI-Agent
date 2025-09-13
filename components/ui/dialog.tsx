"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Dialog({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent){ if(e.key === "Escape") onClose(); }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div aria-hidden={!open} aria-modal="true" role="dialog"
      className={cn("fixed inset-0 z-[100] transition", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DialogHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
      <h2 className="font-semibold">{title}</h2>
      <button aria-label="Close" onClick={onClose} className="h-8 w-8 rounded-lg hover:bg-black/[.04] dark:hover:bg-white/[.06]">✕</button>
    </div>
  );
}
export function DialogBody({ children }: { children: React.ReactNode }) { return <div className="p-0">{children}</div>; }