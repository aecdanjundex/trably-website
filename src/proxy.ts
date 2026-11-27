import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/** Redireciona `/` (e rotas sem prefixo) para o idioma do usuário: cookie → navegador → pt. */
export default createMiddleware(routing);

export const config = {
  // Tudo menos API, internos do Next/Vercel e arquivos com extensão (robots.txt, ícones…).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
