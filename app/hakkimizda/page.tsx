import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description: "Ortakaya Oto Kurtarma deneyimli ekip ve seffaf fiyatlandirma yaklasimi.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Hakkimizda</h1>
      <p className="text-lg text-gray-700">
        Ortakaya Oto Kurtarma, Siverek merkezli 7/24 oto cekici ve yol yardim firmasi olarak calisir.
        Deneyimli, lisansli ve profesyonel ekip ile gizli ucret olmadan sabit fiyat uyguluyoruz.
      </p>
    </main>
  );
}
