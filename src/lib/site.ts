/**
 * Central site configuration used across metadata, structured data,
 * sitemap and robots. Override the production URL with the
 * NEXT_PUBLIC_SITE_URL environment variable.
 */
export const siteConfig = {
  name: "Trably Software",
  shortName: "Trably",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://trably.com.br",
  locale: "pt_BR",
  description:
    "Engenharia de software sob medida: desenvolvemos sistemas, plataformas e aplicações personalizadas — da arquitetura ao deploy — para negócios que querem escalar.",
  tagline: "Software de alto nível para negócios que querem escalar",
  email: "contato@trably.com.br",
  cnpj: "60.510.809/0001-95",
  keywords: [
    "desenvolvimento de software",
    "software sob medida",
    "sistemas personalizados",
    "landing pages",
    "sites institucionais",
    "aplicações web",
    "fábrica de software",
    "agência de tecnologia",
    "Trably",
  ],
  services: [
    {
      name: "Landing Pages",
      description:
        "Páginas de alta conversão com design moderno, SEO otimizado e performance máxima para capturar leads.",
    },
    {
      name: "Sites Institucionais",
      description:
        "Presença digital profissional que transmite credibilidade e fortalece a identidade da sua marca.",
    },
    {
      name: "Sistemas Completos",
      description:
        "Soluções sob medida com painéis administrativos, dashboards e integrações com APIs externas.",
    },
    {
      name: "Agendamento Online",
      description:
        "Gestão inteligente de horários para clínicas, barbearias e prestadores de serviço.",
    },
    {
      name: "dApps & BaaS",
      description:
        "Aplicações descentralizadas e infraestrutura bancária digital com segurança e compliance.",
    },
    {
      name: "Plataformas de Vídeo",
      description:
        "Streaming sob demanda com gestão de conteúdo, assinaturas e analytics.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Frequently asked questions — rendered on the page and exposed as FAQPage JSON-LD. */
export const faq = [
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "Depende do escopo. Uma landing page costuma ficar pronta em 1 a 2 semanas, enquanto sistemas completos variam de 1 a 3 meses. Após entender suas necessidades, apresentamos um cronograma claro com entregas previsíveis.",
  },
  {
    question: "Vocês desenvolvem soluções totalmente sob medida?",
    answer:
      "Sim. Projetamos cada solução a partir das necessidades do seu negócio — da arquitetura ao deploy — sem depender de templates engessados, garantindo escalabilidade e manutenção a longo prazo.",
  },
  {
    question: "Existe suporte depois do lançamento?",
    answer:
      "Sim. Oferecemos suporte contínuo pós-lançamento, com monitoramento, correções e evolução do produto conforme o seu negócio cresce.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "É gratuito e sem compromisso. Você descreve seu projeto pelo formulário de contato e retornamos com uma proposta detalhada, escopo e prazos.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos com stacks modernas e consolidadas para web e back-end, escolhendo a tecnologia mais adequada a cada projeto em termos de performance, segurança e escalabilidade.",
  },
] as const;
