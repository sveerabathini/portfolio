import { ImageResponse } from "next/og";

export const alt = "Sai Krishna Veerabathini | Platform Engineering & AI Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #0f172a 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#737373",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#0d9488" }}>$</span> whoami
        </div>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 600,
            color: "white",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Sai Krishna
        </h1>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 600,
            color: "#0d9488",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Veerabathini
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#a3a3a3",
            marginTop: "32px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          I build the boring stuff so you can build the exciting stuff. Platforms that get out of the way.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {["Platform Engineering", "DevOps", "Kubernetes", "Agentic AI"].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(13, 148, 136, 0.3)",
                color: "#0d9488",
                fontSize: "14px",
                fontFamily: "monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
