import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanliurfa Oto Cekici | Siverek&apos;ten 7/24 Arac Kurtarma",
  description:
    "Sanliurfa hattinda ariza ve kaza durumlari icin Siverek cikisli oto cekici destegi. 7/24 iletisim: 0536 478 37 27.",
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  name: "Ortakaya Oto Kurtarma",
  areaServed: ["Sanliurfa", "Eyyubiye", "Haliliye", "Karakopru", "Siverek-Sanliurfa Yolu"],
  telephone: "+905364783727",
};

export default function SanliurfaPage() {
  const faqs = [
    { q: "Sanliurfa merkezden Siverek&apos;e cekim yapiyor musunuz?", a: "Evet. Konum ve hedef noktaya gore planli tasima yapiyoruz." },
    { q: "Uzun yol arizalarinda hizli ulasim mumkun mu?", a: "Evet. Konum paylasimi ile ekip yonlendirmesini hizlandiriyoruz." },
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
        <h1 className="text-gray-800">Sanliurfa Oto Cekici Hizmeti</h1>
        <p>
          <strong>Sanliurfa oto cekici</strong> ihtiyacinda hizli karar vermek onemlidir. Uzun yolda motor arizasi,
          yakit sistemi problemi, lastik patlamasi veya kaza sonrasi hareketsiz kalan araclarda bekleme suresi uzadikca
          risk buyur. Siverek cikisli ekiplerimizle Sanliurfa hattina 7/24 destek veriyoruz. Ulasim icin
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline"> 0536 478 37 27</a>
          numarasini arayabilir, <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
          uzerinden konumunu gonderebilirsin.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Hemen Ara</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
        </div>

        <h2 className="text-gray-800">Sanliurfa Baglantisinda Neden Profesyonel Cekici Gerekir?</h2>
        <p>
          Siverek-Sanliurfa hattinda uzun mesafeli surus, sicak hava ve yuksek trafik temposu ariza riskini artirir.
          Arac bir anda cekisten duserse veya motor asiri isinmaya baslarsa suruse devam etmek ciddi masraf dogurabilir.
          Bu nedenle <strong>sanliurfa arac kurtarma</strong> surecinde dogru cekici ile guvenli tasima gerekir. Biz
          aracin durumunu telefonda dinler, uygun yonlendirme ile sureci hizli baslatiriz.
        </p>

        <h2 className="text-gray-800">Hizmet Noktalari</h2>
        <p>
          Sanliurfa merkez, Eyyubiye, Haliliye, Karakopru ve baglanti guzergahlarinda hizmet veriyoruz. Aracini
          Siverek&apos;e, tercih ettigin bir servise veya uygun park alanina tasiyabiliriz. Yerel yol bilgisi sayesinde
          sureyi daha verimli kullaniriz.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Sanliurfa merkezde ariza cekimi</li>
          <li>Ilce baglantilarinda yol ustu kurtarma</li>
          <li>Siverek-Sanliurfa arasi guvenli tasima</li>
          <li>Gece gunduz 7/24 hizmet</li>
        </ul>

        <h2 className="text-gray-800">Fiyatlandirma ve Seffaf Surec</h2>
        <p>
          Sanliurfa yonunde fiyatlama km bazli planlanir. Sehir ici nokta ile sehirler arasi tasima ayni degildir.
          Bu nedenle en dogru fiyat icin konum ve hedef bilgisini paylasman yeterli olur. Gece tarifesi, tatil
          kosullari ve operasyon detaylari baslamadan once acikca aktarilir. Gizli ucret olmaz.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8 text-center">
          <p className="font-semibold mb-3">Sanliurfa hattinda acil cekici mi lazim?</p>
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
          <h3 className="text-2xl font-bold mb-4">Sanliurfa&apos;da yolda kaldiysan tek arama yeter.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
        </div>
      </article>
    </main>
  );
}

