import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #3a3fd6 0%, #0b0e16 60%)",
          color: "#f1f3f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #4f55e8, #7c5cf0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            T
          </div>
          <span style={{ fontSize: 34, fontWeight: 600 }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.tagline}
          </span>
          <span style={{ fontSize: 28, color: "#9aa3b8", maxWidth: 820 }}>
            Engenharia de software sob medida — da arquitetura ao deploy.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
