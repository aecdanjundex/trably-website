import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { GridBackground } from "@/components/site/ui";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ground">
      <GridBackground />
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
        <Logo size={48} />
        <p className="m-0 font-display text-[clamp(96px,16vw,180px)] font-bold leading-none text-accent">404</p>
        <h1 className="m-0 text-[clamp(32px,4vw,48px)] font-bold uppercase leading-none">{t("title")}</h1>
        <div aria-hidden="true" className="h-1 w-16 bg-glow" />
        <p className="m-0 text-lg text-ink-muted">{t("text")}</p>
        <Button asChild variant="brandOutline" size="xl" className="mt-2">
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            {t("back")}
          </Link>
        </Button>
      </div>
    </main>
  );
}
