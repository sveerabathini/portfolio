import Link from "next/link";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { DashboardMockup } from "./DashboardMockup";
import { getFlagshipCaseStudy } from "../data/caseStudies";

export function FlagshipCaseStudy() {
  const study = getFlagshipCaseStudy();

  return (
    <article className="overflow-hidden rounded-2xl border border-accent/25 bg-surface shadow-xl shadow-accent/5">
      <div className="border-b border-border bg-gradient-to-br from-accent-muted/60 via-surface to-surface-muted/40 px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="rounded-full border border-accent/30 bg-accent-muted px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              Flagship system
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{study.title}</h3>
            <p className="mt-2 max-w-2xl text-foreground/60">{study.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/projects/${study.slug}`}
              className="btn-primary flex min-h-[44px] shrink-0 items-center rounded-xl px-6 py-2.5 text-sm font-semibold transition hover:scale-[1.02]"
            >
              Full case study →
            </Link>
            <a
              href={study.github}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] shrink-0 items-center rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-foreground/75 transition hover:border-accent/40 hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">System architecture</p>
          <div className="mt-4 rounded-xl border border-border bg-[#0a0f1a] p-4 dark:bg-[#030712]">
            <ArchitectureDiagram type={study.diagram} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/55">{study.architectureOverview}</p>
        </div>

        <div className="p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Operations dashboard</p>
          <div className="mt-4">
            <DashboardMockup type={study.dashboardMockup} />
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-surface-muted/30 px-6 py-8 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Design decisions</p>
            <ul className="mt-3 space-y-2">
              {study.designDecisions.slice(0, 3).map((decision) => (
                <li key={decision} className="flex gap-2 text-sm text-foreground/55 before:shrink-0 before:text-accent before:content-['▹']">
                  {decision}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Inputs</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.inputs.map((input) => (
                <span key={input} className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground/60">
                  {input}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Outputs</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.outputs.map((output) => (
                <span key={output} className="rounded-lg border border-accent/20 bg-accent-muted px-3 py-1.5 font-mono text-xs text-accent">
                  {output}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-mono text-2xl font-semibold tabular-nums text-accent">{metric.value}</p>
              <p className="mt-1 text-sm text-foreground/55">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={`/projects/${study.slug}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:gap-3"
          >
            Read full case study with deployment flow & implementation details →
          </Link>
        </div>
      </div>
    </article>
  );
}
