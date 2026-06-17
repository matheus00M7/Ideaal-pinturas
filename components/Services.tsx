import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/components/site-data";

export function Services() {
  return (
    <section id="servicos" className="bg-ideaal-mist py-14 sm:py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Servicos"
          title="Solucoes completas para pintura, renovacao e acabamento"
          description="Da preparacao da superficie a revisao final, a IDEAAL organiza cada etapa para entregar um resultado consistente e alinhado ao perfil do imovel."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-premium sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-ideaal-orange/12 text-ideaal-orange transition group-hover:bg-ideaal-orange group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ideaal-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
