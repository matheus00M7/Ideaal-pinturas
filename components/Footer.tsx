import Image from "next/image";
import { contact, navItems } from "@/components/site-data";

export function Footer() {
  return (
    <footer className="bg-ideaal-navy py-10 text-white">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/images/logo-ideaal-fundo-branco.png"
            alt="IDEAAL"
            width={240}
            height={70}
            className="h-auto w-44 rounded bg-white px-3 py-2"
          />
          <p className="mt-4 text-sm font-semibold text-white/78">
            IDEAAL | Pintura Predial
          </p>
          <p className="mt-2 text-sm text-white/58">
            CNPJ {contact.cnpj} · Sao Paulo/SP
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm font-semibold text-white/76 sm:flex-row sm:flex-wrap md:justify-end">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </footer>
  );
}
