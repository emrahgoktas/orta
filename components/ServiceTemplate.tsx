import { CONTACT } from "@/lib/constants";
import { buildServiceSchema } from "@/lib/schema";

type ServiceTemplateProps = {
  title: string;
  intro: string;
  bullets: string[];
};

export default function ServiceTemplate({ title, intro, bullets }: ServiceTemplateProps) {
  const schema = buildServiceSchema(title);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold">{title}</h1>
        <p className="mb-6 text-lg text-gray-700">{intro}</p>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-gray-700">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="rounded-xl border-2 border-red-600 bg-red-50 p-7 text-center">
          <h2 className="mb-4 text-2xl font-bold">Acil Yardim Mi Lazim?</h2>
          <a href={CONTACT.phoneHref} className="inline-block rounded-lg bg-red-600 px-8 py-4 font-bold text-white">
            Hemen Ara: {CONTACT.phoneFormatted}
          </a>
        </div>
      </article>
    </>
  );
}
