import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { reveal } from "@/components/motion/reveal";

/** Blocos do site no estilo do design system JAMA, com a paleta Trably. */

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[1200px] px-8 max-[760px]:px-4", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("ds-eyebrow", className)}>{children}</p>;
}

/** Eyebrow + título em dois tons + régua violeta + lead (cabeçalho de seção). */
export function SectionHead({
  id,
  eyebrow,
  a,
  b,
  lead,
  className,
}: {
  id?: string;
  eyebrow: ReactNode;
  a: ReactNode;
  b?: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-[760px] flex-col gap-4", className)}>
      <div {...reveal(0, "fade")}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2
        id={id}
        {...reveal(1)}
        className="m-0 text-[clamp(40px,5vw,64px)] font-bold uppercase leading-none text-ink"
      >
        {a}
        {b ? (
          <>
            {" "}
            <span className="text-accent">{b}</span>
          </>
        ) : null}
      </h2>
      <div aria-hidden="true" className="h-1 w-16 bg-glow" {...reveal(2, "rule")} />
      {lead ? (
        <p {...reveal(3)} className="m-0 text-[19px] leading-[1.6] text-ink-muted">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Fundo do hero: grade técnica tingida com o accent, com leve respiração. */
export function GridBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <div
        className="tr-drift absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent-ds) / 0.09) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent-ds) / 0.09) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 70% at 70% 30%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 70% 30%, black, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 85% 0%, hsl(var(--glow) / 0.16), transparent 70%), radial-gradient(ellipse 45% 45% at 0% 100%, hsl(var(--accent-ds) / 0.1), transparent 70%)",
        }}
      />
    </div>
  );
}
