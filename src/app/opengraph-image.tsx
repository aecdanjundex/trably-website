import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — software sob medida, IA e consultoria cripto`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const letters = ["#3f37c9", "#4c44dc", "#5b52e6", "#6f5bea", "#8463ee", "#9b6ff1"];

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
          padding: "72px 80px",
          background: "radial-gradient(ellipse 70% 70% at 90% 0%, #2a1f5c 0%, #0b0e16 65%)",
          color: "#f1f3fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, lineHeight: 0.9 }}>
            {"TRABLY".split("").map((ch, i) => (
              <span key={ch} style={{ color: letters[i] }}>
                {ch}
              </span>
            ))}
          </div>
          <span style={{ fontSize: 22, letterSpacing: 12, marginTop: 8 }}>SOFTWARE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ fontSize: 22, letterSpacing: 6, color: "#b9a3f2", fontWeight: 600 }}>
            SOFTWARE · IA · CONSULTORIA CRIPTO
          </span>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1, textTransform: "uppercase", maxWidth: 1000 }}>
            Ideias viram <span style={{ color: "#7a83f2", marginLeft: 18 }}>produtos que escalam</span>
          </span>
          <div style={{ width: 96, height: 6, background: "#8a5ad8" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
