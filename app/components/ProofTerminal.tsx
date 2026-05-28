export function ProofTerminal({
  lines,
  caption,
  title = "proof-of-work",
}: {
  lines: string[];
  caption: string;
  title?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center gap-2 border-b border-border bg-surface-muted/80 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="font-mono text-[10px] text-foreground/40">{title}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0a0f1a] p-4 font-mono text-[11px] leading-relaxed text-foreground/75 dark:bg-[#030712] md:p-5 md:text-xs">
        {lines.map((line) => {
          const isCommand = line.startsWith("$");
          const isSuccess = line.startsWith("status:");
          const isArrow = line.startsWith("→");
          return (
            <div
              key={line}
              className={
                isCommand
                  ? "text-highlight"
                  : isSuccess
                    ? "text-emerald-400"
                    : isArrow
                      ? "text-foreground/60"
                      : "text-foreground/50"
              }
            >
              {line}
            </div>
          );
        })}
      </pre>
      <figcaption className="border-t border-border bg-surface-muted/40 px-4 py-3 text-xs text-foreground/50">
        {caption}
      </figcaption>
    </figure>
  );
}
