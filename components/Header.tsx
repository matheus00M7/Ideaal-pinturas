import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { contact, navItems } from "@/components/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4 py-2 sm:min-h-20 sm:py-3">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/logo-ideaal.png"
            alt="IDEAAL"
            width={245}
            height={72}
            priority
            className="h-auto w-32 sm:w-52"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ideaal-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-ideaal-orange px-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:min-h-11 sm:px-5"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="hidden sm:inline">Orcamento</span>
        </a>
      </div>
    </header>
  );
}
