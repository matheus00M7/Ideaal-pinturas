import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { contact } from "@/components/site-data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[82svh] overflow-hidden bg-ideaal-navy text-white"
    >
      <Image
        src="/images/hero-fachada-ideaal.png"
        alt="Fachada predial em processo de pintura profissional"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ideaal-navy via-ideaal-navy/86 to-ideaal-navy/30" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ideaal-navy/55 to-transparent" />

      <div className="section-shell relative z-10 flex min-h-[82svh] items-center py-16 sm:py-20">
        <div className="max-w-3xl">
          <Image
            src="/images/logo-ideaal-fundo-branco.png"
            alt="IDEAAL Pintura Predial"
            width={360}
            height={100}
            priority
            className="mb-10 h-auto w-56 rounded bg-white px-4 py-3 shadow-premium sm:w-72"
          />
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-ideaal-orange" aria-hidden="true" />
            Pintura Predial em Sao Paulo
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Pintura predial com acabamento profissional e compromisso com prazo
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
            Atuamos com pintura predial, revitalizacao de fachadas, manutencao,
            repintura e acabamentos para condominios, comercios e residencias.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ideaal-orange px-6 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar orcamento pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/28 bg-white/10 px-6 text-base font-bold text-white backdrop-blur transition hover:bg-white/18 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Ver servicos
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
