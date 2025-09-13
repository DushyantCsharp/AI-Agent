// app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ROISection } from "@/components/roi-calculator";
import { PlanCard } from "@/components/plan-card";

export const metadata: Metadata = {
  title: "Pricing — Automate-HQ AI Call Centre Agent",
  description:
    "Transparent pricing for South African call centres. Beginner R2,900/mo (no usage), Growth R5,000/mo + R1.50/min, Enterprise custom. Calculate your ROI instantly.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300">
            Built for South African Call Centres
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pricing that’s simple, fair, and built for scale
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our AI agents work like your best human agents — just faster, 24/7, and at a fraction of
            the cost. Pick a plan and start reducing wait times, drop rates, and handle time today.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
          <PlanCard
            highlight={false}
            name="Beginner"
            price="R2,900"
            frequency="/month"
            blurb="Perfect for pilot teams getting their first AI agent live."
            features={[
              "1 AI Voice Agent (Production Ready)",
              "Inbound Q&A + Workflows",
              "Knowledge Base + FAQ ingestion",
              "Human handover (warm transfer)",
              "Email summaries of every call",
              "No usage billing (fair usage applies)",
              "Email support (business hours)",
            ]}
            ctaText="Start Beginner"
            badge=""
          />

          <PlanCard
            highlight
            name="Growth"
            price="R5,000"
            frequency="/month + R1.50/min"
            blurb="Scale across queues with predictable quality and lower costs."
            features={[
              "Up to 3 AI Voice Agents",
              "Advanced call routing & intents",
              "CRM / Ticketing integrations",
              "Real-time dashboards & metrics",
              "Usage-based billing at R1.50/min",
              "Priority support (same-day)",
            ]}
            ctaText="Choose Growth"
            badge="Most popular"
          />

          <PlanCard
            highlight={false}
            name="Enterprise"
            price="Custom"
            frequency=""
            blurb="Compliance, security, and performance for high-volume operations."
            features={[
              "Unlimited AI Agents & Regions",
              "SLA, SSO/SAML, VPC options",
              "Custom integrations & workflows",
              "Dedicated success engineer",
              "On-prem / Private cloud options",
              "24/7 support with uptime SLA",
            ]}
            ctaText="Talk to Sales"
            badge=""
          />
        </div>

        <p className="max-w-6xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-4">
          *Growth usage billed at <span className="font-medium text-slate-700 dark:text-slate-200">R1.50 per minute</span>.
          Beginner has no per-minute billing (fair usage applies). All prices in ZAR and exclude VAT.
        </p>
      </section>

      {/* ROI Section */}
      <ROISection />

      {/* FAQ (concise) */}
      <section className="px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
            Pricing, usage & rollout — quick answers
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
              <h3 className="font-semibold text-slate-900 dark:text-white">How usage works</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                On Growth, every connected minute is billed at R1.50/min. We meter only active talk/
                processing time, not idle. Beginner has no per-minute billing (fair usage).
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
              <h3 className="font-semibold text-slate-900 dark:text-white">Typical ROI</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Most SA call centres see 30–60% cost savings in month one via shorter handle time,
                24/7 availability, and fewer missed calls. Use the calculator above for your numbers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
              <h3 className="font-semibold text-slate-900 dark:text-white">Rollout speed</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Most teams go live in days. Bring your scripts and FAQs — we’ll help tune intents,
                set escalations, and enable human handover from day one.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
              <h3 className="font-semibold text-slate-900 dark:text-white">Compliance</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                POPIA & GDPR-aligned data handling, opt-in call recording, audit trails, and secure
                retention by default. Enterprise options available.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition"
            >
              Book a 30-min demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
