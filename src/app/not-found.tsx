import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 px-6 text-center">
        <p className="text-7xl font-bold tracking-tight text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          Página não encontrada
        </h1>
        <p className="mt-2 text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
