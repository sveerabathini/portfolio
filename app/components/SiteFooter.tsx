import Link from "next/link";
import { profile } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-sm font-medium text-foreground/70">Designed & built by {profile.name}</p>
          <p className="text-xs text-foreground/40">Next.js · Tailwind · Updated May 2026</p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/projects"
            className="font-mono text-sm text-foreground/50 transition hover:text-accent"
          >
            Projects
          </Link>
          <a
            href="/terminal"
            className="group flex min-h-[44px] items-center font-mono text-sm text-accent transition hover:text-accent-light"
          >
            <span className="transition-transform group-hover:translate-x-0.5">$</span> curl /terminal
          </a>
        </div>
      </div>
    </footer>
  );
}
