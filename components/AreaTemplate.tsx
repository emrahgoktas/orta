import { CONTACT } from "@/lib/constants";

type AreaTemplateProps = {
  area: string;
  description: string;
};

export default function AreaTemplate({ area, description }: AreaTemplateProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">{area} Oto Cekici ve Arac Kurtarma</h1>
      <p className="mb-8 text-lg text-gray-700">{description}</p>
      <a href={CONTACT.phoneHref} className="inline-block rounded-lg bg-red-600 px-8 py-4 font-bold text-white">
        {area} Icin Hemen Ara
      </a>
    </section>
  );
}
