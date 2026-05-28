export const profile = {
  name: "Sai Krishna Veerabathini",
  firstName: "Sai Krishna",
  lastName: "Veerabathini",
  title: "Associate Engineering Manager",
  company: "Virtusa",
  location: "Halifax, Nova Scotia, Canada",
  locationShort: "Nova Scotia, Canada",
  headline:
    "Platform Engineering · DevOps · Kubernetes · Cloud Automation · IaC (Pulumi, Terraform) · Developer Experience",
  about:
    "I'm an Associate Engineering Manager with deep experience in Cloud, DevOps, Platform Engineering, Kubernetes, and automation. I design platforms and engineering systems that improve developer experience, reliability, and operational efficiency across AWS, Azure, and GCP — with growing focus on generative AI, agentic workflows, and continuous learning.",
  tagline:
    "I build platforms that remove friction — golden paths, guardrails, and automation teams actually trust.",
  currently:
    "Leading platform and DevOps initiatives at Virtusa while deepening skills in generative AI, Claude, Vertex AI, and Microsoft Learn.",
  yearsExperience: "10 years 9 months",
  connections: "500+",
  followers: "526",
  recommendations: 5,
  email: "saikrishnav92@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-krishna-veerabathini",
  linkedinLegacy: "https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340",
  github: "https://github.com/sveerabathini",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/saikrishnav92/30min",
  heroMetric: "Reusable EKS & IaC patterns that cut onboarding from weeks to days",
  profileImage:
    "https://media.licdn.com/dms/image/v2/D4E03AQH6PIyvSaiGtw/profile-displayphoto-scale_200_200/B4EZuOWWjKJwAY-/0/1767619785031?e=2147483647&v=beta&t=XRWOHaFU-C4gsHB5TnGSXDHqCket0Q5_zT2sHU56__I",
};

export const languages = ["English", "Hindi"];

export const skills = [
  "Platform Engineering",
  "DevOps Architecture",
  "Kubernetes",
  "Cloud Automation",
  "Pulumi",
  "Terraform",
  "AWS",
  "Azure",
  "GCP",
  "IAM & SSO",
  "CI/CD",
  "SRE",
  "Generative AI",
  "Agentic AI",
];

export const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Ops Center", href: "/#ops-center" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const techStack = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "EKS",
  "Pulumi",
  "Terraform",
  "Vertex AI",
  "Claude",
  "Agentic AI",
];


export const projects = [
  {
    slug: "eks-platform" as const,
    title: "Reusable EKS Platform Components",
    tag: "AWS · EKS · Pulumi",
    description:
      "Standardized cluster provisioning with reusable components for node groups, Fargate profiles, IAM/OIDC, tagging, and environment patterns.",
    metric: "Reduced onboarding from weeks to days with reusable components.",
    url: "https://github.com/sveerabathini",
    status: "shipped" as const,
    architecture:
      "Self-service portal → Pulumi components → EKS clusters with standardized IAM/OIDC, node groups, and Fargate profiles.",
    workflow: [
      "Developer selects environment pattern from portal",
      "Pulumi stack provisions EKS + IAM/OIDC bindings",
      "CI/CD pipeline validates and deploys cluster add-ons",
    ],
    inputs: ["Environment config", "Team IAM roles", "Network CIDR"],
    outputs: ["EKS cluster", "OIDC provider", "Standardized tags"],
    diagram: "eks-platform" as const,
  },
  {
    title: "DevOps-as-a-Service Modules",
    slug: undefined,
    tag: "IaC · Platform · Automation",
    description:
      "Created reusable infrastructure modules and delivery patterns to accelerate onboarding, improve governance, and reduce duplication.",
    metric: "Accelerated team onboarding and cut IaC duplication across environments.",
    url: "https://github.com/sveerabathini",
    status: "shipped" as const,
    architecture:
      "Central module library consumed by product teams, with policy guardrails enforced at plan/apply time across AWS, Azure, and GCP.",
    workflow: [
      "Team imports versioned module from library",
      "Policy engine validates against org standards",
      "Terraform/Pulumi applies to target cloud account",
    ],
    inputs: ["Module catalog", "Team workspace", "Cloud credentials"],
    outputs: ["Provisioned resources", "Compliance report", "State lock"],
    diagram: "devops-modules" as const,
  },
  {
    slug: "ai-dns-automation" as const,
    title: "AI-Powered DNS Automation",
    tag: "Agentic AI · Ops",
    description:
      "Designed intelligent request-driven automation flows to reduce manual handling of DNS change requests and improve operational efficiency.",
    metric: "Reduced manual DNS handling and improved request turnaround time.",
    url: "https://github.com/sveerabathini",
    status: "shipped" as const,
    architecture:
      "Request intake → AI triage agent → validation engine → Route53 API → audit log pipeline with Slack notifications.",
    workflow: [
      "Ops request arrives via Slack or Jira webhook",
      "Agent parses intent and validates against policy",
      "Approved changes execute on Route53 with audit trail",
    ],
    inputs: ["DNS change requests", "Zone policies", "Approval rules"],
    outputs: ["Route53 records", "Audit events", "Slack confirmations"],
    diagram: "dns-automation" as const,
  },
  {
    slug: "finops-agent" as const,
    title: "FinOps Waste Detection Agent",
    tag: "AI · Cloud Cost Optimization",
    description:
      "Conceptualized AI-assisted cloud waste detection to identify idle resources, highlight spend anomalies, and drive actionable savings.",
    metric: "Identified cost savings opportunities for proactive optimization.",
    url: "https://github.com/sveerabathini",
    status: "conceptualized" as const,
    architecture:
      "Cloud APIs feed usage metrics into an AI agent that detects idle resources, anomalies, and generates actionable savings reports.",
    workflow: [
      "Scheduled scan pulls resource metrics from cloud APIs",
      "AI agent correlates usage patterns and flags waste",
      "Report generated with estimated savings and remediation steps",
    ],
    inputs: ["Cloud billing data", "Resource metrics", "Usage thresholds"],
    outputs: ["Waste report", "Savings estimates", "Remediation runbooks"],
    diagram: "finops-agent" as const,
  },
];

export const services = [
  {
    title: "Platform Engineering & Cloud Architecture",
    description:
      "Designing scalable AWS, Azure, and GCP infrastructure with Terraform, Pulumi, CI/CD pipelines, and cloud-native best practices.",
  },
  {
    title: "Kubernetes & Cloud Native",
    description:
      "Operating Kubernetes clusters with EKS, Helm, GitOps workflows, and standardized provisioning patterns.",
  },
  {
    title: "DevOps & IaC Automation",
    description:
      "Building reusable modules, delivery patterns, and self-service platforms that reduce time-to-production.",
  },
  {
    title: "AI for Operations",
    description:
      "Applying agentic AI and automation to DNS, FinOps, and operational workflows for faster, smarter ops.",
  },
];

export const experience = [
  {
    role: "Associate Engineering Manager",
    company: "Virtusa",
    period: "Present",
    location: "Halifax, Nova Scotia, Canada",
    bullets: [
      "Lead platform engineering and DevOps initiatives for cloud-native infrastructure across AWS, Azure, and GCP.",
      "Drive reusable EKS components, IaC modules, and standards that shorten onboarding and improve delivery consistency.",
      "Champion AI-assisted automation, FinOps awareness, and developer experience for engineering teams.",
    ],
    tech: ["AWS", "EKS", "Pulumi", "Terraform", "Kubernetes", "Generative AI"],
    current: true,
  },
  {
    role: "Lead Consultant",
    company: "Virtusa",
    period: "Sep 2022 – Oct 2023",
    location: "Hyderabad, India",
    bullets: [
      "Led DevOps and platform delivery for enterprise cloud migrations and automation programs.",
      "Mentored consultants on IaC, CI/CD, and Kubernetes operational practices.",
    ],
    tech: ["AWS", "Azure", "Terraform", "Kubernetes"],
    current: false,
  },
  {
    role: "Senior Consultant",
    company: "Virtusa",
    period: "Oct 2019 – Dec 2022",
    location: "Hyderabad, India",
    bullets: [
      "Delivered cloud automation, IAM, and DevOps solutions for global clients.",
      "Built reusable delivery patterns that improved governance and reduced duplication.",
    ],
    tech: ["AWS", "DevOps", "IAM", "CI/CD"],
    current: false,
  },
  {
    role: "Senior Member Technical",
    company: "ADP",
    period: "May 2019 – Oct 2019",
    location: "Hyderabad, India",
    bullets: [
      "Provided ADFS administration and SSO maintenance for enterprise applications.",
      "Integrated new applications with ADFS and migrated workloads from SiteMinder to ADFS.",
      "Designed, provisioned, configured, and tuned Active Directory solution technologies.",
    ],
    tech: ["ADFS", "SSO", "IAM", "Active Directory", "SiteMinder"],
    current: false,
  },
  {
    role: "Senior Software Engineer",
    company: "Mindtree (LTIMindtree)",
    period: "Jan 2018 – May 2019",
    location: "Hyderabad, India",
    bullets: ["Engineered cloud and DevOps solutions for digital transformation programs."],
    tech: ["Cloud", "DevOps", "Automation"],
    current: false,
  },
  {
    role: "Associate Consultant",
    company: "Capgemini",
    period: "Jun 2014 – Jan 2018",
    location: "Bengaluru, India",
    bullets: [
      "Administered Windows Server, Active Directory, DNS, DHCP, and core infrastructure services.",
      "Resolved incidents with root-cause analysis; maintained technical and operational documentation.",
      "Applied skills across Group Policy, NTFS/share permissions, and print services.",
    ],
    tech: ["Windows Server", "Active Directory", "DNS", "DHCP"],
    current: false,
  },
];

export const education = {
  degree: "B.E., Electrical and Electronics Engineering",
  school: "Jawaharlal Nehru Technological University",
  period: "2009 – 2013",
  location: "India",
};

export const certifications = [
  {
    name: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    issued: "May 2026",
    expires: "Nov 2026",
    credentialId: "jb3b5qd2v2x2",
    url: "https://verify.skilljar.com/c/jb3b5qd2v2x2",
  },
  {
    name: "AWS Knowledge: Compute – Training Badge",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2026",
    url: "https://www.credly.com/badges/d7104a2a-7faf-4ce9-92c4-1d25c4378e90",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google",
    issued: "Feb 2026",
    credentialId: "22060772",
    url: "https://www.skills.google/public_profiles/9b487410-1101-46c7-a385-f18c5520acea/badges/22060772",
  },
  {
    name: "Prompt Design in Vertex AI Skill Badge",
    issuer: "Google",
    issued: "Feb 2026",
    url: "https://www.credly.com/badges/1bae2e88-dd05-407d-91d6-b6fdb155417a",
  },
  {
    name: "SRE Foundation",
    issuer: "PeopleCert",
    issued: "Jan 2025",
    expires: "Jan 2028",
    credentialId: "GR558001536SV",
    url: "https://badges.peoplecert.org/Badge/en/2/DA062ED6-A9AC-444F-8E37-891FF8837C90?684",
  },
  {
    name: "Academy Accreditation – Generative AI Fundamentals",
    issuer: "Databricks",
    issued: "Dec 2025",
    expires: "Dec 2026",
    credentialId: "170167776",
    url: "https://credentials.databricks.com/0768a1fe-4c7d-493d-8ef1-38a7105090a7",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Mar 2020",
    expires: "Mar 2023",
    note: "Expired · renewal in progress",
    url: "https://www.youracclaim.com/badges/10c1a52e-1acd-4a32-9b84-80ee96291ab9",
  },
];

export const learningBadges = [
  {
    name: "Microsoft AI Skills Fest | Festival participation",
    issuer: "Microsoft Learn",
    issued: "May 2026",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini_microsoft-ai-skills-fest-festival-participation-activity-7465767163425898497-edvS",
  },
];

export const testimonials = [
  {
    quote:
      "Sai's was one of the most reliable colleagues I've worked with. His knowledge on cloud is parallel to none and the way he articulated his thoughts have always set our team in the right direction. He's patient, never breaks a sweat even under stressful situations and most of all extremely diligent when it comes to his duties. He somehow manages to keep up with contemporary tech — which inspires me to keep pushing myself. That being said, I'd highly recommend Sai for any position he's looking forward for.",
    author: "LinkedIn recommendation",
    role: "Colleague",
    url: profile.linkedin,
    initials: "★",
  },
  {
    quote:
      "I'm pleased to recommend Sai Krishna, who worked under me and consistently demonstrated exceptional skill and professionalism. He is highly talented in Cloud Automation, IAM, and DevOps, and has a strong ability to quickly understand complex challenges and deliver reliable, high-quality solutions. Sai Krishna is a true team player—collaborative, proactive, and always willing to support others. His positive attitude and ownership mindset make him a pleasure to work with, both as a colleague and as a friend. I strongly endorse Sai Krishna for any opportunity he pursues; he will be a valuable asset to any team.",
    author: "Kiran Kumar Reddy Narra",
    role: "Former Manager",
    url: "https://www.linkedin.com/in/kiran-kumar-reddy-narra-44427029",
    initials: "KK",
  },
];

export const latestThinking = [
  {
    title: "Microsoft AI Skills Fest participation",
    excerpt:
      "Earned my Microsoft AI Skills Fest badge — proud to keep learning and hope it inspires others to start their Microsoft Learn journey.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini_microsoft-ai-skills-fest-festival-participation-activity-7465767163425898497-edvS",
    date: "May 2026",
  },
  {
    title: "Prompt Design in Vertex AI Skill Badge",
    excerpt: "Continuous learning — generative AI skills for platform and automation workflows.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_prompt-design-in-vertex-ai-skill-badge-was-activity-7426099856370454528-a6TU",
    date: "Feb 2026",
  },
  {
    title: "A DevOps belief I had to unlearn",
    excerpt:
      "The real problems aren't always the loud ones — they're the quiet ones we don't stop to question.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_devops-platformengineering-engineeringmindset-activity-7416871123377836032-SNKx",
    date: "2025",
  },
  {
    title: "Something I didn't expect when I started learning AI",
    excerpt: "I went back to Python fundamentals — AI work is simpler when your foundations are strong.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_learninginpublic-aijourney-python-activity-7415124478420000768-UTyy",
    date: "2025",
  },
  {
    title: "Most cloud cost issues come from small decisions",
    excerpt:
      "Good automation should make it easy to notice when something no longer makes sense — not just easy to create.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_devops-learninginpublic-cloudengineering-activity-7413930878386515968-_Th9",
    date: "2025",
  },
  {
    title: "The best automation removes decisions",
    excerpt: "Instead of asking how to automate, I ask what friction I can eliminate for the next person.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_devops-engineeringmindset-learninginpublic-activity-7405234257192980480-JHpx",
    date: "2025",
  },
  {
    title: "The most effective infrastructure is invisible",
    excerpt:
      "Platform engineering gives developers what they need while the platform handles everything behind the scenes.",
    url: "https://www.linkedin.com/posts/sai-krishna-veerabathini-b0393340_platformengineering-devops-pulumi-activity-7404184393012957184-V3pB",
    date: "2025",
  },
];

export const principles = [
  "Developer experience first",
  "Automation that scales",
  "Learn in public",
];
