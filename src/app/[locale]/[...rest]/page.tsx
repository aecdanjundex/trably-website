import { notFound } from "next/navigation";

/** Qualquer caminho desconhecido dentro de um idioma mostra o 404 traduzido. */
export default function CatchAll() {
  notFound();
}
