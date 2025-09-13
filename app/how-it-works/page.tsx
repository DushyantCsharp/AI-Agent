import { Card, CardDesc, CardTitle } from "@/components/ui/card";

export default function Page() {
  const steps = [
    { t: "Telephony", d: "Twilio or SIP trunk lands calls into the agent." },
    { t: "Voice-to-Text + NLU", d: "High-accuracy ASR tuned for SA accents + intent detection." },
    { t: "Knowledge & Tools", d: "FAQs, ticketing, CRM, billing lookups and internal APIs." },
    { t: "Policy & Escalation", d: "Guardrails, compliance, priority rules and fallback trees." },
    { t: "Live Transfer + Summary", d: "Warm handover with context and post-call notes." }
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">How it works</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map(s => (
          <Card key={s.t} className="card-hover">
            <CardTitle>{s.t}</CardTitle>
            <CardDesc>{s.d}</CardDesc>
          </Card>
        ))}
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        <strong>Security & compliance:</strong> POPIA, encryption in transit/at rest, data-residency options, audit logs, SSO.
      </div>
    </div>
  );
}