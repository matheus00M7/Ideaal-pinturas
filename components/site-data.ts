import {
  BadgeCheck,
  Brush,
  Building2,
  ClipboardCheck,
  Clock3,
  Home,
  Instagram,
  Mail,
  MapPin,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  SwatchBook,
  Users,
  Wrench
} from "lucide-react";

export const contact = {
  whatsappLabel: "(11) 96826-0063",
  whatsappHref:
    "https://wa.me/11968260063?text=Ola%2C%20gostaria%20de%20solicitar%20um%20orcamento%20para%20pintura%20predial.",
  phone: "(11) 96826-0063",
  instagram: "@ideaal_pinturas_predial",
  email: "marcosmcrl3@gmail.com",
  region: "Sao Paulo/SP e regiao metropolitana",
  cnpj: "63.015.343/0001-40"
};

export const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Servicos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contato", label: "Contato" }
];

export const services = [
  {
    title: "Pintura predial",
    description:
      "Execucao planejada para condominios, edificios comerciais e fachadas de grande porte.",
    icon: Building2
  },
  {
    title: "Pintura residencial",
    description:
      "Acabamento cuidadoso para casas e apartamentos, com protecao do ambiente.",
    icon: Home
  },
  {
    title: "Pintura comercial",
    description:
      "Servicos para lojas, escritorios e empresas com rotina organizada e agilidade.",
    icon: Store
  },
  {
    title: "Pintura interna e externa",
    description:
      "Solucao completa para paredes, tetos, fachadas, muros e areas comuns.",
    icon: PaintRoller
  },
  {
    title: "Revitalizacao de fachadas",
    description:
      "Recuperacao visual de fachadas com preparacao, pintura e acabamento duravel.",
    icon: Sparkles
  },
  {
    title: "Texturas e acabamentos",
    description:
      "Aplicacao de texturas, efeitos e padroes de acabamento com criterio tecnico.",
    icon: SwatchBook
  },
  {
    title: "Massa corrida e correcoes",
    description:
      "Tratamento de imperfeicoes para uma superficie nivelada antes da pintura.",
    icon: Brush
  },
  {
    title: "Manutencao e repintura",
    description:
      "Repintura preventiva e corretiva para preservar o valor do imovel.",
    icon: Wrench
  }
];

export const differentials = [
  { title: "Acabamento profissional", icon: BadgeCheck },
  { title: "Atendimento rapido", icon: Phone },
  { title: "Organizacao e limpeza", icon: Sparkles },
  { title: "Compromisso com prazo", icon: Clock3 },
  { title: "Equipe qualificada", icon: Users },
  { title: "Orcamento personalizado", icon: ClipboardCheck }
];

export const portfolio = [
  {
    title: "Fachada residencial",
    category: "Antes e depois",
    image: "/images/portfolio-fachada-01.png"
  },
  {
    title: "Condominio vertical",
    category: "Repintura externa",
    image: "/images/portfolio-fachada-02.png"
  },
  {
    title: "Area comercial",
    category: "Revitalizacao",
    image: "/images/portfolio-fachada-03.png"
  }
];

export const steps = [
  "Atendimento inicial",
  "Avaliacao do servico",
  "Orcamento",
  "Preparacao do ambiente",
  "Execucao da pintura",
  "Revisao e entrega final"
];

export const testimonials = [
  {
    quote:
      "A equipe foi pontual, organizada e entregou a pintura das areas comuns com excelente acabamento.",
    name: "Sindico de condominio",
    role: "Zona Sul de Sao Paulo"
  },
  {
    quote:
      "O atendimento foi claro desde o primeiro contato. O prazo foi cumprido e o ambiente ficou limpo.",
    name: "Cliente residencial",
    role: "Sao Paulo/SP"
  },
  {
    quote:
      "Precisavamos renovar a fachada da loja sem interromper a rotina. O resultado ficou muito profissional.",
    name: "Gestor comercial",
    role: "Regiao metropolitana"
  }
];

export const contactItems = [
  { label: "WhatsApp", value: contact.whatsappLabel, icon: Phone },
  { label: "Telefone", value: contact.phone, icon: Phone },
  { label: "Instagram", value: contact.instagram, icon: Instagram },
  { label: "E-mail", value: contact.email, icon: Mail },
  { label: "Regiao de atendimento", value: contact.region, icon: MapPin },
  { label: "Seguranca", value: "Equipe qualificada para cada etapa", icon: ShieldCheck }
];
