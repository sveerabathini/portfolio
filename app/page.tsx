import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { ContactForm } from "./components/ContactForm";
import { MobileNav } from "./components/MobileNav";
import { PlatformStatus } from "./components/PlatformStatus";
import { TerminalPrompt } from "./components/TerminalPrompt";
import { ThemeToggle } from "./components/ThemeToggle";
import { Typewriter } from "./components/Typewriter";

export default function Home() {
  const projects = [
    {
      title: "Reusable EKS Platform Components",
      tag: "AWS • EKS • Pulumi",
      description:
        "Standardized cluster provisioning with reusable components for node groups, Fargate profiles, IAM/OIDC, tagging, and environment patterns.",
      metric: "Reduced onboarding from weeks to days with reusable components.",
      url: "https://github.com/sveerabathini",
      status: "shipped" as const,
    },
    {
      title: "DevOps-as-a-Service Modules",
      tag: "IaC • Platform • Automation",
      description:
        "Created reusable infrastructure modules and delivery patterns to accelerate onboarding, improve governance, and reduce duplication.",
      metric: "Accelerated team onboarding and cut IaC duplication across environments.",
      url: "https://github.com/sveerabathini",
      status: "shipped" as const,
    },
    {
      title: "AI-Powered DNS Automation",
      tag: "Agentic AI • Ops",
      description:
        "Designed intelligent request-driven automation flows to reduce manual handling of DNS change requests and improve operational efficiency.",
      metric: "Reduced manual DNS handling and improved request turnaround time.",
      url: "https://github.com/sveerabathini",
      status: "shipped" as const,
    },
    {
      title: "FinOps Waste Detection Agent",
      tag: "AI • Cloud Cost Optimization",
      description:
        "Conceptualized AI-assisted cloud waste detection to identify idle resources, highlight spend anomalies, and drive actionable savings.",
      metric: "Identified cost savings opportunities for proactive optimization.",
      url: "https://github.com/sveerabathini",
      status: "conceptualized" as const,
    },
  ];

  const services = [
    {
      title: "Platform Engineering & Cloud Architecture",
      description: "Designing scalable AWS, Azure, and GCP infrastructure with Terraform, Pulumi, CI/CD pipelines, and cloud-native best practices.",
    },
    {
      title: "Kubernetes & Cloud Native",
      description: "Operating Kubernetes clusters with EKS, Helm, GitOps workflows, and standardized provisioning patterns.",
    },
    {
      title: "DevOps & IaC Automation",
      description: "Building reusable modules, delivery patterns, and self-service platforms that reduce time-to-production.",
    },
    {
      title: "AI for Operations",
      description: "Applying agentic AI and automation to DNS, FinOps, and operational workflows for faster, smarter ops.",
    },
  ];

  const navItems = [
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const certifications: Array<{
    name: string;
    issuer: string;
    issued?: string;
    expires?: string;
    note?: string;
  }> = [
    { name: "Introduction to Generative AI", issuer: "Google", issued: "Feb 2025" },
    { name: "SRE Foundation", issuer: "PeopleCert", issued: "Jan 2025", expires: "Jan 2028" },
    { name: "Academy Accreditation - Generative AI Fundamentals", issuer: "Databricks", issued: "Dec 2025", expires: "Dec 2026" },
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", issued: "Mar 2020", note: "Renewal in progress" },
  ];

  const email = "saikrishnav92@gmail.com";
  const resumeUrl = "https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340";
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/saikrishnav92/30min";

  const experience = [
    {
      role: "DevOps Architect",
      company: "Virtusa",
      period: "2021 – Present",
      location: "Nova Scotia, Canada (Remote)",
      bullets: [
        "Lead platform engineering initiatives for cloud-native infrastructure across AWS, Azure, and GCP.",
        "Built reusable EKS components and IaC modules that reduced onboarding time and standardized deployments.",
        "Pioneered AI-driven automation for DNS and FinOps to improve operational efficiency.",
      ],
      tech: ["AWS", "EKS", "Pulumi", "Terraform", "Kubernetes", "Agentic AI"],
    },
  ];

  const testimonials = [
    {
      quote: "I'm pleased to recommend Sai Krishna, who worked under me and consistently demonstrated exceptional skill and professionalism. He is highly talented in Cloud Automation, IAM, and DevOps, and has a strong ability to quickly understand complex challenges and deliver reliable, high‑quality solutions. Sai Krishna is a true team player—collaborative, proactive, and always willing to support others.",
      author: "Kiran Kumar Reddy Narra",
      role: "Former Manager",
      url: "https://www.linkedin.com/in/kiran-kumar-reddy-narra-44427029",
      initials: "KK",
    },
    {
      quote: "Sai Krishna Veerabathini is an excellent person to be a team mate. He is a very good techie with a great experience in Cloud and DevOps tracks. He is a very enthusiastic guy with an attitude of learning new thing daily and extending his ability to innovations.",
      author: "Chandra Venkata Atchut Garre",
      role: "Colleague",
      url: "https://www.linkedin.com/in/chandra-venkata-atchut-garre-8825818",
      initials: "CA",
    },
  ];

  const latestThinking = [
    {
      title: "A DevOps belief I had to unlearn",
      excerpt: "Good DevOps meant having answers. Now I notice the problem that creates.",
      url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_devops-platformengineering-engineeringmindset-activity-7416871123377836032-SNKx",
    },
    {
      title: "Something I didn't expect when I started learning AI",
      excerpt: "I didn't start with tools or frameworks. I went deeper first.",
      url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_learninginpublic-aijourney-python-activity-7415124478420000768-UTyy",
    },
    {
      title: "Most cloud cost issues don't come from where you think",
      excerpt: "One thing I didn't realize early in my DevOps journey.",
      url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_devops-learninginpublic-cloudengineering-activity-7413930878386515968-_Th9",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-sm transition hover:opacity-90"
          >
            <span className="text-teal-600 dark:text-teal-500">$</span>
            <span className="text-teal-600/80 dark:text-teal-400">whoami</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-3 py-2 text-sm text-neutral-600 transition-colors hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600/50 dark:text-neutral-300 dark:hover:text-teal-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
            <a
            href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-teal-600/50 px-5 py-2.5 text-sm font-medium text-teal-700 transition-all duration-300 hover:border-teal-700 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:border-teal-500/30 dark:text-teal-400 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10 dark:focus:ring-offset-neutral-950"
          >
            Let&apos;s Connect
          </a>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-[85vh] overflow-hidden border-b border-neutral-200 dark:border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.08),transparent),radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(100,116,139,0.06),transparent),radial-gradient(ellipse_40%_40%_at_0%_50%,rgba(71,85,105,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_30%,transparent)]" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10 md:py-32">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <TerminalPrompt command="cat /etc/role" />
              <PlatformStatus />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              Platform Engineer · DevOps Architect
            </p>
            <h1 className="mt-4 max-w-5xl font-mono text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl dark:text-white">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                Sai Krishna
              </span>
              <br />
              <span className="text-teal-700 dark:text-teal-500">Veerabathini</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={160}>
            <p className="mt-10 max-w-2xl font-mono text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-300">
              <Typewriter
                text="I build the boring stuff so you can build the exciting stuff. Platforms that get out of the way."
                speed={35}
              />
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={240}>
            <p className="mt-8 font-mono text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              DevOps Architect · Virtusa · Nova Scotia, Canada
            </p>
            <p className="mt-4 font-mono text-xs text-neutral-400 dark:text-neutral-500">
              Currently: Building AI-powered platform tools and exploring agentic automation for FinOps.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={280}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-teal-600/20 bg-teal-600/5 px-4 py-2 dark:border-teal-500/20 dark:bg-teal-500/5">
              <span className="font-mono text-sm font-medium text-teal-700 dark:text-teal-400">
                → Reduced onboarding from weeks to days
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={320}>
            <div className="mt-14 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="flex min-h-[48px] min-w-[44px] items-center justify-center rounded-xl bg-amber-800 px-8 py-3.5 text-sm font-semibold text-amber-50 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-amber-700 dark:text-white dark:hover:bg-amber-800 dark:hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)] dark:focus:ring-offset-neutral-950"
              >
                View my work
              </a>
              <a
                href={`mailto:${email}`}
                className="flex min-h-[48px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:border-teal-500/30 dark:text-teal-400 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10 dark:focus:ring-offset-neutral-950"
              >
                Get in touch
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[44px] min-w-[44px] items-center text-sm text-neutral-500 transition hover:text-teal-700 dark:text-neutral-400 dark:hover:text-teal-400"
              >
                View resume on LinkedIn
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={400}>
            <div className="mt-14 flex flex-wrap gap-3 font-mono text-sm text-neutral-400">
              {[
                "AWS",
                "Azure",
                "GCP",
                "Kubernetes",
                "EKS",
                "Pulumi",
                "Terraform",
                "Agentic AI",
              ].map((item) => (
                <span
                  key={item}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-2.5 transition-all duration-300 hover:border-teal-600/40 hover:bg-teal-50 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:border-teal-500/40 dark:hover:bg-teal-500/5 dark:hover:text-teal-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section
        id="projects"
        className="border-b border-neutral-200 bg-neutral-50/80 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              01 — Work
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="ls projects/" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                What I&apos;ve built
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Platform engineering, automation, and AI-driven operations.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <AnimateOnScroll
                key={project.title}
                variant="fade-up"
                delay={i * 80}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border-l-4 border-l-teal-700/50 border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-l-teal-700 hover:border-neutral-300 hover:shadow-2xl hover:shadow-teal-900/5 dark:border-white/10 dark:bg-neutral-900/80 dark:hover:border-teal-600/60 dark:hover:shadow-[0_20px_50px_-15px_rgba(13,148,136,0.12)]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal-500/5 blur-3xl transition-all duration-500 group-hover:bg-teal-500/15" />
                  <div className="relative">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-3xl font-bold text-teal-700/50 dark:text-teal-500/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-teal-700/30 bg-teal-700/5 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-teal-800 dark:border-teal-500/20 dark:bg-teal-500/5 dark:text-teal-400">
                          {project.status}
                        </span>
                        <span className="rounded-full border border-teal-700/30 bg-teal-700/5 px-3 py-1 font-mono text-xs text-teal-800 dark:border-teal-500/20 dark:bg-teal-500/5 dark:text-teal-400">
                          {project.tag}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 transition-colors group-hover:text-teal-800 md:text-2xl dark:text-white dark:group-hover:text-teal-100">
                      {project.title}
                    </h3>
                    <p className="mt-5 leading-7 text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {project.metric && (
                      <p className="mt-3 font-mono text-sm text-teal-700 dark:text-teal-400">
                        → {project.metric}
                      </p>
                    )}
                    <div className="mt-6 flex items-center gap-2 font-mono text-sm text-teal-700 opacity-80 transition-all duration-300 group-hover:opacity-100 dark:text-teal-400 md:opacity-0 md:group-hover:opacity-100">
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

      <section
        id="experience"
        className="border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.01]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              02 — Experience
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat experience" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Where I&apos;ve worked
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Platform engineering and DevOps leadership across cloud and Kubernetes.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 space-y-12">
            {experience.map((job, i) => (
              <AnimateOnScroll key={job.company} variant="fade-up" delay={i * 80}>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-teal-600/50 before:via-teal-600/20 before:to-transparent">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-teal-600/50 bg-white dark:border-teal-500/50 dark:bg-neutral-900" />
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {job.role} · {job.company}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-neutral-500 dark:text-neutral-400">
                        {job.period} · {job.location}
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 text-sm text-teal-700 transition hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 md:mt-0"
                    >
                      View full experience →
                    </a>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-neutral-500 before:shrink-0 before:content-['▹'] before:text-teal-600 dark:text-neutral-400 dark:before:text-teal-500"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-neutral-200 bg-neutral-100 px-2 py-1 font-mono text-xs text-neutral-500 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400"
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

      <section
        id="services"
        className="border-b border-neutral-200 bg-neutral-50/80 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              03 — Services
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="ls services/" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                What I do
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Platform engineering, cloud infrastructure, and AI-driven automation.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} variant="fade-up" delay={i * 60}>
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-teal-600/30 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900/50 dark:hover:border-teal-500/20 dark:hover:bg-neutral-900/80 dark:hover:shadow-teal-600/5">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-500 dark:text-neutral-400">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="thinking" className="border-t border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              04 — Thinking
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat thinking" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                What I&apos;m thinking
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Ideas and reflections on DevOps, AI, and platform engineering.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 space-y-4">
            {latestThinking.map((post, i) => (
              <AnimateOnScroll key={post.title} variant="fade-up" delay={i * 60}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-teal-600/30 hover:bg-neutral-100 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-500/30 dark:hover:bg-white/[0.08] dark:hover:shadow-[0_0_30px_-10px_rgba(13,148,136,0.1)]"
                >
                  <h3 className="font-semibold text-neutral-900 transition-colors group-hover:text-teal-800 dark:text-white dark:group-hover:text-teal-50">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-teal-600 transition-all group-hover:gap-2 dark:text-teal-400">
                    Read on LinkedIn
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-neutral-200 bg-neutral-50/80 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              05 — About
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat about" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                In short
              </h2>
            </div>
            <p className="mt-8 max-w-2xl leading-relaxed text-neutral-500 dark:text-neutral-400">
              I&apos;m a platform engineer who cares about developer experience. I build
              golden paths, self-service platforms, and automation that teams actually
              use. 10+ years, mostly cloud and Kubernetes. Based in Nova Scotia.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-neutral-500 dark:text-neutral-400">
              When not building platforms, I enjoy exploring Nova Scotia&apos;s trails,
              staying curious about AI and automation, and learning in public.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {["Developer experience first", "Automation that scales", "Learn in public"].map((principle) => (
                <span
                  key={principle}
                  className="rounded-lg border border-teal-600/25 bg-teal-600/5 px-4 py-2 font-mono text-sm text-teal-800 dark:border-teal-500/20 dark:bg-teal-500/5 dark:text-teal-400"
                >
                  {principle}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
              For experience, certifications, and recommendations —{" "}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 underline-offset-4 transition hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
              >
                see LinkedIn
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="certifications" className="border-t border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              06 — Credentials
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="ls certifications/" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Certifications
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Cloud, Kubernetes, and platform engineering credentials.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 flex flex-wrap gap-4">
            {certifications.map((cert, i) => (
              <AnimateOnScroll key={cert.name} variant="fade-up" delay={i * 60}>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4 transition-all duration-300 hover:border-teal-600/30 hover:bg-teal-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-500/30 dark:hover:bg-teal-500/5">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{cert.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{cert.issuer}</p>
                  {cert.issued && (
                    <p className="mt-1 font-mono text-xs text-neutral-400 dark:text-neutral-500">
                      Issued {cert.issued}
                      {cert.expires && <> · Expires {cert.expires}</>}
                      {cert.note && <> · {cert.note}</>}
                    </p>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-t border-neutral-200 bg-neutral-50/80 dark:border-white/10 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
              07 — Testimonials
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <TerminalPrompt command="cat testimonials" />
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Kind words
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              What colleagues and managers have said about working with me.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.author} variant="fade-up" delay={i * 80}>
                <blockquote className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-white/10 dark:bg-neutral-900/50">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-teal-600/30 bg-teal-600/10 font-mono text-sm font-semibold text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/5 dark:text-teal-400"
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="leading-7 text-neutral-600 dark:text-neutral-400">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4">
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        {t.author}
                      </a>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.role}</p>
                    </footer>
                  </div>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-neutral-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(13,148,136,0.06),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-start lg:justify-between">
            <AnimateOnScroll variant="fade-up" className="lg:max-w-xl">
              <p className="section-label font-mono text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500">
                08 — Contact
              </p>
              <div className="mt-4 flex items-baseline gap-4">
                <TerminalPrompt command="connect" />
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Let&apos;s work together
                </h2>
              </div>
              <p className="mt-4 leading-7 text-neutral-500 dark:text-neutral-400">
                Open to senior platform engineering and DevOps roles (remote, Canada).
                Whether you have a project in mind, need a platform engineer, or want to
                connect—my inbox is always open.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {calendlyUrl ? (
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Book a 30-min intro call"
                    aria-label="Book a 30-min intro call"
                    className="flex size-12 items-center justify-center rounded-xl bg-teal-600 text-white transition-all duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-offset-neutral-950"
                  >
                    <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </a>
                ) : null}
                <a
                  href={`mailto:${email}`}
                  title="Email me"
                  aria-label="Email me"
                  className="flex size-12 items-center justify-center rounded-xl bg-teal-600 text-white transition-all duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-offset-neutral-950"
                >
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="View resume"
                  aria-label="View resume on LinkedIn"
                  className="flex size-12 items-center justify-center rounded-xl border border-teal-600/50 text-teal-700 transition-all duration-300 hover:scale-105 hover:border-teal-700 hover:bg-teal-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:border-teal-500/30 dark:text-teal-400 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10 dark:focus:ring-offset-neutral-950"
                >
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/sveerabathini"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  aria-label="GitHub profile"
                  className="flex size-12 items-center justify-center rounded-xl border border-neutral-300 text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/25 dark:hover:bg-white/10 dark:focus:ring-offset-neutral-950"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn profile"
                  className="flex size-12 items-center justify-center rounded-xl border border-neutral-300 text-neutral-700 transition-all duration-300 hover:scale-105 hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-white dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/25 dark:hover:bg-white/10 dark:focus:ring-offset-neutral-950"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={100}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-12 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Designed & built by Sai Krishna Veerabathini
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              React · Tailwind · Updated March 2025
            </p>
          </div>
          <a
            href="/terminal"
            className="group flex min-h-[44px] min-w-[44px] items-center font-mono text-sm text-teal-700 transition hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
          >
            <span className="transition-transform group-hover:translate-x-0.5">$</span> curl /terminal
          </a>
        </div>
      </footer>
    </main>
  );
}