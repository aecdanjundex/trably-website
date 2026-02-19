import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
          <Code2 className="w-5 h-5 text-primary" />
          Trably Software
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Trably Software. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
