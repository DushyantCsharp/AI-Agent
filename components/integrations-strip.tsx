export function IntegrationsStrip() {
  const logos = ["Twilio", "Asterisk/SIP", "Salesforce", "Zendesk", "Freshdesk", "WhatsApp", "MS Teams"];
  return (
    <div className="opacity-90">
      <div className="text-sm mb-2">Integrates with</div>
      <div className="flex flex-wrap gap-3 text-xs">
        {logos.map((l) => (
          <span key={l} className="px-3 py-1 rounded-lg border border-white/15 bg-white/50 dark:bg-white/[0.04]">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}