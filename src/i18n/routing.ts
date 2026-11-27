import { defineRouting } from "next-intl/routing";

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

/**
 * URLs sempre com prefixo (/pt, /en, /es): cada idioma é indexável e tem hreflang.
 * Em `/` o proxy escolhe o idioma pelo cookie (escolha anterior no seletor) e, sem cookie, pelo
 * Accept-Language do navegador (pt-BR → pt, es-AR → es…). Sem correspondência, cai em `pt`.
 */
export const routing = defineRouting({
  locales,
  defaultLocale: "pt",
  localePrefix: "always",
  localeCookie: { name: "TRABLY_LOCALE", maxAge: 60 * 60 * 24 * 365 },
});

/** Metadados por idioma: atributo lang do <html>, locale do Open Graph e rótulo do seletor. */
export const localeInfo: Record<Locale, { htmlLang: string; og: string; label: string; short: string }> = {
  pt: { htmlLang: "pt-BR", og: "pt_BR", label: "Português", short: "PT" },
  en: { htmlLang: "en", og: "en_US", label: "English", short: "EN" },
  es: { htmlLang: "es", og: "es_419", label: "Español", short: "ES" },
};

/** hreflang de cada idioma + x-default em `/`, que redireciona pelo idioma do navegador. */
export const languageAlternates = {
  "pt-BR": "/pt",
  en: "/en",
  es: "/es",
  "x-default": "/",
};
