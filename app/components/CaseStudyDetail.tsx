import Link from "next/link";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ProofTerminal } from "./ProofTerminal";
import { TerminalPrompt } from "./TerminalPrompt";
import type { CaseStudy } from "../data/caseStudies";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <article>
      <header className="border-b border-border bg-surface-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 font-mono text-sm text-foreground/50 transition hover:text-accent"
          >
            ← All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/25 bg-accent-muted px-3 py-1 font-mono text-xs text-accent">
              {study.tag}
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/45">
              {study.status}
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">{study.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/60">{study.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={study.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex min-h-[44px] items-center rounded-xl px-6 py-2.5 text-sm font-semibold"
            >
              View on GitHub →
            </a>
            <Link
              href="/#contact"
              className="flex min-h-[44px] items-center rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-foreground/75 transition hover:border-accent/40 hover:text-accent"
            >
              Discuss this project
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <section>
          <div className="flex items-baseline gap-4">
            <TerminalPrompt command="cat problem.md" />
            <h2 className="text-xl font-semibold md:text-2xl">Problem</h2>
          </div>
          <p className="mt-4 leading-relaxed text-foreground/60">{study.problem}</p>
        </section>

        <section className="mt-16">
          <div className="flex items-baseline gap-4">
            <TerminalPrompt command="cat solution.md" />
            <h2 className="text-xl font-semibold md:text-2xl">Solution</h2>
          </div>
          <p className="mt-4 leading-relaxed text-foreground/60">{study.solution}</p>
        </section>

        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">System architecture</p>
          <div className="mt-4 rounded-xl border border-border bg-[#0a0f1a] p-4 dark:bg-[#030712]">
            <ArchitectureDiagram type={study.diagram} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/55">{study.architectureOverview}</p>
        </section>

        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Proof of work</p>
          <div className="mt-4">
            <ProofTerminal lines={study.proofLines} caption={study.proofCaption} title={`${study.slug}.log`} />
          </div>
        </section>

        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Workflow</p>
          <ol className="mt-4 space-y-3">
            {study.workflow.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl border border-border bg-surface-muted/50 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-muted font-mono text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium">{step.title}</p>
                  <p className="mt-1 text-sm text-foreground/55">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {study.observability && study.observability.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Observability integration</p>
            <ul className="mt-4 space-y-2">
              {study.observability.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground/55 before:text-accent before:content-['▹']">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {study.remediation && study.remediation.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Remediation workflow</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {study.remediation.map((item) => (
                <div key={item.title} className="rounded-xl border border-border p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-foreground/55">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {study.goldenPath && study.goldenPath.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Golden path design</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {study.goldenPath.map((item) => (
                <div key={item.title} className="rounded-xl border border-border p-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-foreground/55">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Design decisions</p>
          <ul className="mt-4 space-y-2">
            {study.designDecisions.map((decision) => (
              <li key={decision} className="flex gap-2 text-sm text-foreground/55 before:text-accent before:content-['▹']">
                {decision}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Inputs</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.inputs.map((input) => (
                <span key={input} className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs text-foreground/60">
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
        </section>

        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Tech stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span key={tech} className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground/60">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Impact</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border bg-surface-muted/50 p-5">
                <p className="font-mono text-2xl font-semibold tabular-nums text-accent">{metric.value}</p>
                <p className="mt-1 text-sm text-foreground/55">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
