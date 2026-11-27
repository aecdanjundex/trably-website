import { CheckCircle, Mail, MessageSquare, Zap } from "lucide-react";
import { ContactButton } from "@/components/contact/ContactButton";
import { reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/site/icons";
import { Container } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { whatsappLink, siteConfig } from "@/lib/site";

const highlights = [
  { icon: Zap, text: "Desenvolvimento ágil, com entregas previsíveis" },
  { icon: CheckCircle, text: "Suporte contínuo e evolução pós-lançamento" },
  { icon: MessageSquare, text: "Comunicação transparente em cada etapa" },
];

const nextSteps = [
  {
    title: "Você conta a ideia",
    text: "Pelo formulário ou pelo WhatsApp, do jeito que estiver — sem precisar de documento pronto.",
  },
  {
    title: "Entendemos o escopo",
    text: "Uma conversa para entender o negócio, o problema e as restrições, inclusive regulatórias.",
  },
  {
    title: "Você recebe a proposta",
    text: "Escopo, cronograma e investimento detalhados. Gratuito e sem compromisso.",
  },
];

/** Painel ao lado da chamada final: próximos passos + canais diretos. */
function NextSteps() {
  return (
    <div className="flex flex-col gap-6 border-l border-line bg-card/80 p-12 max-[900px]:border-l-0 max-[900px]:border-t max-[760px]:p-6">
      <div className="flex items-baseline justify-between border-b-[3px] border-accent pb-3.5">
        <p className="m-0 font-display text-[22px] font-bold uppercase tracking-[3px] text-ink">
          Próximos passos
        </p>
        <p className="m-0 font-display text-sm font-semibold uppercase tracking-[3px] text-eyebrow">
          Orçamento grátis
        </p>
      </div>
      <ol className="relative m-0 flex list-none flex-col gap-6 p-0">
        <div
          aria-hidden="true"
          className="absolute bottom-5 left-[21px] top-5 w-[2px] bg-line-strong"
        />
        {nextSteps.map((s, i) => (
          <li key={s.title} {...reveal(i + 1, "left")} className="relative flex items-start gap-4">
            <span
              className={`relative z-[1] flex size-11 shrink-0 items-center justify-center rounded-full border-2 font-display text-lg font-bold ${
                i === 0 ? "tr-pulse border-accent bg-accent text-on-accent" : "border-accent bg-card text-accent"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex min-w-0 flex-col gap-1 pt-1">
              <strong className="font-display text-xl font-bold uppercase tracking-[1px] text-ink">
                {s.title}
              </strong>
              <span className="text-base leading-[1.55] text-ink-muted">{s.text}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-auto flex flex-col gap-1 border-t border-line pt-5">
        <span className="ds-label mb-1">Fale direto</span>
        <a
          href={whatsappLink("Olá! Vim pelo site da Trably.")}
          target="_blank"
          rel="noopener"
          className="tr-row -mx-2 flex min-h-11 items-center gap-3 rounded-md px-2 font-display text-lg font-bold uppercase tracking-[1.5px] text-ink no-underline hover:text-accent"
        >
          <WhatsAppIcon size={18} className="tr-row-icon text-accent" />
          {siteConfig.phone}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="tr-row -mx-2 flex min-h-11 items-center gap-3 rounded-md px-2 text-base font-semibold text-ink no-underline hover:text-accent"
        >
          <Mail aria-hidden="true" className="tr-row-icon size-[18px] text-accent" />
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}

const CTA = () => (
  <section id="contato" aria-labelledby="contato-heading" className="border-t border-line py-[110px] max-[760px]:py-16">
    <Container>
      <div
        {...reveal(0, "rise")}
        className="ds-hatch grid grid-cols-2 overflow-hidden rounded-[10px] border border-line max-[900px]:grid-cols-1"
      >
        <div className="flex flex-col gap-5 p-12 max-[760px]:p-6">
          <p className="ds-eyebrow">Vamos conversar</p>
          <h2
            id="contato-heading"
            className="m-0 text-[clamp(40px,5vw,64px)] font-bold uppercase leading-none text-ink"
          >
            Pronto para tirar seu projeto <span className="text-accent">do papel?</span>
          </h2>
          <div aria-hidden="true" className="h-1 w-16 bg-glow" {...reveal(1, "rule")} />
          <p className="m-0 max-w-md text-[19px] leading-[1.6] text-ink-muted">
            Conte sua ideia e desenhamos a solução ideal para o seu negócio. Da estratégia ao deploy,
            com 18 anos de experiência cuidando de cada detalhe.
          </p>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {highlights.map((h, i) => (
              <li key={h.text} {...reveal(i + 2)} className="flex items-center gap-3 text-base text-ink-body">
                <h.icon aria-hidden="true" className="size-5 shrink-0 text-accent" />
                {h.text}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-4">
            <ContactButton>Falar com a equipe</ContactButton>
            <Button asChild variant="brandOutline" size="xl">
              <a href={whatsappLink("Olá! Vim pelo site da Trably.")} target="_blank" rel="noopener">
                <WhatsAppIcon className="text-eyebrow" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <NextSteps />
      </div>
    </Container>
  </section>
);

export default CTA;
