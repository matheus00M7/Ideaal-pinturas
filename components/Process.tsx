import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { steps } from "@/components/site-data";

export function Process() {
  return (
    <section className="bg-white py-14 sm:py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um processo claro para reduzir imprevistos e manter o prazo sob controle"
          description="Cada etapa e conduzida com comunicacao objetiva, preparando a superficie e protegendo os ambientes antes da pintura."
        />

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step}
              className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded bg-ideaal-orange text-base font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="hidden h-5 w-5 text-slate-300 lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <h3 className="mt-6 text-xl font-bold text-ideaal-ink">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
