import { ArrowRight, CheckCircle, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ctaImage from "@/assets/cta-image.png";
import { Reveal } from "@/components/motion/Reveal";

const highlights = [
  { icon: Zap, text: "Desenvolvimento ágil, com entregas previsíveis" },
  { icon: CheckCircle, text: "Suporte contínuo e evolução pós-lançamento" },
  { icon: MessageSquare, text: "Comunicação transparente em cada etapa" },
];

interface CTAProps {
  onContactClick: () => void;
}

const CTA = ({ onContactClick }: CTAProps) => {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-elevated">
            <div className="absolute inset-0 bg-gradient-hero opacity-70" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-10 sm:p-14">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                  Vamos conversar
                </p>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Pronto para tirar seu projeto do papel?
                </h2>
                <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                  Conte sua ideia e desenhamos a solução ideal para o seu
                  negócio. Da estratégia ao deploy, com 18 anos de experiência
                  cuidando de cada detalhe.
                </p>

                <ul className="mb-8 space-y-3">
                  {highlights.map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-primary" />
                      {item.text}
                    </li>
                  ))}
                </ul>

                <div>
                  <Button
                    size="lg"
                    onClick={onContactClick}
                    className="bg-gradient-primary px-8 py-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Falar com a equipe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <Image
                  src={ctaImage}
                  alt="Equipe da Trably desenvolvendo soluções digitais"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
