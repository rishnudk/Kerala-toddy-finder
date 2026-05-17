"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const toddyShops = [
  {
    id: 1,
    name: "Heritage",
    position: [9.4981, 76.3388],
  },
  {
    id: 2,
    name: "Kochi Toddy",
    position: [9.9312, 76.2673],
  },
];

export default function MapView() {
  return (
    <MapContainer
      center={[9.9312, 76.2673]}
      zoom={10}
      scrollWheelZoom={true}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {toddyShops.map((shop) => (
        <Marker
          key={shop.id}
          position={shop.position as [number, number]}
        >
          <Popup>{shop.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}