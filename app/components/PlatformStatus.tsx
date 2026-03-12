"use client";

export function PlatformStatus() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-sm dark:border-emerald-500/25 dark:bg-emerald-500/5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 dark:bg-emerald-500 dark:opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
      </span>
      <span className="text-emerald-700 dark:text-emerald-400">Platform Status: Operational</span>
    </div>
  );
}
