import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const projects = [
  {
    title: "Sistema de Agendamento",
    category: "Clínicas & Barbearias",
    description:
      "Plataforma de gestão de agendamentos com painel administrativo e notificações automáticas que reduzem faltas e mantêm a agenda cheia.",
  },
  {
    title: "Ambiente AVA",
    category: "Educação",
    description:
      "Ambiente virtual de aprendizagem com videoaulas, quizzes e certificados — escalando o ensino sem perder qualidade.",
  },
  {
    title: "Plataforma de Streaming",
    category: "Entretenimento",
    description:
      "Sistema de vídeos sob demanda com assinaturas e gestão de conteúdo, pronto para monetizar uma audiência crescente.",
  },
  {
    title: "Bank as a Service",
    category: "Fintech",
    description:
      "Infraestrutura bancária digital com APIs de pagamento, KYC e compliance — segurança de nível financeiro.",
  },
];

const Projects = () => {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="container mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfólio
          </p>
          <h2 id="projetos-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos que já estão no ar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluções reais que desenvolvemos e mantemos em produção, gerando
            valor para os nossos clientes todos os dias.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
