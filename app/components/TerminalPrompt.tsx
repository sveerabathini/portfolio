export function TerminalPrompt({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-foreground/50">
      <span className="text-accent">$</span>
      <span>{command}</span>
    </div>
  );
}
