export default function FAQ() {
  const faqs = [
    {
      question: "Siverek'te oto cekici kac dakikada gelir?",
      answer: "Merkez lokasyonlarda ortalama 5 dakika, cevre bolgelerde 10-15 dakika icinde ulasiriz.",
    },
    {
      question: "Gece yarisi ve bayramda hizmet var mi?",
      answer: "Evet, 7/24 acil yol yardim sunuyoruz. Tatil ve bayram gunlerinde de acigiz.",
    },
    {
      question: "Odemede gizli ucret cikiyor mu?",
      answer: "Hayir. Sabit ve seffaf fiyatlandirma uyguluyoruz, ucreti telefonda netlestiriyoruz.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="corp-container">
        <h2 className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">SSS</h2>
        <p className="mb-10 text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Sikca sorulan sorular</p>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6 shadow-corp">
              <h3 className="mb-2 text-base font-bold text-slate-900">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
