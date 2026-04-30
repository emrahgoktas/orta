import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { CONTACT } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Bolgeler" },
  { href: "/hakkimizda", label: "Hakkimizda" },
  { href: "/iletisim", label: "Iletisim" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-corp backdrop-blur-md">
      <div className="corp-container py-2.5">
        <div className="flex items-center justify-between gap-3">
          <BrandLogo className="min-w-0 shrink" />
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:text-sm"
            >
              WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center rounded-lg bg-accent px-3 py-2 text-xs font-bold text-white shadow-corp transition hover:bg-accent-hover sm:text-sm"
            >
              Ara
            </a>
          </div>
        </div>
        <nav
          className="mt-2 flex items-center gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Ana navigasyon"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
