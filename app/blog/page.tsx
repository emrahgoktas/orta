import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Oto cekici ve arac kurtarma rehber icerikleri.",
};

const posts = [
  { slug: "yolda-kalinca-ne-yapmali", title: "Yolda Kalinca Ilk 5 Dakikada Ne Yapilmali?" },
  { slug: "kaza-sonrasi-guvenli-adimlar", title: "Kaza Sonrasi Guvenli Kurtarma Adimlari" },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="block rounded-lg border border-gray-200 p-5 hover:border-red-600">
            {post.title}
          </a>
        ))}
      </div>
    </main>
  );
}
