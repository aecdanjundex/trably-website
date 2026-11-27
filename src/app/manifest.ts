import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import pt from "../../messages/pt.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: pt.meta.description,
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: "#0b0e16",
    theme_color: "#0b0e16",
    lang: "pt-BR",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
