import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { navItems, profile } from "../data/site";

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-10">
        {home ? (
          <a
            href="#home"
            className="flex min-w-0 shrink items-center gap-2 font-mono text-sm transition hover:opacity-90"
          >
            <span className="text-accent">$</span>
            <span className="truncate text-accent/80">whoami</span>
          </a>
        ) : (
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 font-mono text-sm transition hover:opacity-90"
          >
            <span className="text-accent">$</span>
            <span className="truncate text-accent/80">whoami</span>
          </Link>
        )}

        <nav className="hidden min-w-0 items-center gap-4 xl:flex xl:gap-6">
          {navItems.map((item) =>
            item.href.startsWith("/") && !item.href.startsWith("/#") ? (
              <Link
                key={item.label}
                href={item.href}
                className="flex min-h-[44px] items-center rounded-md px-2 py-2 text-sm text-foreground/60 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 xl:px-3"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={home ? item.href.replace("/#", "#") : item.href}
                className="flex min-h-[44px] items-center rounded-md px-2 py-2 text-sm text-foreground/60 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 xl:px-3"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <MobileNav />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-[44px] items-center justify-center rounded-xl border border-accent/30 px-4 py-2.5 text-sm font-medium text-accent transition hover:border-accent/50 hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent/50 md:flex md:px-5"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}
