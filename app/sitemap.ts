import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ortakayaotokurtarma.com";
  const routes = [
    "",
    "/hizmetler",
    "/hizmetler/oto-cekici",
    "/hizmetler/zirai-arac-cekici",
    "/hizmetler/kaza-kurtarma",
    "/bolgeler",
    "/bolgeler/siverek-merkez",
    "/bolgeler/viransehir",
    "/bolgeler/sanliurfa",
    "/hakkimizda",
    "/iletisim",
    "/blog",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma-metni",
    "/cerez-politikasi",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
