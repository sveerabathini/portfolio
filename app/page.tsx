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
    },
    {
      title: "DevOps-as-a-Service Modules",
      tag: "IaC • Platform • Automation",
      description:
        "Created reusable infrastructure modules and delivery patterns to accelerate onboarding, improve governance, and reduce duplication.",
      metric: "Accelerated team onboarding and cut IaC duplication across environments.",
      url: "https://github.com/sveerabathini",
    },
    {
      title: "AI-Powered DNS Automation",
      tag: "Agentic AI • Ops",
      description:
        "Designed intelligent request-driven automation flows to reduce manual handling of DNS change requests and improve operational efficiency.",
      metric: "Reduced manual DNS handling and improved request turnaround time.",
      url: "https://github.com/sveerabathini",
    },
    {
      title: "FinOps Waste Detection Agent",
      tag: "AI • Cloud Cost Optimization",
      description:
        "Conceptualized AI-assisted cloud waste detection to identify idle resources, highlight spend anomalies, and drive actionable savings.",
      metric: "Identified cost savings opportunities for proactive optimization.",
      url: "https://github.com/sveerabathini",
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
  }> = [
    { name: "Introduction to Generative AI", issuer: "Google", issued: "Feb 2026" },
    { name: "SRE Foundation", issuer: "PeopleCert", issued: "Jan 2025", expires: "Jan 2028" },
    { name: "Academy Accreditation - Generative AI Fundamentals", issuer: "Databricks", issued: "Dec 2025", expires: "Dec 2026" },
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", issued: "Mar 2020" },
  ];

  const email = "saikrishnav92@gmail.com";
  const resumeUrl = "https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340";

  const experience = [
    {
      role: "DevOps Architect",
      company: "Virtusa",
      period: "Present",
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
    },
    {
      quote: "Sai Krishna Veerabathini is an excellent person to be a team mate. He is a very good techie with a great experience in Cloud and DevOps tracks. He is a very enthusiastic guy with an attitude of learning new thing daily and extending his ability to innovations.",
      author: "Chandra Venkata Atchut Garre",
      role: "Colleague",
      url: "https://www.linkedin.com/in/chandra-venkata-atchut-garre-8825818",
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-sm transition hover:opacity-90"
          >
            <span className="text-cyan-400">$</span>
            <span className="text-cyan-300">whoami</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-600 transition-colors hover:text-cyan-600 dark:text-neutral-300 dark:hover:text-cyan-300"
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
            className="rounded-xl border border-cyan-500/50 px-4 py-2 text-sm font-medium text-cyan-600 transition-all duration-300 hover:border-cyan-600 hover:bg-cyan-50 dark:border-cyan-400/30 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"
          >
            Let&apos;s Connect
          </a>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-neutral-200 dark:border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.15),transparent),radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(168,85,247,0.12),transparent),radial-gradient(ellipse_40%_40%_at_0%_50%,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <TerminalPrompt command="cat /etc/role" />
              <PlatformStatus />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <h1 className="max-w-5xl font-mono text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl dark:text-white">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                Sai Krishna
              </span>
              <br />
              <span className="text-cyan-600 dark:text-cyan-400/90">Veerabathini</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={160}>
            <p className="mt-8 max-w-4xl font-mono text-xl leading-8 text-neutral-600 md:text-2xl dark:text-neutral-300">
              <Typewriter
                text="I build the boring stuff so you can build the exciting stuff. Platforms that get out of the way."
                speed={35}
              />
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={240}>
            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-500 md:text-lg dark:text-neutral-400">
              DevOps Architect · Virtusa · Nova Scotia, Canada
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800 hover:shadow-lg dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
              >
                View my work
              </a>
              <a
                href={`mailto:${email}`}
                className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100 dark:border-cyan-400/30 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"
              >
                Get in touch
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group text-sm text-neutral-500 transition hover:text-cyan-600 dark:text-neutral-400 dark:hover:text-cyan-300"
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
                  className="rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-2 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section
        id="experience"
        className="border-b border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <TerminalPrompt command="cat experience" />
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Where I&apos;ve worked
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Platform engineering and DevOps leadership across cloud and Kubernetes.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 space-y-8">
            {experience.map((job, i) => (
              <AnimateOnScroll key={job.company} variant="fade-up" delay={i * 80}>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:via-cyan-400/20 before:to-transparent">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-cyan-400/50 bg-white dark:bg-neutral-950" />
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {job.role} · {job.company}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-neutral-500 dark:text-neutral-500">
                        {job.period} · {job.location}
                      </p>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
                      target="_blank"
                      rel="noreferrer"
                        className="mt-2 text-sm text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 md:mt-0"
                    >
                      View full experience →
                    </a>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-neutral-500 before:shrink-0 before:content-['▹'] before:text-cyan-500 dark:text-neutral-400 dark:before:text-cyan-400"
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
        className="border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.01]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <TerminalPrompt command="ls services/" />
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What I do
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Platform engineering, cloud infrastructure, and AI-driven automation.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} variant="fade-up" delay={i * 60}>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-900/50 dark:hover:border-cyan-400/20 dark:hover:bg-neutral-900/80">
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

      <section
        id="projects"
        className="border-y border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <div className="mb-12">
              <TerminalPrompt command="ls projects/" />
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                What I&apos;ve built
              </h2>
              <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
                Platform engineering, automation, and AI-driven operations.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-2">
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
                  className="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl dark:border-white/10 dark:bg-neutral-900/80 dark:hover:border-cyan-400/40 dark:hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)] dark:hover:shadow-cyan-400/5"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/15" />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-cyan-400/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-400">
                        {project.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 transition-colors group-hover:text-cyan-700 md:text-2xl dark:text-white dark:group-hover:text-cyan-50">
                      {project.title}
                    </h3>
                    <p className="mt-5 leading-7 text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {project.metric && (
                      <p className="mt-3 font-mono text-sm text-cyan-400/80">
                        → {project.metric}
                      </p>
                    )}
                    <div className="mt-6 flex items-center gap-2 font-mono text-sm text-cyan-400/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>View on GitHub</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="thinking" className="border-t border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <TerminalPrompt command="cat thinking" />
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What I&apos;m thinking
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Ideas and reflections on DevOps, AI, and platform engineering.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 space-y-4">
            {latestThinking.map((post, i) => (
              <AnimateOnScroll key={post.title} variant="fade-up" delay={i * 60}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-neutral-100 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.08] dark:hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.1)]"
                >
                  <h3 className="font-semibold text-neutral-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-50">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-400 transition-all group-hover:gap-2">
                    Read on LinkedIn
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <TerminalPrompt command="cat about" />
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              In short
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-neutral-500 dark:text-neutral-400">
              I&apos;m a platform engineer who cares about developer experience. I build
              golden paths, self-service platforms, and automation that teams actually
              use. 10+ years, mostly cloud and Kubernetes. Based in Nova Scotia.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-neutral-500 dark:text-neutral-400">
              When not building platforms, I enjoy exploring Nova Scotia&apos;s trails,
              staying curious about AI and automation, and learning in public.
            </p>
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
              For experience, certifications, and recommendations —{" "}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 underline-offset-4 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                see LinkedIn
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="certifications" className="border-t border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <TerminalPrompt command="ls certifications/" />
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Certifications
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
              Cloud, Kubernetes, and platform engineering credentials.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 flex flex-wrap gap-4">
            {certifications.map((cert, i) => (
              <AnimateOnScroll key={cert.name} variant="fade-up" delay={i * 60}>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-50/50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/5">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{cert.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{cert.issuer}</p>
                  {cert.issued && (
                    <p className="mt-1 font-mono text-xs text-neutral-400 dark:text-neutral-500">
                      Issued {cert.issued}
                      {cert.expires && <> · Expires {cert.expires}</>}
                    </p>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-t border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <AnimateOnScroll variant="fade-up">
            <TerminalPrompt command="cat testimonials" />
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Kind words
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-500 dark:text-neutral-400">
              What colleagues and managers have said about working with me.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.author} variant="fade-up" delay={i * 80}>
                <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-white/10 dark:bg-neutral-900/50">
                  <p className="leading-7 text-neutral-600 dark:text-neutral-400">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4">
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                      {t.author}
                    </a>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{t.role}</p>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-neutral-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(34,211,238,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
            <AnimateOnScroll variant="fade-up" className="lg:max-w-xl">
              <TerminalPrompt command="connect" />
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mt-4 leading-7 text-neutral-500 dark:text-neutral-400">
                I&apos;m open to new opportunities. Whether you have a project in mind,
                need a platform engineer, or just want to connect—my inbox is always open.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`mailto:${email}`}
                  className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800 hover:shadow-lg dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.2)]"
                >
                  Email me
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-cyan-500/50 px-6 py-3 text-sm font-medium text-cyan-600 transition-all duration-300 hover:border-cyan-600 hover:bg-cyan-50 hover:shadow-lg dark:border-cyan-400/30 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10 dark:hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)]"
                >
                  View resume
                </a>
                <a
                  href="https://github.com/sveerabathini"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={100}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Designed & built by Sai Krishna Veerabathini
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-600">
              Built with Next.js, React, Tailwind · Updated March 2025
            </p>
          </div>
          <a
            href="/terminal"
            className="group font-mono text-sm text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            <span className="transition-transform group-hover:translate-x-0.5">$</span> curl /terminal
          </a>
        </div>
      </footer>
    </main>
  );
}