import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import type { CSSProperties } from "react";
import { ContactButton } from "@/components/contact/ContactButton";
import { Showcase } from "@/components/hero/Showcase";
import { WhatsAppIcon } from "@/components/site/icons";
import { Container, GridBackground } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

type Stat = { value: string; unit: string; label: string };

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const Hero = () => {
  const t = useTranslations();
  const stats = t.raw("hero.stats") as Stat[];
  return (
    <section id="inicio" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <GridBackground />
      <Container className="flex flex-wrap items-center gap-14 py-[96px] max-[760px]:gap-10 max-[760px]:py-14">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
          <p className="tr-in-fade ds-eyebrow">{t("hero.eyebrow")}</p>
          {/* h1 e lead não animam: são o LCP */}
          <h1
            id="hero-heading"
            className="m-0 text-[clamp(52px,7vw,96px)] font-bold uppercase leading-[0.95] text-ink [word-break:break-word]"
          >
            {t("hero.h1a")} <span className="text-accent">{t("hero.h1b")}</span>
          </h1>
          <div aria-hidden="true" className="tr-in-draw h-[5px] w-[72px] bg-glow" style={d(250)} />
          <p className="m-0 max-w-[580px] text-[21px] leading-[1.6] text-ink-muted">{t("hero.lead")}</p>
          <div className="tr-in-rise mt-2 flex flex-wrap gap-4" style={d(450)}>
            <ContactButton>{t("common.requestQuote")}</ContactButton>
            <Button asChild variant="brandOutline" size="xl">
              <a href={whatsappLink(t("common.whatsappMsg"))} target="_blank" rel="noopener">
                <WhatsAppIcon className="text-eyebrow" />
                {t("common.whatsapp")}
              </a>
            </Button>
          </div>
          <p className="tr-in-fade m-0 flex items-center gap-2 text-sm text-ink-subtle" style={d(600)}>
            <ShieldCheck aria-hidden="true" className="size-4 text-accent" />
            {t("hero.guarantee")}
          </p>
        </div>
        <div className="flex min-w-0 max-w-[440px] flex-[1_1_360px] max-[760px]:max-w-none">
          <Showcase />
        </div>
      </Container>

      <div className="border-y border-line bg-surface">
        <Container>
          <dl className="m-0 grid grid-cols-3 divide-x divide-line max-[760px]:grid-cols-1 max-[760px]:divide-x-0 max-[760px]:divide-y">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3 px-6 py-7 first:pl-0 max-[760px]:px-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="m-0 flex items-baseline gap-3">
                  <span className="font-display text-[44px] font-bold leading-none text-ink">
                    {s.value}
                    {s.unit ? <span className="ml-1.5 text-2xl uppercase text-accent">{s.unit}</span> : null}
                  </span>
                  <span aria-hidden="true" className="font-display text-sm font-semibold uppercase tracking-[2px] text-label">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
