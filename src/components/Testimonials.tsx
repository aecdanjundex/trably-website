import { Quote, Star } from "lucide-react";
import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "José Ronilson Dantas",
    business: "JAMA Exploration",
    initials: "JR",
    role: "Diretor Comercial e Financeiro",
    text: "A Trably desenvolveu toda a plataforma da JAMA Exploration: o site institucional em três idiomas, o portal do cliente, o portal do fornecedor e o nosso painel interno. Hoje cotações, pedidos e catálogo ficam num só lugar, e nossos clientes acompanham tudo online. A equipe entendeu a operação de mineração e entregou um sistema sob medida, com a nossa cara.",
  },
  {
    name: "Pedro",
    business: "Barbearia Real",
    initials: "PR",
    role: "Proprietário",
    text: "A Trably transformou completamente a gestão da minha barbearia. Antes eu perdia clientes por falta de organização nos agendamentos. Hoje, com o sistema personalizado que desenvolveram, meus clientes agendam online com facilidade e recebem notificações automáticas. Reduzi as faltas em 70% e minha agenda está sempre cheia. Foi o melhor investimento que fiz pro meu negócio.",
  },
  {
    name: "Rômulo",
    business: "Frio Eletromáquinas",
    initials: "RF",
    role: "Diretor Comercial",
    text: "Precisávamos de uma presença digital profissional para captar clientes através de tráfego pago. A Trably criou uma landing page que converte de verdade. Em menos de dois meses, triplicamos o número de contatos qualificados e nosso custo por lead caiu pela metade. A equipe entendeu exatamente o que precisávamos e entregou além das expectativas.",
  },
  {
    name: "João",
    business: "NFT Marketplace",
    initials: "JO",
    role: "Fundador da Comunidade",
    text: "Criar um marketplace de NFTs do zero parecia impossível até conhecer a Trably. Eles desenvolveram toda a plataforma de minting e negociação de NFTs para minha comunidade. O sistema é rápido, seguro e intuitivo. Conseguimos lançar nossa coleção inicial com sucesso e hoje temos uma comunidade ativa negociando dentro da plataforma. Recomendo demais!",
  },
];

const Testimonials = () => (
  <section
    id="depoimentos"
    aria-labelledby="depoimentos-heading"
    className="border-t border-line py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-12">
      <SectionHead
        id="depoimentos-heading"
        eyebrow="Clientes"
        a="A confiança de quem"
        b="cresceu com a gente"
      />
      <ul className="m-0 grid list-none grid-cols-2 gap-5 p-0 max-[900px]:grid-cols-1">
        {testimonials.map((t, i) => (
          <li key={t.name} {...reveal(i % 2)}>
            <Card className="tr-card flex h-full flex-col gap-5 rounded-[10px] border-line bg-card p-7 shadow-none">
              <div className="flex items-center justify-between">
                <Quote aria-hidden="true" className="tr-card-icon size-8 text-glow" />
                <span className="flex gap-1" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} aria-hidden="true" className="size-4 fill-accent text-accent" />
                  ))}
                </span>
              </div>
              <blockquote className="m-0 flex-1 text-[17px] leading-[1.6] text-ink-body">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-line pt-5">
                <Avatar className="size-11 border-2 border-glow">
                  <AvatarFallback className="bg-surface font-display font-bold text-accent">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="m-0 font-display text-lg font-bold uppercase tracking-[1px] text-ink">
                    {t.name}
                  </p>
                  <p className="m-0 text-sm text-ink-subtle">
                    {t.role} · {t.business}
                  </p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Testimonials;
