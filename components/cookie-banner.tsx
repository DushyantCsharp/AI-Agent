"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!localStorage.getItem("ahq-cookie-ok")) setShow(true); }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-4 z-[90] px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 backdrop-blur p-4 flex flex-col md:flex-row md:items-center gap-3">
        <p className="text-sm flex-1">
          We use privacy-first analytics and essential cookies to improve the product. No tracking pixels until you agree.
        </p>
        <div className="flex gap-2">
          <Button onClick={() => { localStorage.setItem("ahq-cookie-ok","1"); setShow(false); }}>Accept</Button>
          <Button variant="outline" onClick={() => setShow(false)}>Decline</Button>
        </div>
      </div>
    </div>
  );
}