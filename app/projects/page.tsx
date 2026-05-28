import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TerminalPrompt } from "../components/TerminalPrompt";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { caseStudies } from "../data/caseStudies";

export const metadata: Metadata = {
  title: "Projects | Sai Krishna Veerabathini",
  description:
    "Deep-dive case studies in AI-powered operations, EKS platform engineering, and FinOps intelligence.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="section-label font-mono text-xs font-medium text-foreground/45">Case studies</p>
        <div className="mt-4 flex items-baseline gap-4">
          <TerminalPrompt command="ls projects/" />
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Engineered systems</h1>
        </div>
        <p className="mt-4 max-w-2xl text-foreground/55">
          Architecture, workflows, design decisions, and proof artifacts — not concepts.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/projects/${study.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="border-b border-border bg-surface-muted/40 p-4">
                <ArchitectureDiagram type={study.diagram === "flagship-dns" ? "dns-automation" : study.diagram} compact />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-accent/25 bg-accent-muted px-2 py-0.5 font-mono text-[10px] uppercase text-accent">
                    {study.status}
                  </span>
                  <span className="font-mono text-[10px] text-foreground/40">{study.tag}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold transition group-hover:text-accent">{study.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/55">{study.subtitle}</p>
                <span className="mt-4 font-mono text-sm text-accent">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
