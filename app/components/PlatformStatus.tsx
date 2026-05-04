"use client";

const STATUS_CONFIG = {
  available: {
    label: "Available for work",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
    pingClass: "bg-emerald-400 dark:bg-emerald-500",
    containerClass:
      "border-emerald-500/30 bg-emerald-500/10 dark:border-emerald-500/25 dark:bg-emerald-500/5",
    textClass: "text-emerald-700 dark:text-emerald-400",
  },
  exploring: {
    label: "Exploring opportunities",
    dotClass: "bg-amber-500 dark:bg-amber-400",
    pingClass: "bg-amber-400 dark:bg-amber-500",
    containerClass:
      "border-amber-500/30 bg-amber-500/10 dark:border-amber-500/25 dark:bg-amber-500/5",
    textClass: "text-amber-700 dark:text-amber-400",
  },
  employed: {
    label: "Currently employed",
    dotClass: "bg-sky-500 dark:bg-sky-400",
    pingClass: "bg-sky-400 dark:bg-sky-500",
    containerClass:
      "border-sky-500/30 bg-sky-500/10 dark:border-sky-500/25 dark:bg-sky-500/5",
    textClass: "text-sky-700 dark:text-sky-400",
  },
} as const;

type StatusKey = keyof typeof STATUS_CONFIG;

function isValidStatus(value: string): value is StatusKey {
  return value in STATUS_CONFIG;
}

export function PlatformStatus() {
  const raw = process.env.NEXT_PUBLIC_AVAILABILITY_STATUS ?? "available";
  const status = isValidStatus(raw) ? raw : "available";
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-sm ${config.containerClass}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 dark:opacity-60 ${config.pingClass}`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${config.dotClass}`}
        />
      </span>
      <span className={config.textClass}>{config.label}</span>
    </div>
  );
}
