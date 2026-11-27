import { ArrowRight, BadgeCheck, Building2, FileCheck2, Landmark, Scale, ShieldCheck, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import { reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/site/icons";
import { Container, SectionHead } from "@/components/site/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsappLink } from "@/lib/site";

type Resolution = { n: string; title: string; text: string };
type Step = { title: string; text: string };

const roadmapIcons = [Scale, Building2, Landmark, FileCheck2, Wallet, ShieldCheck];

const CryptoConsulting = () => {
  const t = useTranslations("crypto");
  const resolutions = t.raw("resolutions") as Resolution[];
  const roadmap = (t.raw("roadmap") as Step[]).map((st, i) => ({ ...st, icon: roadmapIcons[i] }));
  return (
  <section
    id="consultoria-cripto"
    aria-labelledby="cripto-heading"
    className="relative border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-14">
      <div className="flex flex-wrap items-end gap-10">
        <SectionHead
          id="cripto-heading"
          className="flex-[1_1_520px]"
          eyebrow={t("eyebrow")}
          a={t("a")}
          b={t("b")}
          lead={t("lead")}
        />
        <div {...reveal(4)} className="flex flex-[0_1_auto] flex-col gap-3 max-[760px]:w-full">
          <Button asChild variant="brand" size="xl">
            <a
              href={whatsappLink(t("whatsappMsg"))}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              {t("cta")}
              <ArrowRight aria-hidden="true" className="tr-arrow" />
            </a>
          </Button>
          <p className="m-0 text-sm text-ink-subtle">{t("ctaNote")}</p>
        </div>
      </div>

      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 p-0">
        {resolutions.map((r, i) => (
          <li key={r.n} {...reveal(i)}>
            <Card className="tr-card flex h-full flex-col gap-3 rounded-[10px] border-0 border-l-[5px] border-glow bg-card p-6 shadow-none">
              <p className="m-0 font-display text-sm font-semibold uppercase tracking-[3px] text-eyebrow">
                {t("resolution")}
              </p>
              <p className="m-0 font-display text-[44px] font-bold leading-none text-ink">
                {r.n}
                <span className="text-2xl text-ink-subtle">/2025</span>
              </p>
              <h3 className="m-0 font-display text-xl font-bold uppercase tracking-[1px] text-accent">
                {r.title}
              </h3>
              <p className="m-0 text-base leading-[1.55] text-ink-muted">{r.text}</p>
            </Card>
          </li>
        ))}
      </ul>

      <Card
        {...reveal(0, "rise")}
        className="flex items-start gap-[18px] rounded-[10px] border-2 border-accent bg-card p-7 shadow-none max-[760px]:flex-col max-[760px]:p-5"
      >
        <span className="flex size-[60px] shrink-0 items-center justify-center rounded-[10px] bg-accent text-on-accent">
          <BadgeCheck aria-hidden="true" className="size-[34px]" />
        </span>
        <div className="flex min-w-0 flex-col gap-2">
          <p className="m-0 font-display text-sm font-bold uppercase tracking-[3px] text-eyebrow">
            {t("knowEyebrow")}
          </p>
          <p className="m-0 font-display text-[clamp(24px,2.6vw,32px)] font-bold uppercase leading-[1.05] text-ink">
            {t("knowTitle")}
          </p>
          <p className="m-0 text-base leading-[1.6] text-ink-muted">
            {t("knowText")}
          </p>
        </div>
      </Card>

      <div className="ds-hatch rounded-[10px] border border-line p-9 max-[760px]:p-5">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b-[3px] border-accent pb-4">
          <h3 className="m-0 font-display text-[clamp(26px,3vw,36px)] font-bold uppercase leading-none text-ink">
            {t("roadmapTitle")}
          </h3>
          <Badge variant="tag">{t("roadmapBadge")}</Badge>
        </div>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-0 max-[760px]:grid-cols-1">
          {roadmap.map((s, i) => (
            <li key={s.title} {...reveal(i)}>
              <Card className="tr-card flex h-full items-start gap-4 rounded-[10px] border-line bg-card p-5 shadow-none">
                <span className="tr-card-icon flex size-12 shrink-0 items-center justify-center rounded-md border-2 border-accent text-accent">
                  <s.icon aria-hidden="true" className="size-6" />
                </span>
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className="font-display text-sm font-bold uppercase tracking-[2px] text-eyebrow">
                    {t("step")} {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong className="font-display text-[21px] font-bold uppercase tracking-[1px] text-ink">
                    {s.title}
                  </strong>
                  <span className="text-base leading-[1.55] text-ink-muted">{s.text}</span>
                </span>
              </Card>
            </li>
          ))}
        </ol>
      </div>

      <p className="m-0 text-sm text-ink-subtle">
        {t("disclaimer")}
      </p>
    </Container>
  </section>
  );
};

export default CryptoConsulting;
