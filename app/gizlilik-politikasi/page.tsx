import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikasi",
  description: "Ortakaya Oto Kurtarma web sitesi gizlilik politikasi.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">Gizlilik Politikasi</h1>
        <p>
          Ortakaya Oto Kurtarma olarak web sitemizi ziyaret eden kullanicilarin gizliligine onem veriyoruz.
          Bu metin, hangi verileri neden topladigimizi ve nasil korudugumuzu aciklar.
        </p>
        <h2 className="text-gray-800">Toplanan Veriler</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Iletisim formu uzerinden paylastigin ad, telefon ve mesaj bilgisi</li>
          <li>Site performansi ve kullanim analizi icin teknik veriler</li>
          <li>WhatsApp ve telefon baglantilarinda kullanici inisiyatifiyle paylasilan bilgiler</li>
        </ul>
        <h2 className="text-gray-800">Verilerin Kullanim Amaci</h2>
        <p>
          Toplanan veriler sadece talebine donus yapmak, hizmet kalitesini artirmak ve yasal yukumlulukleri yerine getirmek
          icin kullanilir. Acik rizan olmadan ucuncu kisilerle pazarlama amacli paylasim yapilmaz.
        </p>
        <h2 className="text-gray-800">Saklama ve Guvenlik</h2>
        <p>
          Veriler makul teknik ve idari guvenlik onlemleri ile korunur. Yasal saklama suresi doldugunda kayitlar silinir
          veya anonimlestirilir.
        </p>
        <h2 className="text-gray-800">Iletisim</h2>
        <p>
          Gizlilik sureciyle ilgili sorularin icin <a href="mailto:info@ortakayaotokurtarici.com" className="text-red-600 font-bold hover:underline">info@ortakayaotokurtarici.com</a>
          veya <a href="tel:+905364783727" className="text-red-600 font-bold hover:underline">0536 478 37 27</a> uzerinden bize ulasabilirsin.
        </p>
      </article>
    </main>
  );
}

