"use client";

import { motion } from "framer-motion";
import { Container, Section, Eyebrow } from "@/components/layout-primitives";
import { CalendlyButton } from "@/components/calendly-modal";
import { SocialProofMarquee } from "@/components/social-proof-marquee";
import { KpiBar } from "@/components/kpi-bar";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { IntegrationsStrip } from "@/components/integrations-strip";
import { HeroOrbs } from "@/components/hero-orbs";
import { FeatureGrid } from "@/components/feature-grid";
import { StickyCta } from "@/components/sticky-cta";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.48, ease: "easeOut" } })
};

export function HomeAnimated() {
  return (
    <div className="relative">
      <HeroOrbs />
      <StickyCta />

      {/* HERO */}
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">
              <Eyebrow>Automate-HQ • AI Call Centre Agent</Eyebrow>

              <motion.h1
                className="font-bold tracking-tight"
                style={{ fontSize: "var(--step-3)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                Never miss a call again.
              </motion.h1>

              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
              >
                An enterprise AI voice agent for South African call centres. It answers, resolves and hands off — 24/7. POPIA-ready. Clear, provable ROI.
              </motion.p>

              <motion.ul className="text-sm text-gray-800 dark:text-gray-200 space-y-2" initial="hidden" animate="show">
                {["Up to 80% lower wait times","After-hours coverage with warm handover","Local accents, on-brand scripting"].map((b, idx) => (
                  <motion.li key={b} className="flex items-start gap-2" custom={idx + 2} variants={fadeUp}>
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-blue" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45, ease: "easeOut" }}
              >
                <CalendlyButton label="Schedule a 30-minute call" />
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}>
                <SocialProofMarquee />
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.5 }}>
                <IntegrationsStrip />
              </motion.div>
            </div>

            <motion.div
              className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/80 dark:bg-white/[0.04] backdrop-blur"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <KpiBar />
              <div className="mt-6 grid grid-cols-3 gap-2 text-[10px] text-gray-700 dark:text-gray-300">
                {["POPIA", "Encryption", "SSO"].map((t) => (
                  <div key={t} className="rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-center">
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-gray-600 dark:text-gray-400">
                Targets shown are realistic; we’ll tune flows to your volumes, intents and SLAs.
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* VALUE */}
      <Section>
        <Container>
          <FeatureGrid />
        </Container>
      </Section>

      {/* HOW */}
      <Section>
        <Container>
          <motion.h2
            className="font-semibold"
            style={{ fontSize: "var(--step-2)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            How it works
          </motion.h2>

          <ol className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "Connect telephony", d: "Twilio or SIP trunk. Keep your current numbers." },
              { t: "Understand & route", d: "ASR + intent + rules triage every call accurately." },
              { t: "Resolve or handover", d: "Self-serve where possible, warm transfer when needed." },
            ].map((s, i) => (
              <motion.li
                key={s.t}
                className="relative rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/[0.04] backdrop-blur"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
              >
                <div className="absolute -left-2 -top-2 h-8 w-8 rounded-full bg-brand-blue/10 border border-brand-blue/30 grid place-items-center text-xs font-semibold text-brand-blue">
                  {i + 1}
                </div>
                <div className="pl-0">
                  <div className="font-semibold">{s.t}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">{s.d}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* PRICING */}
      <Section>
        <Container>
          <motion.h2
            className="font-semibold"
            style={{ fontSize: "var(--step-2)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Simple pricing
          </motion.h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { t: "Starter", p: "R2,900/mo + usage", f: ["R1.50/minute", "1 agent profile", "Email support"], popular: false },
              { t: "Growth", p: "R5,000/mo + usage", f: ["R1.50/minute", "SSO", "Priority support"], popular: true },
              { t: "Enterprise", p: "Custom", f: ["Volume pricing", "SLA", "VPC / On-prem connectors"], popular: false },
            ].map((x, i) => (
              <motion.div
                key={x.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
              >
                <Card className={`card-hover ${x.popular ? "ring-1 ring-brand-blue/30" : ""}`}>
                  {x.popular && (
                    <div className="mb-2 inline-flex items-center px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-medium">
                      Most popular
                    </div>
                  )}
                  <CardTitle>{x.t}</CardTitle>
                  <div className="text-3xl font-bold mt-2">{x.p}</div>
                  <ul className="mt-3 text-sm space-y-1">{x.f.map((f) => <li key={f}>• {f}</li>)}</ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <CalendlyButton label="Discuss pricing in a 30-minute call" />
          </motion.div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Container>
          <motion.div
            className="rounded-2xl p-8 border border-black/10 dark:border-white/10 bg-gradient-to-tr from-brand-blue/10 to-transparent flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              <div className="text-xl font-semibold">Ready to reduce wait times?</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Schedule a 30-minute call — we’ll map volumes, integrations and target KPIs.
              </p>
            </div>
            <CalendlyButton label="Schedule a 30-minute call" />
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}