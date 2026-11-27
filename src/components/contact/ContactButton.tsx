"use client";

import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useContact } from "./ContactProvider";

/** Botão que abre o formulário de contato (pode ser usado dentro de server components). */
export function ContactButton({
  children,
  arrow = true,
  variant = "brand",
  size = "xl",
  ...props
}: ButtonProps & { arrow?: boolean }) {
  const open = useContact();
  return (
    <Button type="button" variant={variant} size={size} onClick={open} {...props}>
      {children}
      {arrow ? <ArrowRight aria-hidden="true" className="tr-arrow" /> : null}
    </Button>
  );
}
