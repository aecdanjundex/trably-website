import { Code2, Compass, LifeBuoy, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";

const icons = [Compass, Code2, Rocket, LifeBuoy];

type Step = { title: string; text: string };

const Process = () => {
  const t = useTranslations("process");
  const steps = (t.raw("steps") as Step[]).map((st, i) => ({ ...st, icon: icons[i] }));
  return (
  <section
    id="processo"
    aria-labelledby="processo-heading"
    className="border-t border-line py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-14">
      <SectionHead
        id="processo-heading"
        eyebrow={t("eyebrow")}
        a={t("a")}
        b={t("b")}
        lead={t("lead")}
      />
      <ol className="relative m-0 grid list-none grid-cols-4 gap-6 p-0 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div
          aria-hidden="true"
          {...reveal(0, "rule")}
          className="absolute left-0 right-0 top-[27px] h-[3px] bg-line-strong max-[900px]:hidden"
        />
        {steps.map((s, i) => (
          <li key={s.title} {...reveal(i + 1)} className="relative flex flex-col gap-3.5">
            <span className="relative z-[1] flex size-14 items-center justify-center rounded-full border-2 border-accent bg-ground text-accent">
              <s.icon aria-hidden="true" className="size-6" />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[3px] text-eyebrow">
              {t("step")} {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-display text-[26px] font-bold uppercase leading-none tracking-[1px] text-ink">
              {s.title}
            </h3>
            <p className="m-0 text-base leading-[1.55] text-ink-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
  );
};

export default Process;
