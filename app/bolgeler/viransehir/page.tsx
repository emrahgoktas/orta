import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viransehir Oto Cekici | Siverek&apos;ten 7/24 Arac Kurtarma Hizmeti",
  description:
    "Viransehir ve yol hattinda ariza mi var? Siverek cikisli 7/24 oto cekici ve arac kurtarma destegi: 0536 478 37 27.",
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  name: "Ortakaya Oto Kurtarma",
  areaServed: ["Viransehir", "Siverek-Viransehir Yolu"],
  telephone: "+905364783727",
};

export default function ViransehirPage() {
  const faqs = [
    { q: "Viransehir yolunda da hizmet veriyor musunuz?", a: "Evet. Yol ustu ariza ve kaza durumlarinda 7/24 destek sagliyoruz." },
    { q: "Viransehir&apos;den Siverek&apos;e cekim yapiliyor mu?", a: "Evet. Mesafe bazli fiyatla guvenli tasima yapiyoruz." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localSchema, faqSchema]) }} />
      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">Viransehir Oto Cekici ve Yol Yardim</h1>
        <p>
          <strong>Viransehir oto cekici</strong> ihtiyaci genellikle uzun yol uzerinde aniden ortaya cikar.
          Sicak hava, uzun sureli surus ve yol kosullari motoru zorlayabilir. Lastik patlamasi, aku bitmesi,
          fren sorunu veya beklenmedik mekanik ariza durumunda en onemli sey hizli destek almaktir.
          Ortakaya Oto Kurtarma olarak Siverek cikisli ekiplerle Viransehir hattina duzenli hizmet veriyoruz.
          Bize <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline">0536 478 37 27</a>
          uzerinden ulasabilir, <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
          ile konumunu aninda paylasabilirsin.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Hemen Ara</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp Destek</a>
        </div>

        <h2 className="text-gray-800">Viransehir Hattinda En SIk Karsilastigimiz Sorunlar</h2>
        <p>
          Viransehir baglantisinda uzun yol kullanimina bagli yorgunluk ve arac zorlanmasi sik gorulur. Ozellikle
          yazin yuksek sicaklikta sogutma sistemi sorunlari artar. Taslik veya yipranmis zeminlerde lastik patlamasi,
          alt takim sesi ve balans problemleri yasanabilir. Bazi durumlarda arac calisiyor gibi gorunse de suruse
          devam etmek daha buyuk hasar riskine neden olur. Bu noktada <strong>viransehir arac kurtarma</strong>
          destegi almak daha guvenli bir secenektir.
        </p>

        <h2 className="text-gray-800">Hizmet Verdiginiz Noktalar</h2>
        <p>
          Viransehir merkez, Siverek-Viransehir arasi koy baglantilari ve ana yol uzerindeki acil noktalarda aktif
          hizmet sagliyoruz. Olay yerine ulasim suresi trafik ve konuma gore degisse de sureci hizlandirmak icin
          konum paylasimi yeterli olur.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Viransehir merkez icinde ariza ve kaza cekimi</li>
          <li>Yol uzeri kurtarma ve guvenli tasima</li>
          <li>Servis veya tercih edilen adrese transfer</li>
          <li>Gece gunduz 7/24 cagri kabul</li>
        </ul>

        <h2 className="text-gray-800">Neden Siverek Cikisli Ekip Avantajli?</h2>
        <p>
          Yol hattina hakim olmak varis suresini etkiler. Ekibimiz guzergah bilgisini aktif kullandigi icin bekleme
          suresini kisaltir. Ayrica fiyat tarafinda seffaf bir model uygulariz. Aracin durumunu ogrendikten sonra
          net teklif sunar, onay almadan isleme baslamayiz. Bu da sureci guvenli ve ongorulebilir hale getirir.
        </p>

        <h2 className="text-gray-800">Fiyatlandirma</h2>
        <p>
          Viransehir merkez ici ve Viransehir-Siverek arasi tasimalarda mesafe bazli fiyatlandirma uygulanir.
          Yol ustu kurtarmalarda operasyon zorluguna gore ek planlama olabilir. Gece tarifesi ilgili saatlerde
          net olarak paylasilir. Gizli ucret uygulanmaz.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8 text-center">
          <p className="font-semibold mb-3">Viransehir hattinda hizli cekici destegi</p>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">Ara</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
        </div>

        <h2 className="text-gray-800">Sikca Sorulan Sorular</h2>
        <ul className="list-disc ml-6 space-y-2">
          {faqs.map((f) => (
            <li key={f.q}><strong>{f.q}</strong> {f.a}</li>
          ))}
        </ul>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Viransehir&apos;de yolda kaldiysan hemen ulas.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
        </div>
      </article>
    </main>
  );
}

