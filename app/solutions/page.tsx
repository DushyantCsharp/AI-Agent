import { Tabs } from "@/components/ui/tabs";

export default function Page() {
  const tabs = [
    {
      id: "inbound",
      label: "Inbound Support",
      content: (
        <div className="space-y-2 text-sm">
          <p><strong>Problem:</strong> Peaks, long queues, dropped calls.</p>
          <p><strong>Solution:</strong> Agent greets, authenticates, answers FAQs, creates tickets, sends summaries.</p>
          <p><strong>KPIs:</strong> −60–80% wait time • Higher FCR • Lower cost/contact.</p>
        </div>
      )
    },
    {
      id: "sales",
      label: "Sales Qualification",
      content: (
        <div className="space-y-2 text-sm">
          <p><strong>Problem:</strong> Leads go cold after hours.</p>
          <p><strong>Solution:</strong> Qualify, capture intent, schedule callbacks with CRM handoff.</p>
          <p><strong>KPIs:</strong> Faster speed-to-lead • Higher conversion.</p>
        </div>
      )
    },
    {
      id: "collections",
      label: "Collections/Reminders",
      content: (
        <div className="space-y-2 text-sm">
          <p><strong>Problem:</strong> Manual chasing is slow and inconsistent.</p>
          <p><strong>Solution:</strong> Automated reminders with compliant, secure IVR flows.</p>
          <p><strong>KPIs:</strong> Reduced ageing • Lower agent load.</p>
        </div>
      )
    },
    {
      id: "overflow",
      label: "After-Hours Overflow",
      content: (
        <div className="space-y-2 text-sm">
          <p><strong>Problem:</strong> Night and weekend calls go unanswered.</p>
          <p><strong>Solution:</strong> 24/7 coverage with priority rules for VIP customers.</p>
          <p><strong>KPIs:</strong> Zero missed calls • Better CSAT.</p>
        </div>
      )
    }
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Solutions</h1>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Choose the use case that matches your operation — each is tailored to your scripts, tools and policies.
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
}