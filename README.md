# Trably Software — Website

Site institucional da Trably Software, construído com foco em performance, boa
UI e descoberta — tanto por mecanismos de busca (SEO) quanto por agentes/LLMs.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (Radix)
- **next-themes** (tema claro/escuro)

## Desenvolvimento

Requer [Bun](https://bun.sh) (ou Node 18+ com npm).

```sh
bun install        # instalar dependências
bun run dev        # servidor de desenvolvimento
bun run lint       # ESLint
bun run typecheck  # checagem de tipos (tsc --noEmit)
bun run build      # build de produção
```

## SEO & LLM

- Metadata completa (Open Graph, Twitter, canonical, robots) em `src/app/layout.tsx`
- **JSON-LD** (Organization, WebSite, ProfessionalService, FAQPage) em
  `src/components/StructuredData.tsx`
- `sitemap.xml`, `robots.txt` e `manifest.webmanifest` gerados dinamicamente
  (`src/app/sitemap.ts`, `robots.ts`, `manifest.ts`)
- Imagem Open Graph dinâmica em `src/app/opengraph-image.tsx`
- [`/llms.txt`](public/llms.txt) com um resumo legível por LLMs
- HTML semântico (`main`, `section` com `aria-labelledby`) e seção de FAQ

Configure a URL de produção via `NEXT_PUBLIC_SITE_URL` (usada em metadata,
sitemap e structured data). Veja `src/lib/site.ts`.

## CI

A pipeline em `.github/workflows/ci.yml` roda lint, typecheck e build em cada
push para `main` e em cada pull request.
