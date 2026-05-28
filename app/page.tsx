import type { ReactNode } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { ContactForm } from "./components/ContactForm";
import { MobileNav } from "./components/MobileNav";
import { PlatformStatus } from "./components/PlatformStatus";
import { TerminalPrompt } from "./components/TerminalPrompt";
import { ThemeToggle } from "./components/ThemeToggle";
import { Typewriter } from "./components/Typewriter";
import {
  certifications,
  education,
  experience,
  languages,
  latestThinking,
  learningBadges,
  navItems,
  principles,
  profile,
  projects,
  services,
  skills,
  techStack,
  testimonials,
} from "./data/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-2 font-mono text-sm transition hover:opacity-90">
            <span className="text-accent">$</span>
            <span className="text-accent/80">whoami</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-3 py-2 text-sm text-foreground/60 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[44px] items-center justify-center rounded-xl border border-accent/30 px-5 py-2.5 text-sm font-medium text-accent transition hover:border-accent/50 hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-[88vh] overflow-hidden border-b border-border">
        <div className="hero-mesh absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-60" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10 md:py-32">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <TerminalPrompt command="cat /etc/role" />
              <PlatformStatus />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <div className="mb-8 flex items-center gap-5">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={96}
                height={96}
                className="h-20 w-20 rounded-2xl border-2 border-accent/30 object-cover shadow-lg shadow-accent/10 md:h-24 md:w-24"
                priority
              />
              <div>
                <p className="section-label font-mono text-xs font-medium text-foreground/45">{profile.headline}</p>
                <p className="mt-2 font-mono text-sm text-accent">
                  {profile.title} · {profile.company}
                </p>
              </div>
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-[5.25rem] lg:leading-[1.05]">
              <span className="bg-gradient-to-br from-foreground via-foreground/80 to-foreground/50 bg-clip-text text-transparent">
                {profile.firstName}
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-highlight bg-clip-text text-transparent">
                {profile.lastName}
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={160}>
            <p className="mt-10 max-w-2xl font-mono text-lg leading-relaxed text-foreground/70 md:text-xl">
              <Typewriter text={profile.tagline} speed={32} />
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={240}>
            <p className="mt-8 font-mono text-sm tracking-wide text-foreground/55">
              {profile.location} · {profile.connections} connections · {profile.followers} followers
            </p>
            <p className="mt-4 max-w-2xl font-mono text-xs leading-relaxed text-foreground/45">
              Currently: {profile.currently}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={280}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent-muted px-4 py-2">
              <span className="font-mono text-sm font-medium text-accent">→ {profile.heroMetric}</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary flex min-h-[48px] items-center rounded-xl px-8 py-3.5 text-sm font-semibold transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background">
                View my work
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex min-h-[48px] items-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground/75 transition hover:border-accent/40 hover:bg-accent-muted hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                Get in touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[44px] items-center text-sm text-foreground/50 transition hover:text-accent"
              >
                View resume on LinkedIn
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={400}>
            <div className="mt-14 flex flex-wrap gap-2.5 font-mono text-sm text-foreground/50">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-surface-muted/80 px-4 py-2 transition hover:border-accent/35 hover:bg-accent-muted hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="projects" className="border-b border-border bg-surface-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">01 — Work</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="ls projects/" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I&apos;ve built</h2>
            </div>
            <p className="mt-4 max-w-2xl text-foreground/55">
              Platform engineering, automation, and AI-driven operations.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} variant="fade-up" delay={i * 80}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-border border-l-4 border-l-accent/40 bg-surface p-8 transition duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition group-hover:bg-accent/15" />
                  <div className="relative">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-3xl font-bold text-accent/40">{String(i + 1).padStart(2, "0")}</span>
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
                    <p className="mt-5 leading-7 text-foreground/55">{project.description}</p>
                    {project.metric && (
                      <p className="mt-3 font-mono text-sm text-accent">→ {project.metric}</p>
                    )}
                    <div className="mt-6 flex items-center gap-2 font-mono text-sm text-accent opacity-80 transition group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100">
                      <span>{project.status === "shipped" ? "View on GitHub" : "See profile"}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">02 — Experience</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat experience" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Where I&apos;ve worked</h2>
            </div>
            <p className="mt-4 max-w-2xl text-foreground/55">
              {profile.yearsExperience} years across platform engineering, DevOps, and cloud automation.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 space-y-10">
            {experience.map((job, i) => (
              <AnimateOnScroll key={`${job.company}-${job.role}-${job.period}`} variant="fade-up" delay={i * 60}>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-accent/15 before:to-transparent">
                  <div
                    className={`absolute left-0 top-2 h-3 w-3 rounded-full border-2 bg-surface ${
                      job.current ? "border-accent bg-accent/20" : "border-accent/40"
                    }`}
                  />
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold">
                          {job.role} · {job.company}
                        </h3>
                        {job.current && (
                          <span className="rounded-full bg-accent-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-mono text-sm text-foreground/50">
                        {job.period} · {job.location}
                      </p>
                    </div>
                    {i === 0 && (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-sm text-accent transition hover:text-accent-light md:mt-0"
                      >
                        View full experience →
                      </a>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-foreground/55 before:shrink-0 before:text-accent before:content-['▹']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-surface-muted px-2 py-1 font-mono text-xs text-foreground/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-border bg-surface-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">03 — Services</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="ls services/" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I do</h2>
            </div>
            <p className="mt-4 max-w-2xl text-foreground/55">
              Platform engineering, cloud infrastructure, and AI-driven automation.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} variant="fade-up" delay={i * 60}>
                <div className="card-surface rounded-2xl border p-6 transition hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-foreground/55">{service.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="thinking" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">04 — Thinking</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat thinking" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I&apos;m thinking</h2>
            </div>
            <p className="mt-4 max-w-2xl text-foreground/55">
              Ideas and reflections on DevOps, AI, and platform engineering — from LinkedIn.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {latestThinking.map((post, i) => (
              <AnimateOnScroll key={post.title} variant="fade-up" delay={i * 60}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-xl border border-border bg-surface-muted/60 p-6 transition hover:border-accent/30 hover:bg-accent-muted/40 hover:shadow-lg"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">{post.date}</span>
                  <h3 className="mt-2 font-semibold transition-colors group-hover:text-accent">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent transition-all group-hover:gap-2">
                    Read on LinkedIn
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border bg-surface-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">05 — About</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat about" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">In short</h2>
            </div>
            <p className="mt-8 max-w-2xl leading-relaxed text-foreground/55">{profile.about}</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-foreground/55">
              {profile.yearsExperience} of experience · Based in {profile.locationShort}. When not building platforms, I
              explore local trails, study generative AI and agentic workflows, and share what I learn in public.
            </p>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/40">Languages</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground/70">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/40">Core skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-accent/15 bg-accent-muted/50 px-3 py-1.5 font-mono text-xs text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/40">Education</p>
              <p className="mt-2 font-medium">{education.degree}</p>
              <p className="text-sm text-foreground/55">
                {education.school} · {education.period} · {education.location}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-lg border border-accent/20 bg-accent-muted px-4 py-2 font-mono text-sm text-accent"
                >
                  {principle}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-foreground/55">
              For full experience, certifications, and recommendations —{" "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">
                see LinkedIn
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="certifications" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">06 — Credentials</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="ls certifications/" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Certifications</h2>
            </div>
            <p className="mt-4 max-w-2xl text-foreground/55">
              Cloud, SRE, and generative AI credentials — synced with LinkedIn.
            </p>
          </AnimateOnScroll>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/40">Recent learning badges</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {learningBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-highlight/25 bg-highlight/5 px-4 py-3 text-sm transition hover:border-highlight/40"
                >
                  <span className="font-medium text-foreground">{badge.name}</span>
                  <span className="mt-1 block font-mono text-xs text-foreground/45">
                    {badge.issuer} · {badge.issued}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <AnimateOnScroll key={cert.name} variant="fade-up" delay={i * 50}>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-border bg-surface-muted/60 p-5 transition hover:border-accent/30 hover:bg-accent-muted/30"
                  >
                    <CertCard cert={cert} linked />
                  </a>
                ) : (
                  <div className="rounded-xl border border-border bg-surface-muted/60 p-5 transition hover:border-accent/30">
                    <CertCard cert={cert} />
                  </div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-t border-border bg-surface-muted/50">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium text-foreground/45">07 — Testimonials</p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat testimonials" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Kind words</h2>
            </div>
            <p className="mt-4 max-w-2xl text-foreground/55">
              {profile.recommendations} LinkedIn recommendations from colleagues and managers.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.author} variant="fade-up" delay={i * 80}>
                <blockquote className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent/25 bg-accent-muted font-mono text-sm font-semibold text-accent"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="leading-7 text-foreground/60">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4">
                      <a href={t.url} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:text-accent-light">
                        {t.author}
                      </a>
                      <p className="text-sm text-foreground/50">{t.role}</p>
                    </footer>
                  </div>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-border">
        <div className="hero-mesh absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-start lg:justify-between">
            <AnimateOnScroll variant="fade-up" className="lg:max-w-xl">
              <p className="section-label font-mono text-xs font-medium text-foreground/45">08 — Contact</p>
              <div className="mt-4 flex items-baseline gap-4">
                <TerminalPrompt command="connect" />
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let&apos;s work together</h2>
              </div>
              <p className="mt-4 leading-7 text-foreground/55">
                Open to senior platform engineering and DevOps roles (remote, Canada). Whether you have a project in
                mind, need a platform engineer, or want to connect — my inbox is always open.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {profile.calendly ? (
                  <SocialIcon href={profile.calendly} label="Book a 30-min intro call" primary>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </SocialIcon>
                ) : null}
                <SocialIcon href={`mailto:${profile.email}`} label="Email me" primary>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </SocialIcon>
                <SocialIcon href={profile.linkedin} label="View resume on LinkedIn">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </SocialIcon>
                <SocialIcon href={profile.github} label="GitHub profile">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </SocialIcon>
                <SocialIcon href={profile.linkedin} label="LinkedIn profile">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </SocialIcon>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={100}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm font-medium text-foreground/70">Designed & built by {profile.name}</p>
            <p className="text-xs text-foreground/40">Next.js · Tailwind · Updated May 2026</p>
          </div>
          <a
            href="/terminal"
            className="group flex min-h-[44px] items-center font-mono text-sm text-accent transition hover:text-accent-light"
          >
            <span className="transition-transform group-hover:translate-x-0.5">$</span> curl /terminal
          </a>
        </div>
      </footer>
    </main>
  );
}

function CertCard({
  cert,
  linked = false,
}: {
  cert: (typeof certifications)[number];
  linked?: boolean;
}) {
  return (
    <>
      <h3 className="font-semibold">{cert.name}</h3>
      <p className="mt-1 text-sm text-foreground/55">{cert.issuer}</p>
      {cert.issued && (
        <p className="mt-1 font-mono text-xs text-foreground/40">
          Issued {cert.issued}
          {cert.expires && <> · Expires {cert.expires}</>}
          {cert.credentialId && <> · ID {cert.credentialId}</>}
          {cert.note && <> · {cert.note}</>}
        </p>
      )}
      {linked && <p className="mt-2 text-xs text-accent">View credential →</p>}
    </>
  );
}

function SocialIcon({
  href,
  label,
  primary = false,
  children,
}: {
  href: string;
  label: string;
  primary?: boolean;
  children: ReactNode;
}) {
  const base =
    "flex size-12 items-center justify-center rounded-xl transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50";
  const className = primary
    ? `${base} btn-primary text-white`
    : `${base} border border-border text-foreground/70 hover:border-accent/40 hover:bg-accent-muted hover:text-accent`;

  return (
    <a href={href} target="_blank" rel="noreferrer" title={label} aria-label={label} className={className}>
      <svg className="size-5" fill={primary ? "none" : "currentColor"} stroke={primary ? "currentColor" : undefined} viewBox="0 0 24 24" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
