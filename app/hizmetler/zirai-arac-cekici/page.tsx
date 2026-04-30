import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siverek&apos;te Zirai Arac Cekici | Traktor, Bicerdover, Tarim Makinesi Cekimi",
  description:
    "Siverek&apos;te 7/24 zirai arac cekici hizmeti. Traktor, bicerdover, romork ve tarim makinesi kurtarma icin hizli destek: 0536 478 37 27.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Zirai Arac Cekici ve Tarla Kurtarma",
  provider: { "@type": "LocalBusiness", name: "Ortakaya Oto Kurtarma" },
  areaServed: ["Siverek", "Viransehir", "Sanliurfa"],
  telephone: "+905364783727",
};

export default function ZiraiAracPage() {
  const faqs = [
    { q: "10 ton bicerdover cekebilir misiniz?", a: "Duruma uygun ekipmanla planli cekim sagliyoruz. Aractan once zemin ve tonaj bilgisi aliyoruz." },
    { q: "Tarla camurluysa gelir misiniz?", a: "Evet. Zemin uygunluguna gore zincir ve kurtarma ekipmani ile mudahale ediyoruz." },
    { q: "Gece hasadinda destek var mi?", a: "7/24 hizmet veriyoruz. Gece hasatlarinda da ekip yonlendiriyoruz." },
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
        <h1 className="text-gray-800">Siverek&apos;te Zirai Arac Cekici Hizmeti</h1>
        <p>
          Siverek tarimla nefes alan bir bolge. Bugday, arpa, mercimek ve pamuk uretiminde zamanlama cok onemli.
          Hasat doneminde bir traktorun veya bicerdoverin tarlada kalmasi, sadece bir makinenin durmasi degil;
          tum gunluk planin aksamasidir. Is gucu bekler, urun gecikir, hava sartlari degisebilir. Bu nedenle
          <strong>siverek zirai arac kurtarma</strong> hizmetinde hiz kadar dogru ekipman da kritiktir. Ortakaya olarak
          tarlada kalan aracta once guvenli yaklasim planlar, sonra uygun cekim yontemini uygulariz. Tonaj, zemin,
          tarla yolu ve hedef nokta birlikte degerlendirilir. Boylece hem makine hem operator acisindan guvenli
          bir operasyon cikartiriz. Tarlada zaman kaybetmek istemiyorsan hemen
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline"> 0536 478 37 27</a>
          ara veya <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp</a>
          uzerinden konum paylas.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8">
          <p className="mb-3 font-semibold">Tarlada kaldiniz mi? Vakit kaybetmeden destek alin.</p>
          <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline mr-4">Ara: 0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="text-green-600 font-bold hover:underline">WhatsApp Konum Gonder</a>
        </div>

        <h2 className="text-gray-800">Zirai Arac Cekici Nedir?</h2>
        <p>
          Zirai cekici hizmeti, tarim araclarinin tarla veya baglanti yolundan guvenli sekilde kurtarilip uygun noktaya
          tasinmasidir. Standart binek arac cekiminden farkli olarak burada tonaj, dingil yapisi ve zemin kosulu cok
          daha zordur. Traktorler 2 ile 8 ton araliginda degisebilir. Bicerdoverler daha da yuksek agirliklara ulasir.
          Lastikler genis oldugu icin dogru baglama acisi gerekir. Ayrica tarla zemini kuru, yumusak, camurlu veya
          taslik olabilir. Bu nedenle tek tip kurtarma yontemi yerine olay bazli plan yapariz.
        </p>
        <p>
          En sik gorulen durumlar motor arizasi, diferansiyel kirigi, hidrolik sistem sorunu, lastik patlamasi,
          romork devrilmesi ve camura saplanmadir. Hasat gunlerinde yuklu romorkla ilerlerken denge kaybi da olabilir.
          Biz once riski degerlendirir, gerekirse zincir, takoz ve ek guvenlik ekipmani kullaniriz. Amacimiz makineye
          ikinci hasar vermeden, en kisa surede tekrar calisma duzenine donmeni saglamaktir.
        </p>

        <h2 className="text-gray-800">Siverek&apos;te Zirai Arac Kurtarmanin Gercekleri</h2>
        <p>
          Siverek&apos;in genis tarim arazileri, yaz sicaklari ve yogun sezon temposu makine arizalarini artirabilir.
          Ozellikle Haziran-Eylul arasinda hasat yogunlugu zirveye cikar. Bu donemde bir makinenin saatlerce
          beklemesi urun kalitesini ve is planini etkiler. Bazi tarlalar sulama kanallarina yakin oldugu icin zemin
          yumusar; bicerdover ve traktorlerde saplanma riski artar. Taslik arazilerde ise lastik ve alt takim sorunlari
          siklasir. <strong>Siverekte traktor cekici</strong> ya da <strong>siverek bicerdover cekimi</strong> gerektiginde
          yerel yol bilgisinin degeri burada ortaya cikar.
        </p>
        <p>
          Koy yollarina hangi aracla girilecegi, hangi guzergahin hava kosulunda daha guvenli oldugu, gece operasyonunda
          nereden yaklasmak gerektigi deneyim ister. Ekibimiz Siverek merkez, koy ve tarla baglantilarinda bu pratik
          bilgiye sahiptir. Sadece araci cekmeyi degil, operasyon suresini kisaltmayi hedefleriz. Ciftcinin zamanini
          ve urununu koruyan yaklasim benimsiyoruz.
        </p>

        <h2 className="text-gray-800">Hangi Zirai Araclari Cekiyoruz?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Kucuk, orta ve buyuk segment traktorler</li>
          <li>Romorklu veya romorksuz tarla kombinasyonlari</li>
          <li>Bicerdover ve hasat makineleri (durum bazli planlama)</li>
          <li>Balya makineleri ve diger cekili tarim ekipmanlari</li>
          <li>Tarla yolunda saplanmis veya devrilmis ekipmanlar</li>
        </ul>
        <p>
          Her olayda once teknik bilgi aliriz: arac modeli, tonaj, zemin ve hedef teslim noktasi. Bu sayede uygun
          ekipmanla cikis yapar, sahada deneme-yanilma ile zaman kaybetmeyiz.
        </p>

        <h2 className="text-gray-800">Zirai Kurtarma Sureci</h2>
        <p>
          Ilk adimda telefonla net bilgi aliriz. Koy, mevki, tarla numarasi ya da yakin bir referans nokta paylasman
          yeterli olur. Ardindan arac tipi ve ariza bilgisine gore ekip hazirlanir. Olay yerine varildiginda once zemin
          kontrol edilir; camur, egim veya kayma riski varsa guvenlik protokolu devreye girer. Sonrasinda vinc, zincir
          veya platform destekli yukleme yapilir. Sabitleme tamamlaninca arac servis, ciftlik veya isletme noktasina
          tasinir.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Adim 1: Konum ve ariza bilgisini paylas</li>
          <li>Adim 2: Tonaja uygun ekipman planlamasi</li>
          <li>Adim 3: Olay yerine hizli varis</li>
          <li>Adim 4: Guvenli kurtarma ve sabitleme</li>
          <li>Adim 5: Hedef noktaya kontrollu teslim</li>
        </ul>

        <h2 className="text-gray-800">Fiyatlandirma ve Ciftci Dostu Yaklasim</h2>
        <p>
          Zirai kurtarma fiyatlari; tonaj, mesafe, zemin zorlugu ve ekstra ekipman ihtiyacina gore degisir. Camurdan
          kurtarma, devrilme duzeltme veya zor erisimli arazilerde operasyon suresi artabilir. Buna ragmen fiyat
          politikasinda seffaflik temel ilkemizdir. Ucreti isleme baslamadan once netlestiririz. Hasat sezonunda
          acil durumlari firsat olarak gormeyiz. Yerel ureticinin yaninda duran makul fiyat anlayisiyla calisiriz.
          Odeme nakit ya da havale ile alinabilir, talep edilirse fatura duzenlenir.
        </p>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Hasat kaybetme, hemen destek al.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">Ara</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp</a>
        </div>

        <h2 className="text-gray-800">Hasat Sezonunda Ozel Planlama</h2>
        <p>
          Haziran-Eylul doneminde sahada ekstra ekip planlariz. Gece hasadi yapan ureticiler icin de erisilebilir
          durumda oluruz. Gerektiginde lastik tedarikine yonlendirme, en yakin servis baglantisi ve operasyon onceligi
          saglariz. Amac, gunluk hasat akisini minimum kesintiyle devam ettirmektir. Bu nedenle bizi arayan ciftciye
          sadece &quot;gelecegiz&quot; demeyiz; sahadaki duruma uygun gercekci varis ve cozum suresi veririz.
        </p>

        <h2 className="text-gray-800">Sikca Sorulan Sorular</h2>
        <ul className="list-disc ml-6 space-y-2">
          {faqs.map((f) => (
            <li key={f.q}><strong>{f.q}</strong> {f.a}</li>
          ))}
        </ul>

        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-8 not-prose mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Tarlada ariza mi var? 7/24 yanindayiz.</h3>
          <a href="tel:+905364783727" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 mr-3">0536 478 37 27</a>
          <a href="https://wa.me/905364783727" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700">WhatsApp ile Yaz</a>
          <p className="mt-4 text-gray-700">Siverek, koyler ve tarla yollarinda hizli zirai arac kurtarma hizmeti.</p>
        </div>
      </article>
    </main>
  );
}

