import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>
          <Code2 className="w-6 h-6 text-primary" />
          Trably Software
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
          <a href="#" className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
