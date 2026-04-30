import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydinlatma Metni",
  description: "Ortakaya Oto Kurtarma KVKK aydinlatma metni.",
};

export default function KvkkPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-gray-800">KVKK Aydinlatma Metni</h1>
        <p>
          6698 sayili Kisisel Verilerin Korunmasi Kanunu kapsaminda, veri sorumlusu olarak Ortakaya Oto Kurtarma tarafindan
          kisisel verilerinizin islenmesine iliskin aydinlatma metni asagidadir.
        </p>
        <h2 className="text-gray-800">Islenen Kisisel Veriler</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Kimlik ve iletisim verileri (ad, telefon)</li>
          <li>Talep ve islem guvenligi verileri</li>
          <li>Hizmet talebi sirasinda paylasilan lokasyon bilgileri</li>
        </ul>
        <h2 className="text-gray-800">Isleme Amaci ve Hukuki Sebep</h2>
        <p>
          Veriler, hizmet sunumu, teklif olusturma, iletisim kurma ve yasal yukumluluklerin yerine getirilmesi amaclariyla
          KVKK&apos;nin 5. ve 6. maddelerine uygun olarak islenir.
        </p>
        <h2 className="text-gray-800">Haklariniz</h2>
        <p>
          KVKK 11. madde kapsaminda; bilgi talep etme, duzeltme, silme, isleme itiraz etme gibi haklara sahipsiniz.
          Basvurularinizi <a href="mailto:info@ortakayaotokurtarma.com" className="text-red-600 font-bold hover:underline">info@ortakayaotokurtarma.com</a>
          adresine yazili olarak iletebilirsiniz.
        </p>
      </article>
    </main>
  );
}
