"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { whatsappLink } from "@/lib/site";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const t = useTranslations("contact");

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(1, t("errors.nameRequired")).max(100, t("errors.max100")),
        email: z.string().trim().email(t("errors.emailInvalid")).max(255, t("errors.max255")),
        phone: z
          .string()
          .trim()
          .min(1, t("errors.phoneRequired"))
          .regex(/^\+\d{1,3}\s?\d{4,14}$/, t("errors.phoneFormat")),
        terms: z.literal(true, { errorMap: () => ({ message: t("errors.terms") }) }),
      }),
    [t],
  );
  type Values = z.infer<typeof schema>;

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "+", terms: false as unknown as true },
  });

  /** Sem back-end de leads por enquanto: abre o WhatsApp com os dados já preenchidos. */
  const onSubmit = (data: Values) => {
    window.open(whatsappLink(t("message", { name: data.name, email: data.email, phone: data.phone })), "_blank", "noopener");
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-[10px] border-line bg-card sm:max-w-md">
        <DialogHeader>
          <p className="ds-eyebrow text-sm">{t("eyebrow")}</p>
          <DialogTitle className="font-display text-[32px] font-bold uppercase leading-none text-ink">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-ink-muted">{t("description")}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-4">
            {(["name", "email", "phone"] as const).map((key) => (
              <FormField
                key={key}
                control={form.control}
                name={key}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ds-label">{t(key)}</FormLabel>
                    <FormControl>
                      <Input
                        type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                        autoComplete={key === "name" ? "name" : key === "email" ? "email" : "tel"}
                        placeholder={t(`${key}Ph`)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal text-muted-foreground">{t("terms")}</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" variant="brand" size="xl" className="w-full">
              {t("submit")}
              <ArrowRight aria-hidden="true" className="tr-arrow" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
