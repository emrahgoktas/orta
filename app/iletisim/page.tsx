import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Iletisim",
  description: "Siverek oto cekici iletisime gecin. Telefon, WhatsApp ve konum bilgileri.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <section>
        <h1 className="mb-4 text-4xl font-bold">Iletisim</h1>
        <p className="mb-2">Telefon: <a href={CONTACT.phoneHref} className="font-semibold text-red-700">{CONTACT.phoneFormatted}</a></p>
        <p className="mb-2">E-posta: {CONTACT.email}</p>
        <p className="mb-6">Adres: {CONTACT.address}</p>
        <Map />
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Acil Yol Yardim Formu</h2>
        <ContactForm />
      </section>
    </main>
  );
}
