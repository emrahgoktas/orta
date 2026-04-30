import { AREAS, CONTACT } from "@/lib/constants";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EmergencyService", "AutoRepair"],
  name: "Ortakaya Oto Kurtarma",
  description:
    "Siverek'te 7/24 oto cekici, arac kurtarma, aku takviye ve yol yardim hizmeti",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address,
    addressLocality: "Siverek",
    addressRegion: "Sanliurfa",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.coords.lat,
    longitude: CONTACT.coords.lng,
  },
  areaServed: AREAS.map((name) => ({ "@type": "City", name })),
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "TRY",
  paymentAccepted: "Nakit, Kredi Karti",
};

export function buildServiceSchema(serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: "Ortakaya Oto Kurtarma",
    },
    areaServed: AREAS.join(", "),
  };
}
