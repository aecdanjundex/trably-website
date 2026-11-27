"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

// O formulário (react-hook-form + zod + Dialog) só baixa quando alguém abre o contato.
const ContactModal = dynamic(() => import("@/components/ContactModal"), { ssr: false });

const ContactContext = createContext<() => void>(() => {});

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const openContact = useCallback(() => {
    setLoaded(true);
    setOpen(true);
  }, []);
  return (
    <ContactContext.Provider value={openContact}>
      {children}
      {loaded ? <ContactModal open={open} onOpenChange={setOpen} /> : null}
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
