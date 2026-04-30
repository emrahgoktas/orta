"use client";

import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-corp-md ring-4 ring-white/90 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-800 md:bottom-4 md:h-auto md:w-auto md:rounded-xl md:px-5 md:py-3"
      aria-label="WhatsApp ile yaz"
    >
      <span className="md:hidden">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06.02C5.57.02.29 5.3.29 11.8c0 2.06.54 4.08 1.56 5.85L0 24l6.55-1.72a11.75 11.75 0 0 0 5.51 1.4h.01c6.49 0 11.77-5.28 11.77-11.78 0-3.14-1.22-6.1-3.32-8.42ZM12.07 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.89 1.02 1.04-3.79-.24-.39a9.78 9.78 0 0 1-1.5-5.18c0-5.4 4.39-9.79 9.79-9.79 2.62 0 5.07 1.02 6.92 2.88a9.75 9.75 0 0 1 2.87 6.92c0 5.4-4.39 9.79-9.78 9.79Zm5.36-7.34c-.29-.14-1.74-.86-2.01-.96-.27-.1-.47-.14-.67.15-.19.28-.77.95-.94 1.15-.18.19-.35.22-.64.07-.3-.14-1.25-.46-2.37-1.48a8.9 8.9 0 0 1-1.64-2.04c-.17-.28-.02-.43.13-.57.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.14-.66-1.6-.91-2.2-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.08-.79.37-.28.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.04 4.45.71.3 1.26.48 1.69.61.71.23 1.36.2 1.87.12.57-.08 1.74-.71 1.99-1.4.25-.68.25-1.26.18-1.4-.07-.13-.27-.2-.56-.34Z" />
        </svg>
      </span>
      <span className="hidden items-center gap-2 text-sm font-bold md:inline-flex">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06.02C5.57.02.29 5.3.29 11.8c0 2.06.54 4.08 1.56 5.85L0 24l6.55-1.72a11.75 11.75 0 0 0 5.51 1.4h.01c6.49 0 11.77-5.28 11.77-11.78 0-3.14-1.22-6.1-3.32-8.42ZM12.07 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.89 1.02 1.04-3.79-.24-.39a9.78 9.78 0 0 1-1.5-5.18c0-5.4 4.39-9.79 9.79-9.79 2.62 0 5.07 1.02 6.92 2.88a9.75 9.75 0 0 1 2.87 6.92c0 5.4-4.39 9.79-9.78 9.79Z" />
        </svg>
        WhatsApp
      </span>
    </a>
  );
}
