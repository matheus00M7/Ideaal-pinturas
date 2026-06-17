import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const qualities = [
  "Planejamento antes da execucao",
  "Materiais adequados para cada superficie",
  "Protecao do ambiente e limpeza diaria",
  "Acompanhamento ate a entrega final"
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Sobre a IDEAAL"
            title="Uma empresa de pintura predial focada em qualidade, seguranca e prazo"
            description="A IDEAAL atende Sao Paulo com servicos de pintura predial, manutencao e revitalizacao de fachadas para condominios, comercios e residencias. Cada projeto e conduzido com organizacao, equipe qualificada e acabamento profissional."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded bg-ideaal-orange/12" />
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-ideaal-mist shadow-premium">
            <Image
              src="/images/simbolo-ideaal.png"
              alt="Simbolo IDEAAL com predio e rolo de pintura"
              width={720}
              height={720}
              className="h-auto w-full object-contain p-8"
            />
          </div>
          <div className="absolute -bottom-5 right-5 rounded-lg bg-ideaal-navy px-5 py-4 text-white shadow-premium">
            <p className="text-3xl font-bold text-ideaal-orange">SP</p>
            <p className="mt-1 text-sm font-semibold">Atendimento regional</p>
          </div>
        </div>
      </div>
    </section>
  );
}
