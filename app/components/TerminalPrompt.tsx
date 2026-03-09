export function TerminalPrompt({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-neutral-500">
      <span className="text-cyan-400">$</span>
      <span>{command}</span>
    </div>
  );
}
