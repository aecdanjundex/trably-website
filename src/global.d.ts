import type { locales } from "@/i18n/routing";
import type messages from "../messages/pt.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
