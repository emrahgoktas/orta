import type { Metadata } from "next";

export const metadata: Metadata = { title: "Bolgeler", description: "Siverek merkez, Viransehir ve Sanliurfa cekici hizmet bolgeleri." };

const areas = [
  ["Siverek Merkez", "/bolgeler/siverek-merkez"],
  ["Viransehir", "/bolgeler/viransehir"],
  ["Sanliurfa", "/bolgeler/sanliurfa"],
] as const;

export default function BolgelerPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Hizmet Verdigimiz Bolgeler</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {areas.map(([name, href]) => (
          <a key={href} href={href} className="rounded-lg border border-gray-200 p-5 text-center hover:border-red-600">
            {name}
          </a>
        ))}
      </div>
    </main>
  );
}
