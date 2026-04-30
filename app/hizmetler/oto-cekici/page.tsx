import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siverek&apos;te Oto Cekici Hizmeti | 7/24 Binek ve Ticari Arac Cekme",
  description:
    "Siverek&apos;te 7/24 oto cekici hizmeti. Binek arac ve hafif ticari arac cekimi. Kaza, ariza, yolda kalma durumunda hizli destek: 0536 478 37 27.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Oto Cekici ve Arac Kurtarma",
  provider: { "@type": "LocalBusiness", name: "Ortakaya Oto Kurtarma" },
  areaServed: ["Siverek", "Viransehir", "Sanliurfa"],
  telephone: "+905364783727",
};

export default function OtoCekiciPage() {
  const faqs = [
    {
      q: "Gece yarisi da cekici geliyor mu?",
      a: "Evet. Siverek&apos;te 7/24 hizmet veriyoruz. Gece tarifesi +%20 olarak uygulanir.",
    },
    {
      q: "Aracim calismiyor, nasil yuklenecek?",
      a: "Hidrolik platform ile araci calistirmadan guvenli sekilde yukluyoruz.",
    },
    {
      q: "Fiyat neye gore belirleniyor?",
      a: "Mesafe ve yol kosuluna gore belirlenir. Telefonda net fiyat verilir, gizli ucret cikmaz.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">Siverek&apos;te Oto Cekici Hizmeti</h1>
        <p>
          <strong>Siverek&apos;te oto cekici</strong> ihtiyaci, cogu zaman en beklenmedik anda ortaya cikar.
          Sicak yaz gunlerinde motor bir anda hararet yapar, uzun yolda radyator suyu azalir, ya da sehir icinde
          trafikteyken arac birden calismaz. Bazen de virajli baglanti yollarinda <strong>kaza yapti</strong>ktan sonra
          arac hareket edemez hale gelir. Bu gibi anlarda zaman kaybi, stres ve guvenlik riski ayni anda buyur.
          Tam da bu noktada Ortakaya Oto Kurtarma olarak hizli cevap veririz. Bize ulastiginda 5 dakika icinde
          yonlendirme yapar, merkez bolgede hizli cikis saglariz. 7/24 calisiriz; gece, gunduz, tatil demeden
          destek veririz. Ustelik fiyat tarafinda sabit ve seffaf yaklasim izleriz. Surpriz bedel olmaz. Ilk andan
          itibaren net bilgi almak istersen hemen <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline">0536 478 37 27</a> ara
          veya <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a> uzerinden konum gonder.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <p className="mb-3 text-lg font-semibold">Acil cekici lazimsa tek adim yeterli.</p>
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Hemen Ara: 0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp ile Konum Gonder</a>
        </div>

        <h2 className="text-gray-800">Oto Cekici Hizmeti Nedir?</h2>
        <p>
          Oto cekici, aracinin bulundugu noktadan hedef noktaya guvenli tasinmasidir. Bu hedef bir ozel servis,
          yetkili servis, otopark veya evinin onundeki guvenli alan olabilir. <strong>Siverek cekici</strong> hizmetinde
          temel amac araci suruklemeden, ek hasar olusturmadan tasimaktir. Biz hidrolik platform kullaniyoruz.
          Arac bu platforma kontrollu alinip sabitleme kayislariyla dengeli sekilde baglanir. Bu yontem,
          hem binek hem de ticari araclarda guvenli sonucu verir.
        </p>
        <p>
          Hangi durumlarda cekici gerekir? Motor calismiyor olabilir, asiri isinma nedeniyle yola devam etmek riskli
          olabilir, sanziman veya debriyaj arizasi yasaniyor olabilir. Kaza sonrasi on takim hasari, fren problemi,
          direksiyon kilidi, lastik patlamasi ve yedek lastigin olmamasi gibi durumlar da sik gorulur. Aku tamamen
          bittiginde mars basmayabilir ve kontak sistemi cevap vermeyebilir. Bu gibi arizalarda araci zorlamak daha
          buyuk masraf dogurur. Dogru adim, hemen profesyonel yardim istemektir. Bizim ekip araci oldugu gibi
          guvenle yukler, teslim noktasina problemsiz sekilde ulastirir.
        </p>

        <h2 className="text-gray-800">Siverek&apos;te Oto Cekici Hizmetinin Onemi</h2>
        <p>
          Siverek, Sanliurfa ile Diyarbakir arasinda stratejik gecis hattinda yer alir. Sehirler arasi hareketliligin
          yuksek oldugu bu bolgede E99 ve baglanti yollarinda trafik yogunlugu zaman zaman artar. Sicak iklim,
          ozellikle yaz aylarinda radyator, sogutma sistemi ve klima kaynakli arizalari artirir. Kis aylarinda ise
          sabah erken saatlerde yol tutusu dusen zeminler nedeniyle <strong>arac kurtarma</strong> ihtiyaci dogabilir.
          Uzun yol yorgunlugu, bakimsiz arac kullanimi ve asiri yuk gibi faktorler de ariza riskini yukselten
          detaylardir.
        </p>
        <p>
          Yerel ekip olmanin burada buyuk avantaji vardir. Siverek&apos;in merkez sokaklarini, alternatif guzergahlarini,
          mahalle gecislerini ve kritik noktalari biliyoruz. Bu da varis suresini dogrudan kisaltir. Merkezde
          ortalama 5-10 dakika, cevre noktalarda 10-20 dakika araliginda olay yerine ulasiyoruz. Ozellikle gece
          saatlerinde disarida destek bulmak zorlastigi icin 7/24 hazir ekip ciddi fark olusturur. Hedefimiz
          sadece araci cekmek degil; seni guvenli, sakin ve kontrollu bir sekilde surecin sonuna tasimaktir.
        </p>

        <h2 className="text-gray-800">Hangi Araclari Cekiyoruz?</h2>
        <p>
          <strong>Siverek binek arac cekici</strong> tarafinda sedan, hatchback, station wagon, SUV, crossover ve
          pickup gruplarinda aktif hizmet veriyoruz. Ayrica <strong>Siverek ticari arac cekici</strong> ihtiyacinda
          panelvan, kamyonet ve minibus segmentlerinde de destek sagliyoruz. Modifiye araclarda dusuk suspansiyon
          nedeniyle yukleme acisina dikkat ediyoruz. LPG&apos;li araclarda emniyet protokollerini uyguluyoruz.
          Hibrit ve elektrikli araclarda da uygun baglanti noktalarini kullanarak guvenli tasima yapiyoruz.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Binek: sedan, hatchback, SUV, crossover, pickup</li>
          <li>Ticari: panelvan, hafif kamyonet, minibus</li>
          <li>Ozel durum: modifiye, LPG&apos;li, hibrit ve elektrikli araclar</li>
          <li>Cok agir tonajli araclar icin durum bazli yonlendirme</li>
        </ul>

        <h2 className="text-gray-800">Cekici Sureci Nasil Isler?</h2>
        <p>
          Surec cok net ve pratiktir. Ilk adimda bizi ararsin, konumunu paylasirsin ve sorunu kisaca anlatirsin.
          Google Maps linki gondermen sureci hizlandirir. Aracin tipi, bulundugu nokta ve hedef teslim adresine
          gore fiyat bilgisini telefonda netlestiririz. Sonra ekip cikis yapar. Olay yerine geldigimizde once
          guvenlik kontrolu yapilir, sonra hidrolik platformla yukleme tamamlanir. Sabitleme kayislariyla arac
          dengeli tutulur. Hedef noktada kontrollu indirme yapilir ve odeme tamamlanir.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Adim 1: Arama ve konum paylasimi</li>
          <li>Adim 2: Mesafe bazli sabit fiyat bilgisi</li>
          <li>Adim 3: Hizli cikis ve olay yerine varis</li>
          <li>Adim 4: Guvenli yukleme ve sabitleme</li>
          <li>Adim 5: Teslimat ve odeme</li>
        </ul>

        <h2 className="text-gray-800">Fiyatlandirma ve Odeme</h2>
        <p>
          Fiyatlar mesafe, yol durumu ve arac segmentine gore belirlenir. Siverek merkez ici tasimalarda
          ekonomik araliklar sunariz. Viransehir veya Sanliurfa yonune uzayan tasimalarda km bazli hesap yapilir.
          Gece tarifesi 22:00-06:00 arasi +%20, resmi tatil ve bayram gunlerinde +%30 uygulanir. Ama en kritik nokta
          su: sonradan ek kalem cikararak seni sasirtmayiz. Ucret bilgisini basta soyler, onayindan sonra hareket ederiz.
          Odeme nakit veya kredi karti ile alinabilir. Kurumsal taleplerde fatura destegi de saglanir.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <p className="mb-2 font-semibold">Fiyat almak 30 saniye surer.</p>
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Telefonla Net Fiyat Al</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp Uzerinden Yaz</a>
        </div>

        <h2 className="text-gray-800">Neden Ortakaya Oto Kurtarma?</h2>
        <p>
          Hizli varis, deneyimli ekip, modern ekipman ve seffaf fiyatlandirma bizim temel gucumuz. Siverek&apos;i sokak
          sokak biliyoruz. Bu bilgi, acil durumlarda zaman kazandirir. Aracina ek hasar vermeden guvenli tasima
          yapariz. Cagri anindan teslim anina kadar sureci acik sekilde anlatiriz. Ne yapacagimizi bilirsin,
          ne odeyecegini bilirsin, ne kadar surede ulasacagimizi bilirsin. Tam da bu netlik nedeniyle bizi tekrar
          tercih eden musteri oraniniz yuksektir.
        </p>

        <h2 className="text-gray-800">Sikca Sorulan Sorular</h2>
        <ul className="list-disc ml-6 space-y-2">
          {faqs.map((item) => (
            <li key={item.q}>
              <strong>{item.q}</strong> {item.a}
            </li>
          ))}
        </ul>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose mt-10 text-center">
          <h3 className="mb-3 text-2xl font-bold">Yolda mi kaldin? Hemen arayin.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">
            ARA: 0536 478 37 27
          </a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">
            WhatsApp
          </a>
          <p className="mt-4 text-gray-700">Siverek, Viransehir ve Sanliurfa hattinda 7/24 cekici hizmeti veriyoruz.</p>
        </div>
      </article>
    </main>
  );
}

