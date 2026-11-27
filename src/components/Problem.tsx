import { Check, Clock3, Puzzle, ServerCrash, TriangleAlert, Unplug } from "lucide-react";
import { useTranslations } from "next-intl";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Card } from "@/components/ui/card";

const painIcons = [Puzzle, Clock3, ServerCrash, Unplug];


type Pain = { title: string; text: string };

const Problem = () => {
  const t = useTranslations("problem");
  const pains = (t.raw("pains") as Pain[]).map((p, i) => ({ ...p, icon: painIcons[i] }));
  const fixes = t.raw("fixes") as string[];
  return (
  <section
    id="problema"
    aria-labelledby="problema-heading"
    className="border-t border-line py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="problema-heading"
        eyebrow={t("eyebrow")}
        a={t("a")}
        b={t("b")}
        lead={t("lead")}
      />

      <div className="flex flex-wrap items-stretch gap-8">
        <ul className="m-0 flex min-w-0 flex-[1_1_480px] list-none flex-col rounded-[10px] border border-line bg-surface p-0 px-8 pb-2 max-[760px]:px-4">
          <li className="flex items-baseline justify-between border-b-[3px] border-glow pb-3.5 pt-5">
            <span className="font-display text-[22px] font-bold uppercase tracking-[3px] text-ink">
              {t("symptoms")}
            </span>
            <TriangleAlert aria-hidden="true" className="size-5 text-eyebrow" />
          </li>
          {pains.map((p, i) => (
            <li
              key={p.title}
              {...reveal(i, "left")}
              className="tr-row flex items-center gap-[18px] border-b border-line-strong py-[18px] last:border-b-0"
            >
              <span className="tr-row-icon flex size-[52px] shrink-0 items-center justify-center rounded-md bg-line text-eyebrow">
                <p.icon aria-hidden="true" className="size-[26px]" />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <strong className="font-display text-xl font-bold uppercase tracking-[1px] text-ink">
                  {p.title}
                </strong>
                <span className="text-base leading-[1.5] text-ink-muted">{p.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <Card
          {...reveal(1, "rise")}
          className="flex min-w-0 flex-[1_1_380px] flex-col gap-5 rounded-[10px] border-2 border-accent bg-card p-8 shadow-none max-[760px]:p-5"
        >
          <p className="ds-eyebrow">{t("fixEyebrow")}</p>
          <p className="m-0 font-display text-[clamp(30px,3.4vw,44px)] font-bold uppercase leading-[1.02] text-ink">
            {t("fixA")} <span className="text-accent">{t("fixB")}</span>
          </p>
          <div aria-hidden="true" className="h-1 w-16 bg-glow" {...reveal(2, "rule")} />
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {fixes.map((f, i) => (
              <li key={f} {...reveal(i + 2)} className="flex items-start gap-3 text-[17px] leading-normal text-ink-body">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Container>
  </section>
  );
};

export default Problem;
