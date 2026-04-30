import type { Metadata } from "next";
import CallButton from "@/components/CallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ortakayaotokurtarma.com"),
  title: {
    default: "Siverek Oto Cekici | Ortakaya Oto Kurtarma",
    template: "%s | Ortakaya Oto Kurtarma",
  },
  description:
    "Siverek ve cevresinde 7/24 oto cekici ve arac kurtarma. Kurumsal hizmet anlayisi, seffaf fiyat, profesyonel ekip.",
  keywords: ["siverek oto cekici", "arac kurtarma", "yol yardim", "7/24 cekici"],
  alternates: { canonical: "https://ortakayaotokurtarma.com" },
  openGraph: {
    title: "Siverek Oto Cekici",
    description: "Kurumsal standartta oto cekici ve yol yardim hizmeti.",
    type: "website",
    locale: "tr_TR",
    siteName: "Ortakaya Oto Kurtarma",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="flex min-h-screen flex-col antialiased">
        <SchemaMarkup />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
