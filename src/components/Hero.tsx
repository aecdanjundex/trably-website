import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onContactClick: () => void;
}

const stats = [
  { value: "30+", label: "Projetos entregues" },
  { value: "8 anos", label: "De experiência" },
  { value: "100%", label: "Foco em resultado" },
];

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid" />

      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Engenharia de software sob medida
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Software de alto nível para
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient">negócios que querem escalar</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Projetamos e desenvolvemos sistemas, plataformas e aplicações sob
          medida — da arquitetura ao deploy — com a confiabilidade que o seu
          negócio precisa para crescer.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-gradient-primary px-8 py-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border px-8 py-6 text-base font-semibold transition-colors hover:bg-secondary"
          >
            <a href="#projetos">Ver projetos</a>
          </Button>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
