import { CheckCircle, MessageSquare, Zap } from "lucide-react";
import Image from "next/image";
import ctaImage from "@/assets/cta-image.png";
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
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative min-h-[320px] max-[900px]:hidden">
          <Image
            src={ctaImage}
            alt="Equipe da Trably desenvolvendo soluções digitais"
            fill
            sizes="(max-width: 900px) 0px, 600px"
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ground via-ground/30 to-transparent" />
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;
