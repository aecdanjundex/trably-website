"use client";

import {
  ArrowDown,
  ArrowLeftRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Check,
  CheckCheck,
  ChevronDown,
  Copy,
  FileText,
  GraduationCap,
  Pause,
  Play,
  Plus,
  Repeat,
  Scissors,
  Send,
  Settings2,
  Wallet,
  Zap,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { type CSSProperties, useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { WhatsAppIcon } from "@/components/site/icons";
import { cn } from "@/lib/utils";

/**
 * Vitrine do hero: mini telas dos tipos de aplicação que a Trably desenvolve, trocando sozinhas.
 * Todas renderizam no servidor (a primeira já visível; nada de layout shift). A rotação pausa com
 * hover/foco e não liga com prefers-reduced-motion. Telas são ilustrativas (dados fictícios).
 */

const SCREENS = ["swap", "wallet", "whatsapp", "quote", "barber", "lms", "agent"] as const;
type Screen = (typeof SCREENS)[number];
const ICONS: Record<Screen, typeof Bot> = {
  swap: ArrowLeftRight,
  wallet: Wallet,
  whatsapp: Send,
  quote: FileText,
  barber: Scissors,
  lms: GraduationCap,
  agent: Bot,
};
const INTERVAL = 5200;

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReduced = () => window.matchMedia(REDUCED).matches;

type T = ReturnType<typeof useTranslations<"showcase">>;

export function Showcase() {
  const t = useTranslations("showcase");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, () => true);

  const running = !paused && !reduced;
  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % SCREENS.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [running, active]);

  const go = useCallback((i: number) => setActive(i), []);
  const name = t(`tabs.${SCREENS[active]}`);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={t("label")}
      className="tr-in-rise flex w-full flex-col gap-3"
      style={{ "--d": "500ms" } as CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[14px] border border-line bg-card shadow-[var(--shadow-modal)]">
        {/* barra de "app" com o nome do exemplo atual */}
        <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-2.5">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </span>
          <span
            aria-live="polite"
            className="flex-1 truncate text-center font-display text-[13px] font-semibold uppercase tracking-[3px] text-eyebrow"
          >
            {name}
          </span>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? t("play") : t("pause")}
            className={cn(
              "flex size-7 items-center justify-center rounded-full text-ink-subtle hover:bg-card hover:text-ink",
              reduced && "invisible",
            )}
          >
            {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
          </button>
        </div>
        {/* progresso até a próxima tela */}
        <div aria-hidden="true" className="h-[2px] w-full bg-line">
          {running ? (
            <div key={active} className="tr-progress h-full bg-accent" style={{ animationDuration: `${INTERVAL}ms` }} />
          ) : null}
        </div>

        <div className="relative h-[408px] max-[420px]:h-[430px]">
          {SCREENS.map((s, i) => (
            <div
              key={s}
              role="group"
              aria-roledescription="slide"
              aria-label={t(`tabs.${s}`)}
              aria-hidden={i !== active}
              inert={i !== active}
              className={cn(
                "absolute inset-0 p-4 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
                i === active ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
              )}
            >
              <ScreenBody screen={s} t={t} active={i === active} />
            </div>
          ))}
        </div>
      </div>

      <div role="tablist" aria-label={t("label")} className="flex flex-wrap justify-center gap-1.5">
        {SCREENS.map((s, i) => {
          const Icon = ICONS[s];
          return (
            <button
              key={s}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={t("show", { name: t(`tabs.${s}`) })}
              title={t(`tabs.${s}`)}
              onClick={() => go(i)}
              className={cn(
                "flex size-11 items-center justify-center rounded-full border transition-colors",
                i === active
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line-strong bg-card text-ink-muted hover:border-accent hover:text-accent",
              )}
            >
              <Icon aria-hidden="true" className="size-[18px]" />
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ScreenBody({ screen, t, active }: { screen: Screen; t: T; active: boolean }) {
  switch (screen) {
    case "swap":
      return <SwapScreen t={t} />;
    case "wallet":
      return <WalletScreen t={t} />;
    case "whatsapp":
      return <WhatsAppScreen t={t} active={active} />;
    case "quote":
      return <QuoteScreen t={t} />;
    case "barber":
      return <BarberScreen t={t} />;
    case "lms":
      return <LmsScreen t={t} active={active} />;
    default:
      return <AgentScreen t={t} />;
  }
}

/* ---------- helpers ---------- */

function useNum() {
  const locale = useLocale();
  return (n: number, d = 2) =>
    new Intl.NumberFormat(locale === "pt" ? "pt-BR" : locale, {
      minimumFractionDigits: d,
      maximumFractionDigits: d,
    }).format(n);
}

/** Bolinha de token (genérica, sem logos de terceiros). */
function Token({ sym, color, size = 28 }: { sym: string; color: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-full font-body text-[10px] font-extrabold text-white"
      style={{ width: size, height: size, background: color }}
    >
      {sym.slice(0, 1)}
    </span>
  );
}

/** Pop-in escalonado dentro de uma tela que acabou de ficar ativa. */
const pop = (active: boolean, i: number, base = 250): { className: string; style: CSSProperties } => ({
  className: active ? "tr-pop-in" : "opacity-0",
  style: { animationDelay: `${base + i * 650}ms` },
});

/* ---------- telas ---------- */

function SwapScreen({ t }: { t: T }) {
  const n = useNum();
  const box = "rounded-[12px] border border-line bg-surface p-3.5";
  return (
    <div className="mx-auto flex h-full max-w-[380px] flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <span className="font-display text-xl font-bold uppercase tracking-[1px] text-ink">{t("swap.title")}</span>
        <span className="flex items-center gap-1.5 text-xs text-ink-subtle">
          <Settings2 aria-hidden="true" className="size-3.5" />
          {t("swap.settings")}
        </span>
      </div>
      <div className={box}>
        <div className="flex justify-between text-xs text-ink-subtle">
          <span>{t("swap.from")}</span>
          <span>
            {t("swap.balance")}: {n(3.4182, 4)}
          </span>
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="font-display text-[34px] font-bold leading-none text-ink">{n(1.25)}</span>
          <span className="flex items-center gap-1.5 rounded-full border border-line-strong bg-card py-1 pl-1 pr-2.5 font-semibold text-ink">
            <Token sym="ETH" color="#627eea" size={24} />
            ETH
            <ChevronDown aria-hidden="true" className="size-3.5 text-ink-subtle" />
          </span>
        </div>
      </div>
      <div className="relative z-[1] -my-4 flex justify-center">
        <span className="tr-swap-flip flex size-9 items-center justify-center rounded-[10px] border-4 border-card bg-surface text-accent">
          <ArrowDown aria-hidden="true" className="size-4" />
        </span>
      </div>
      <div className={box}>
        <div className="flex justify-between text-xs text-ink-subtle">
          <span>{t("swap.to")}</span>
          <span>
            {t("swap.balance")}: {n(820)}
          </span>
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="font-display text-[34px] font-bold leading-none text-ink">{n(4312.5)}</span>
          <span className="flex items-center gap-1.5 rounded-full border border-line-strong bg-card py-1 pl-1 pr-2.5 font-semibold text-ink">
            <Token sym="USDC" color="#2775ca" size={24} />
            USDC
            <ChevronDown aria-hidden="true" className="size-3.5 text-ink-subtle" />
          </span>
        </div>
      </div>
      <dl className="m-0 grid grid-cols-2 gap-y-1 px-1 py-1 text-xs">
        <dt className="text-ink-subtle">{t("swap.rate")}</dt>
        <dd className="m-0 text-right text-ink-subtle">
          <span className="inline-flex items-center gap-1 text-accent">
            <Zap aria-hidden="true" className="size-3" />
            {t("swap.route")}
          </span>
        </dd>
        <dt className="text-ink-subtle">{t("swap.fee")}</dt>
        <dd className="m-0 text-right text-ink-body">{t("swap.feeValue")}</dd>
      </dl>
      <span className="mt-auto flex min-h-12 items-center justify-center rounded-[12px] bg-accent font-display text-lg font-bold uppercase tracking-[2px] text-on-accent">
        {t("swap.button")}
      </span>
    </div>
  );
}

/** Carteira Web3 (layout de extensão de navegador) com o tema Trably. */
function WalletScreen({ t }: { t: T }) {
  const n = useNum();
  const actions = [
    { icon: Plus, label: t("wallet.buy") },
    { icon: Repeat, label: t("wallet.swap") },
    { icon: ArrowUpRight, label: t("wallet.send") },
    { icon: ArrowLeftRight, label: t("wallet.bridge") },
  ];
  const tokens = [
    { sym: "ETH", name: "Ethereum", amt: 0.8421, usd: 2905.25, color: "#627eea" },
    { sym: "USDC", name: "USD Coin", amt: 412.3, usd: 412.3, color: "#2775ca" },
    { sym: "LINK", name: "Chainlink", amt: 18.5, usd: 263.81, color: "#2a5ada" },
  ];
  return (
    <div className="mx-auto flex h-full max-w-[360px] flex-col overflow-hidden rounded-[12px] border border-line bg-card text-ink">
      <div className="flex items-center justify-between border-b border-line bg-surface px-3 py-2.5">
        <span className="flex items-center gap-1.5 rounded-full border border-line-strong bg-card px-2 py-1 text-ink-body text-[11px] font-semibold">
          <span aria-hidden="true" className="size-3 rounded-full bg-accent" />
          {t("wallet.network")}
          <ChevronDown aria-hidden="true" className="size-3 text-ink-subtle" />
        </span>
        <span className="flex flex-col items-center leading-tight">
          <span className="flex items-center gap-1.5 text-[13px] font-bold">
            {/* avatar em blocos de cor, estilo identicon */}
            <span
              aria-hidden="true"
              className="size-5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 40deg, #3f37c9 0 25%, #9b6ff1 0 50%, #5b52e6 0 70%, #8463ee 0 100%)",
              }}
            />
            {t("wallet.account")}
            <ChevronDown aria-hidden="true" className="size-3 text-ink-subtle" />
          </span>
          <span className="flex items-center gap-1 text-[10px] text-ink-subtle">
            0x7a3F…c91E
            <Copy aria-hidden="true" className="size-2.5" />
          </span>
        </span>
        <span aria-hidden="true" className="flex flex-col gap-[3px] px-1">
          <span className="size-1 rounded-full bg-ink-subtle" />
          <span className="size-1 rounded-full bg-ink-subtle" />
          <span className="size-1 rounded-full bg-ink-subtle" />
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5 pt-4">
        <span className="font-display text-[34px] font-bold leading-none text-ink">US$ {n(3581.36)}</span>
        <span className="text-[12px] font-semibold text-accent">{t("wallet.change")}</span>
      </div>
      <div className="flex justify-center gap-4 py-3.5">
        {actions.map((a) => (
          <span key={a.label} className="flex w-12 flex-col items-center gap-1">
            <span
              className="flex size-9 items-center justify-center rounded-full bg-accent text-on-accent"
            >
              <a.icon aria-hidden="true" className="size-4" />
            </span>
            <span className="font-display text-[11px] font-semibold uppercase tracking-[1px] text-ink-muted">{a.label}</span>
          </span>
        ))}
      </div>
      <div className="flex border-b border-line font-display text-[13px] font-semibold uppercase tracking-[1.5px]">
        <span className="flex-1 border-b-2 border-accent pb-2 text-center text-accent">
          {t("wallet.tokens")}
        </span>
        <span className="flex-1 pb-2 text-center text-ink-subtle">{t("wallet.nfts")}</span>
        <span className="flex-1 pb-2 text-center text-ink-subtle">{t("wallet.activity")}</span>
      </div>
      <ul className="m-0 flex list-none flex-col p-0">
        {tokens.map((tk) => (
          <li key={tk.sym} className="flex items-center gap-2.5 border-b border-line px-3 py-2 last:border-b-0">
            <Token sym={tk.sym} color={tk.color} size={30} />
            <span className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="text-[13px] font-semibold text-ink">{tk.name}</span>
              <span className="text-[11px] text-ink-subtle">
                {n(tk.amt, tk.amt < 1 ? 4 : 2)} {tk.sym}
              </span>
            </span>
            <span className="text-[13px] font-semibold text-ink">US$ {n(tk.usd)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatsAppScreen({ t, active }: { t: T; active: boolean }) {
  const quick = t.raw("whatsapp.quick") as string[];
  const inB = "max-w-[80%] self-start rounded-[10px] rounded-tl-[2px] bg-[#202c33] px-3 py-2 text-[13px] leading-snug text-[#e9edef]";
  const outB = "max-w-[80%] self-end rounded-[10px] rounded-tr-[2px] bg-[#005c4b] px-3 py-2 text-[13px] leading-snug text-[#e9edef]";
  const time = (s: string, read?: boolean) => (
    <span className="float-right ml-2 mt-1.5 flex items-center gap-0.5 text-[10px] text-[#8696a0]">
      {s}
      {read ? <CheckCheck aria-hidden="true" className="size-3 text-[#53bdeb]" /> : null}
    </span>
  );
  return (
    <div className="mx-auto flex h-full max-w-[360px] flex-col overflow-hidden rounded-[12px] border border-[#2a3942] bg-[#0b141a]">
      <div className="flex items-center gap-2.5 bg-[#202c33] px-3 py-2.5">
        <span className="flex size-8 items-center justify-center rounded-full bg-accent text-on-accent">
          <Bot aria-hidden="true" className="size-4" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[14px] font-semibold text-[#e9edef]">{t("whatsapp.name")}</span>
          <span className="text-[11px] text-[#8696a0]">{t("whatsapp.status")}</span>
        </span>
        <WhatsAppIcon size={18} className="ml-auto text-[#25d366]" />
      </div>
      <div
        className="flex flex-1 flex-col gap-2 overflow-hidden p-3"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      >
        <p {...pop(active, 0)} className={cn(outB, pop(active, 0).className)}>
          {t("whatsapp.m1")}
          {time("10:41", true)}
        </p>
        <p {...pop(active, 1)} className={cn(inB, pop(active, 1).className)}>
          {t("whatsapp.m2")}
          {time("10:41")}
        </p>
        <p {...pop(active, 2)} className={cn(outB, pop(active, 2).className)}>
          {t("whatsapp.m3")}
          {time("10:42", true)}
        </p>
        <p {...pop(active, 3)} className={cn(inB, pop(active, 3).className)}>
          {t("whatsapp.m4")}
          {time("10:42")}
        </p>
        <div {...pop(active, 4)} className={cn("flex flex-wrap gap-1.5", pop(active, 4).className)}>
          {quick.map((q) => (
            <span key={q} className="rounded-full border border-[#2a3942] bg-[#202c33] px-3 py-1 text-[12px] text-[#53bdeb]">
              {q}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 bg-[#202c33] px-2.5 py-2">
        <span className="flex-1 rounded-full bg-[#2a3942] px-3 py-1.5 text-[12px] text-[#8696a0]">
          {t("whatsapp.input")}
        </span>
        <span className="flex size-8 items-center justify-center rounded-full bg-[#00a884] text-[#0b141a]">
          <Send aria-hidden="true" className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

function QuoteScreen({ t }: { t: T }) {
  const n = useNum();
  const names = t.raw("quote.items") as string[];
  const rows = [
    { qty: 12, price: 18640 },
    { qty: 6, price: 7320 },
    { qty: 40, price: 22400 },
  ];
  const total = rows.reduce((a, r) => a + r.price, 0);
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-display text-sm font-semibold uppercase tracking-[3px] text-eyebrow">
            {t("quote.title")} {t("quote.number")}
          </span>
          <span className="font-display text-[22px] font-bold uppercase leading-tight text-ink">
            {t("quote.client")}
          </span>
        </div>
        <span className="flex items-center gap-1 rounded-[4px] bg-accent/15 px-2 py-1 font-display text-xs font-bold uppercase tracking-[1.5px] text-accent">
          <Check aria-hidden="true" className="size-3.5" />
          {t("quote.status")}
        </span>
      </div>
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="border-b-2 border-accent text-left font-display text-[11px] uppercase tracking-[2px] text-label">
            <th className="py-2 font-semibold">{t("quote.item")}</th>
            <th className="py-2 text-right font-semibold">{t("quote.qty")}</th>
            <th className="py-2 text-right font-semibold">{t("quote.price")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={names[i]} className="border-b border-line">
              <td className="py-2.5 text-ink-body">{names[i]}</td>
              <td className="py-2.5 text-right text-ink-muted">{r.qty}</td>
              <td className="py-2.5 text-right font-semibold text-ink">R$ {n(r.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-baseline justify-between rounded-[10px] bg-surface px-4 py-3">
        <span className="font-display text-sm font-bold uppercase tracking-[2px] text-ink-muted">{t("quote.total")}</span>
        <span className="font-display text-[30px] font-bold leading-none text-ink">R$ {n(total)}</span>
      </div>
      <div className="mt-auto flex gap-2">
        <span className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-accent font-display text-base font-bold uppercase tracking-[2px] text-on-accent">
          {t("quote.button")}
        </span>
        <span className="flex size-11 items-center justify-center rounded-md border-2 border-glow text-ink">
          <FileText aria-hidden="true" className="size-[18px]" />
        </span>
      </div>
    </div>
  );
}

function BarberScreen({ t }: { t: T }) {
  const days = t.raw("barber.days") as string[];
  const slots = ["09:00", "10:30", "11:15", "13:00", "14:30", "15:15", "16:00", "17:30"];
  const busy = new Set(["10:30", "13:00", "16:00"]);
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full border-2 border-glow text-accent">
          <Scissors aria-hidden="true" className="size-5" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-display text-[22px] font-bold uppercase text-ink">{t("barber.title")}</span>
          <span className="text-[13px] text-ink-muted">{t("barber.service")}</span>
        </span>
      </div>
      <div>
        <span className="ds-label">{t("barber.month")}</span>
        <div className="mt-1.5 grid grid-cols-5 gap-1.5">
          {days.map((d, i) => (
            <span
              key={d}
              className={cn(
                "flex flex-col items-center rounded-[10px] border py-1.5",
                i === 2 ? "border-accent bg-accent text-on-accent" : "border-line bg-surface text-ink-body",
              )}
            >
              <span className="text-[11px] uppercase">{d}</span>
              <span className="font-display text-xl font-bold leading-none">{10 + i}</span>
            </span>
          ))}
        </div>
      </div>
      <div>
        <span className="ds-label">{t("barber.slots")}</span>
        <div className="mt-1.5 grid grid-cols-4 gap-1.5">
          {slots.map((s) => (
            <span
              key={s}
              className={cn(
                "rounded-md border py-1.5 text-center text-[13px] font-semibold",
                busy.has(s) && "border-line bg-transparent text-ink-subtle line-through",
                s === "14:30" && "tr-pulse border-accent bg-accent/15 text-accent",
                !busy.has(s) && s !== "14:30" && "border-line-strong text-ink-body",
              )}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <span className="mt-auto flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent font-display text-base font-bold uppercase tracking-[2px] text-on-accent">
        <CalendarCheck aria-hidden="true" className="size-[18px]" />
        {t("barber.confirm")}
      </span>
      <span className="flex items-center justify-center gap-1.5 text-xs text-ink-subtle">
        <WhatsAppIcon size={13} className="text-accent" />
        {t("barber.reminder")}
      </span>
    </div>
  );
}

function LmsScreen({ t, active }: { t: T; active: boolean }) {
  const people = [
    { name: "Ana L.", key: "joined", color: "#e8590c" },
    { name: "Bruno M.", key: "watching", color: "#1c7ed6" },
    { name: "Carla S.", key: "joined", color: "#2f9e44" },
    { name: "Diego R.", key: "certificate", color: "#ae3ec9" },
  ] as const;
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="relative flex h-[118px] items-end overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,hsl(var(--accent-ds)/0.55),hsl(var(--glow)/0.35)),repeating-linear-gradient(135deg,hsl(var(--hatch))_0_2px,transparent_2px_12px)] p-3">
        <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111]">
          <Play aria-hidden="true" className="ml-0.5 size-5 fill-current" />
        </span>
        <span className="rounded-[4px] bg-black/60 px-1.5 py-0.5 text-[11px] font-semibold text-white">
          {t("lms.lesson")} · 14:32
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-display text-[20px] font-bold uppercase leading-tight text-ink">{t("lms.course")}</span>
        <span className="text-[13px] text-ink-muted">{t("lms.module")}</span>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
            <span className={cn("block h-full rounded-full bg-accent", active ? "tr-grow" : "")} style={{ width: "68%" }} />
          </span>
          <span className="text-xs font-semibold text-accent">{t("lms.progress")}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="ds-label flex items-center gap-2">
          <span className="tr-pulse size-2 rounded-full bg-accent" />
          {t("lms.live")}
        </span>
        <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
          {people.map((p, i) => (
            <li
              key={p.name}
              {...pop(active, i, 150)}
              className={cn("flex items-center gap-2.5 text-[13px]", pop(active, i, 150).className)}
            >
              <span
                aria-hidden="true"
                className="flex size-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: p.color }}
              >
                {p.name.slice(0, 1)}
              </span>
              <span className="font-semibold text-ink">{p.name}</span>
              <span className="text-ink-muted">{t(`lms.${p.key}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AgentScreen({ t }: { t: T }) {
  const steps = t.raw("agent.steps") as string[];
  const state = (i: number) => (i < 2 ? "done" : i === 2 ? "on" : "next");
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[10px] border border-line">
      <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-3">
        <span className="flex items-center gap-2.5 font-display text-[15px] font-bold uppercase tracking-[2px] text-ink">
          <Bot aria-hidden="true" className="size-[18px] text-accent" />
          {t("agent.title")}
        </span>
        <span className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[2px] text-eyebrow">
          <span className="tr-pulse size-2 rounded-full bg-accent" />
          {t("agent.online")}
        </span>
      </div>
      <ol className="m-0 flex flex-1 list-none flex-col justify-center gap-1 p-4">
        {steps.map((label, i) => {
          const s = state(i);
          return (
            <li key={label} className="flex items-center gap-3.5 py-2">
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border-2",
                  s === "done" && "border-accent bg-accent text-on-accent",
                  s === "on" && "tr-pulse border-accent text-accent",
                  s === "next" && "border-line-strong text-ink-subtle",
                )}
              >
                {s === "done" ? <Check aria-hidden="true" className="size-4" /> : null}
                {s === "on" ? <span className="size-2.5 rounded-full bg-accent" /> : null}
              </span>
              <span
                className={cn(
                  "text-[15px]",
                  s === "next" ? "text-ink-subtle" : "text-ink-body",
                  s === "on" && "font-semibold text-ink",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="border-t border-line px-4 py-3.5 font-mono text-[13px] text-ink-muted">
        <span className="text-accent">$</span> {t("agent.command")}
        <span className="tr-caret ml-0.5 inline-block h-[1em] w-2 translate-y-[2px] bg-accent" />
      </div>
    </div>
  );
}

