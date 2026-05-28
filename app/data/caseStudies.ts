import type { DiagramType } from "../components/ArchitectureDiagram";
import type { MockupType } from "../components/DashboardMockup";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  status: "shipped" | "conceptualized";
  github: string;
  diagram: DiagramType;
  problem: string;
  solution: string;
  architectureOverview: string;
  howItWorks: { title: string; description: string }[];
  deploymentFlow: { label: string; detail: string }[];
  dashboardMockup: MockupType;
  implementationDetails: string[];
  workflow: { title: string; description: string }[];
  designDecisions: string[];
  inputs: string[];
  outputs: string[];
  metrics: { value: string; label: string }[];
  techStack: string[];
  observability?: string[];
  remediation?: { title: string; description: string }[];
  goldenPath?: { title: string; description: string }[];
  proofLines: string[];
  proofCaption: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-dns-automation",
    title: "AI-Powered DNS Automation",
    subtitle:
      "Agentic request triage for operational DNS changes — intake, policy validation, execution, and full audit trail.",
    tag: "Agentic AI · Ops",
    status: "shipped",
    github: "https://github.com/sveerabathini",
    diagram: "flagship-dns",
    problem:
      "DNS change requests arrived through Slack and Jira with inconsistent formats. Manual triage created bottlenecks, policy drift, and gaps in audit coverage for production zones.",
    solution:
      "Built an event-driven pipeline with an AI triage agent that parses intent, validates against policy, routes approvals, executes on Route53, and emits structured audit events to SIEM.",
    architectureOverview:
      "Slack/Jira webhooks → event bus → triage agent + policy engine → Route53 API → audit/SIEM pipeline with stakeholder notifications.",
    howItWorks: [
      {
        title: "Request arrives",
        description: "Slack slash-command or Jira webhook posts structured payload to EventBridge.",
      },
      {
        title: "Agent triages",
        description: "Claude agent parses intent, checks policy engine, and routes for auto-approval or human review.",
      },
      {
        title: "Change executes",
        description: "Lambda calls Route53 API idempotently; audit event emitted to SIEM and Slack thread updated.",
      },
    ],
    deploymentFlow: [
      { label: "Webhook", detail: "Slack/Jira → API GW" },
      { label: "EventBridge", detail: "Route to agent" },
      { label: "Lambda", detail: "Triage + policy" },
      { label: "Route53", detail: "Apply change" },
      { label: "SIEM", detail: "Audit event" },
    ],
    dashboardMockup: "dns",
    implementationDetails: [
      "Python Lambda functions with structured JSON logging and correlation IDs",
      "Policy rules stored as versioned YAML — tested independently of agent logic",
      "Route53 change batches with rollback state stored in DynamoDB",
      "CloudWatch dashboards for SLA, rejection rate, and agent latency p99",
    ],
    workflow: [
      {
        title: "Intake & classify",
        description: "Parse DNS change requests from Slack/Jira and classify record type, target zone, and urgency.",
      },
      {
        title: "Agent triage & policy check",
        description: "AI agent validates naming conventions, TTL policies, and blast-radius rules before routing for approval.",
      },
      {
        title: "Execute & audit",
        description: "Approved changes propagate to Route53; every action written to SIEM with Slack confirmation.",
      },
      {
        title: "Observability feedback",
        description: "Metrics on turnaround time, policy violations, and rollback events feed the control plane dashboard.",
      },
    ],
    designDecisions: [
      "Policy engine separated from agent logic for testability and governance",
      "Human-in-the-loop for prod-zone changes above blast-radius threshold",
      "Idempotent execution with rollback hooks on validation failure",
      "Structured audit events compatible with SIEM ingestion (CEF/JSON)",
    ],
    inputs: ["Slack requests", "Jira tickets", "DNS zone metadata", "Policy rules"],
    outputs: ["Route53 changes", "Audit logs", "Slack notifications", "SIEM events"],
    metrics: [
      { value: "85%", label: "Reduction in manual DNS handling" },
      { value: "<2min", label: "Average request turnaround" },
      { value: "100%", label: "Audit coverage on prod changes" },
    ],
    techStack: ["Python", "AWS Lambda", "Route53", "Slack API", "Claude", "EventBridge"],
    observability: [
      "CloudWatch metrics for agent latency and policy rejection rate",
      "Structured logs with correlation IDs across triage → execution",
      "Dashboard panels for open requests, SLA breaches, and rollback events",
    ],
    remediation: [
      {
        title: "Auto-rollback on validation failure",
        description: "Failed Route53 apply triggers rollback to previous record state and notifies requester.",
      },
      {
        title: "Escalation on prod-zone blast radius",
        description: "Changes affecting >N records or apex zones route to on-call for explicit approval.",
      },
    ],
    proofLines: [
      "$ agent triage --request dns-req-2847",
      "→ parsed: CNAME api.example.com → prod-lb.elb.amazonaws.com",
      "→ policy: PASS (naming convention, TTL within bounds)",
      "→ blast-radius: 1 record · zone: prod · approval: auto",
      "→ route53: CHANGE_PENDING → INSYNC (1.4s)",
      "→ audit: event-9f2a written to SIEM · slack: confirmed",
      "status: RESOLVED · turnaround: 42s",
    ],
    proofCaption: "Agent triage session — production DNS change with policy validation and audit trail.",
  },
  {
    slug: "eks-platform",
    title: "Reusable EKS Platform",
    subtitle: "Golden-path cluster provisioning with reusable Pulumi components, IAM/OIDC, and multi-environment patterns.",
    tag: "AWS · EKS · Pulumi",
    status: "shipped",
    github: "https://github.com/sveerabathini",
    diagram: "eks-platform",
    problem:
      "Each team provisioned EKS clusters differently — inconsistent IAM, tagging, node groups, and onboarding timelines measured in weeks.",
    solution:
      "Standardized Pulumi component library with self-service portal, environment patterns (dev/stage/prod), and CI/CD validation gates for cluster add-ons.",
    architectureOverview:
      "Developer portal → Pulumi component stacks → EKS with standardized IAM/OIDC, node groups, Fargate profiles, and enforced tagging policies.",
    howItWorks: [
      {
        title: "Pick a pattern",
        description: "Developer selects dev/stage/prod pattern from portal — sizing, networking, and compliance pre-configured.",
      },
      {
        title: "Pulumi deploys",
        description: "Component stack provisions EKS, OIDC, node groups, and baseline add-ons in one apply.",
      },
      {
        title: "CI validates",
        description: "GitHub Actions runs conformance checks; cluster registered in platform catalog with runbooks.",
      },
    ],
    deploymentFlow: [
      { label: "Portal", detail: "Golden path select" },
      { label: "Pulumi", detail: "Component stack" },
      { label: "EKS", detail: "Cluster + OIDC" },
      { label: "Helm", detail: "Add-ons deploy" },
      { label: "Catalog", detail: "Hand off to team" },
    ],
    dashboardMockup: "eks",
    implementationDetails: [
      "Pulumi ComponentResource abstractions for node groups, Fargate, and IRSA roles",
      "Cross-account IAM roles with separate state backends per environment",
      "Policy-as-code validation at `pulumi preview` using OPA/conftest",
      "Platform catalog API tracks cluster metadata, owners, and runbook links",
    ],
    workflow: [
      {
        title: "Select golden path",
        description: "Developer picks environment pattern and team workspace from self-service portal.",
      },
      {
        title: "Provision stack",
        description: "Pulumi deploys EKS cluster, OIDC provider, node groups, and baseline add-ons (CNI, metrics, ingress).",
      },
      {
        title: "Validate & hand off",
        description: "CI pipeline runs conformance checks; cluster registered in platform catalog with runbooks.",
      },
    ],
    designDecisions: [
      "Composable Pulumi components — not monolithic stacks — for team-level customization",
      "OIDC federation baked in for IRSA from day one",
      "Tagging policy enforced at plan time, not post-hoc",
      "Separate state per environment with shared module versions",
    ],
    inputs: ["Environment config", "Team IAM roles", "Network CIDR", "Add-on catalog"],
    outputs: ["EKS cluster", "OIDC provider", "Standardized tags", "Platform catalog entry"],
    metrics: [
      { value: "Weeks → days", label: "Cluster onboarding time" },
      { value: "12", label: "Teams on golden path" },
      { value: "0", label: "Manual IAM/OIDC setup steps" },
    ],
    techStack: ["Pulumi", "AWS EKS", "GitHub Actions", "Helm", "ArgoCD"],
    goldenPath: [
      {
        title: "Environment patterns",
        description: "Pre-defined dev/stage/prod configs with sizing, networking, and compliance tiers.",
      },
      {
        title: "Reusable modules",
        description: "Node groups, Fargate profiles, IAM roles, and OIDC bindings as versioned components.",
      },
      {
        title: "Multi-account landing",
        description: "Cross-account roles and state backends for isolated prod vs non-prod workloads.",
      },
    ],
    proofLines: [
      "$ pulumi up --stack platform-team-dev",
      "→ eks.Cluster: created (v1.29)",
      "→ iam.OidcProvider: configured · IRSA ready",
      "→ node.NodeGroup: 3x m6i.large · SPOT optional",
      "→ addons: vpc-cni, coredns, kube-proxy, aws-lb-controller",
      "→ tags: env=dev team=platform cost-center=eng",
      "preview: 23 resources · policy: PASS",
      "status: DEPLOYED · onboarding: 2.1 hours",
    ],
    proofCaption: "Pulumi stack output — standardized EKS cluster with OIDC and add-ons.",
  },
  {
    slug: "finops-agent",
    title: "FinOps Intelligence Agent",
    subtitle: "AI-assisted cloud waste detection, spend anomaly analysis, and actionable savings recommendations.",
    tag: "AI · Cloud Cost Optimization",
    status: "conceptualized",
    github: "https://github.com/sveerabathini",
    diagram: "finops-agent",
    problem:
      "Cloud spend grew faster than usage visibility. Idle EBS volumes, oversized instances, and orphaned resources accumulated without proactive detection.",
    solution:
      "Designed an AI agent that ingests billing and utilization metrics, correlates usage patterns, flags waste and anomalies, and generates remediation runbooks with estimated savings.",
    architectureOverview:
      "Cloud APIs (Cost Explorer, CloudWatch) → scheduled ingestion → FinOps AI agent → waste detection + anomaly scoring → savings report + remediation workflow.",
    howItWorks: [
      {
        title: "Daily scan",
        description: "Step Functions orchestrates resource metric collection across accounts and regions.",
      },
      {
        title: "AI analysis",
        description: "Agent correlates utilization vs billing, flags idle resources and spend anomalies.",
      },
      {
        title: "Actionable report",
        description: "Savings report with remediation runbooks pushed to Slack and Jira for team review.",
      },
    ],
    deploymentFlow: [
      { label: "Schedule", detail: "EventBridge cron" },
      { label: "Ingest", detail: "Cost Explorer API" },
      { label: "Agent", detail: "Correlate + score" },
      { label: "Report", detail: "JSON + dashboard" },
      { label: "Alert", detail: "Slack/Jira" },
    ],
    dashboardMockup: "finops",
    implementationDetails: [
      "Step Functions state machine for multi-account scan orchestration",
      "Baseline learning per account stored in S3 with 30-day rolling windows",
      "Detection rules versioned separately from agent prompt for testability",
      "Closed-loop tracking: estimated vs realized savings per remediation",
    ],
    workflow: [
      {
        title: "Scheduled scan",
        description: "Pull resource metrics and billing data from AWS Cost Explorer and CloudWatch on a daily cadence.",
      },
      {
        title: "AI correlation",
        description: "Agent correlates utilization patterns, flags idle resources, and scores spend anomalies against baselines.",
      },
      {
        title: "Report & remediate",
        description: "Generate savings report with estimated impact and link to automated or manual remediation runbooks.",
      },
    ],
    designDecisions: [
      "Separate detection from remediation — reports first, actions gated by policy",
      "Baseline learning per account/team to reduce false positives",
      "Savings estimates tied to actual billing line items, not generic heuristics",
      "Integration hooks for Jira/Slack alerting on threshold breaches",
    ],
    inputs: ["Cloud billing data", "Resource metrics", "Usage thresholds", "Team ownership tags"],
    outputs: ["Waste report", "Savings estimates", "Remediation runbooks", "Alert events"],
    metrics: [
      { value: "$12K/mo", label: "Estimated idle resource savings" },
      { value: "47", label: "Resources flagged in pilot scan" },
      { value: "3", label: "Anomaly patterns detected" },
    ],
    techStack: ["Python", "AWS Cost Explorer", "CloudWatch", "Claude", "Step Functions"],
    observability: [
      "Scan completion metrics and resource coverage percentage",
      "False-positive rate tracking per detection rule",
      "Savings realized vs estimated (closed-loop FinOps)",
    ],
    proofLines: [
      "$ finops-agent scan --account prod-123456",
      "→ scanning: 1,842 resources across 3 regions",
      "→ idle: 3 EBS volumes (450GB) · est. $420/mo",
      "→ idle: 2 t3.xlarge (avg CPU 2%) · est. $280/mo",
      "→ anomaly: S3 egress +340% vs 30d baseline",
      "→ report: finops-rpt-2026-05-28.json",
      "status: COMPLETE · actionable items: 12",
    ],
    proofCaption: "FinOps agent scan output — idle resources and spend anomalies with savings estimates.",
  },
];

export const flagshipSlug = "ai-dns-automation";

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFlagshipCaseStudy(): CaseStudy {
  return caseStudies.find((cs) => cs.slug === flagshipSlug)!;
}
