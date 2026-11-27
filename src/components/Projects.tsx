import { ArrowUpRight } from "lucide-react";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Sistema de Agendamento",
    category: "Clínicas & Barbearias",
    description:
      "Gestão de agendamentos com painel administrativo e notificações automáticas que reduzem faltas e mantêm a agenda cheia.",
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
      "Vídeos sob demanda com assinaturas e gestão de conteúdo, pronto para monetizar uma audiência crescente.",
  },
  {
    title: "Bank as a Service",
    category: "Fintech",
    description:
      "Infraestrutura bancária digital com APIs de pagamento, KYC e compliance — segurança de nível financeiro.",
  },
];

const Projects = () => (
  <section
    id="projetos"
    aria-labelledby="projetos-heading"
    className="border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="projetos-heading"
        eyebrow="Portfólio"
        a="Projetos que já"
        b="estão no ar"
        lead="Soluções reais que desenvolvemos e mantemos em produção, gerando valor para nossos clientes todos os dias."
      />
      <ul className="m-0 grid list-none grid-cols-2 gap-5 p-0 max-[760px]:grid-cols-1">
        {projects.map((p, i) => (
          <li key={p.title} {...reveal(i % 2, i % 2 ? "right" : "left")}>
            <Card className="tr-card group flex h-full flex-col gap-3 rounded-[10px] border-0 border-l-[5px] border-accent bg-card p-7 shadow-none">
              <div className="flex items-start justify-between gap-4">
                <p className="m-0 font-display text-sm font-semibold uppercase tracking-[3px] text-eyebrow">
                  {p.category}
                </p>
                <ArrowUpRight
                  aria-hidden="true"
                  className="tr-card-icon size-5 shrink-0 text-ink-subtle group-hover:text-accent"
                />
              </div>
              <h3 className="m-0 font-display text-[30px] font-bold uppercase leading-none text-ink">
                {p.title}
              </h3>
              <p className="m-0 text-base leading-[1.6] text-ink-muted">{p.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Projects;
