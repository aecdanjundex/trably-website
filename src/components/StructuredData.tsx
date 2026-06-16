import { faq, siteConfig } from "@/lib/site";

/**
 * Schema.org JSON-LD. Improves rich results in search engines and gives
 * LLMs/agents a machine-readable description of the business and its offerings.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.email,
      slogan: siteConfig.tagline,
      taxID: siteConfig.cnpj,
      areaServed: "BR",
      knowsLanguage: ["pt-BR"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: "BR",
      serviceType: "Desenvolvimento de software sob medida",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de desenvolvimento",
        itemListElement: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, derived from trusted config — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
