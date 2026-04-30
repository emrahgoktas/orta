import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Siverek'te oto cekici, zirai arac cekici ve kaza kurtarma hizmetleri.",
};

const pages = [
  ["Oto Cekici", "/hizmetler/oto-cekici"],
  ["Zirai Arac Cekici", "/hizmetler/zirai-arac-cekici"],
  ["Kaza Kurtarma", "/hizmetler/kaza-kurtarma"],
] as const;

export default function HizmetlerPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Hizmetlerimiz</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {pages.map(([title, href]) => (
          <a key={href} href={href} className="rounded-lg border border-gray-200 p-5 hover:border-red-600">
            {title}
          </a>
        ))}
      </div>
    </main>
  );
}
