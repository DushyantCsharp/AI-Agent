"use client";

export function SocialProofMarquee() {
  const items = [
    "Banking • Enterprise","Insurance • Enterprise","Retail • National",
    "Telecom • National","BPO • Multi-site","Fintech • Scale-up"
  ];
  const row = [...items, ...items];
  return (
    <div className="space-y-2">
      <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Trusted by teams in</div>
      <div className="marquee overflow-hidden">
        <div className="marquee__inner">
          {row.map((t, i) => (
            <span key={`m1-${i}`} className="shrink-0 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur text-xs text-gray-700 dark:text-gray-200">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee marquee--slow overflow-hidden">
        <div className="marquee__inner">
          {row.map((t, i) => (
            <span key={`m2-${i}`} className="shrink-0 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur text-xs text-gray-700 dark:text-gray-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}