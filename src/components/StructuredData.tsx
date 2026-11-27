import { getTranslations } from "next-intl/server";
import { localeInfo, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

type Item = { title: string; description: string };
type Faq = { question: string; answer: string };

/**
 * Schema.org JSON-LD no idioma da página: melhora os rich results e dá a LLMs/agentes uma
 * descrição legível por máquina do negócio e dos serviços.
 */
export async function StructuredData({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const url = `${siteConfig.url}/${locale}`;
  const lang = localeInfo[locale].htmlLang;
  const services = t.raw("services.items") as Item[];
  const faq = t.raw("faq.items") as Faq[];

  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon-512.png`,
      description: t("meta.description"),
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.telephone,
          email: siteConfig.email,
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: ["Portuguese", "English", "Spanish"],
        },
      ],
      knowsAbout: t.raw("meta.knowsAbout") as string[],
      slogan: t("meta.tagline"),
      taxID: siteConfig.cnpj,
      areaServed: "BR",
      knowsLanguage: ["pt-BR", "en", "es"],
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name: siteConfig.name,
      description: t("meta.description"),
      inLanguage: lang,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${url}/#service`,
      name: siteConfig.name,
      description: t("meta.description"),
      url,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "BR",
      serviceType: t.raw("meta.serviceType") as string[],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t("meta.catalog"),
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.description },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      inLanguage: lang,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON-LD estático, derivado de config e mensagens confiáveis.
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
