"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeInfo, routing } from "@/i18n/routing";

/** Troca o idioma mantendo a âncora; o proxy grava a escolha no cookie TRABLY_LOCALE. */
export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          aria-label={`${t("language")}: ${localeInfo[locale].label}`}
          disabled={pending}
          className="h-11 gap-2 rounded-full border-line-strong bg-card px-3 font-display text-[15px] font-bold tracking-[1px] text-ink-body hover:bg-surface hover:text-ink [&_svg]:size-[18px]"
        >
          <Globe aria-hidden="true" className="text-accent" />
          {localeInfo[locale].short}
          <ChevronDown aria-hidden="true" className="!size-3.5 text-ink-muted" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 border-line bg-card">
        <DropdownMenuLabel className="ds-label">{t("language")}</DropdownMenuLabel>
        {routing.locales.map((l) => (
          <DropdownMenuItem
            key={l}
            lang={localeInfo[l].htmlLang}
            onSelect={() =>
              startTransition(() => {
                router.replace(`${pathname}${window.location.hash}`, { locale: l, scroll: false });
              })
            }
            className="flex min-h-11 cursor-pointer items-center justify-between font-display text-base font-semibold uppercase tracking-[1px] text-ink-body focus:bg-surface focus:text-ink"
          >
            {localeInfo[l].label}
            {l === locale ? <Check aria-hidden="true" className="size-4 text-accent" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
