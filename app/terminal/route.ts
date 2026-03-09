import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const host = request.headers.get("host") || "localhost:3000";
  const baseUrl = `https://${host}`;

  const text = `
╔══════════════════════════════════════════════════════════════════╗
║  Sai Krishna Veerabathini                                        ║
║  Platform Engineering | DevOps | Kubernetes | Cloud Automation   ║
╚══════════════════════════════════════════════════════════════════╝

  I help teams ship faster by building platforms that developers
  actually enjoy using.

  DevOps Architect at Virtusa · Nova Scotia, Canada
  10+ years · Platform Engineering, IaC, AI for Operations

  ────────────────────────────────────────────────────────────────
  CONNECT
  ────────────────────────────────────────────────────────────────
  LinkedIn: https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340
  GitHub:   https://github.com/sveerabathini
  Portfolio: ${baseUrl}

  ────────────────────────────────────────────────────────────────
  Try: curl ${baseUrl}/terminal
  ────────────────────────────────────────────────────────────────
`.trim();

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
