"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const t = useTranslations("common");
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={t("theme")}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="size-11 rounded-full border-line-strong bg-card text-ink-body hover:bg-surface hover:text-accent [&_svg]:size-[18px]"
    >
      {/* Os dois ícones renderizam; o CSS escolhe pela classe do <html> (sem mismatch de hidratação). */}
      <Sun aria-hidden="true" className="block [.light_&]:hidden" />
      <Moon aria-hidden="true" className="hidden [.light_&]:block" />
    </Button>
  );
};

export default ThemeToggle;
