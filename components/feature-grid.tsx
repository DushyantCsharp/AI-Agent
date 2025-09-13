import { Headphones, Handshake, ShieldCheck, Timer } from "lucide-react";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";

export function FeatureGrid() {
  const items = [
    { icon: Timer, t: "Answer every call", d: "24/7 availability with instant triage and routing." },
    { icon: ShieldCheck, t: "Enterprise-ready", d: "POPIA, encryption, audit logs, SSO." },
    { icon: Headphones, t: "On-brand conversations", d: "Local accents, custom scripts and policies." },
    { icon: Handshake, t: "Seamless handover", d: "Warm transfer + post-call summaries." }
  ];
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map(({ icon: Icon, t, d }) => (
        <Card key={t} className="card-hover">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/10">
              <Icon size={18} />
            </span>
            <CardTitle>{t}</CardTitle>
          </div>
          <CardDesc className="mt-2">{d}</CardDesc>
        </Card>
      ))}
    </div>
  );
}