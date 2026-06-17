import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, contactItems } from "@/components/site-data";

export function Contact() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-premium lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-ideaal-navy p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-wide text-ideaal-orange">
              Contato
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Solicite um orcamento para pintura predial
            </h2>
            <p className="mt-6 text-base leading-7 text-white/74">
              Envie uma mensagem pelo WhatsApp com o tipo de servico, endereco
              aproximado e fotos do local para receber um atendimento mais
              preciso.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ideaal-orange px-6 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Orcamento via WhatsApp
            </a>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Canais"
              title="Fale com a IDEAAL"
              description="Atendimento para condominios, comercios e residencias em Sao Paulo e regiao metropolitana."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-lg border border-slate-200 bg-ideaal-mist p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white text-ideaal-orange">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                        {item.label}
                      </p>
                    </div>
                    <p className="mt-4 break-words text-base font-bold leading-6 text-ideaal-ink">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
