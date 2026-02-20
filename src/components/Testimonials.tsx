import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Pedro",
    business: "Barbearia Real",
    initials: "PR",
    role: "Proprietário",
    text: "A Trably transformou completamente a gestão da minha barbearia. Antes eu perdia clientes por falta de organização nos agendamentos. Hoje, com o sistema personalizado que desenvolveram, meus clientes agendam online com facilidade e recebem notificações automáticas. Reduzi as faltas em 70% e minha agenda está sempre cheia. Foi o melhor investimento que fiz pro meu negócio.",
    rating: 5,
  },
  {
    name: "Rômulo",
    business: "Frio Eletromáquinas",
    initials: "RF",
    role: "Diretor Comercial",
    text: "Precisávamos de uma presença digital profissional para captar clientes através de tráfego pago. A Trably criou uma landing page que converte de verdade. Em menos de dois meses, triplicamos o número de contatos qualificados e nosso custo por lead caiu pela metade. A equipe entendeu exatamente o que precisávamos e entregou além das expectativas.",
    rating: 5,
  },
  {
    name: "João",
    business: "NFT Marketplace",
    initials: "JO",
    role: "Fundador da Comunidade",
    text: "Criar um marketplace de NFTs do zero parecia impossível até conhecer a Trably. Eles desenvolveram toda a plataforma de minting e negociação de NFTs para minha comunidade. O sistema é rápido, seguro e intuitivo. Conseguimos lançar nossa coleção inicial com sucesso e hoje temos uma comunidade ativa negociando dentro da plataforma. Recomendo demais!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-primary mb-4 block">
            Prova Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na Trably para transformar seus negócios com tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-gradient-card border-border/50 shadow-card group hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-border/50">
                  <Avatar className="h-11 w-11 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.business}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
