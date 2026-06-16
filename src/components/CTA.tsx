import { ArrowRight, CheckCircle, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ctaImage from "@/assets/cta-image.png";

const highlights = [
  { icon: Zap, text: "Desenvolvimento ágil e entregas previsíveis" },
  { icon: CheckCircle, text: "Suporte contínuo pós-lançamento" },
  { icon: MessageSquare, text: "Comunicação transparente em cada etapa" },
];

interface CTAProps {
  onContactClick: () => void;
}

const CTA = ({ onContactClick }: CTAProps) => {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-elevated">
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 sm:p-14">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Vamos conversar
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Tem um projeto em mente?
              </h2>
              <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                Entre em contato e vamos transformar sua ideia em uma solução
                digital de alto nível. Da concepção ao deploy, cuidamos de tudo.
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
                alt="Equipe desenvolvendo soluções digitais"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
