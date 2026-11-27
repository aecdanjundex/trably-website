import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** Rampa índigo → violeta (as cores atuais da Trably), da primeira à última letra. */
const letters = [
  { ch: "T", color: "#3f37c9", ml: "0" },
  { ch: "R", color: "#4c44dc", ml: "-0.07em" },
  { ch: "A", color: "#5b52e6", ml: "-0.1em" },
  { ch: "B", color: "#6f5bea", ml: "-0.06em" },
  { ch: "L", color: "#8463ee", ml: "-0.07em" },
  { ch: "Y", color: "#9b6ff1", ml: "-0.12em" },
];

// Mesmo ritmo da animação da marca JAMA: cada letra grande leva ~0.8 s e começa 0.2 s depois da
// anterior; SOFTWARE vem em seguida, 0.08 s por letra. Toca uma vez e fica na logo completa.
const BIG = { dur: 0.8, first: 0.15, step: 0.2, blur: "0.16em", shift: "-0.16em" };
const SMALL = { dur: 0.52, first: 1.35, step: 0.08, blur: "0.3em", shift: "-0.5em" };

function anim(spec: typeof BIG, i: number): CSSProperties {
  return {
    "--logo-dur": `${spec.dur}s`,
    "--logo-delay": `${(spec.first + spec.step * i).toFixed(3)}s`,
    "--logo-blur": spec.blur,
    "--logo-shift": spec.shift,
  } as CSSProperties;
}

/**
 * Wordmark Trably Software no estilo da marca JAMA: letras sobrepostas com contorno na cor do
 * fundo (`--ground`). `animated` toca a entrada uma vez (estática com reduced motion).
 * `stroke` troca a cor do contorno quando a logo fica sobre outra superfície.
 */
export function Logo({
  size = 56,
  className,
  animated = false,
  stroke = "hsl(var(--ground))",
}: {
  size?: number;
  className?: string;
  animated?: boolean;
  stroke?: string;
}) {
  return (
    <span
      role="img"
      aria-label="Trably Software"
      className={cn("inline-flex flex-col items-center gap-1", className)}
    >
      <span
        className="inline-flex font-body font-extrabold leading-[0.86]"
        style={{ fontSize: size }}
      >
        {letters.map((l, i) => (
          <span
            key={l.ch}
            className={cn("relative inline-block", animated && "logo-anim-l")}
            style={{
              ...(animated ? anim(BIG, i) : null),
              color: l.color,
              marginLeft: l.ml,
              zIndex: i + 1,
              WebkitTextStroke: `${Math.max(2, size / 19)}px ${stroke}`,
              paintOrder: "stroke fill",
            }}
          >
            {l.ch}
          </span>
        ))}
      </span>{" "}
      <span
        className="pl-[5px] font-body font-normal leading-none text-ink"
        style={{ fontSize: Math.max(7, size * 0.2), letterSpacing: Math.max(3, size * 0.13) }}
      >
        {animated
          ? [..."SOFTWARE"].map((ch, i) => (
              <span
                // letras se repetem; a palavra é fixa
                key={i}
                className="logo-anim-l inline-block"
                style={anim(SMALL, i)}
              >
                {ch}
              </span>
            ))
          : "SOFTWARE"}
      </span>
    </span>
  );
}
