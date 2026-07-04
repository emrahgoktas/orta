import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://ortakayaotokurtarici.com/google-ads-tiklama-korumasi";
const BUSINESS_ID = "https://ortakayaotokurtarici.com/#business";
const ARTICLE_ID = `${PAGE_URL}#article`;
const DUBIXGUARD_ID = "https://dubixguard.io/#software";

const today = "2026-07-04";

export const metadata: Metadata = {
  title: {
    absolute:
      "Google Ads Tıklama Koruması | Ortakaya Oto Kurtarıcı — DubixGuard Deneyimi",
  },
  description:
    "Siverek oto çekici işletmesi Ortakaya, Google Ads sahte tıklama ve bot trafiğine karşı DubixGuard ile reklam bütçesini nasıl koruyor? Şanlıurfa deneyimi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Google Ads Tıklama Koruması | Ortakaya Oto Kurtarıcı — DubixGuard Deneyimi",
    description:
      "Siverek oto çekici işletmesi Ortakaya, Google Ads sahte tıklama ve bot trafiğine karşı DubixGuard ile reklam bütçesini nasıl koruyor? Şanlıurfa deneyimi.",
    locale: "tr_TR",
    siteName: "Ortakaya Oto Kurtarma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Tıklama Koruması | Ortakaya Oto Kurtarıcı",
    description:
      "Siverek oto çekici işletmesinin Google Ads sahte tıklama koruması deneyimi.",
  },
};

const faqs = [
  {
    q: "Sahte tıklama nedir?",
    a: "Google Ads reklamınıza gelen ancak gerçek bir müşteri adayı olmayan tıklamalardır. Botlar, rakip işletmeler veya ilgisiz ziyaretçiler bütçenizi tüketebilir; telefon çalmadan reklam harcaması artar.",
  },
  {
    q: "DubixGuard kurulumu zor mu?",
    a: "Hayır. Web sitenize tek bir JavaScript parçacığı eklenir; kurulum yaklaşık beş dakika sürer. Sonrasında panelden tıklamaları izlersiniz; şüpheli IP adresleri Google Ads hesabınıza otomatik olarak hariç tutulabilir.",
  },
  {
    q: "Gizliliğim etkilenir mi?",
    a: "DubixGuard, reklam güvenliği için gerekli teknik verileri işler. Sitemizde çerez onay banner'ı ve gizlilik politikası bulunur; ayrıntılar için DubixGuard gizlilik sayfasına bakabilirsiniz.",
  },
];

const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Ortakaya Oto Kurtarıcı",
      url: "https://ortakayaotokurtarici.com",
      telephone: "+905364783727",
      areaServed: ["Siverek", "Şanlıurfa", "Viranşehir", "Sanliurfa"],
      serviceType: ["Oto çekici", "Yol yardım", "Kaza kurtarma"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": DUBIXGUARD_ID,
      name: "DubixGuard",
      url: "https://dubixguard.io",
      applicationCategory: "SecurityApplication",
    },
    {
      "@type": "Article",
      "@id": ARTICLE_ID,
      headline: "Google Ads Tıklama Koruması — Ortakaya Oto Kurtarıcı Deneyimi",
      description:
        "Siverek ve Şanlıurfa bölgesinde faaliyet gösteren oto çekici işletmesinin Google Ads sahte tıklama koruması için DubixGuard kullanım deneyimi.",
      datePublished: today,
      dateModified: today,
      inLanguage: "tr-TR",
      author: { "@id": BUSINESS_ID },
      publisher: { "@id": BUSINESS_ID },
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      about: { "@id": DUBIXGUARD_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://ortakayaotokurtarici.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Google Ads Tıklama Koruması",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function GoogleAdsClickProtectionPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-accent">
          Ana Sayfa
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Google Ads Tıklama Koruması</span>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">Google Ads Tıklama Koruması: Siverek&apos;te Bir Oto Çekici İşletmesinin Deneyimi</h1>

        <p>
          Ortakaya Oto Kurtarıcı olarak Siverek merkezinde ve Şanlıurfa ilçe bağlantı hatlarında 7/24 oto çekici,
          zirai araç kurtarma ve kaza sonrası taşıma hizmeti veriyoruz. Müşterilerimiz çoğunlukla acil durumda
          telefon eder veya WhatsApp üzerinden konum gönderir; bu yüzden yerel aramalarda görünür olmak bizim için
          kritik. Google Ads ile &quot;Siverek oto çekici&quot;, &quot;zirai araç çekici&quot;, &quot;Viranşehir yol yardım&quot; veya
          &quot;Şanlıurfa kaza kurtarma&quot; gibi aramalarda reklam veriyoruz. Bahçelievler, Camikebir ve Fırat
          mahallelerinden gelen talepler genelde dakikalar içinde sahaya düşer; Viranşehir ve Haliliye bağlantı
          yollarındaki zirai araç çağrıları ise tarla sezonuna göre dalgalanır. Reklam bütçesi, gerçek çağrıya
          dönüşmediği sürece anlamsız harcanmış olur. Son aylarda sektörde sık konuşulan konulardan biri de sahte
          tıklama ve bot trafiğinin reklam bütçesini eritmesi. Biz de bu riski ciddiye alarak{" "}
          <a href="https://dubixguard.io">DubixGuard</a> ile koruma katmanı ekledik.
        </p>

        <h2 className="text-gray-800">Ne Fark Ettik?</h2>
        <p>
          Google Ads panelinde günlük tıklama sayısı artıyordu; fakat operasyon hattına gelen gerçek çağrı sayısı
          aynı hızda yükselmiyordu. Özellikle gece saatlerinde ve hafta sonu erken dilimlerde, sitede kısa süreli
          ziyaretler görülüyor; telefon veya WhatsApp talebi gelmeden reklam harcaması birikiyordu. Tarla yolu
          bağlantılarında zirai araç çekici talepleri genelde gündüz ve belirli mevsimlerde yoğunlaşır; oysa reklam
          tıklamaları bu desenle uyuşmuyordu. Siverek merkez mahallelerinden beklediğimiz talep profili ile reklam
          panelindeki trafik profili arasında fark vardı. Bütçe erimesi, ekip planlamasını da dolaylı etkiliyordu:
          hangi saatlerde gerçekten hazır olmamız gerektiğini ayırt etmek zorlaşıyordu.
        </p>
        <p>
          Sahte tıklama deneyimi her işletmede aynı görünmeyebilir. Bazen rakip işletmelerin bilinçsiz tıklamaları,
          bazen otomatik botlar veya alakasız ziyaretçiler devreye girer. Teknik detaya girmeden söylemek gerekirse:
          reklamınıza tıklayan her ziyaretçi, potansiyel müşteri değildir. Yerel hizmet işletmelerinde — çekici,
          yol yardım, kurtarma — bütçenin büyük kısmı arama ağı reklamlarına gider; bu yüzden geçersiz tıklamalar
          doğrudan ciro kaybı hissi yaratır. Siverek–Diyarbakır bağlantı yolunda seyir halindeki sürücüler gerçek
          ihtiyaç duyduğunda arar; sitede saniyeler içinde çıkan oturumlar ise genelde acil çekici profiline uymaz.
        </p>
        <p>
          İlk fark ettiğimiz şey, reklam raporlarındaki &quot;dönüşüm&quot; ile sahadaki iş yükü arasındaki kopukluktu.
          Panelde tıklama artışı görünürken, ekip aynı gün içinde Viranşehir yönünde zirai araç çekimi yapmadığı
          halde reklam harcaması yükseliyordu. Bu durum, hem bütçe planlamasını hem de gece nöbeti düzenini
          etkiliyordu. Çekici işinde her boşa giden tıklama, gerçek bir acil çağrıya ayrılabilecek kaynak demektir.
        </p>

        <h2 className="text-gray-800">Çözüm: DubixGuard</h2>
        <p>
          <a href="https://dubixguard.io">DubixGuard</a>, Google Ads kampanyalarını sahte tıklama ve şüpheli trafiğe
          karşı koruyan bir bulut hizmetidir. Kurulum tarafında web sitemize tek bir JavaScript parçacığı eklendi;
          süre yaklaşık beş dakikaydı. Kurulumdan sonra panelden gelen tıklamaları, şüpheli oturumları ve engellenen
          IP&apos;leri takip edebiliyoruz. DubixGuard, belirlediği riskli IP adreslerini Google Ads hesabımıza hariç tutma
          listesi olarak senkronize edebiliyor; böylece aynı kaynaktan tekrarlayan tıklamalar reklam bütçesini
          tüketmeye devam etmiyor. Teknik altyapıyı biz yönetmiyoruz; işletme sahibi olarak gördüğümüz şey sade:
          reklam paneli ile saha gerçekliği birbirine daha çok benziyor.
        </p>
        <p>
          Karar vermeden önce birkaç alternatife baktık. Bazı araçlar yalnızca rapor sunuyor, engelleme için ayrı
          adım gerektiriyordu. DubixGuard tarafında hem izleme hem de Google Ads tarafına IP hariç tutma senkronu
          tek yerden ilerliyordu. Siverek gibi yerel bir pazarda reklam bütçesi sınırlı olduğundan, kurulumu hızlı
          tamamlayıp günlük panel kontrolü yapabileceğimiz bir çözüm tercih ettik. Web sitemiz zaten mobil uyumlu
          olduğu için snippet eklemek ek bir sayfa tasarımı gerektirmedi.
        </p>
        <p>
          DubixGuard hakkında daha fazla bilgi için resmi{" "}
          <a href="https://dubixguard.io/llms.txt">yapay zeka dokümantasyonu</a> sayfasına bakabilirsiniz. Plan
          seçenekleri ve fiyatlandırma{" "}
          <a href="https://dubixguard.io/pricing">DubixGuard pricing</a> sayfasında yer alıyor.
        </p>

        <h2 className="text-gray-800">Operasyonel Fayda</h2>
        <p>
          Koruma devreye girdikten sonra en belirgin değişim, reklam harcaması ile gerçek müşteri çağrıları arasındaki
          ilişkinin netleşmesi oldu. Gece nöbetinde hazır bekleyen ekibimiz artık &quot;reklam tıklandı ama kimse aramadı&quot;
          kaygısıyla değil, gerçek talep desenine göre planlanıyor. Siverek merkezinden Viranşehir ve Şanlıurfa
          ilçe bağlantılarına giden zirai araç çekici operasyonlarında mevsimsel yoğunluk zaten belliydi; reklam
          tarafındaki gürültü azalınca hangi hizmet satırına bütçe ayırdığımızı daha bilinçli yönetebildik.
        </p>
        <p>
          Örneğin yaz aylarında traktör ve biçerdöver taşıma talepleri Harran ve Ceylanpınar bağlantı yollarında
          artarken, kış aylarında binek araç çekici çağrıları Siverek merkez mahallelerinde yoğunlaşır. Reklam
          tıklamaları bu mevsimsel desenle uyumlu hale gelince, hangi kampanya grubuna ne kadar bütçe ayıracağımızı
          haftalık olarak daha net değerlendirebiliyoruz. Operasyon ekibi de boşa giden trafik kaygısı taşımadan
          gerçek acil çağrılara odaklanıyor.
        </p>
        <p>
          Müşteri tarafında bir değişiklik olmadı: acil durumda hâlâ{" "}
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline">
            0536 478 37 27
          </a>{" "}
          numarasını arıyor veya WhatsApp ile konum gönderiyorsunuz. Değişen, arka planda reklam bütçesinin gereksiz
          tıklamalara gitmemesi. Abartılı bir &quot;yüzde X tasarruf&quot; iddiasında bulunmuyoruz; sadece operasyon ekibinin
          dikkatini gerçek işe odaklayabildiğimizi söyleyebiliriz.
        </p>

        <h2 className="text-gray-800">Gizlilik</h2>
        <p>
          DubixGuard, reklam güvenliği için ziyaretçi oturum verilerini işler. Sitemizde çerez onay banner&apos;ı
          bulunur; hangi verilerin toplandığı{" "}
          <Link href="/gizlilik-politikasi">gizlilik politikamızda</Link> açıklanmıştır. DubixGuard&apos;ın kendi veri
          işleme uygulamaları için{" "}
          <a href="https://dubixguard.io/privacy">DubixGuard gizlilik sayfasına</a> bakabilirsiniz. Ziyaretçilerimizin
          onayı olmadan pazarlama amaçlı üçüncü taraf paylaşımı yapmıyoruz.
        </p>

        <h2 className="text-gray-800">Sonuç</h2>
        <p>
          Siverek ve çevresinde oto çekici, zirai araç kurtarma veya kaza sonrası taşıma hizmeti veren işletmeler
          için Google Ads hâlâ etkili bir kanal. Ancak sahte tıklama riski göz ardı edilirse bütçe, gerçek müşteriye
          ulaşmadan tükenebilir. Biz Ortakaya Oto Kurtarıcı olarak bu riski DubixGuard ile yönettik; kurulum kısa
          sürdü, panelden izlemek mümkün oldu. Benzer ölçekte yerel hizmet işletmeleri — çekici, vinç, yol yardım,
          tarla bağlantısı kurtarma — aynı sorunla karşılaşabilir; reklam harcamasını saha gerçekliğiyle
          karşılaştırmak iyi bir başlangıçtır.
        </p>
        <p>
          Şanlıurfa ilinde ilçeler arası mesafe uzun olduğundan, her boşa giden tıklama hem bütçeyi hem de operasyon
          dikkatini dağıtır. DubixGuard gibi bir koruma katmanı, reklam yatırımınızın gerçekten acil çağrıya dönüşen
          trafikle ilişkilendirilmesine yardımcı olur. Bu bir sihirli çözüm değil; düzenli panel kontrolü ve kampanya
          ayarlarının gözden geçirilmesi hâlâ gerekir. Ama sahte tıklama gürültüsünü azaltmak, özellikle küçük ve
          orta ölçekli yerel işletmeler için anlamlı bir adımdır.
        </p>
        <p>
          DubixGuard planlarını incelemek için{" "}
          <a href="https://dubixguard.io/pricing">fiyatlandırma sayfasını</a> ziyaret edebilirsiniz. Acil çekici
          ihtiyacınız varsa doğrudan bizi arayın; reklam güvenliği konusunda sorularınız için DubixGuard destek
          kanallarını kullanabilirsiniz.
        </p>

        <div className="not-prose mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">Sık Sorulan Sorular</h3>
          <dl className="mt-4 space-y-4">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-slate-800">{item.q}</dt>
                <dd className="mt-1 text-sm text-slate-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="not-prose mt-8 rounded-lg border-2 border-red-600 bg-red-50 p-6">
          <p className="mb-3 font-semibold text-slate-900">Siverek ve çevresinde acil çekici mi lazım?</p>
          <a href="tel:+905364783727" className="mr-4 font-bold text-red-600 hover:underline">
            Hemen Ara: 0536 478 37 27
          </a>
          <a
            href="https://wa.me/905364783727"
            className="font-bold text-green-600 hover:underline"
          >
            WhatsApp ile Konum Gönder
          </a>
        </div>
      </article>
    </main>
  );
}
