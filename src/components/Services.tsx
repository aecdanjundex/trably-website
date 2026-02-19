import { Globe, Layout, Monitor, Smartphone, Database, Film } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão com design moderno e performance otimizada.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade para sua marca.",
  },
  {
    icon: Monitor,
    title: "Sistemas Completos",
    description: "Soluções sob medida com painéis administrativos e integrações.",
  },
  {
    icon: Smartphone,
    title: "Agendamento Online",
    description: "Clínicas, barbearias e negócios com gestão inteligente de horários.",
  },
  {
    icon: Database,
    title: "dApps & BaaS",
    description: "Aplicações descentralizadas e soluções Bank as a Service.",
  },
  {
    icon: Film,
    title: "Plataformas de Vídeo",
    description: "Streaming estilo Netflix com gestão de conteúdo e assinaturas.",
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
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-gradient-card p-8 shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
