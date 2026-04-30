import { CONTACT } from "@/lib/constants";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-brand text-white">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgb(15_23_42)_0%,rgb(30_41_59)_45%,rgb(15_23_42)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
      <div className="corp-container relative py-14 md:py-24">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">{SITE.tagline}</p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl md:leading-tight">
            Siverek&apos;te kurumsal standartta <span className="text-white">7/24 oto cekici</span> ve yol yardim
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:mx-0 md:text-lg">
            Ariza, kaza veya yolda kalma durumlarinda hizli koordinasyon, sabit fiyat ilkesi ve profesyonel ekip. Siverek
            merkez ve cevre bolgelere planli mudahale.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 md:justify-start">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              7/24 operasyon
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Seffaf ucretlendirme
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Yerel saha bilgisi
            </li>
          </ul>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-start">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-brand shadow-corp-md transition hover:bg-slate-100 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L7.1 8.6a16 16 0 0 0 8.3 8.3l1.15-1.18a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z"
                />
              </svg>
              {CONTACT.phoneFormatted}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06.02C5.57.02.29 5.3.29 11.8c0 2.06.54 4.08 1.56 5.85L0 24l6.55-1.72a11.75 11.75 0 0 0 5.51 1.4h.01c6.49 0 11.77-5.28 11.77-11.78 0-3.14-1.22-6.1-3.32-8.42Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
