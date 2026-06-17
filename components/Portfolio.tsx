import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolio } from "@/components/site-data";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-ideaal-navy py-14 text-white sm:py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ideaal-orange">
              Portfolio
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Galeria moderna para obras realizadas e comparativos de antes e
              depois
            </h2>
          </div>
          <p className="text-base leading-7 text-white/72 md:text-lg">
            A estrutura ja esta pronta para receber fotos reais de fachadas,
            areas internas, manutencoes e repinturas executadas pela IDEAAL.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {portfolio.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/8 shadow-2xl shadow-black/10"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="eager"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ideaal-navy">
                  {item.category}
                </div>
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/80" />
                <div className="absolute bottom-4 left-4 rounded-full bg-ideaal-navy/88 px-3 py-1 text-xs font-bold text-white">
                  Antes
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-ideaal-orange px-3 py-1 text-xs font-bold text-white">
                  Depois
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Layout preparado para imagens reais da obra, com leitura
                  rapida e foco no resultado final.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
