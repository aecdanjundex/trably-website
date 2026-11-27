import { reveal } from "@/components/motion/reveal";
import { Container, SectionHead } from "@/components/site/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/lib/site";

const FAQ = () => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className="border-t border-line bg-surface py-[110px] max-[760px]:py-16"
  >
    <Container className="flex flex-wrap items-start gap-14">
      <SectionHead
        id="faq-heading"
        className="flex-[1_1_340px]"
        eyebrow="Dúvidas"
        a="Perguntas"
        b="frequentes"
        lead="Não achou o que procurava? Fale com a gente pelo WhatsApp."
      />
      <div {...reveal(1)} className="min-w-0 flex-[1_1_520px]">
        <Accordion type="single" collapsible className="w-full border-t border-line-strong">
          {faq.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`} className="border-line-strong">
              <AccordionTrigger className="gap-4 py-5 text-left font-display text-xl font-bold uppercase leading-tight tracking-[1px] text-ink hover:text-accent hover:no-underline [&>svg]:size-5 [&>svg]:text-accent">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-[1.65] text-ink-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  </section>
);

export default FAQ;
