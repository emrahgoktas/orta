const testimonials = [
  { name: "M. Yilmaz", comment: "Aracim gece yarisi ariza yapti, 10 dakikada geldiler." },
  { name: "A. Demir", comment: "Sabit fiyat ve duzgun iletisim, kesinlikle tavsiye ederim." },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20">
      <div className="corp-container">
        <h2 className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">Referans</h2>
        <p className="mb-10 text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Musteri geri bildirimleri</p>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-corp"
            >
              <p className="mb-4 text-sm leading-relaxed text-slate-600">&quot;{item.comment}&quot;</p>
              <footer className="text-sm font-semibold text-slate-900">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
