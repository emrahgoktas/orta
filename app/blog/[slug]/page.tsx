import type { Metadata } from "next";
import { notFound } from "next/navigation";

const postMap: Record<string, { title: string; description: string }> = {
  "yolda-kalinca-ne-yapmali": {
    title: "Yolda Kalinca Ilk 5 Dakikada Ne Yapilmali?",
    description: "Ariza veya motor patladi durumunda guvenli sekilde yardim bekleme adimlari.",
  },
  "kaza-sonrasi-guvenli-adimlar": {
    title: "Kaza Sonrasi Guvenli Kurtarma Adimlari",
    description: "Kaza sonrasi arac cekme ve yol guvenligi kontrol listesi.",
  },
};

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const post = postMap[params.slug];
  if (!post) return { title: "Icerik Bulunamadi" };
  return { title: post.title, description: post.description };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = postMap[params.slug];
  if (!post) notFound();

  return (
    <article className="corp-container max-w-3xl py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{post.title}</h1>
      <p className="text-base leading-relaxed text-slate-600 md:text-lg">
        {post.description} 7/24 yol yardim ve cekici hizmeti icin acil durumlarda profesyonel destek alin.
      </p>
    </article>
  );
}
