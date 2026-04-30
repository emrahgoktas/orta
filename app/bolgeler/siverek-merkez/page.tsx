import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siverek Merkez Oto Cekici | 5 Dakikada Sehir Ici Arac Kurtarma",
  description:
    "Siverek merkez mahallelerinde 7/24 oto cekici ve acil yol yardim. Hizli mudahale, seffaf fiyat: 0536 478 37 27.",
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  name: "Ortakaya Oto Kurtarma",
  areaServed: ["Siverek Merkez"],
  telephone: "+905364783727",
};

export default function SiverekMerkezPage() {
  const faqs = [
    { q: "Siverek merkezde kac dakikada ulasiyorsunuz?", a: "Merkez mahallelerde trafik durumuna gore ortalama 5-10 dakika icinde ulasiyoruz." },
    { q: "Dar sokaklarda cekici hizmeti var mi?", a: "Evet. Sehir ici manevraya uygun planlama yapiyoruz." },
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
        <h1 className="text-gray-800">Siverek Merkez Oto Cekici</h1>
        <p>
          <strong>Siverek merkez oto cekici</strong> hizmetinde hiz her seydir. Sehir icinde arac arizasi yasadiginda,
          ozellikle dar sokak veya yogun kavsaklarda beklemek hem seni hem trafigi zorlar. Merkez bolgede sabah ve
          aksam saatlerinde trafik akisi hizli degisebildigi icin dogru guzergahi bilen yerel ekip avantaj saglar.
          Ortakaya olarak merkezde acil yol yardim taleplerine hizli donus yapariz. Yolda kaldiysan,
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline"> 0536 478 37 27</a> uzerinden
          hemen ulasabilir, <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
          ile konum gonderebilirsin.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Hemen Ara</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
        </div>

        <h2 className="text-gray-800">Siverek Merkezde Hizmetin Neden Farkli Oldugu</h2>
        <p>
          Sehir ici cekim ile sehirler arasi cekim farklidir. Merkezde park yogunlugu, dar gecisler, dukkana yakin
          arizalar ve ani trafik sikisikliklari vardir. Bu nedenle <strong>siverek sehir ici cekici</strong> hizmetinde
          manevra bilgisi ve hizli karar cok onemlidir. Ekiplerimiz Ataturk Bulvari, Cumhuriyet merkez hatti ve baglanti
          caddelerinde trafik yogunlugunu yakindan takip eder. Talep geldiginde alternatif yaklasim noktasi kullanarak
          gecikmeyi azaltiriz.
        </p>
        <p>
          Araclar en cok kavsak cikislarinda, park manevrasi sirasinda veya kisa mesafe kullanimda hararet/aku sorunu
          nedeniyle durur. Bu anlarda amacimiz trafigi daha fazla etkilemeden araci guvenli sekilde almak ve hedef
          servise tasimaktir.
        </p>

        <h2 className="text-gray-800">Hizmet Verdigimiz Mahalleler</h2>
        <p>
          Merkez mahallelerin tamamina aktif destek veriyoruz. Bahcelievler, Camikebir, Firat, Ayvanat ve cevre
          yerlesimlerde duzenli operasyon yurutuyoruz. Merkeze yakin noktalarda varis suresi genellikle 3-5 dakika,
          cevre mahalle gecislerinde 7-10 dakika araliginda olur.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Merkez mahallelerde hizli varis</li>
          <li>Cevre mahallelerde planli guzergahtan kolay erisim</li>
          <li>Kaza ve ariza durumunda guvenli cekim</li>
          <li>Ticari araclara is kaybi azaltan oncelikli destek</li>
        </ul>

        <h2 className="text-gray-800">Siverek&apos;e Ozel Calisma Duzeni</h2>
        <p>
          Pazar gunleri ve resmi donemlerde merkezde hareketlilik artar. Bu saatlerde ekstra hazir ekip planlariz.
          Gece saatlerinde de 7/24 sistemle cagri aliriz. Gece devriyesi sayesinde restoran cikislari, gec saat
          kavsak arizalari ve beklenmedik <strong>siverek acil yol yardim</strong> taleplerinde sureyi kisaltiriz.
        </p>

        <h2 className="text-gray-800">Fiyatlandirma</h2>
        <p>
          Siverek merkez ici tasimalarda sabit ve seffaf fiyat uygulariz. Mahalleler arasi gecislerde mesafeye gore
          net rakam paylasiriz. Gece tarifesi +%20 olarak uygulanir. Isleme baslamadan once fiyat onayin alinmadan
          operasyon yapmayiz.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8 text-center">
          <p className="font-semibold mb-3">Merkezde acil cekici mi lazim?</p>
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
          <h3 className="text-2xl font-bold mb-4">Siverek merkezde 7/24 yanindayiz.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
        </div>
      </article>
    </main>
  );
}

