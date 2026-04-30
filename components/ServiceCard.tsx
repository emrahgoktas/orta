import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-corp transition duration-200 hover:border-slate-300 hover:shadow-corp-md">
      <div className="mb-4 inline-flex rounded-lg border border-slate-100 bg-slate-50 p-3 text-2xl">{icon ?? "•"}</div>
      <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
