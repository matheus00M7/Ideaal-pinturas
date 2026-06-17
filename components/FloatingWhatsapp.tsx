import { MessageCircle } from "lucide-react";
import { contact } from "@/components/site-data";

export function FloatingWhatsapp() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Solicitar orcamento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-bold text-white shadow-2xl shadow-emerald-900/25 transition hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:px-5"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
