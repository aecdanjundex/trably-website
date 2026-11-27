import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { StructuredData } from "@/components/StructuredData";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { languageAlternates, localeInfo, routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { Providers } from "../providers";
import "../globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = `${siteConfig.name} — ${t("tagline")}`;
  const description = t("description");
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s — ${siteConfig.name}` },
    description,
    applicationName: siteConfig.name,
    keywords: t.raw("keywords") as string[],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: { canonical: `/${locale}`, languages: languageAlternates },
    openGraph: {
      type: "website",
      locale: localeInfo[locale].og,
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => localeInfo[l].og),
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e16" },
  ],
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={localeInfo[locale].htmlLang}
      suppressHydrationWarning
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <StructuredData locale={locale} />
        <NextIntlClientProvider>
          <Providers>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
