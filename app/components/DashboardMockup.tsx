type MockupType = "dns" | "eks" | "finops";

export function DashboardMockup({ type }: { type: MockupType }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center gap-2 border-b border-border bg-surface-muted/80 px-4 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-red-500/60" />
          <span className="h-2 w-2 rounded-full bg-amber-500/60" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/60" />
        </div>
        <span className="font-mono text-[10px] text-foreground/40">
          {type === "dns" && "dns-automation · ops dashboard"}
          {type === "eks" && "eks-platform · cluster dashboard"}
          {type === "finops" && "finops-agent · cost dashboard"}
        </span>
      </div>
      <div className="bg-[#0a0f1a] p-4 dark:bg-[#030712]">
        {type === "dns" && <DnsDashboard />}
        {type === "eks" && <EksDashboard />}
        {type === "finops" && <FinOpsDashboard />}
      </div>
      <figcaption className="border-t border-border px-4 py-2 text-xs text-foreground/45">
        Operational dashboard — request queue, agent status, and audit trail
      </figcaption>
    </figure>
  );
}

function DnsDashboard() {
  return (
    <div className="space-y-3 font-mono text-[10px]">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Open requests", value: "3", color: "text-cyan-400" },
          { label: "Avg turnaround", value: "42s", color: "text-emerald-400" },
          { label: "Policy pass rate", value: "96%", color: "text-violet-400" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-white/5 p-2.5">
            <p className="text-slate-600">{m.label}</p>
            <p className={`mt-1 text-lg font-semibold ${m.color}`}>{m.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/5 p-3">
        <p className="text-slate-600">Recent requests</p>
        {[
          "dns-req-2847 · CNAME · prod · RESOLVED",
          "dns-req-2846 · A record · staging · PENDING",
          "dns-req-2845 · TXT · prod · APPROVED",
        ].map((row) => (
          <p key={row} className="mt-1.5 text-slate-400">
            {row}
          </p>
        ))}
      </div>
    </div>
  );
}

function EksDashboard() {
  return (
    <div className="space-y-3 font-mono text-[10px]">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Clusters", value: "12", color: "text-emerald-400" },
          { label: "Onboarding", value: "2.1h", color: "text-cyan-400" },
          { label: "Policy pass", value: "100%", color: "text-violet-400" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-white/5 p-2.5">
            <p className="text-slate-600">{m.label}</p>
            <p className={`mt-1 text-lg font-semibold ${m.color}`}>{m.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/5 p-3">
        <p className="text-slate-600">Active stacks</p>
        {["platform-team-dev · DEPLOYED", "payments-prod · DEPLOYED", "analytics-stage · UPDATING"].map((row) => (
          <p key={row} className="mt-1.5 text-slate-400">
            {row}
          </p>
        ))}
      </div>
    </div>
  );
}

function FinOpsDashboard() {
  return (
    <div className="space-y-3 font-mono text-[10px]">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Est. savings", value: "$12K", color: "text-amber-400" },
          { label: "Flagged", value: "47", color: "text-red-400" },
          { label: "Anomalies", value: "3", color: "text-violet-400" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border border-white/5 p-2.5">
            <p className="text-slate-600">{m.label}</p>
            <p className={`mt-1 text-lg font-semibold ${m.color}`}>{m.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-white/5 p-3">
        <p className="text-slate-600">Top waste categories</p>
        {["Idle EBS · $420/mo", "Oversized EC2 · $280/mo", "Orphaned EIP · $45/mo"].map((row) => (
          <p key={row} className="mt-1.5 text-slate-400">
            {row}
          </p>
        ))}
      </div>
    </div>
  );
}

export type { MockupType };
