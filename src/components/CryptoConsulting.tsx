import { ArrowRight, BadgeCheck, Building2, FileCheck2, Landmark, Scale, ShieldCheck, Wallet } from "lucide-react";
import { reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/site/icons";
import { Container, SectionHead } from "@/components/site/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsappLink } from "@/lib/site";

const resolutions = [
  {
    n: "519",
    title: "Autorização",
    text: "Processo de autorização do Banco Central para quem presta serviços de ativos virtuais: requisitos, documentação e etapas do pedido.",
  },
  {
    n: "520",
    title: "Constituição e funcionamento",
    text: "Regras para as SPSAVs: governança, capital, segregação patrimonial, custódia, PLD/FT, segurança cibernética e proteção ao cliente.",
  },
  {
    n: "521",
    title: "Câmbio e capitais",
    text: "Operações com ativos virtuais tratadas como câmbio e capitais internacionais — stablecoins, transferências e pagamentos com o exterior.",
  },
];

const roadmap = [
  {
    icon: Scale,
    title: "Modelo e enquadramento",
    text: "Definimos o que a operação vai fazer — intermediação, custódia ou corretora — e em qual modalidade de SPSAV ela se enquadra.",
  },
  {
    icon: Building2,
    title: "Estrutura societária",
    text: "Constituição da empresa, capital, governança e diretores responsáveis exigidos pela Resolução BCB 520.",
  },
  {
    icon: Landmark,
    title: "Autorização no BCB",
    text: "Plano de negócios, políticas internas e dossiê do pedido de autorização conforme a Resolução BCB 519.",
  },
  {
    icon: FileCheck2,
    title: "Compliance e PLD/FT",
    text: "KYC/KYB, monitoramento de transações, travel rule, prevenção à lavagem de dinheiro e reportes regulatórios.",
  },
  {
    icon: Wallet,
    title: "Tecnologia da corretora",
    text: "Order book ou liquidez integrada, carteiras com custódia segregada (hot/cold, MPC), Pix, APIs e back-office.",
  },
  {
    icon: ShieldCheck,
    title: "Operação segura",
    text: "Segurança cibernética, gestão de riscos, auditoria, plano de continuidade e evolução contínua depois do go-live.",
  },
];

const CryptoConsulting = () => (
  <section
    id="consultoria-cripto"
    aria-labelledby="cripto-heading"
    className="relative border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-col gap-14">
      <div className="flex flex-wrap items-end gap-10">
        <SectionHead
          id="cripto-heading"
          className="flex-[1_1_520px]"
          eyebrow="Consultoria cripto · Banco Central"
          a="Sua operação cripto dentro da"
          b="regulação do BCB"
          lead={
            <>
              As Resoluções BCB 519, 520 e 521, que regulamentam o marco legal dos criptoativos (Lei
              14.478/2022), estão em vigor desde 2 de fevereiro de 2026. Quem intermedeia, custodia
              ou faz câmbio com ativos virtuais precisa de autorização do Banco Central como SPSAV.
              Damos consultoria para você chegar lá — da leitura das normas ao sistema rodando.
            </>
          }
        />
        <div {...reveal(4)} className="flex flex-[0_1_auto] flex-col gap-3 max-[760px]:w-full">
          <Button asChild variant="brand" size="xl">
            <a
              href={whatsappLink("Olá! Quero falar sobre consultoria cripto e a regulação do Banco Central.")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Falar sobre consultoria
              <ArrowRight aria-hidden="true" className="tr-arrow" />
            </a>
          </Button>
          <p className="m-0 text-sm text-ink-subtle">Atendimento direto pelo WhatsApp (84) 98778-2431</p>
        </div>
      </div>

      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 p-0">
        {resolutions.map((r, i) => (
          <li key={r.n} {...reveal(i)}>
            <Card className="tr-card flex h-full flex-col gap-3 rounded-[10px] border-0 border-l-[5px] border-glow bg-card p-6 shadow-none">
              <p className="m-0 font-display text-sm font-semibold uppercase tracking-[3px] text-eyebrow">
                Resolução BCB
              </p>
              <p className="m-0 font-display text-[44px] font-bold leading-none text-ink">
                {r.n}
                <span className="text-2xl text-ink-subtle">/2025</span>
              </p>
              <h3 className="m-0 font-display text-xl font-bold uppercase tracking-[1px] text-accent">
                {r.title}
              </h3>
              <p className="m-0 text-base leading-[1.55] text-ink-muted">{r.text}</p>
            </Card>
          </li>
        ))}
      </ul>

      <Card
        {...reveal(0, "rise")}
        className="flex items-start gap-[18px] rounded-[10px] border-2 border-accent bg-card p-7 shadow-none max-[760px]:flex-col max-[760px]:p-5"
      >
        <span className="flex size-[60px] shrink-0 items-center justify-center rounded-[10px] bg-accent text-on-accent">
          <BadgeCheck aria-hidden="true" className="size-[34px]" />
        </span>
        <div className="flex min-w-0 flex-col gap-2">
          <p className="m-0 font-display text-sm font-bold uppercase tracking-[3px] text-eyebrow">
            Know-how em regulação cripto
          </p>
          <p className="m-0 font-display text-[clamp(24px,2.6vw,32px)] font-bold uppercase leading-[1.05] text-ink">
            Sabemos como trabalhar com a regulamentação — na norma e no código
          </p>
          <p className="m-0 text-base leading-[1.6] text-ink-muted">
            Acompanhamos o marco legal dos criptoativos desde a Lei 14.478/2022 até as resoluções do
            Banco Central de 2026, e já construímos na prática o que elas exigem: dApps, marketplaces
            de NFT, infraestrutura bancária (BaaS) com KYC, custódia e trilhas de auditoria. Você
            fala com quem entende a exigência regulatória e sabe transformá-la em sistema, processo
            e política.
          </p>
        </div>
      </Card>

      <div className="ds-hatch rounded-[10px] border border-line p-9 max-[760px]:p-5">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b-[3px] border-accent pb-4">
          <h3 className="m-0 font-display text-[clamp(26px,3vw,36px)] font-bold uppercase leading-none text-ink">
            Como implementar uma corretora cripto do zero
          </h3>
          <Badge variant="tag">6 etapas</Badge>
        </div>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-0 max-[760px]:grid-cols-1">
          {roadmap.map((s, i) => (
            <li key={s.title} {...reveal(i)}>
              <Card className="tr-card flex h-full items-start gap-4 rounded-[10px] border-line bg-card p-5 shadow-none">
                <span className="tr-card-icon flex size-12 shrink-0 items-center justify-center rounded-md border-2 border-accent text-accent">
                  <s.icon aria-hidden="true" className="size-6" />
                </span>
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className="font-display text-sm font-bold uppercase tracking-[2px] text-eyebrow">
                    Etapa {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong className="font-display text-[21px] font-bold uppercase tracking-[1px] text-ink">
                    {s.title}
                  </strong>
                  <span className="text-base leading-[1.55] text-ink-muted">{s.text}</span>
                </span>
              </Card>
            </li>
          ))}
        </ol>
      </div>

      <p className="m-0 text-sm text-ink-subtle">
        Consultoria técnica e regulatória. Não substitui assessoria jurídica para a submissão formal
        ao Banco Central.
      </p>
    </Container>
  </section>
);

export default CryptoConsulting;
