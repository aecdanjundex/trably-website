import { Quote, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type Testimonial = { name: string; business: string; initials: string; role: string; text: string };

const Testimonials = () => {
  const tr = useTranslations("testimonials");
  const testimonials = tr.raw("items") as Testimonial[];
  return (
  <section
    id="depoimentos"
    aria-labelledby="depoimentos-heading"
    className="border-t border-line py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="depoimentos-heading"
        eyebrow={tr("eyebrow")}
        a={tr("a")}
        b={tr("b")}
      />
      <ul className="m-0 grid list-none grid-cols-2 gap-5 p-0 max-[900px]:grid-cols-1">
        {testimonials.map((t, i) => (
          <li key={t.name} {...reveal(i % 2)}>
            <Card className="tr-card flex h-full flex-col gap-5 rounded-[10px] border-line bg-card p-7 shadow-none">
              <div className="flex items-center justify-between">
                <Quote aria-hidden="true" className="tr-card-icon size-8 text-glow" />
                <span className="flex gap-1" role="img" aria-label={tr("rating")}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} aria-hidden="true" className="size-4 fill-accent text-accent" />
                  ))}
                </span>
              </div>
              <blockquote className="m-0 flex-1 text-[17px] leading-[1.6] text-ink-body">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-line pt-5">
                <Avatar className="size-11 border-2 border-glow">
                  <AvatarFallback className="bg-surface font-display font-bold text-accent">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="m-0 font-display text-lg font-bold uppercase tracking-[1px] text-ink">
                    {t.name}
                  </p>
                  <p className="m-0 text-sm text-ink-subtle">
                    {t.role} · {t.business}
                  </p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  </section>
  );
};

export default Testimonials;
