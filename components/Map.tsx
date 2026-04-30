"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CONTACT } from "@/lib/constants";

const containerStyle = { width: "100%", height: "320px" };

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return <p className="rounded-lg bg-gray-100 p-4 text-sm">Google Maps API anahtari eklenince harita gorunecek.</p>;
  }

  if (!isLoaded) {
    return <p className="rounded-lg bg-gray-100 p-4 text-sm">Harita yukleniyor...</p>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={CONTACT.coords} zoom={13}>
      <Marker position={CONTACT.coords} />
    </GoogleMap>
  );
}
