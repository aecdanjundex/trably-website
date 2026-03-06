import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trably Software — Soluções Digitais",
  description:
    "Desenvolvemos sistemas completos, landing pages, sites institucionais e soluções digitais personalizadas para o seu negócio crescer.",
  openGraph: {
    title: "Trably Software — Soluções Digitais",
    description:
      "Desenvolvemos sistemas completos, landing pages, sites institucionais e soluções digitais personalizadas para o seu negócio crescer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
