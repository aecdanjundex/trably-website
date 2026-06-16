const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#depoimentos", label: "Clientes" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div
              className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
                T
              </span>
              Trably
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Engenharia de software sob medida. Projetamos, construímos e
              mantemos sistemas que ajudam negócios a crescer.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              Navegação
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Trably Software. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ 60.510.809/0001-95
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
