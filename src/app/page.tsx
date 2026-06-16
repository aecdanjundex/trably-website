"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <Hero onContactClick={() => setContactOpen(true)} />
        <Services />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTA onContactClick={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
