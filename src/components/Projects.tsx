import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Sistema de Agendamento",
    category: "Clínicas & Barbearias",
    description:
      "Plataforma completa de gestão de agendamentos com painel administrativo, notificações automáticas e relatórios.",
  },
  {
    title: "Ambiente AVA",
    category: "Educação",
    description:
      "Ambiente virtual de aprendizagem com videoaulas, quizzes e emissão de certificados.",
  },
  {
    title: "Plataforma de Streaming",
    category: "Entretenimento",
    description:
      "Sistema de vídeos sob demanda com assinaturas, gestão de conteúdo e analytics.",
  },
  {
    title: "Bank as a Service",
    category: "Fintech",
    description:
      "Infraestrutura bancária digital com APIs de pagamento, KYC e compliance.",
  },
];

const Projects = () => {
  return (
    <section className="relative border-t border-border py-24 sm:py-32" id="projetos">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfólio
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos que já estão no ar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção de soluções que desenvolvemos e mantemos em produção.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 shadow-card transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
