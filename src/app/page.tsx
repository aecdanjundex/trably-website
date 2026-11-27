import CTA from "@/components/CTA";
import CryptoConsulting from "@/components/CryptoConsulting";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { ContactProvider } from "@/components/contact/ContactProvider";
import { RevealRoot } from "@/components/motion/RevealRoot";

/** Server component: só Navbar, botões de contato e o reveal hidratam no cliente. */
export default function HomePage() {
  return (
    <ContactProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Services />
        <CryptoConsulting />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <RevealRoot />
    </ContactProvider>
  );
}
