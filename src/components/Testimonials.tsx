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
    <section id="depoimentos" className="relative border-t border-border px-6 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary">
            Clientes
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A confiança de quem cresceu com a gente
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resultados reais de empresas que confiaram na Trably para
            transformar seus negócios com tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="group border-border bg-gradient-card shadow-card transition-colors duration-300 hover:border-primary/40"
            >
              <CardContent className="flex h-full flex-col p-8">
                <Quote className="mb-4 h-7 w-7 text-primary/40" />

                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mb-5 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-border pt-5">
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
