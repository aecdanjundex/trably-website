import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/components/navLinks";
import { WhatsAppIcon } from "@/components/site/icons";
import { siteConfig, whatsappLink } from "@/lib/site";

const link =
  "inline-flex min-h-11 items-center gap-2 font-display text-[15px] font-bold uppercase tracking-[1.5px] text-ink no-underline hover:text-accent";

const Footer = () => (
  <footer className="border-t border-line bg-deep">
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-10 px-8 pb-8 pt-12 max-[760px]:flex-col max-[760px]:items-center max-[760px]:px-4 max-[760px]:text-center">
      <div className="flex max-w-sm flex-col gap-4 max-[760px]:items-center">
        <Logo size={56} stroke="hsl(var(--deep))" className="self-start max-[760px]:self-center" />
        <p className="m-0 text-[15px] leading-relaxed text-ink-muted">
          Engenharia de software sob medida, agentes de IA e consultoria cripto. Projetamos,
          construímos e mantemos sistemas que ajudam negócios a crescer.
        </p>
      </div>
      <nav aria-label="Rodapé" className="flex flex-col gap-0.5 max-[760px]:items-center">
        <span className="ds-label mb-1">Navegação</span>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className={link}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex flex-col gap-0.5 max-[760px]:items-center">
        <span className="ds-label mb-1">Contato</span>
        <a href={whatsappLink("Olá! Vim pelo site da Trably.")} target="_blank" rel="noopener" className={link}>
          <WhatsAppIcon size={16} className="text-accent" />
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className={`${link} normal-case tracking-[0.5px]`}>
          <Mail aria-hidden="true" className="size-4 text-accent" />
          {siteConfig.email}
        </a>
      </div>
    </div>
    <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 border-t border-line px-8 pb-6 pt-[18px] max-[760px]:flex-col max-[760px]:items-center max-[760px]:px-4">
      <p className="m-0 text-sm text-ink-subtle">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </p>
      <p className="m-0 text-sm text-ink-subtle">CNPJ {siteConfig.cnpj}</p>
    </div>
  </footer>
);

export default Footer;
