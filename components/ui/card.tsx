import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/70 dark:bg-white/[0.04] backdrop-blur", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("text-base font-semibold", className)}>{children}</div>;
}

export function CardDesc({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-sm text-gray-700 dark:text-gray-300", className)}>{children}</p>;
}