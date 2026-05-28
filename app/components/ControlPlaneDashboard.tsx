"use client";

import { useEffect, useState } from "react";

type Metric = {
  id: string;
  label: string;
  value: string;
  detail: string;
  status: "healthy" | "active" | "scanning" | "triaged" | "running";
};

const METRICS: Metric[] = [
  {
    id: "clusters",
    label: "Clusters Online",
    value: "12/12",
    detail: "EKS · AKS · GKE",
    status: "healthy",
  },
  {
    id: "agents",
    label: "Agents Running",
    value: "7",
    detail: "DNS · FinOps · Triage",
    status: "running",
  },
  {
    id: "finops",
    label: "FinOps Scan Active",
    value: "Live",
    detail: "Idle resources flagged",
    status: "scanning",
  },
  {
    id: "incidents",
    label: "Incidents Resolved",
    value: "23",
    detail: "Last 24h · auto-routed",
    status: "triaged",
  },
  {
    id: "workflows",
    label: "Workflows Healthy",
    value: "41/41",
    detail: "GitOps · IaC · DNS",
    status: "active",
  },
];

const ACTIVITY = [
  { time: "14:32:08", event: "FinOps agent flagged 3 idle EBS volumes · est. $420/mo" },
  { time: "14:31:44", event: "DNS automation validated CNAME change · prod-zone" },
  { time: "14:30:12", event: "Incident #4821 triaged → runbook-eks-node-pressure" },
  { time: "14:28:55", event: "Pulumi stack preview passed · eks-platform-dev" },
  { time: "14:27:03", event: "Agent workflow dns-request-7 completed · 42s" },
];

const STATUS_STYLES = {
  healthy: { dot: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400" },
  active: { dot: "bg-sky-500", text: "text-sky-600 dark:text-sky-400" },
  scanning: { dot: "bg-amber-500", text: "text-amber-600 dark:text-amber-400" },
  triaged: { dot: "bg-violet-500", text: "text-violet-600 dark:text-violet-400" },
  running: { dot: "bg-accent", text: "text-accent" },
} as const;

export function ControlPlaneDashboard({ variant = "full" }: { variant?: "full" | "hero" }) {
  const isHero = variant === "hero";
  const [tick, setTick] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setTick((t) => {
        if (t % 3 === 0) {
          setActivityIndex((i) => (i + 1) % ACTIVITY.length);
        }
        return t + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const pulseOffset = tick % 100;

  return (
    <div
      className={`control-plane relative overflow-hidden rounded-2xl border border-accent/20 bg-surface shadow-2xl shadow-accent/5 ${
        isHero ? "shadow-accent/10" : ""
      }`}
    >
      <div className="control-plane-scan absolute inset-0 pointer-events-none" aria-hidden />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-highlight/10 blur-3xl" aria-hidden />

      <div className="relative border-b border-border bg-surface-muted/80 px-4 py-3 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-foreground/50">control-plane · v2.4.1</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">All systems operational</span>
          </div>
        </div>
        <h3 className="mt-3 font-mono text-sm font-medium text-foreground/80 md:text-base">
          AI Infrastructure Control Plane
        </h3>
      </div>

      <div className={`relative grid gap-0 ${isHero ? "" : "lg:grid-cols-[1fr_280px]"}`}>
        <div className={isHero ? "p-3 md:p-4" : "p-4 md:p-6"}>
          <div className={`grid gap-2 ${isHero ? "grid-cols-2 sm:grid-cols-3" : "gap-3 sm:grid-cols-2 xl:grid-cols-3"}`}>
            {METRICS.map((metric) => {
              const style = STATUS_STYLES[metric.status];
              return (
                <div
                  key={metric.id}
                  className={`group rounded-xl border border-border bg-surface-muted/60 transition hover:border-accent/30 hover:bg-accent-muted/30 ${
                    isHero ? "p-2.5" : "p-4"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${style.dot} ${metric.status === "scanning" ? "animate-pulse" : ""}`} />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-foreground/45 md:text-[10px]">
                      {metric.label}
                    </span>
                  </div>
                  <p className={`mt-1 font-mono font-semibold tabular-nums ${style.text} ${isHero ? "text-lg" : "mt-2 text-2xl"}`}>
                    {metric.value}
                  </p>
                  {!isHero && <p className="mt-1 font-mono text-[11px] text-foreground/45">{metric.detail}</p>}
                </div>
              );
            })}
          </div>

          {!isHero && (
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-[#0a0f1a] p-4 dark:bg-[#030712]">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/80">
                  Topology · live
                </span>
                <span className="font-mono text-[10px] text-foreground/30">pulse {pulseOffset}ms</span>
              </div>
              <TopologyGraph pulseOffset={pulseOffset} />
            </div>
          )}
        </div>

        {!isHero && (
          <div className="border-t border-border bg-surface-muted/40 p-4 lg:border-l lg:border-t-0 md:p-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/45">Activity stream</p>
            <ul className="mt-4 space-y-3" aria-live="polite">
              {ACTIVITY.map((entry, i) => (
                <li
                  key={`${entry.time}-${entry.event}`}
                  className={`rounded-lg border border-border/60 bg-surface/80 px-3 py-2 transition ${
                    i === activityIndex ? "border-accent/30 bg-accent-muted/20" : "opacity-60"
                  }`}
                >
                  <span className="font-mono text-[10px] text-accent">{entry.time}</span>
                  <p className="mt-1 font-mono text-[11px] leading-relaxed text-foreground/60">{entry.event}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function TopologyGraph({ pulseOffset }: { pulseOffset: number }) {
  const nodes = [
    { id: "ingress", x: 200, y: 30, label: "Ingress", color: "#6366f1" },
    { id: "agents", x: 80, y: 100, label: "AI Agents", color: "#818cf8" },
    { id: "eks", x: 200, y: 100, label: "EKS", color: "#10b981" },
    { id: "finops", x: 320, y: 100, label: "FinOps", color: "#f59e0b" },
    { id: "dns", x: 130, y: 170, label: "DNS Auto", color: "#38bdf8" },
    { id: "iac", x: 270, y: 170, label: "IaC/Pulumi", color: "#a78bfa" },
  ];

  const edges = [
    ["ingress", "agents"],
    ["ingress", "eks"],
    ["ingress", "finops"],
    ["agents", "dns"],
    ["eks", "iac"],
    ["finops", "iac"],
    ["dns", "iac"],
  ] as const;

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 400 210" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {edges.map(([from, to]) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edge-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ animation: "dash-flow 3s linear infinite" }}
          />
        );
      })}

      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r="22"
            fill={node.color}
            fillOpacity="0.15"
            stroke={node.color}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill={node.color}
            style={{
              opacity: 0.5 + (pulseOffset % 50) / 100,
            }}
          />
          <text
            x={node.x}
            y={node.y + 36}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="9"
            fontFamily="var(--font-jetbrains-mono, monospace)"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
