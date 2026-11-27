/**
 * Dados do site que não mudam por idioma (textos traduzidos ficam em messages/{pt,en,es}.json).
 * A URL de produção pode ser sobrescrita por NEXT_PUBLIC_SITE_URL.
 */
export const siteConfig = {
  name: "Trably Software",
  shortName: "Trably",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://trably.com.br",
  email: "aecio@trably.com.br",
  whatsapp: "5584987782431",
  phone: "+55 (84) 98778-2431",
  telephone: "+5584987782431",
  cnpj: "60.510.809/0001-95",
} as const;

export type SiteConfig = typeof siteConfig;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
