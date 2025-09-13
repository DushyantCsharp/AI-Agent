import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto max-w-7xl px-4", className)}>{children}</div>;
}
export function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return <section id={id} className={cn("py-14 md:py-20", className)}>{children}</section>;
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{children}</div>;
}