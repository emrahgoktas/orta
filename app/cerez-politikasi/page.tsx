import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerez Politikasi",
  description: "Ortakaya Oto Kurtarma cerez politikasi.",
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">Cerez Politikasi</h1>
        <p>
          Bu cerez politikasi, ortakayaotokurtarma.com sitesinde kullanilan cerez turlerini ve kullanicinin cerez
          tercihlerini nasil yonetebilecegini aciklar.
        </p>
        <h2 className="text-gray-800">Cerez Nedir?</h2>
        <p>
          Cerezler, web sitesinin cihazinizda sakladigi kucuk metin dosyalaridir. Site deneyimini gelistirmek ve
          performans analizi yapmak icin kullanilir.
        </p>
        <h2 className="text-gray-800">Kullandigimiz Cerezler</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Zorunlu cerezler: Site fonksiyonlarinin calismasi icin gereklidir.</li>
          <li>Analitik cerezler: Site performansini olcmek icin kullanilir.</li>
          <li>Tercih cerezleri: Kullanici ayarlarinin hatirlanmasina yardimci olur.</li>
        </ul>
        <h2 className="text-gray-800">Cerez Yonetimi</h2>
        <p>
          Tarayici ayarlarinizdan cerezleri silebilir veya engelleyebilirsiniz. Ancak bazi cerezlerin devre disi
          birakilmasi site deneyiminin bir kismini etkileyebilir.
        </p>
      </article>
    </main>
  );
}
