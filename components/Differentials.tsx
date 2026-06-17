import { SectionHeading } from "@/components/SectionHeading";
import { differentials } from "@/components/site-data";

export function Differentials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Diferenciais"
            title="Execucao organizada para quem precisa de confianca do inicio ao fim"
            description="Um bom resultado depende de processo, cuidado com o local e comunicacao objetiva. A IDEAAL combina atendimento proximo com padrao profissional de execucao."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex min-h-24 items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-ideaal-blue text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="font-bold leading-6 text-ideaal-ink">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
