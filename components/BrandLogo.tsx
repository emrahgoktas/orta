import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  /** Set NEXT_PUBLIC_LOGO_PATH=/images/logo.svg in .env.local when asset is added. */
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  const logoPath = process.env.NEXT_PUBLIC_LOGO_PATH || "/images/logo-transparent.png";

  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      {logoPath ? (
        <Image
          src={logoPath}
          alt={`${SITE.name} logosu`}
          width={160}
          height={40}
          className="h-10 w-auto object-contain object-left"
          priority
        />
      ) : (
        <>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-xs font-bold tracking-tight text-slate-700 transition group-hover:border-slate-300"
            aria-hidden
          >
            OK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-tight text-slate-900">{SITE.name}</span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-slate-500 sm:block">
              {SITE.tagline}
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
