// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { CalendlyButton } from "@/components/calendly-modal";

export const metadata: Metadata = {
  title: "Contact — Automate-HQ",
  description:
    "Book a demo or contact Automate-HQ. AI voice agents for South African call centres — POPIA-ready.",
};

export default function ContactPage() {
  return (
    <section className="container-prose py-16">
      <div className="max-w-2xl">
        <h1>Contact & Demo</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Tell us about your queues and goals. We’ll show you how the AI agent
          reduces handle time, drop rates, and costs.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Calendly button reads NEXT_PUBLIC_CALENDLY_URL at build time */}
          <CalendlyButton />
          <Link
            href={"/pricing" as Route}
            className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            See pricing & ROI
          </Link>
        </div>

        <form
          className="mt-10 grid gap-5"
          method="post"
          action="mailto:hello@automate-hq.co.za"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <FormField id="name" label="Full name">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"
              />
            </FormField>

            <FormField id="email" label="Work email">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"
              />
            </FormField>
          </div>

          <FormField id="company" label="Company">
            <input
              id="company"
              name="company"
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>

          <FormField id="phone" label="Phone (optional)">
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>

          <FormField id="message" label="What do you want to achieve?">
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>

          <div className="flex gap-3">
            <button
              type="submit"
              className="inline-flex items-center rounded-xl px-5 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Send message
            </button>
            <Link
              href={"/how-it-works" as Route}
              className="inline-flex items-center rounded-xl px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              How it works
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

/** Small helper to keep labels accessible and avoid invalid `label` props */
function FormField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-slate-800 dark:text-slate-100">
        {label}
      </span>
      {children}
    </label>
  );
}
