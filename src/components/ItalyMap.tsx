"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface CityMarker {
  name: string;
  coordinates: [number, number];
  projects: number;
}

const italianCities: CityMarker[] = [
  { name: "Milano", coordinates: [9.19, 45.46], projects: 3 },
  { name: "Roma", coordinates: [12.49, 41.9], projects: 2 },
  { name: "Torino", coordinates: [7.68, 45.07], projects: 1 },
  { name: "Firenze", coordinates: [11.25, 43.77], projects: 1 },
  { name: "Bologna", coordinates: [11.34, 44.49], projects: 1 },
  { name: "Napoli", coordinates: [14.25, 40.84], projects: 1 },
];

export default function ItalyMapLeaflet() {
  const italyCenter: [number, number] = [41.9, 12.49];

  return (
    <div className="w-full mb-12">
      <h3 className="text-xl font-medium text-black mb-4 text-left">
        I Nostri Progetti in Italia
      </h3>

      <div className="h-[500px] w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm relative z-0">
        <MapContainer
          center={italyCenter}
          zoom={6}
          scrollWheelZoom={false}
          className="h-full w-full bg-[#f8fafc]"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; CARTO"
          />

          {italianCities.map((city) => (
            <CircleMarker
              key={city.name}
              center={[city.coordinates[1], city.coordinates[0]]}
              radius={8}
              pathOptions={{
                fillColor: "#1e3a8a",
                color: "#ffffff",
                weight: 2,
                fillOpacity: 0.9,
              }}
            >
              <Tooltip
                permanent
                direction="top"
                offset={[0, -10]}
                className="bg-transparent border-none shadow-none font-semibold text-zinc-800"
              >
                {city.name}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-sans">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-900 rounded-full border-2 border-white shadow-sm"></div>
          <span>Progetti completati</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#f8fafc] border border-slate-200 rounded-sm"></div>
          <span>Area operativa</span>
        </div>
      </div>
    </div>
  );
}
