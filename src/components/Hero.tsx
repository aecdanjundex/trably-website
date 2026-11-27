import { Bot, Check, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";
import { ContactButton } from "@/components/contact/ContactButton";
import { WhatsAppIcon } from "@/components/site/icons";
import { Container, GridBackground } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

const stats = [
  { value: "18", unit: "anos", label: "de engenharia de software" },
  { value: "+30", unit: "", label: "projetos em produção" },
  { value: "100%", unit: "", label: "sob medida" },
];

const steps = [
  { label: "Lead recebido pelo WhatsApp", state: "done" },
  { label: "Agente qualifica e consulta o CRM", state: "done" },
  { label: "Proposta gerada e enviada", state: "on" },
  { label: "Follow-up agendado", state: "next" },
] as const;

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Mockup do agente de IA trabalhando (decorativo). */
function AgentPanel() {
  return (
    <Card
      aria-hidden="true"
      className="tr-in-rise w-full overflow-hidden rounded-[10px] border-line bg-card shadow-[var(--shadow-modal)]"
      style={d(500)}
    >
      <div className="flex items-center justify-between border-b border-line bg-surface px-5 py-3.5">
        <span className="flex items-center gap-2.5 font-display text-[15px] font-bold uppercase tracking-[2px] text-ink">
          <Bot className="size-[18px] text-accent" />
          Agente comercial
        </span>
        <span className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[2px] text-eyebrow">
          <span className="tr-pulse size-2 rounded-full bg-accent" />
          Online
        </span>
      </div>
      <ol className="m-0 flex list-none flex-col gap-0 p-5">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className="tr-in-rise relative flex items-center gap-3.5 py-2.5"
            style={d(700 + i * 160)}
          >
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full border-2",
                s.state === "done" && "border-accent bg-accent text-on-accent",
                s.state === "on" && "tr-pulse border-accent text-accent",
                s.state === "next" && "border-line-strong text-ink-subtle",
              )}
            >
              {s.state === "done" ? <Check className="size-4" /> : null}
              {s.state === "on" ? <span className="size-2.5 rounded-full bg-accent" /> : null}
            </span>
            <span
              className={cn(
                "text-[15px]",
                s.state === "next" ? "text-ink-subtle" : "text-ink-body",
                s.state === "on" && "font-semibold text-ink",
              )}
            >
              {s.label}
            </span>
          </li>
        ))}
      </ol>
      <div className="border-t border-line px-5 py-4 font-mono text-[13px] text-ink-muted">
        <span className="text-accent">$</span> proposta.enviar(cliente)
        <span className="tr-caret ml-0.5 inline-block h-[1em] w-2 translate-y-[2px] bg-accent" />
      </div>
    </Card>
  );
}

const Hero = () => (
  <section id="inicio" aria-labelledby="hero-heading" className="relative overflow-hidden">
    <GridBackground />
    <Container className="flex flex-wrap items-center gap-14 py-[110px] max-[760px]:py-16">
      <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-6">
        <p className="tr-in-fade ds-eyebrow">Software · IA · Consultoria cripto</p>
        {/* h1 e lead não animam: são o LCP */}
        <h1
          id="hero-heading"
          className="m-0 text-[clamp(52px,7vw,96px)] font-bold uppercase leading-[0.95] text-ink [word-break:break-word]"
        >
          Ideias viram <span className="text-accent">produtos que escalam</span>
        </h1>
        <div aria-hidden="true" className="tr-in-draw h-[5px] w-[72px] bg-glow" style={d(250)} />
        <p className="m-0 max-w-[580px] text-[21px] leading-[1.6] text-ink-muted">
          Há 18 anos projetamos e desenvolvemos sistemas, plataformas e agentes de IA sob medida —
          da arquitetura ao deploy — e damos consultoria para operar cripto dentro da regulação do
          Banco Central.
        </p>
        <div className="tr-in-rise mt-2 flex flex-wrap gap-4" style={d(450)}>
          <ContactButton>Solicitar orçamento</ContactButton>
          <Button asChild variant="brandOutline" size="xl">
            <a href={whatsappLink("Olá! Vim pelo site da Trably.")} target="_blank" rel="noopener">
              <WhatsAppIcon className="text-eyebrow" />
              WhatsApp
            </a>
          </Button>
        </div>
        <p className="tr-in-fade m-0 flex items-center gap-2 text-sm text-ink-subtle" style={d(600)}>
          <ShieldCheck aria-hidden="true" className="size-4 text-accent" />
          Orçamento gratuito e sem compromisso
        </p>
      </div>
      <div className="flex min-w-0 max-w-[460px] flex-[1_1_360px]">
        <AgentPanel />
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

export default Hero;
