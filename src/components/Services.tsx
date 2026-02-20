import { Globe, Layout, Monitor, Smartphone, Database, Film } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão com design moderno, SEO otimizado e performance máxima para capturar leads.",
    tags: ["Conversão", "SEO", "Responsivo"],
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade e fortalece a identidade da sua marca.",
    tags: ["Branding", "CMS", "Multi-idioma"],
  },
  {
    icon: Monitor,
    title: "Sistemas Completos",
    description: "Soluções sob medida com painéis administrativos, dashboards e integrações com APIs externas.",
    tags: ["Dashboard", "API REST", "Relatórios"],
  },
  {
    icon: Smartphone,
    title: "Agendamento Online",
    description: "Gestão inteligente de horários para clínicas, barbearias e prestadores de serviço.",
    tags: ["Calendário", "Notificações", "Pagamento"],
  },
  {
    icon: Database,
    title: "dApps & BaaS",
    description: "Aplicações descentralizadas e infraestrutura bancária digital com segurança e compliance.",
    tags: ["Blockchain", "Smart Contracts", "KYC"],
  },
  {
    icon: Film,
    title: "Plataformas de Vídeo",
    description: "Streaming sob demanda estilo Netflix com gestão de conteúdo, assinaturas e analytics.",
    tags: ["Streaming", "Assinaturas", "CDN"],
  },
];

const Services = () => {
  return (
    <section className="py-24 sm:py-32 relative" id="servicos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Serviços</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            O que <span className="text-gradient">desenvolvemos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-gradient-card p-8 shadow-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-wider">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
