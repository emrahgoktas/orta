type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 max-w-3xl ${alignClass}`}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">{eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-600">{description}</p> : null}
    </div>
  );
}
