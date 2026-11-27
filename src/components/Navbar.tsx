"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/components/navLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { ContactButton } from "@/components/contact/ContactButton";
import { WhatsAppIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";


const linkCls =
  "font-display text-base font-semibold uppercase tracking-[2px] text-ink-body no-underline transition-colors hover:text-accent";

const Navbar = () => {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line bg-ground/85 backdrop-blur-xl" : "border-transparent bg-ground",
      )}
    >
      <nav
        aria-label={t("common.navMain")}
        className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6 px-8 max-[760px]:px-4"
      >
        <Link href="/" aria-label={t("common.home")} className="no-underline">
          <Logo size={34} animated />
        </Link>

        <ul className="m-0 hidden list-none items-center gap-7 p-0 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkCls}>
                {t(`nav.${l.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <ContactButton size="nav" arrow={false}>
            {t("common.quote")}
          </ContactButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label={t("common.openMenu")}
                className="size-12 border-line-strong bg-card text-ink [&_svg]:size-6"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100vw,334px)] flex-col gap-4 border-line bg-ground">
              <SheetTitle className="sr-only">{t("common.menu")}</SheetTitle>
              <Logo size={44} className="self-start" />
              <ul className="m-0 flex list-none flex-col p-0">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a
                        href={l.href}
                        className={cn(linkCls, "flex min-h-[54px] items-center text-xl")}
                      >
                        {t(`nav.${l.key}`)}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex justify-end">
                  <ThemeToggle />
                </div>
                <SheetClose asChild>
                  <ContactButton>{t("common.requestQuote")}</ContactButton>
                </SheetClose>
                <Button asChild variant="brandOutline" size="xl">
                  <a href={whatsappLink(t("common.whatsappMsg"))} target="_blank" rel="noopener">
                    <WhatsAppIcon className="text-eyebrow" />
                    {t("common.whatsapp")}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
