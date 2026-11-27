"use client";

import { useEffect } from "react";

const STEP_MS = 90;

/**
 * Um único IntersectionObserver para a página (ver `reveal()`). O estado fica em
 * `data-rv-state` (nunca no className, para não brigar com o React):
 * pending → escondido abaixo da dobra · in → em transição · done → elemento normal.
 */
export function RevealRoot() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          const el = e.target as HTMLElement;
          void el.offsetWidth;
          el.dataset.rvState = "in";
          const i = Number(el.style.getPropertyValue("--rv-i")) || 0;
          const t = window.setTimeout(() => {
            timers.delete(t);
            el.dataset.rvState = "done";
          }, i * STEP_MS + 1300);
          timers.add(t);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    const vh = window.innerHeight;
    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      if (el.dataset.rvState) continue;
      const r = el.getBoundingClientRect();
      // Já na tela (ou acima): fica visível, nunca pisca.
      if (r.top < vh * 0.92 || r.bottom < 0) continue;
      el.dataset.rvState = "pending";
      io.observe(el);
    }

    return () => {
      io.disconnect();
      for (const t of timers) window.clearTimeout(t);
      for (const el of document.querySelectorAll<HTMLElement>("[data-rv-state]")) {
        delete el.dataset.rvState;
      }
    };
  }, []);

  return null;
}
