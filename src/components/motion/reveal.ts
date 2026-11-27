import type { CSSProperties } from "react";

/**
 * Props de scroll-reveal para qualquer elemento (server ou client component).
 * `<RevealRoot>` observa todo `[data-reveal]`: o que já está na tela ao hidratar fica como está
 * (sem flash, LCP intacto); o que está abaixo da dobra entra ao rolar. Sem JS ou com
 * prefers-reduced-motion, nada se esconde.
 *
 * - `up` (padrão): fade + sobe · `fade`: só fade · `left`/`right`: desliza do lado
 * - `rise`: deslize maior + leve escala (mockups) · `rule`: desenha da esquerda (réguas)
 *
 * `i` escalona irmãos (i × 90 ms).
 */
export type RevealKind = "up" | "fade" | "left" | "right" | "rise" | "rule";

export function reveal(i = 0, kind: RevealKind = "up", style?: CSSProperties) {
  return {
    "data-reveal": kind,
    style: { ...style, "--rv-i": i } as CSSProperties,
  };
}
