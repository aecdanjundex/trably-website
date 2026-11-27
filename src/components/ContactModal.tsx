"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Máximo de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo de 255 caracteres"),
  phone: z
    .string()
    .trim()
    .min(1, "Telefone é obrigatório")
    .regex(/^\+\d{1,3}\s?\d{4,14}$/, "Formato inválido. Ex: +55 11999999999"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos" }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Sem back-end de leads por enquanto: abre o WhatsApp com os dados já preenchidos. */
async function handleSubmitContact(data: ContactFormValues) {
  const text = `Olá! Vim pelo site da Trably e quero um orçamento.\n\nNome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone}`;
  window.open(whatsappLink(text), "_blank", "noopener");
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "+55 ",
      terms: false as unknown as true,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    await handleSubmitContact(data);
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-[10px] border-line bg-card sm:max-w-md">
        <DialogHeader>
          <p className="ds-eyebrow text-sm">Orçamento gratuito</p>
          <DialogTitle className="font-display text-[32px] font-bold uppercase leading-none text-ink">
            Fale com a equipe
          </DialogTitle>
          <DialogDescription className="text-ink-muted">
            Preencha seus dados e continuamos a conversa pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ds-label">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ds-label">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ds-label">Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="+55 11999999999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal text-muted-foreground">
                      Concordo com os termos de serviço e política de privacidade
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" variant="brand" size="xl" className="w-full">
              Enviar
              <ArrowRight aria-hidden="true" className="tr-arrow" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
