import Link from "next/link";
import { ArchitectureDiagram, type DiagramType } from "./ArchitectureDiagram";
import { getCaseStudy } from "../data/caseStudies";

export type ProjectData = {
  slug?: string;
  title: string;
  tag: string;
  description: string;
  metric?: string;
  url: string;
  status: "shipped" | "conceptualized";
  architecture: string;
  workflow: string[];
  inputs: string[];
  outputs: string[];
  diagram: DiagramType;
};

export function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const href = project.slug ? `/projects/${project.slug}` : project.url;
  const isExternal = !project.slug;
  const caseStudy = project.slug ? getCaseStudy(project.slug) : undefined;

  const card = (
    <>
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition group-hover:bg-accent/15" />

      <div className="relative border-b border-border bg-surface-muted/40 px-6 py-4">
        <ArchitectureDiagram type={project.diagram} compact />
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-3xl font-bold text-accent/40">{String(index + 1).padStart(2, "0")}</span>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-accent/25 bg-accent-muted px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
              {project.status}
            </span>
            <span className="rounded-full border border-accent/25 bg-accent-muted px-3 py-1 font-mono text-xs text-accent">
              {project.tag}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold transition-colors group-hover:text-accent md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-7 text-foreground/55">{project.description}</p>

        <div className="mt-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Architecture</p>
          <p className="mt-1 text-sm text-foreground/60">{project.architecture}</p>
        </div>

        <div className="mt-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Workflow</p>
          <ol className="mt-2 space-y-1">
            {project.workflow.map((step, i) => (
              <li key={step} className="flex gap-2 text-sm text-foreground/55">
                <span className="shrink-0 font-mono text-xs text-accent">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Inputs</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.inputs.map((input) => (
                <span
                  key={input}
                  className="rounded border border-border bg-surface-muted px-2 py-0.5 font-mono text-[10px] text-foreground/55"
                >
                  {input}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">Outputs</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.outputs.map((output) => (
                <span
                  key={output}
                  className="rounded border border-accent/15 bg-accent-muted/50 px-2 py-0.5 font-mono text-[10px] text-accent"
                >
                  {output}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.metric && <p className="mt-4 font-mono text-sm text-accent">→ {project.metric}</p>}

        {caseStudy && (
          <div className="mt-5 rounded-lg border border-border bg-surface-muted/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">How it works</p>
            <ol className="mt-2 space-y-1.5">
              {caseStudy.howItWorks.map((step, i) => (
                <li key={step.title} className="flex gap-2 text-sm text-foreground/55">
                  <span className="shrink-0 font-mono text-xs text-accent">{i + 1}</span>
                  <span>
                    <strong className="font-medium text-foreground/70">{step.title}</strong>
                    {" — "}
                    {step.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-sm text-accent opacity-80 transition group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <span>{project.slug ? "Read case study" : project.status === "shipped" ? "View on GitHub" : "See profile"}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </>
  );

  const className =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border border-l-4 border-l-accent/40 bg-surface transition duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {card}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {card}
    </Link>
  );
}
