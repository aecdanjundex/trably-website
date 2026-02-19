import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-8 backdrop-blur-sm">
          <Code2 className="w-4 h-4 text-primary" />
          Software sob demanda
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          Transformamos suas
          <br />
          <span className="text-gradient">ideias em software</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvemos sistemas completos, landing pages, sites institucionais e soluções digitais personalizadas para o seu negócio crescer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold text-base px-8 py-6 shadow-glow hover:opacity-90 transition-opacity">
            Solicitar orçamento
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 py-6 hover:bg-secondary transition-colors">
            Ver projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
