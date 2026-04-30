"use client";

import { CONTACT } from "@/lib/constants";

export default function CallButton() {
  return (
    <a
      href={CONTACT.phoneHref}
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-corp-md ring-4 ring-white/90 transition-all duration-300 hover:scale-[1.02] hover:bg-accent-hover md:bottom-20 md:h-auto md:w-auto md:rounded-xl md:px-5 md:py-3"
      aria-label="Hemen ara"
    >
      <span className="md:hidden">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L7.1 8.6a16 16 0 0 0 8.3 8.3l1.15-1.18a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <span className="hidden items-center gap-2 text-sm font-bold md:inline-flex">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L7.1 8.6a16 16 0 0 0 8.3 8.3l1.15-1.18a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z" />
        </svg>
        HEMEN ARA: {CONTACT.phoneFormatted}
      </span>
    </a>
  );
}
