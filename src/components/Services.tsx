import { Bot, Database, Film, Globe, Landmark, Layout, Monitor, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const icons = [Bot, Landmark, Monitor, Database, Layout, Globe, Smartphone, Film];
/** O 2º card (consultoria cripto) leva até a seção dela. */
const links: Record<number, string> = { 1: "#consultoria-cripto" };

type Item = { title: string; description: string; tags: string[] };

const Services = () => {
  const t = useTranslations("services");
  const services = (t.raw("items") as Item[]).map((it, i) => ({ ...it, icon: icons[i], href: links[i] }));
  return (
  <section
    id="servicos"
    aria-labelledby="servicos-heading"
    className="border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="servicos-heading"
        eyebrow={t("eyebrow")}
        a={t("a")}
        b={t("b")}
        lead={t("lead")}
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
                {s.tags.map((tag) => (
                  <Badge key={tag} variant="tag">
                    {tag}
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
};

export default Services;
