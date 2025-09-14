// app/solutions/page.tsx
import { CalendlyPopupButton } from "@/components/calendly-modal";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="container-prose py-16 md:py-24 text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300">
          Built for South African Call Centres
        </span>
        <h1 className="mt-6">Solutions that scale with your queues</h1>
        <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
          Automate the top 60–80% of routine calls while handing off complex cases to humans.
          Shorter handle time, fewer missed calls, and lower cost per resolution — in weeks.
        </p>
        <div className="mt-6">
          <CalendlyPopupButton label="Book a 30-min demo" />
        </div>
      </section>

      {/* Use cases */}
      <section className="container-prose pb-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCase
            title="Inbound Customer Support"
            bullets={[
              "Answer FAQs from your KB (returns, billing, SIM swaps, order status)",
              "Authenticate customers, update details, send confirmations",
              "Create/close tickets in CRM; escalate with full context",
            ]}
            kpi="↓ AHT 20–40%, ↑ FCR, ↓ missed calls 60–90%"
          />
          <UseCase
            title="Sales & Qualification"
            bullets={[
              "Answer product questions & capture intent 24/7",
              "Qualify leads and book meetings directly into calendars",
              "Warm transfer hot leads to live agents in business hours",
            ]}
            kpi="↑ qualified leads, ↓ time-to-contact"
          />
          <UseCase
            title="Collections & Reminders"
            bullets={[
              "ID&V, balance queries, payment links via SMS/WhatsApp",
              "Promise-to-pay workflows with follow-ups",
              "Transfers to agents for negotiations or disputes",
            ]}
            kpi="↑ promise-to-pay, ↓ agent time per account"
          />
          <UseCase
            title="Logistics & Order Status"
            bullets={[
              "Real-time tracking, delivery rescheduling, address updates",
              "Proactive notifications & self-service options",
              "Escalate exceptions to the right human queue",
            ]}
            kpi="↓ WISMO calls, ↑ CSAT"
          />
          <UseCase
            title="Telco & Utilities"
            bullets={[
              "Outage info, balance/top-up, plan changes, SIM/reconnect",
              "IVR replacement with intent-based routing",
              "Seamless handover with conversation summary",
            ]}
            kpi="↓ queue time, ↓ cost/call"
          />
          <UseCase
            title="Healthcare & Bookings"
            bullets={[
              "Appointment booking/cancellations, pre-screening questions",
              "Benefit checks and co-pay estimates (where available)",
              "Escalate sensitive cases to human agents",
            ]}
            kpi="↑ booking completion, ↓ no-shows"
          />
        </div>
      </section>

      {/* Integrations & compliance */}
      <section className="container-prose py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
            <h2 className="text-xl font-semibold">Plug into your stack</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• CRM & Ticketing: Zendesk, Freshdesk, Salesforce, HubSpot</li>
              <li>• Telephony: SIP/PBX, Twilio, Telnyx (SA routing ready)</li>
              <li>• Data: REST/GraphQL for orders, accounts, billing</li>
              <li>• Identity: SSO/SAML, OAuth, JWT</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
            <h2 className="text-xl font-semibold">Security & POPIA</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Consent prompts for recordings; minimal retention</li>
              <li>• Data residency options and audit trails</li>
              <li>• Role-based access & redaction on transcripts</li>
              <li>• Enterprise options: SLA, VPC, private networking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="container-prose py-12">
        <h2 className="text-2xl font-semibold">Business outcomes</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Outcome label="Cost per resolution" value="↓ 30–60%" />
          <Outcome label="Missed calls" value="↓ 60–90%" />
          <Outcome label="Containment (self-serve)" value="↑ 50–80%" />
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Results vary by intent mix, data availability, and escalation rules. We pilot on a low-risk queue and scale once we beat your baseline.
        </p>

        <div className="mt-8">
          <CalendlyPopupButton label="Book a 30-min demo" />
        </div>
      </section>
    </div>
  );
}

function UseCase({ title, bullets, kpi }: { title: string; bullets: string[]; kpi: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">{kpi}</div>
    </div>
  );
}

function Outcome({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</div>
    </div>
  );
}
