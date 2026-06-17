import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ideaalpinturas.com.br"),
  title: "IDEAAL | Pintura Predial em Sao Paulo",
  description:
    "IDEAAL e uma empresa de pintura predial em Sao Paulo, especializada em fachadas, repintura, manutencao e acabamentos profissionais.",
  openGraph: {
    title: "IDEAAL | Pintura Predial",
    description:
      "Pintura predial, revitalizacao de fachadas, manutencao e acabamentos para condominios, comercios e residencias.",
    images: ["/images/logo-ideaal-fundo-branco.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
