"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 2))));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, duration]);
  return val;
}

export function KpiBar() {
  const wait = useCountUp(80);
  const csat = useCountUp(95);
  const zero = useCountUp(0);
  const kpis = [
    { v: `−${wait}%`, l: "Lower wait times" },
    { v: `${csat}%+`, l: "CSAT on simple queries" },
    { v: `${zero}`, l: "Missed calls (24/7)" }
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {kpis.map((k) => (
        <div key={k.l} className="text-center">
          <div className="text-2xl font-bold">{k.v}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">{k.l}</div>
        </div>
      ))}
    </div>
  );
}