"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

interface NavbarProps {
  onContactClick: () => void;
}

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#depoimentos", label: "Clientes" },
];

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Trably — página inicial"
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
            T
          </span>
          Trably
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="mr-2 hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            onClick={onContactClick}
            className="ml-1 rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
