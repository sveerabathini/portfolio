"use client";

import { useEffect, useState } from "react";

type TabId = "clusters" | "agents" | "finops" | "incidents" | "pipelines";

const TABS: { id: TabId; label: string; short: string }[] = [
  { id: "clusters", label: "Cluster Health", short: "Clusters" },
  { id: "agents", label: "AI Agents Running", short: "Agents" },
  { id: "finops", label: "FinOps Scan Active", short: "FinOps" },
  { id: "incidents", label: "Incident Queue", short: "Incidents" },
  { id: "pipelines", label: "Automation Pipelines", short: "Pipelines" },
];

const CLUSTERS = [
  { name: "eks-prod-us-east", provider: "AWS", nodes: "12/12", cpu: 68, mem: 54, status: "healthy" },
  { name: "eks-dev-us-east", provider: "AWS", nodes: "6/6", cpu: 34, mem: 41, status: "healthy" },
  { name: "aks-stage-eu", provider: "Azure", nodes: "8/8", cpu: 52, mem: 48, status: "healthy" },
  { name: "gke-prod-ap", provider: "GCP", nodes: "10/10", cpu: 71, mem: 63, status: "healthy" },
];

const AGENTS = [
  { name: "dns-triage-agent", task: "Validating CNAME · prod-zone", latency: "420ms", status: "running" },
  { name: "finops-scanner", task: "Scanning idle EBS · us-east-1", latency: "1.2s", status: "running" },
  { name: "incident-router", task: "Routing #4821 → runbook-eks", latency: "180ms", status: "running" },
  { name: "iac-validator", task: "Pulumi preview · eks-platform", latency: "890ms", status: "idle" },
];

const INCIDENTS = [
  { id: "#4821", severity: "P2", title: "EKS node memory pressure", status: "triaged", agent: "incident-router" },
  { id: "#4819", severity: "P3", title: "DNS TTL policy violation", status: "resolved", agent: "dns-triage" },
  { id: "#4817", severity: "P2", title: "Idle RDS instance detected", status: "investigating", agent: "finops-scanner" },
  { id: "#4814", severity: "P4", title: "GitOps sync drift · staging", status: "queued", agent: "iac-validator" },
];

const PIPELINES = [
  { name: "eks-golden-path", runs: "142", success: 98, last: "2m ago", status: "healthy" },
  { name: "dns-automation", runs: "89", success: 96, last: "42s ago", status: "healthy" },
  { name: "finops-daily-scan", runs: "30", success: 100, last: "6h ago", status: "healthy" },
  { name: "pulumi-platform-dev", runs: "56", success: 94, last: "14m ago", status: "warning" },
];

const ACTIVITY = [
  "FinOps agent flagged 3 idle EBS volumes · est. $420/mo",
  "DNS automation validated CNAME · prod-zone · 42s turnaround",
  "Incident #4821 triaged → runbook-eks-node-pressure",
  "Pulumi stack preview passed · eks-platform-dev",
  "Agent workflow dns-request-7 completed",
];

export function OpsCenter({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState<TabId>("clusters");
  const [tick, setTick] = useState(0);
  const [activityIdx, setActivityIdx] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toISOString().slice(11, 19) + " UTC");
    };
    update();
    const clock = setInterval(update, 1000);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let interval: ReturnType<typeof setInterval> | undefined;
    if (!prefersReduced) {
      interval = setInterval(() => {
        setTick((t) => t + 1);
        setActivityIdx((i) => (i + 1) % ACTIVITY.length);
      }, 3000);
    }

    return () => {
      clearInterval(clock);
      if (interval) clearInterval(interval);
    };
  }, []);

  if (compact) {
    return (
      <div className="ops-center ops-center-compact relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#030712] shadow-2xl shadow-cyan-500/10">
        <div className="ops-center-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="relative border-b border-cyan-500/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/80">AI Ops Center</span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              LIVE
            </span>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
          {TABS.map((tab) => (
            <div key={tab.id} className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
              <p className="font-mono text-[8px] uppercase tracking-wider text-slate-500">{tab.short}</p>
              <p className="mt-1 font-mono text-sm font-semibold text-cyan-300">
                {tab.id === "clusters" && "12/12"}
                {tab.id === "agents" && "7 active"}
                {tab.id === "finops" && "Scanning"}
                {tab.id === "incidents" && "4 open"}
                {tab.id === "pipelines" && "41/41"}
              </p>
            </div>
          ))}
        </div>
        <div className="relative border-t border-cyan-500/10 px-4 py-2">
          <p className="truncate font-mono text-[10px] text-slate-500">
            <span className="text-cyan-400/70">{time}</span> · {ACTIVITY[activityIdx]}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="ops-center relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-[#030712] shadow-2xl shadow-cyan-500/15">
      <div className="ops-center-grid absolute inset-0" aria-hidden />
      <div className="ops-center-scan absolute inset-0 pointer-events-none" aria-hidden />
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" aria-hidden />

      {/* Header */}
      <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/15 bg-[#0a0f1a]/80 px-5 py-4 md:px-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-amber-500/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/70">Signature · AI Ops Center</p>
            <h3 className="font-mono text-base font-medium text-slate-100 md:text-lg">Infrastructure Control Plane</h3>
          </div>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs">
          <span className="hidden text-slate-500 sm:inline">{time}</span>
          <span className="flex items-center gap-2 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative flex overflow-x-auto border-b border-cyan-500/10 bg-[#0a0f1a]/50">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 border-b-2 px-4 py-3 font-mono text-[11px] transition md:px-6 md:text-xs ${
              activeTab === tab.id
                ? "border-cyan-400 text-cyan-300 bg-cyan-500/5"
                : "border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="relative grid lg:grid-cols-[1fr_300px]">
        <div className="min-h-[320px] p-5 md:p-8">
          {activeTab === "clusters" && <ClusterPanel tick={tick} />}
          {activeTab === "agents" && <AgentsPanel />}
          {activeTab === "finops" && <FinOpsPanel tick={tick} />}
          {activeTab === "incidents" && <IncidentsPanel />}
          {activeTab === "pipelines" && <PipelinesPanel />}
        </div>

        <div className="border-t border-cyan-500/10 bg-[#0a0f1a]/40 p-5 lg:border-l lg:border-t-0 md:p-6">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Live activity</p>
          <ul className="mt-4 space-y-2" aria-live="polite">
            {ACTIVITY.map((event, i) => (
              <li
                key={event}
                className={`rounded-lg border px-3 py-2 font-mono text-[11px] leading-relaxed transition ${
                  i === activityIdx
                    ? "border-cyan-500/30 bg-cyan-500/5 text-slate-300"
                    : "border-white/5 text-slate-600"
                }`}
              >
                {event}
              </li>
            ))}
          </ul>

          <div className="mt-6 overflow-hidden rounded-xl border border-cyan-500/10 bg-[#030712] p-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-emerald-400/70">Topology</p>
            <MiniTopology pulse={tick % 100} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClusterPanel({ tick }: { tick: number }) {
  return (
    <div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">Multi-cloud cluster health</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {CLUSTERS.map((c) => (
          <div key={c.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-300">{c.name}</span>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400">{c.status}</span>
            </div>
            <p className="mt-1 font-mono text-[10px] text-slate-600">{c.provider} · nodes {c.nodes}</p>
            <div className="mt-3 space-y-2">
              <MetricBar label="CPU" value={c.cpu + (tick % 3)} max={100} color="#22d3ee" />
              <MetricBar label="MEM" value={c.mem} max={100} color="#818cf8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentsPanel() {
  return (
    <div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">7 agents · 4 running · 3 idle</p>
      <div className="space-y-3">
        {AGENTS.map((agent) => (
          <div key={agent.name} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${
                agent.status === "running" ? "animate-pulse bg-cyan-400" : "bg-slate-600"
              }`}
            />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs text-slate-300">{agent.name}</p>
              <p className="truncate font-mono text-[10px] text-slate-600">{agent.task}</p>
            </div>
            <span className="shrink-0 font-mono text-[10px] text-cyan-400/70">{agent.latency}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinOpsPanel({ tick }: { tick: number }) {
  const savings = 420 + (tick % 5) * 12;
  return (
    <div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">FinOps scan · live</p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:col-span-1">
          <p className="font-mono text-2xl font-semibold tabular-nums text-amber-400">${savings}/mo</p>
          <p className="mt-1 font-mono text-[10px] text-slate-500">Est. idle resource savings</p>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:col-span-2">
          <p className="font-mono text-[10px] text-slate-500">Flagged resources</p>
          <ul className="mt-2 space-y-1.5 font-mono text-[11px] text-slate-400">
            <li>▹ 3 idle EBS volumes · 450GB · us-east-1</li>
            <li>▹ 2 t3.xlarge · avg CPU 2% · 14d idle</li>
            <li>▹ 1 unattached EIP · prod-account</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <p className="mb-3 font-mono text-[10px] text-slate-500">Spend anomaly · 30d baseline</p>
        <Sparkline values={[42, 45, 44, 48, 52, 89, 76, 71, 68, 65]} highlight={5} />
      </div>
    </div>
  );
}

function IncidentsPanel() {
  const severityColor: Record<string, string> = {
    P2: "text-amber-400 bg-amber-500/10",
    P3: "text-sky-400 bg-sky-500/10",
    P4: "text-slate-400 bg-slate-500/10",
  };
  const statusColor: Record<string, string> = {
    triaged: "text-violet-400",
    resolved: "text-emerald-400",
    investigating: "text-amber-400",
    queued: "text-slate-500",
  };

  return (
    <div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">Incident queue · auto-routed</p>
      <div className="overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full font-mono text-[11px]">
          <thead>
            <tr className="border-b border-white/5 text-left text-slate-600">
              <th className="px-4 py-2.5 font-normal">ID</th>
              <th className="px-4 py-2.5 font-normal">Sev</th>
              <th className="px-4 py-2.5 font-normal">Title</th>
              <th className="px-4 py-2.5 font-normal">Agent</th>
              <th className="px-4 py-2.5 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {INCIDENTS.map((inc) => (
              <tr key={inc.id} className="border-b border-white/[0.03] text-slate-400">
                <td className="px-4 py-3 text-cyan-400/80">{inc.id}</td>
                <td className="px-4 py-3">
                  <span className={`rounded px-1.5 py-0.5 ${severityColor[inc.severity]}`}>{inc.severity}</span>
                </td>
                <td className="px-4 py-3">{inc.title}</td>
                <td className="px-4 py-3 text-slate-600">{inc.agent}</td>
                <td className={`px-4 py-3 ${statusColor[inc.status]}`}>{inc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PipelinesPanel() {
  return (
    <div>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">Automation pipelines · 41 healthy</p>
      <div className="space-y-3">
        {PIPELINES.map((p) => (
          <div key={p.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-300">{p.name}</span>
              <span className={`font-mono text-[10px] ${p.status === "healthy" ? "text-emerald-400" : "text-amber-400"}`}>
                {p.success}% success
              </span>
            </div>
            <div className="mt-2 flex gap-4 font-mono text-[10px] text-slate-600">
              <span>{p.runs} runs</span>
              <span>last {p.last}</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full ${p.status === "healthy" ? "bg-emerald-500/70" : "bg-amber-500/70"}`}
                style={{ width: `${p.success}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div>
      <div className="flex justify-between font-mono text-[9px] text-slate-600">
        <span>{label}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function Sparkline({ values, highlight }: { values: number[]; highlight?: number }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const w = 280;
  const h = 48;
  const points = values
    .map((v, i) => `${(i / (values.length - 1)) * w},${h - ((v - min) / range) * (h - 8) - 4}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-12 w-full" aria-hidden>
      <polyline fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1.5" points={points} />
      {highlight !== undefined && (
        <circle
          cx={(highlight / (values.length - 1)) * w}
          cy={h - ((values[highlight] - min) / range) * (h - 8) - 4}
          r="4"
          fill="#f59e0b"
        />
      )}
    </svg>
  );
}

function MiniTopology({ pulse }: { pulse: number }) {
  const nodes = [
    { x: 60, y: 20, c: "#22d3ee" },
    { x: 20, y: 55, c: "#818cf8" },
    { x: 60, y: 55, c: "#34d399" },
    { x: 100, y: 55, c: "#f59e0b" },
    { x: 40, y: 85, c: "#38bdf8" },
    { x: 80, y: 85, c: "#a78bfa" },
  ];
  return (
    <svg viewBox="0 0 120 100" className="h-24 w-full" aria-hidden>
      {nodes.slice(0, -1).map((_, i) => (
        <line
          key={i}
          x1={nodes[0].x}
          y1={nodes[0].y}
          x2={nodes[i + 1].x}
          y2={nodes[i + 1].y}
          stroke="#22d3ee"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="5" fill={n.c} fillOpacity={0.3 + (pulse % 30) / 100} stroke={n.c} strokeOpacity="0.6" />
      ))}
    </svg>
  );
}
