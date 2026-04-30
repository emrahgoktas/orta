import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { SITE } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bolgeler" },
  { href: "/hakkimizda", label: "Hakkimizda" },
  { href: "/iletisim", label: "Iletisim" },
] as const;

const policyLinks = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikasi" },
  { href: "/kvkk-aydinlatma-metni", label: "KVKK Aydinlatma Metni" },
  { href: "/cerez-politikasi", label: "Cerez Politikasi" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-brand text-slate-300">
      <div className="corp-container grid gap-8 py-10 sm:py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/images/logo-transparent.png"
            alt={`${SITE.legalName} logo`}
            width={220}
            height={64}
            className="h-12 w-auto object-contain object-left"
          />
          <p className="text-sm font-semibold uppercase tracking-wider text-white">{SITE.legalName}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Siverek, Sanliurfa ve cevre ilcelerde profesyonel oto cekici ve arac kurtarma hizmeti. Seffaf fiyat, deneyimli
            ekip, 7/24 erisim.
          </p>
          <address className="mt-4 text-sm not-italic text-slate-400">
            <span className="block">{CONTACT.address}</span>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 inline-block text-slate-300 hover:text-white">
              {CONTACT.email}
            </a>
          </address>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Kurumsal</h3>
          <ul className="space-y-2">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Yasal</h3>
          <ul className="space-y-2">
            {policyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-sm">
            <a href={CONTACT.phoneHref} className="block font-semibold text-white hover:underline">
              {CONTACT.phoneFormatted}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
              WhatsApp ile yazin
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="corp-container flex flex-col items-center justify-between gap-2 py-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {SITE.legalName}. Tum haklari saklidir.</p>
          <p className="text-center sm:text-right">Siverek · Sanliurfa · Viransehir</p>
        </div>
        <div className="corp-container pb-6 text-center">
          <a
            href="https://emrahgoktas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center"
            aria-label="Emrah Goktas web sitesine git"
          >
            <Image
              src="/images/logo-2.png"
              alt="Emrah Goktas"
              width={220}
              height={88}
              className="h-14 w-auto object-contain opacity-90 transition hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
