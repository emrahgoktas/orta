import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { CONTACT } from "@/lib/constants";

const iconClass = "h-8 w-8 text-accent";

function TowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass} aria-hidden="true">
      <path d="M3 16h11l3-4h4" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M11 16V8h5" />
    </svg>
  );
}

function TractorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass} aria-hidden="true">
      <circle cx="8" cy="17" r="3" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M5 17H2V9h6l3 5h7v3" />
      <path d="M11 14l-2-5V6h4v3" />
    </svg>
  );
}

function RescueIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={iconClass} aria-hidden="true">
      <path d="M12 3v18M3 12h18" />
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

const services = [
  {
    title: "Oto Cekici",
    description: "Binek ve hafif ticari araclarda ariza, kaza veya yolda kalma durumlarinda guvenli cekim ve transfer.",
    icon: <TowIcon />,
  },
  {
    title: "Zirai Arac Cekici",
    description: "Traktor, bicerdover ve tarim ekipmanlarinda tarla ve baglanti yollarinda planli kurtarma.",
    icon: <TractorIcon />,
  },
  {
    title: "Kaza Kurtarma",
    description: "Trafik kazasi sonrasi olay yeri koordinasyonu ve hasarli aracin profesyonel tasinmasi.",
    icon: <RescueIcon />,
  },
];

const siverekCoverage = [
  "Bahcelievler",
  "Camikebir",
  "Firat",
  "Ayvanat",
  "Hasan Celebi",
  "Kale",
  "Cumhuriyet",
  "Gulabibey",
];

const urfaDistrictConnections = [
  "Siverek",
  "Haliliye",
  "Eyyubiye",
  "Karakopru",
  "Viransehir",
  "Ceylanpinar",
  "Akcakale",
  "Harran",
  "Suruc",
  "Birecik",
  "Bozova",
  "Halfeti",
  "Hilvan",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12 md:py-20">
        <div className="corp-container">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Kurumsal cekici ve kurtarma cozumleri"
            description="Tek noktadan planlama, net iletisim ve saha deneyimi ile Siverek ve cevresinde guvenilir hizmet."
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
        <div className="corp-container">
          <SectionHeading
            eyebrow="Hizmet Alani"
            title="Siverek merkez mahalleleri ve ilce baglanti hatlari"
            description="Semantik yerel kapsama icin Siverek merkezde aktif hizmet noktalarimizi ve Sanliurfa ilce baglanti alanlarini acikca paylasiyoruz."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-corp">
              <h3 className="mb-3 text-base font-bold text-slate-900">Siverek merkez mahalle kapsami</h3>
              <p className="mb-4 text-sm text-slate-600">
                Ariza, kaza ve yolda kalma taleplerinde Siverek merkez mahallelerine hizli cikis veriyoruz.
              </p>
              <ul className="flex flex-wrap gap-2">
                {siverekCoverage.map((item) => (
                  <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-corp">
              <h3 className="mb-3 text-base font-bold text-slate-900">Sanliurfa ilce baglanti kapsami</h3>
              <p className="mb-4 text-sm text-slate-600">
                Siverek cikisli cekici hizmetinde ilceler arasi yol yardim, arac cekme ve kurtarma operasyonu planliyoruz.
              </p>
              <ul className="flex flex-wrap gap-2">
                {urfaDistrictConnections.map((item) => (
                  <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="corp-container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Hizli Talep"
              title="Cekici Cagir Formu"
              description="Konumunu ve aracinin durumunu yaz, ekip planlamasini hemen baslatalim."
              align="left"
            />
            <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-corp">
              <p>
                <strong className="text-slate-900">Telefon:</strong>{" "}
                <a href={CONTACT.phoneHref} className="font-semibold text-accent hover:underline">
                  {CONTACT.phoneFormatted}
                </a>
              </p>
              <p>
                <strong className="text-slate-900">WhatsApp:</strong>{" "}
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">
                  Mesaj Gonder
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Hizmet Bolgesi:</strong> Siverek Merkez, Viransehir, Sanliurfa
              </p>
              <p>
                Google&apos;in sevdigi guven sinyali icin tum iletisim bilgileri sabit ve acik: telefon, WhatsApp, adres,
                yasal metinler ve yapisal schema. Yerel arama reklamlarimizda{" "}
                <a href="/google-ads-tiklama-korumasi" className="font-semibold text-accent hover:underline">
                  sahte tiklama korumasi deneyimimizi
                </a>{" "}
                de paylasiyoruz.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white py-12 sm:py-14">
        <div className="corp-container text-center">
          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">Operasyon merkezi ile dogrudan iletisime gecin</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Acil taleplerde telefon veya WhatsApp uzerinden konum paylasarak hizli yonlendirme alabilirsiniz.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3.5 font-bold text-white shadow-corp transition hover:bg-accent-hover sm:min-w-[200px] sm:px-8"
            >
              Ara: {CONTACT.phoneFormatted}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-corp transition hover:bg-slate-50 sm:min-w-[200px] sm:px-8"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
