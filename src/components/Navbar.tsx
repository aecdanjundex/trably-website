"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/components/navLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { ContactButton } from "@/components/contact/ContactButton";
import { WhatsAppIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";


const linkCls =
  "font-display text-base font-semibold uppercase tracking-[2px] text-ink-body no-underline transition-colors hover:text-accent";

const Navbar = () => {
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
        aria-label="Principal"
        className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6 px-8 max-[760px]:px-4"
      >
        <Link href="/" aria-label="Trably Software — página inicial" className="no-underline">
          <Logo size={34} animated />
        </Link>

        <ul className="m-0 hidden list-none items-center gap-7 p-0 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkCls}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <ContactButton size="nav" arrow={false}>
            Orçamento
          </ContactButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Abrir menu"
                className="size-12 border-line-strong bg-card text-ink [&_svg]:size-6"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100vw,334px)] flex-col gap-4 border-line bg-ground">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo size={44} className="self-start" />
              <ul className="m-0 flex list-none flex-col p-0">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <a
                        href={l.href}
                        className={cn(linkCls, "flex min-h-[54px] items-center text-xl")}
                      >
                        {l.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <SheetClose asChild>
                  <ContactButton>Solicitar orçamento</ContactButton>
                </SheetClose>
                <Button asChild variant="brandOutline" size="xl">
                  <a href={whatsappLink("Olá! Vim pelo site da Trably.")} target="_blank" rel="noopener">
                    <WhatsAppIcon className="text-eyebrow" />
                    WhatsApp
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
