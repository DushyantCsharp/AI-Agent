// app/how-it-works/page.tsx (CTA uses Calendly; no forms anywhere)
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-modal";

export const metadata: Metadata = {
  title: "How it works — Automate-HQ",
  description: "Your always-on AI agent that answers, resolves, and hands off — POPIA-aligned and ROI-driven.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <section className="container-prose py-16 md:py-24 text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300">
          Built for South African Call Centres
        </span>
        <h1 className="mt-6">How Automate-HQ Works</h1>
        <p className="mt-4 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
          Your always-on AI agent that answers, resolves, and hands off — in your brand voice, with POPIA-aligned data handling, and measurable ROI from week one.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <CalendlyPopupButton label="Book a 30-min demo" />
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            See pricing & ROI
          </Link>
        </div>
      </section>

      <section className="container-prose pb-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Step n={1} title="Discovery & goals" copy="We map your queues, intents, and success metrics (AHT, FCR, CSAT, containment). Bring your scripts and FAQs — we translate them into intents." />
          <Step n={2} title="Connect your systems" copy="Hook up CRM/ticketing and sources (Zendesk, Freshdesk, Salesforce, HubSpot, custom APIs). Enable human handover and warm transfers from day one." />
          <Step n={3} title="Tune & go live (days)" copy="We co-pilot testing, add guardrails, and set escalation rules. Launch on a low-risk queue first, then scale once metrics beat baseline." />
        </div>
      </section>

      <section className="container-prose py-12">
        <h2>What the AI agent does</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Understands & routes">Intents, entities, sentiment. Routes by skill, language, business hours and priority.</Card>
          <Card title="Answers like your best agent">Uses your knowledge base and updated FAQs. Clarifies, confirms, and summarizes.</Card>
          <Card title="Takes action">Creates/updates tickets, looks up orders, checks balances, verifies account data.</Card>
          <Card title="Escalates safely">Warm transfer to humans with full context and a clean summary.</Card>
          <Card title="Analytics that matter">AHT, containment, transfer rate, outcome codes, and per-intent performance.</Card>
          <Card title="POPIA & privacy">Consent prompts for recording, minimal retention, audit trails. Enterprise SSO/SLA options.</Card>
        </div>
      </section>

      <section className="container-prose py-12">
        <h2>Expected results in month one</h2>
        <ul className="mt-6 grid md:grid-cols-3 gap-6">
          <KPI label="Handle time" value="↓ 20–40%" />
          <KPI label="Missed calls" value="↓ 60–90%" />
          <KPI label="Cost per call" value="↓ 30–60%" />
        </ul>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Real numbers depend on queue mix and automations enabled. Use the Pricing page calculator to model your costs.
        </p>

        <div className="mt-8">
          <CalendlyPopupButton label="Book a 30-min demo" />
        </div>
      </section>
    </div>
  );
}

function Step({ n, title, copy }: { n: number; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
      <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center font-semibold">{n}</div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{copy}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{children}</p>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <li className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/40 backdrop-blur text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</div>
    </li>
  );
}
