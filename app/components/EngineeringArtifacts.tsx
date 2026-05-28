type FlowStep = { label: string; detail: string };

export function DeploymentFlow({ steps, title = "Deployment flow" }: { steps: FlowStep[]; title?: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border">
      <figcaption className="border-b border-border bg-surface-muted/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-foreground/45">
        {title}
      </figcaption>
      <div className="overflow-x-auto bg-[#0a0f1a] p-4 dark:bg-[#030712] md:p-6">
        <div className="flex min-w-max items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="w-36 shrink-0 rounded-lg border border-accent/20 bg-accent/5 p-3 md:w-40">
                <p className="font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-mono text-xs font-medium text-slate-200">{step.label}</p>
                <p className="mt-1 font-mono text-[9px] leading-relaxed text-slate-500">{step.detail}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex shrink-0 items-center px-1 md:px-2" aria-hidden>
                  <div className="h-px w-6 bg-gradient-to-r from-accent/40 to-highlight/40 md:w-10" />
                  <span className="text-accent/40">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

export function HowItWorks({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {steps.map((step, i) => (
        <div key={step.title} className="relative rounded-xl border border-border bg-surface-muted/40 p-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-muted font-mono text-sm font-semibold text-accent">
            {i + 1}
          </span>
          <p className="mt-3 font-medium">{step.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/55">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
