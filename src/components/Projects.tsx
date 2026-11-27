import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Card } from "@/components/ui/card";

type Project = { title: string; category: string; description: string };

const Projects = () => {
  const t = useTranslations("projects");
  const projects = t.raw("items") as Project[];
  return (
  <section
    id="projetos"
    aria-labelledby="projetos-heading"
    className="border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="projetos-heading"
        eyebrow={t("eyebrow")}
        a={t("a")}
        b={t("b")}
        lead={t("lead")}
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
};

export default Projects;
