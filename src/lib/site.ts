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
    "Software sob medida, agentes de IA e consultoria cripto para a regulação do Banco Central (Resoluções BCB 519, 520 e 521). 18 anos desenvolvendo sistemas e plataformas — da arquitetura ao deploy.",
  tagline: "Software de alto nível para negócios que querem escalar",
  email: "aecio@trably.com.br",
  whatsapp: "5584987782431",
  phone: "+55 (84) 98778-2431",
  telephone: "+5584987782431",
  cnpj: "60.510.809/0001-95",
  keywords: [
    "desenvolvimento de software",
    "software sob medida",
    "sistemas personalizados",
    "consultoria cripto",
    "regulamentação cripto Banco Central",
    "marco legal dos criptoativos",
    "Lei 14.478/2022",
    "SPSAV",
    "Resolução BCB 519",
    "Resolução BCB 520",
    "Resolução BCB 521",
    "como montar uma corretora cripto",
    "corretora de criptomoedas do zero",
    "prestadora de serviços de ativos virtuais",
    "inteligência artificial",
    "agentes autônomos",
    "automação com IA",
    "landing pages",
    "sites institucionais",
    "aplicações web",
    "fábrica de software",
    "agência de tecnologia",
    "Trably",
  ],
  services: [
    {
      name: "Inteligência Artificial",
      description:
        "Soluções com IA e agentes autônomos que automatizam processos, integram sistemas e tomam decisões para escalar a operação.",
    },
    {
      name: "Consultoria em Regulação Cripto",
      description:
        "Consultoria para empresas que operam ou querem operar com criptoativos se adequarem às Resoluções BCB 519, 520 e 521, em vigor desde fevereiro de 2026, que regulamentam o marco legal dos criptoativos (Lei 14.478/2022) — da autorização como SPSAV à tecnologia de uma corretora cripto.",
    },
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

export const whatsappLink = (text?: string) =>
  `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

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
    question: "Vocês fazem consultoria sobre a regulamentação cripto do Banco Central?",
    answer:
      "Sim. Damos consultoria para exchanges, custodiantes, intermediários e empresas que querem operar com criptoativos no Brasil: leitura do marco legal (Lei 14.478/2022) e das Resoluções BCB 519, 520 e 521 — em vigor desde 2 de fevereiro de 2026 — para prestadoras de serviços de ativos virtuais (SPSAV), diagnóstico de aderência, plano de adequação e a tecnologia necessária (KYC, prevenção à lavagem de dinheiro, segregação patrimonial e reporte).",
  },
  {
    question: "Como implementar uma corretora cripto do zero?",
    answer:
      "Em seis etapas: definir o modelo de negócio e o enquadramento (intermediária, custodiante ou corretora); montar a estrutura societária, o capital e a governança exigidos; pedir a autorização ao Banco Central como SPSAV (Resoluções BCB 519 e 520); implantar compliance e PLD/FT (KYC/KYB, monitoramento e reporte); construir a tecnologia (order book ou liquidez integrada, carteiras com custódia segregada, Pix e APIs); e operar com segurança cibernética, gestão de riscos e auditoria. Acompanhamos todas as etapas, da regulação ao código.",
  },
  {
    question: "Existe suporte depois do lançamento?",
    answer:
      "Sim. Oferecemos suporte contínuo pós-lançamento, com monitoramento, correções e evolução do produto conforme o seu negócio cresce.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "É gratuito e sem compromisso. Você descreve seu projeto pelo formulário de contato ou pelo WhatsApp +55 (84) 98778-2431 e retornamos com uma proposta detalhada, escopo e prazos.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos com stacks modernas e consolidadas para web e back-end, escolhendo a tecnologia mais adequada a cada projeto em termos de performance, segurança e escalabilidade.",
  },
] as const;
