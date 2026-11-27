import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const alt = "Trably Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const letters = ["#3f37c9", "#4c44dc", "#5b52e6", "#6f5bea", "#8463ee", "#9b6ff1"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as (typeof routing.locales)[number] });
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
            {t("meta.ogEyebrow")}
          </span>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1, textTransform: "uppercase", maxWidth: 1000 }}>
            {t("hero.h1a")} <span style={{ color: "#7a83f2", marginLeft: 18 }}>{t("hero.h1b")}</span>
          </span>
          <div style={{ width: 96, height: 6, background: "#8a5ad8" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
