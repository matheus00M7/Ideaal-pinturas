import Image from "next/image";
import { Building2, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const qualities = [
  "Planejamento antes da execucao",
  "Materiais adequados para cada superficie",
  "Protecao do ambiente e limpeza diaria",
  "Acompanhamento ate a entrega final"
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-14 sm:py-20 md:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Sobre a IDEAAL"
            title="Uma empresa de pintura predial focada em qualidade, seguranca e prazo"
            description="A IDEAAL atende Sao Paulo com servicos de pintura predial, manutencao e revitalizacao de fachadas para condominios, comercios e residencias. Cada projeto e conduzido com organizacao, equipe qualificada e acabamento profissional."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
            {qualities.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-ideaal-orange"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-28 w-28 rounded bg-ideaal-orange/12 sm:block" />
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-ideaal-mist shadow-premium">
            <Image
              src="/images/simbolo-ideaal.png"
              alt="Simbolo IDEAAL com predio e rolo de pintura"
              width={720}
              height={720}
              className="h-auto w-full object-contain p-6 sm:p-8"
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-ideaal-orange/12 text-ideaal-orange">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Regiao
                </p>
                <p className="text-sm font-bold text-ideaal-ink">Sao Paulo/SP</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-ideaal-blue text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Atendimento
                </p>
                <p className="text-sm font-bold text-ideaal-ink">
                  Condominios e empresas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
