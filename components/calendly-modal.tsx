// components/calendly-modal.tsx
"use client";

import { useState } from "react";

const DEFAULT = "https://calendly.com/automate-hq/30min";
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL && process.env.NEXT_PUBLIC_CALENDLY_URL.trim() !== ""
    ? process.env.NEXT_PUBLIC_CALENDLY_URL
    : DEFAULT;

export function CalendlyButton({ url }: { url?: string }) {
  const href = (url ?? CALENDLY_URL).trim();

  if (!href.startsWith("http")) {
    // Hide rather than show a scary message in production
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
    >
      Schedule a 30-minute call
    </a>
  );
}
