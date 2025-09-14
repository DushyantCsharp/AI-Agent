"use client";

import { useMemo, useState } from "react";

function formatZAR(n: number) {
  if (!isFinite(n)) return "R0";
  return n.toLocaleString("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  });
}

type Inputs = {
  agents: number;
  callsPerAgentPerDay: number;
  avgMinutesPerCall: number;
  workdaysPerMonth: number;
  hourlyWageZAR: number;
  aiSharePercent: number; // % of minutes handled by AI
  perMinuteRateZAR: number; // Growth = 1.5
};

function compute(i: Inputs) {
  const totalMinutes =
    i.agents * i.callsPerAgentPerDay * i.avgMinutesPerCall * i.workdaysPerMonth;

  const humanOnlyHours = totalMinutes / 60;
  const humanOnlyCost = humanOnlyHours * i.hourlyWageZAR;

  const aiShare = Math.max(0, Math.min(i.aiSharePercent, 100)) / 100;
  const humanMinutesWithAI = totalMinutes * (1 - aiShare);
  const humanCostWithAI = (humanMinutesWithAI / 60) * i.hourlyWageZAR;

  const aiMinutes = totalMinutes * aiShare;
  const aiCost = aiMinutes * i.perMinuteRateZAR;

  const netWithAI = humanCostWithAI + aiCost;
  const savings = Math.max(0, humanOnlyCost - netWithAI);
  const roi = netWithAI > 0 ? (savings / netWithAI) * 100 : 0;

  return { totalMinutes, humanOnlyCost, humanCostWithAI, aiCost, netWithAI, savings, roi };
}

export function ROISection() {
  // Sensible SA defaults
  const [agents, setAgents] = useState(10);
  const [calls, setCalls] = useState(35); // ✅ fixed: use `calls` consistently
  const [avgMinutesPerCall, setMinutes] = useState(6);
  const [workdaysPerMonth, setDays] = useState(22);
  const [hourlyWageZAR, setWage] = useState(70);
  const [aiSharePercent, setAI] = useState(50);
  const [perMinuteRateZAR] = useState(1.5); // Growth plan

  const result = useMemo(
    () =>
      compute({
        agents,
        callsPerAgentPerDay: calls, // ✅ pass `calls`
        avgMinutesPerCall,
        workdaysPerMonth,
        hourlyWageZAR,
        aiSharePercent,
        perMinuteRateZAR,
      }),
    [
      agents,
      calls,
      avgMinutesPerCall,
      workdaysPerMonth,
      hourlyWageZAR,
      aiSharePercent,
      perMinuteRateZAR,
    ]
  );

  return (
    <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
            Calculate your savings & ROI
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Model your South African costs. Slide how much work the AI handles and see monthly ROI instantly.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-8">
          {/* Inputs */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-5">
              <NumberField label="Agents" value={agents} onChange={setAgents} min={1} step={1} />
              <NumberField label="Calls per agent / day" value={calls} onChange={setCalls} min={1} step={1} />
              <NumberField label="Avg minutes per call" value={avgMinutesPerCall} onChange={setMinutes} min={1} step={1} />
              <NumberField label="Workdays per month" value={workdaysPerMonth} onChange={setDays} min={1} step={1} />
              <NumberField label="Hourly wage (ZAR)" value={hourlyWageZAR} onChange={setWage} min={10} step={5} />
              <SliderField label="AI handles (%)" value={aiSharePercent} onChange={setAI} />
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              *Growth usage billed at R1.50/min. Beginner has no per-minute billing (fair usage applies).
            </p>
          </div>

          {/* Results */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 bg-white/70 dark:bg-slate-900/40 backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Monthly impact</h3>
            <div className="mt-5 space-y-3 text-sm">
              <Row label="Total minutes (all agents)" value={result.totalMinutes.toLocaleString()} />
              <Row label="Human-only cost" value={formatZAR(result.humanOnlyCost)} />
              <Row label="Human cost with AI" value={formatZAR(result.humanCostWithAI)} />
              <Row label="AI usage cost (R1.50/min)" value={formatZAR(result.aiCost)} />
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-3" />
              <Row label="Net cost with AI" value={formatZAR(result.netWithAI)} bold />
              <Row label="Monthly savings" value={formatZAR(result.savings)} good />
              <Row label="ROI % (monthly)" value={`${Math.round(result.roi)}%`} good />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  bold,
  good,
}: {
  label: string;
  value: string;
  bold?: boolean;
  good?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600 dark:text-slate-300">{label}</span>
      <span
        className={[
          "tabular-nums",
          bold ? "font-semibold text-slate-900 dark:text-white" : "text-slate-800 dark:text-slate-100",
          good ? "text-emerald-600 dark:text-emerald-400 font-semibold" : "",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  step?: number;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-800 dark:text-slate-100">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        min={min}
        step={step}
        className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/40 px-3 py-2 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-600"
      />
    </label>
  );
}

function SliderField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block md:col-span-2">
      <span className="block text-sm font-medium text-slate-800 dark:text-slate-100">
        {label}: <span className="font-semibold">{value}%</span>
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
        className="mt-4 w-full accent-blue-600"
      />
      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </label>
  );
}
