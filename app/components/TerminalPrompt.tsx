export function TerminalPrompt({
  command,
  variant = "default",
}: {
  command: string;
  variant?: "default" | "onDark";
}) {
  const isOnDark = variant === "onDark";

  return (
    <div
      className={`flex min-w-0 max-w-full items-start gap-2 font-mono text-xs sm:items-center sm:text-sm ${
        isOnDark ? "text-slate-400" : "text-foreground/60"
      }`}
    >
      <span className={`mt-0.5 shrink-0 sm:mt-0 ${isOnDark ? "text-cyan-400" : "text-accent"}`}>$</span>
      <span className="min-w-0 break-words whitespace-normal [overflow-wrap:anywhere]">{command}</span>
    </div>
  );
}
