import type { ReactNode } from "react";

type DiagramType =
  | "eks-platform"
  | "devops-modules"
  | "dns-automation"
  | "finops-agent"
  | "flagship-dns";

const DIAGRAMS: Record<DiagramType, { viewBox: string; content: ReactNode }> = {
  "eks-platform": {
    viewBox: "0 0 320 140",
    content: (
      <>
        <Box x={10} y={50} w={70} h={40} label="Dev Portal" color="#6366f1" />
        <Box x={100} y={20} w={70} h={40} label="Pulumi" color="#818cf8" />
        <Box x={100} y={80} w={70} h={40} label="CI/CD" color="#38bdf8" />
        <Box x={190} y={50} w={60} h={40} label="EKS" color="#10b981" />
        <Box x={270} y={30} w={45} h={30} label="IAM" color="#a78bfa" small />
        <Box x={270} y={75} w={45} h={30} label="OIDC" color="#a78bfa" small />
        <Arrow from={[80, 70]} to={[100, 40]} />
        <Arrow from={[80, 70]} to={[100, 100]} />
        <Arrow from={[170, 40]} to={[190, 65]} />
        <Arrow from={[170, 100]} to={[190, 75]} />
        <Arrow from={[250, 70]} to={[270, 45]} />
        <Arrow from={[250, 70]} to={[270, 90]} />
      </>
    ),
  },
  "devops-modules": {
    viewBox: "0 0 320 140",
    content: (
      <>
        <Box x={15} y={50} w={65} h={40} label="Teams" color="#6366f1" />
        <Box x={100} y={50} w={75} h={40} label="Module Lib" color="#818cf8" />
        <Box x={195} y={20} w={55} h={35} label="AWS" color="#f59e0b" small />
        <Box x={195} y={65} w={55} h={35} label="Azure" color="#38bdf8" small />
        <Box x={195} y={105} w={55} h={35} label="GCP" color="#10b981" small />
        <Box x={270} y={50} w={45} h={40} label="Policy" color="#a78bfa" />
        <Arrow from={[80, 70]} to={[100, 70]} />
        <Arrow from={[175, 70]} to={[195, 37]} />
        <Arrow from={[175, 70]} to={[195, 82]} />
        <Arrow from={[175, 70]} to={[195, 122]} />
        <Arrow from={[250, 70]} to={[270, 70]} />
      </>
    ),
  },
  "dns-automation": {
    viewBox: "0 0 320 140",
    content: (
      <>
        <Box x={10} y={50} w={60} h={40} label="Request" color="#6366f1" />
        <Box x={85} y={50} w={65} h={40} label="AI Agent" color="#818cf8" />
        <Box x={170} y={30} w={55} h={35} label="Validate" color="#10b981" small />
        <Box x={170} y={80} w={55} h={35} label="Route53" color="#38bdf8" small />
        <Box x={245} y={50} w={65} h={40} label="Audit Log" color="#a78bfa" />
        <Arrow from={[70, 70]} to={[85, 70]} />
        <Arrow from={[150, 70]} to={[170, 47]} />
        <Arrow from={[150, 70]} to={[170, 97]} />
        <Arrow from={[225, 47]} to={[245, 65]} />
        <Arrow from={[225, 97]} to={[245, 75]} />
      </>
    ),
  },
  "finops-agent": {
    viewBox: "0 0 320 140",
    content: (
      <>
        <Box x={10} y={50} w={60} h={40} label="Cloud API" color="#f59e0b" />
        <Box x={85} y={50} w={65} h={40} label="FinOps AI" color="#818cf8" />
        <Box x={170} y={30} w={55} h={35} label="Detect" color="#ef4444" small />
        <Box x={170} y={80} w={55} h={35} label="Report" color="#10b981" small />
        <Box x={245} y={50} w={65} h={40} label="Savings" color="#38bdf8" />
        <Arrow from={[70, 70]} to={[85, 70]} />
        <Arrow from={[150, 70]} to={[170, 47]} />
        <Arrow from={[150, 70]} to={[170, 97]} />
        <Arrow from={[225, 47]} to={[245, 65]} />
        <Arrow from={[225, 97]} to={[245, 75]} />
      </>
    ),
  },
  "flagship-dns": {
    viewBox: "0 0 480 200",
    content: (
      <>
        <Box x={10} y={80} w={70} h={45} label="Slack/Jira" color="#6366f1" />
        <Box x={100} y={80} w={75} h={45} label="Event Bus" color="#475569" />
        <Box x={195} y={55} w={80} h={45} label="Triage Agent" color="#818cf8" />
        <Box x={195} y={120} w={80} h={45} label="Policy Engine" color="#a78bfa" />
        <Box x={300} y={40} w={65} h={38} label="DNS API" color="#38bdf8" small />
        <Box x={300} y={90} w={65} h={38} label="Route53" color="#10b981" small />
        <Box x={300} y={140} w={65} h={38} label="Audit/SIEM" color="#f59e0b" small />
        <Box x={390} y={80} w={80} h={45} label="Notify" color="#6366f1" />
        <Arrow from={[80, 102]} to={[100, 102]} />
        <Arrow from={[175, 102]} to={[195, 77]} />
        <Arrow from={[175, 102]} to={[195, 142]} />
        <Arrow from={[275, 77]} to={[300, 59]} />
        <Arrow from={[275, 77]} to={[300, 109]} />
        <Arrow from={[275, 142]} to={[300, 159]} />
        <Arrow from={[365, 59]} to={[390, 95]} />
        <Arrow from={[365, 109]} to={[390, 102]} />
        <Arrow from={[365, 159]} to={[390, 110]} />
      </>
    ),
  },
};

function Box({
  x,
  y,
  w,
  h,
  label,
  color,
  small = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  color: string;
  small?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + (small ? 3 : 4)}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize={small ? "8" : "9"}
        fontFamily="var(--font-jetbrains-mono, monospace)"
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ from, to }: { from: [number, number]; to: [number, number] }) {
  return (
    <line
      x1={from[0]}
      y1={from[1]}
      x2={to[0]}
      y2={to[1]}
      stroke="#6366f1"
      strokeOpacity="0.4"
      strokeWidth="1.5"
      markerEnd="url(#arrowhead)"
    />
  );
}

export function ArchitectureDiagram({
  type,
  className = "",
  compact = false,
}: {
  type: DiagramType;
  className?: string;
  compact?: boolean;
}) {
  const diagram = DIAGRAMS[type];

  return (
    <svg
      viewBox={diagram.viewBox}
      className={`w-full ${compact ? "max-h-[100px]" : "max-h-[200px]"} ${className}`}
      role="img"
      aria-label={`Architecture diagram: ${type}`}
    >
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#6366f1" fillOpacity="0.5" />
        </marker>
      </defs>
      {diagram.content}
    </svg>
  );
}

export type { DiagramType };
