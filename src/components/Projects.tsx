const projects = [
  {
    title: "Sistema de Agendamento",
    category: "Clínicas & Barbearias",
    description: "Plataforma completa de gestão de agendamentos com painel administrativo.",
  },
  {
    title: "Ambiente AVA",
    category: "Educação",
    description: "Ambiente virtual de aprendizagem com videoaulas, quizzes e certificados.",
  },
  {
    title: "Plataforma de Streaming",
    category: "Entretenimento",
    description: "Sistema de vídeos sob demanda com assinaturas e gestão de conteúdo.",
  },
  {
    title: "Bank as a Service",
    category: "Fintech",
    description: "Infraestrutura bancária digital com APIs de pagamento e compliance.",
  },
];

const Projects = () => {
  return (
    <section className="py-24 sm:py-32 relative" id="projetos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Portfólio</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Projetos <span className="text-gradient">entregues</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border bg-gradient-card overflow-hidden shadow-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Colored top bar */}
              <div className="h-1 bg-gradient-primary" />
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
