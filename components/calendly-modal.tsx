"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogBody, DialogHeader } from "@/components/ui/dialog";

function themed(url?: string) {
  if (!url) return undefined;
  const hasQ = url.includes("?");
  const qp = "hide_gdpr_banner=1&background_color=ffffff&text_color=0B0F1A&primary_color=2563EB";
  return `${url}${hasQ ? "&" : "?"}${qp}`;
}

export function CalendlyButton({ label = "Schedule a 30-minute call" }: { label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size="lg" onClick={() => setOpen(true)}>{label}</Button>
      <CalendlyModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function CalendlyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const raw = process.env.NEXT_PUBLIC_CALENDLY_URL as string | undefined;
  const url = useMemo(() => themed(raw), [raw]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="Schedule a 30-minute call" onClose={onClose} />
      <DialogBody>
        {url ? (
          <iframe src={url} title="Schedule a 30-minute call" style={{ width: "100%", height: "75vh", border: 0 }} />
        ) : (
          <div className="p-6 text-sm">Set <code>NEXT_PUBLIC_CALENDLY_URL</code> in <code>.env.local</code>.</div>
        )}
      </DialogBody>
    </Dialog>
  );
}