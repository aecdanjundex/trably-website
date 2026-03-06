import { ArrowRight, CheckCircle, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ctaImage from "@/assets/cta-image.png";

const highlights = [
  { icon: Zap, text: "Desenvolvimento ágil e entregas rápidas" },
  { icon: CheckCircle, text: "Suporte contínuo pós-lançamento" },
  { icon: MessageSquare, text: "Comunicação transparente em cada etapa" },
];

interface CTAProps {
  onContactClick: () => void;
}

const CTA = ({ onContactClick }: CTAProps) => {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl border border-border bg-gradient-card overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-10 sm:p-14 flex flex-col justify-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Vamos conversar
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Tem um projeto em mente?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Entre em contato e vamos transformar sua ideia em uma solução
                digital de alto nível. Da concepção ao deploy, cuidamos de tudo.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <item.icon className="w-4 h-4 text-primary shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>

              <div>
                <Button
                  size="lg"
                  onClick={onContactClick}
                  className="bg-gradient-primary text-primary-foreground font-semibold text-base px-8 py-6 shadow-glow hover:opacity-90 transition-opacity"
                >
                  Falar com a equipe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block relative">
              <Image
                src={ctaImage}
                alt="Equipe desenvolvendo soluções digitais"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
