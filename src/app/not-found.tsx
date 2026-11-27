"use client";

import NextError from "next/error";

/** 404 fora de qualquer idioma (o proxy normalmente redireciona antes de chegar aqui). */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}
