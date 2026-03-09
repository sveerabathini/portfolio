import { PlatformStatus } from "./components/PlatformStatus";
import { TerminalPrompt } from "./components/TerminalPrompt";
import { Typewriter } from "./components/Typewriter";

export default function Home() {
  const projects = [
    {
      title: "Reusable EKS Platform Components",
      tag: "AWS • EKS • Pulumi",
      description:
        "Standardized cluster provisioning with reusable components for node groups, Fargate profiles, IAM/OIDC, tagging, and environment patterns.",
    },
    {
      title: "DevOps-as-a-Service Modules",
      tag: "IaC • Platform • Automation",
      description:
        "Created reusable infrastructure modules and delivery patterns to accelerate onboarding, improve governance, and reduce duplication.",
    },
    {
      title: "AI-Powered DNS Automation",
      tag: "Agentic AI • Ops",
      description:
        "Designed intelligent request-driven automation flows to reduce manual handling of DNS change requests and improve operational efficiency.",
    },
    {
      title: "FinOps Waste Detection Agent",
      tag: "AI • Cloud Cost Optimization",
      description:
        "Conceptualized AI-assisted cloud waste detection to identify idle resources, highlight spend anomalies, and drive actionable savings.",
    },
  ];

  const navItems = [
    { label: "Work", href: "#projects" },
    { label: "Thinking", href: "#thinking" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-cyan-400">$</span>
            <span className="text-cyan-300">whoami</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Let&apos;s Connect
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(168,85,247,0.15),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <TerminalPrompt command="cat /etc/role" />
            <PlatformStatus />
          </div>

          <h1 className="max-w-5xl font-mono text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Sai Krishna Veerabathini
          </h1>

          <p className="mt-6 max-w-4xl font-mono text-xl leading-8 text-neutral-300 md:text-2xl">
            <Typewriter
              text="I help teams ship faster by building platforms that developers actually enjoy using."
              speed={35}
            />
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-400 md:text-lg">
            DevOps Architect · Virtusa · Nova Scotia, Canada
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              View Projects
            </a>
            <a
              href="https://github.com/sveerabathini"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-400 underline decoration-neutral-600 underline-offset-4 transition hover:text-neutral-300"
            >
              Full resume on LinkedIn →
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 font-mono text-sm text-neutral-400">
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
                className="rounded border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-10">
            <TerminalPrompt command="ls projects/" />
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What I&apos;ve built
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-2xl font-semibold text-cyan-400/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-cyan-400">{project.tag}</span>
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="thinking" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <TerminalPrompt command="cat thinking" />
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            What I&apos;m thinking
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Ideas and reflections on DevOps, AI, and platform engineering.
          </p>

          <div className="mt-10 space-y-4">
            {latestThinking.map((post) => (
              <a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.08]"
              >
                <h3 className="font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{post.excerpt}</p>
                <span className="mt-2 inline-block text-sm text-cyan-400">
                  Read on LinkedIn →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <TerminalPrompt command="cat about" />
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            In short
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
            I&apos;m a platform engineer who cares about developer experience. I build
            golden paths, self-service platforms, and automation that teams actually
            use. 10+ years, mostly cloud and Kubernetes. Based in Nova Scotia.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            For experience, certifications, and recommendations —{" "}
            <a
              href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 underline-offset-4 hover:text-cyan-300"
            >
              see LinkedIn
            </a>
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:px-10">
          <div>
            <TerminalPrompt command="connect" />
            <h2 className="mt-3 text-3xl font-semibold">
              Let&apos;s work together
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
              I&apos;m open to new opportunities. Whether you have a project in mind,
              need a platform engineer, or just want to connect—my inbox is always open.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/sveerabathini"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
          <p className="text-sm text-neutral-500">
            Designed & built by Sai Krishna Veerabathini
          </p>
          <a
            href="/terminal"
            className="font-mono text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            $ curl /terminal
          </a>
        </div>
      </footer>
    </main>
  );
}