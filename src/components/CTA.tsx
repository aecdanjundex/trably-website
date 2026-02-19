import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl border border-border bg-gradient-card p-12 sm:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Tem um projeto em mente?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Entre em contato e vamos transformar sua ideia em uma solução digital de alto nível.
            </p>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold text-base px-8 py-6 shadow-glow hover:opacity-90 transition-opacity">
              Falar com a equipe
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
