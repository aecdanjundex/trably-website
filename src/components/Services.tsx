import { Bot, Database, Film, Globe, Landmark, Layout, Monitor, Smartphone } from "lucide-react";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description:
      "IA e agentes autônomos que automatizam tarefas repetitivas, conversam com seus clientes e tomam decisões — liberando seu time para o que importa.",
    tags: ["Agentes", "LLMs", "Automação"],
  },
  {
    icon: Landmark,
    title: "Consultoria Cripto",
    description:
      "Adequação às Resoluções BCB 519, 520 e 521 e implementação de corretoras, custodiantes e intermediárias de ativos virtuais.",
    tags: ["SPSAV", "Banco Central", "Compliance"],
    href: "#consultoria-cripto",
  },
  {
    icon: Monitor,
    title: "Sistemas Completos",
    description:
      "Plataformas sob medida com painéis, dashboards e integrações que organizam a operação e dão visibilidade total do negócio.",
    tags: ["Dashboard", "API REST", "Relatórios"],
  },
  {
    icon: Database,
    title: "dApps & BaaS",
    description:
      "Aplicações descentralizadas e infraestrutura bancária digital com a segurança e o compliance que o mercado financeiro exige.",
    tags: ["Blockchain", "Smart Contracts", "KYC"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão com design moderno, SEO e performance máxima para transformar visitantes em clientes.",
    tags: ["Conversão", "SEO", "Core Web Vitals"],
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Presença digital profissional que transmite credibilidade e fortalece sua marca onde seus clientes buscam.",
    tags: ["Branding", "CMS", "Multi-idioma"],
  },
  {
    icon: Smartphone,
    title: "Agendamento Online",
    description:
      "Gestão de horários para clínicas, barbearias e prestadores — menos faltas, mais clientes e agenda sempre cheia.",
    tags: ["Calendário", "Notificações", "Pagamento"],
  },
  {
    icon: Film,
    title: "Plataformas de Vídeo",
    description:
      "Streaming sob demanda com gestão de conteúdo, assinaturas e analytics para monetizar sua audiência.",
    tags: ["Streaming", "Assinaturas", "CDN"],
  },
];

const Services = () => (
  <section
    id="servicos"
    aria-labelledby="servicos-heading"
    className="border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="servicos-heading"
        eyebrow="Serviços"
        a="Tecnologia que resolve"
        b="problemas reais"
        lead="Do conceito à operação, entregamos soluções completas — e cuidamos delas depois do lançamento."
      />
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 p-0">
        {services.map((s, i) => (
          <li key={s.title} {...reveal(i % 4)}>
            <Card className="tr-card relative flex h-full flex-col gap-3.5 rounded-[10px] border-0 border-t-4 border-accent bg-card px-6 pb-8 pt-7 shadow-none">
              <div className="flex items-center justify-between">
                <s.icon aria-hidden="true" className="tr-card-icon size-[30px] text-accent" />
                <span
                  aria-hidden="true"
                  className="tr-card-num font-display text-[28px] font-bold text-line-strong"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="m-0 font-display text-2xl font-bold uppercase tracking-[2px] text-ink">
                {s.href ? (
                  <a href={s.href} className="text-ink no-underline after:absolute after:inset-0 hover:text-accent">
                    {s.title}
                  </a>
                ) : (
                  s.title
                )}
              </h3>
              <p className="m-0 flex-1 text-base leading-[1.55] text-ink-muted">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <Badge key={t} variant="tag">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Services;
