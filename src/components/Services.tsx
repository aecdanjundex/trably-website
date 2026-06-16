import {
  Globe,
  Layout,
  Monitor,
  Smartphone,
  Database,
  Film,
  Bot,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const services = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description:
      "IA e agentes autônomos que automatizam tarefas repetitivas, conversam com seus clientes e tomam decisões — liberando seu time para o que realmente importa.",
    tags: ["Agentes Autônomos", "LLMs", "Automação"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão com design moderno, SEO e performance máxima para transformar visitantes em clientes.",
    tags: ["Conversão", "SEO", "Responsivo"],
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Presença digital profissional que transmite credibilidade e fortalece a identidade da sua marca onde seus clientes buscam.",
    tags: ["Branding", "CMS", "Multi-idioma"],
  },
  {
    icon: Monitor,
    title: "Sistemas Completos",
    description:
      "Plataformas sob medida com painéis, dashboards e integrações que organizam a operação e dão visibilidade total do negócio.",
    tags: ["Dashboard", "API REST", "Relatórios"],
  },
  {
    icon: Smartphone,
    title: "Agendamento Online",
    description:
      "Gestão inteligente de horários para clínicas, barbearias e prestadores — menos faltas, mais clientes e agenda sempre cheia.",
    tags: ["Calendário", "Notificações", "Pagamento"],
  },
  {
    icon: Database,
    title: "dApps & BaaS",
    description:
      "Aplicações descentralizadas e infraestrutura bancária digital com a segurança e o compliance que o mercado financeiro exige.",
    tags: ["Blockchain", "Smart Contracts", "KYC"],
  },
  {
    icon: Film,
    title: "Plataformas de Vídeo",
    description:
      "Streaming sob demanda estilo Netflix com gestão de conteúdo, assinaturas e analytics para monetizar sua audiência.",
    tags: ["Streaming", "Assinaturas", "CDN"],
  },
];

const Services = () => {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="container mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços
          </p>
          <h2 id="servicos-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologia que resolve problemas reais
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do conceito à operação, entregamos soluções completas — e cuidamos
            delas depois do lançamento — para acelerar o crescimento do seu
            negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full rounded-2xl border border-border bg-gradient-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/40">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
