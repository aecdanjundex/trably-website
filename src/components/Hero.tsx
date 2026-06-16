"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onContactClick: () => void;
}

const stats = [
  { value: "18 anos", label: "De experiência" },
  { value: "+30", label: "Projetos em produção" },
  { value: "100%", label: "Sob medida" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const Hero = ({ onContactClick }: HeroProps) => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative z-10 mx-auto px-6 py-20 text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          18 anos de experiência
        </motion.div>

        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Transformamos ideias em
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient">produtos digitais que escalam</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Há 18 anos projetamos e desenvolvemos sistemas, plataformas e soluções
          com inteligência artificial — da arquitetura ao deploy. Tecnologia
          sólida, sob medida e pensada para o crescimento do seu negócio.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={onContactClick}
            className="bg-gradient-primary px-8 py-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border px-8 py-6 text-base font-semibold transition-colors hover:bg-secondary"
          >
            <a href="#projetos">Ver projetos</a>
          </Button>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
          Orçamento sem compromisso
        </motion.p>

        <motion.div
          variants={item}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
