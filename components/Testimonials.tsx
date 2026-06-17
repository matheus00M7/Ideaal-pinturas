import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/components/site-data";

export function Testimonials() {
  return (
    <section className="bg-ideaal-mist py-14 sm:py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Clientes que valorizam organizacao, cuidado e entrega profissional"
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <Quote className="h-8 w-8 text-ideaal-orange" aria-hidden="true" />
              <p className="mt-5 text-base leading-7 text-slate-700">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-bold text-ideaal-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
