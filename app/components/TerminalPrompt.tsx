export function TerminalPrompt({ command }: { command: string }) {
  return (
    <div className="flex min-w-0 max-w-full items-center gap-2 font-mono text-xs text-foreground/60 sm:text-sm">
      <span className="shrink-0 text-accent">$</span>
      <span className="truncate">{command}</span>
    </div>
  );
}
