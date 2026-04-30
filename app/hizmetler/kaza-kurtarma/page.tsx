import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siverek&apos;te Kaza Kurtarma | 7/24 Trafik Kazasi Arac Cekme Hizmeti",
  description:
    "Siverek&apos;te trafik kazasi sonrasi acil arac cekme ve kurtarma hizmeti. 7/24 hizli mudahale, guvenli tasima: 0536 478 37 27.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Kaza Sonrasi Arac Kurtarma",
  provider: { "@type": "LocalBusiness", name: "Ortakaya Oto Kurtarma" },
  areaServed: ["Siverek", "Viransehir", "Sanliurfa"],
  telephone: "+905364783727",
};

export default function KazaKurtarmaPage() {
  const faqs = [
    { q: "Kaza yaptim, once kimi aramaliyim?", a: "Can guvenligini saglayip gerekli resmi birimleri bilgilendirdikten sonra bizi arayin." },
    { q: "Sigorta icin belge veriyor musunuz?", a: "Evet. Talebe gore tasima ve islem belgelerini duzenliyoruz." },
    { q: "Arac hareket ediyor ama hasarli, cekici gerekir mi?", a: "Evet. Ek hasar ve guvenlik riski olmamasi icin cekici ile tasima oneriyoruz." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">Siverek Kaza Kurtarma ve Acil Cekici</h1>
        <p>
          Trafik kazasi, surucu icin en stresli anlardandir. O an ne yapacagini bilmek zorlasir, bir yandan guvenlik
          kaygisi bir yandan arac hasari dusunulur. <strong>Siverek&apos;te kaza cekici</strong> ihtiyacinda en dogru yaklasim,
          once can guvenligini saglamak, sonra profesyonel kurtarma destegi almaktir. Ortakaya Oto Kurtarma olarak
          kaza sonrasi sureci sade ve kontrollu yonetiyoruz. Olay yerine hizli ulasiyor, aracini ek hasara neden
          olmadan guvenli sekilde yukleyip istedigin noktaya tasiyoruz. 7/24 erisilebilir oldugumuz icin gece
          veya tatil gunu fark etmez. Panik aninda sana ne yapman gerektigini adim adim anlatiriz. Hemen
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline"> 0536 478 37 27</a>
          uzerinden bize ulasabilir, dilersen <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
          ile konum gonderebilirsin.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <p className="mb-3 font-semibold">Kaza sonrasi vakit kaybetme, dogrudan uzman ekibe ulas.</p>
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Hemen Ara</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp Konum Gonder</a>
        </div>

        <h2 className="text-gray-800">Kaza Kurtarma Hizmeti Nedir?</h2>
        <p>
          Kaza kurtarma, carpisma veya devrilme sonrasi hareket edemeyen ya da guvenli suruse uygun olmayan aracin
          profesyonel olarak tasinmasidir. Normal ariza cekicisinden farki, sahadaki guvenlik yonetiminin daha kritik
          olmasidir. Arac tekerlekleri kilitli olabilir, kaporta parcalari surtme yapabilir, kirik camlar ek risk
          dogurabilir. Bu nedenle olay yerine ulasinca once arac ve cevre kontrol edilir. Sonra sabitleme noktalarina
          uygun baglanti kurulur.
        </p>
        <p>
          Bizim hedefimiz iki seyi ayni anda korumaktir: senin guvenligin ve aracinin mevcut hasar disinda zarar
          gormemesi. Hidrolik platform ve kontrollu sabitleme sayesinde bu dengeyi saglariz. Kaza sonrasi tasimada
          aceleci ama plansiz hareket etmek yerine, hizli ve sistemli yontem uygulariz.
        </p>

        <h2 className="text-gray-800">Siverek Trafik Profili ve Acil Mudahale Ihtiyaci</h2>
        <p>
          Siverek, sehir ici hareketliligin yaninda sehirler arasi gecis yogunlugunu da tasiyan bir noktada bulunur.
          Bu nedenle kavsak noktalarinda ve baglanti yollarinda kaza riski farkli saatlerde artabilir. Ozellikle
          uzun yol yorgunlugu, fren mesafesi hatalari, gece gorus sorunu veya hayvan cikisi gibi etkenler kazaya
          neden olabilir. Kaza sonrasi yolun kapanmasi hem guvenlik hem trafik akisi icin problem olusturur.
          Bu noktada <strong>siverek trafik kazasi kurtarma</strong> ekibinin hizli varisi kritik deger tasir.
        </p>
        <p>
          Yerel ekip oldugumuz icin alternatif guzergahlari hizli kullaniriz. Olay yerine vardigimizda araci en
          guvenli yontemle yukleyip servis, otopark veya tercih ettigin adrese teslim ederiz. Surec boyunca
          ne yaptigimizi anlatir, belirsizlik hissini azaltiriz.
        </p>

        <h2 className="text-gray-800">Kaza Sonrasi Adim Adim Surec</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Can guvenligini sagla, gerekirse acil yardim cagir.</li>
          <li>Araci riskli bolgeden uzaklastirma imkani varsa kontrollu hareket et.</li>
          <li>Bizi ara ve konumu paylas.</li>
          <li>Arac hasar bilgilerini kisa ve net aktar.</li>
          <li>Ekip olay yerine ulassin, guvenli yukleme baslasin.</li>
          <li>Arac hedef noktaya teslim edilsin.</li>
        </ul>
        <p>
          Telefon gorusmesinde senden konum, arac modeli, hasar tipi ve nereye tasinacagi bilgisi aliriz. Bu bilgiler,
          dogru ekipman secimini hizlandirir. Olay yerinde reflektif guvenlik adimlari uygulanir. Sonrasinda arac
          platforma alinip ozel kayislarla sabitlenir. Eger kaportada acikta parca varsa tasima sirasinda surtme
          yapmayacak sekilde emniyet alinir. Teslimatta da indirmenin kontrollu yapilmasi onemlidir.
        </p>

        <h2 className="text-gray-800">Sigorta ve Evrak Sureci</h2>
        <p>
          Kaza sonrasi bircok surucu sigorta tarafini nasil yonetecegini merak eder. Biz bu noktada sureci kolaylastiran
          bir destek saglariz. Aracin tasinmasi tamamlandiginda talep edilirse tasima bilgilerini duzenli paylasiriz.
          Sigorta sirketinle gorusurken gerekli temel bilgileri hazir bulundurman yeterli olur. Anlasmali veya serbest
          odemeli modellerde en dogru yonlendirmeyi olay bazinda yapariz. Ozetle, sadece cekim degil surec netligi de
          sunariz.
        </p>

        <h2 className="text-gray-800">Fiyatlandirma</h2>
        <p>
          Kaza cekici fiyatlari mesafe, hasar seviyesi ve operasyon zorluguna gore degisir. Siverek merkez ici
          operasyonlar ile uzun mesafeli tasimalar ayni degildir. Gece saatlerinde ve resmi tatillerde ek oran
          uygulanabilir. Ancak tum bu kalemleri baslamadan once acikca soyleriz. Gizli ucret cikarmaz, sonrada
          surpriz yasatmayiz. Nakit ve kredi karti odeme kabul edilir.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Fiyat ve varis suresi icin hemen ulas.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">Telefon</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
        </div>

        <h2 className="text-gray-800">Stresli Anda Psikolojik Destek ve Iletisim</h2>
        <p>
          Kaza sonrasi panik hissetmek normaldir. Ekip olarak sakin ve empatik iletisim kurariz. Sana once hangi adimi
          atman gerektigini soyleriz, gereksiz teknik detayla yormayiz. Cocuklu aile, yasli yolcu veya ozel durumlarda
          sureci daha dikkatli yonetiriz. Bizim icin iyi hizmet sadece araci tasimak degil, seni de guvende hissettirmektir.
        </p>

        <h2 className="text-gray-800">Sikca Sorulan Sorular</h2>
        <ul className="list-disc ml-6 space-y-2">
          {faqs.map((f) => (
            <li key={f.q}><strong>{f.q}</strong> {f.a}</li>
          ))}
        </ul>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Kaza gecirdin mi? Panik yapma, yanindayiz.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">HEMEN ARA: 0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
          <p className="mt-4 text-gray-700">Siverek ve cevresinde 7/24 acil kaza kurtarma ve guvenli arac tasima.</p>
        </div>
      </article>
    </main>
  );
}

