import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Differentials } from "@/components/Differentials";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
