"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson";

interface CityMarker {
  name: string;
  coordinates: [number, number];
  projects: number;
}

const italianCities: CityMarker[] = [
  {
    name: "Milano",
    coordinates: [9.19, 45.46],
    projects: 3,
  },
  {
    name: "Roma",
    coordinates: [12.49, 41.9],
    projects: 2,
  },
  {
    name: "Torino",
    coordinates: [7.68, 45.07],
    projects: 1,
  },
  {
    name: "Firenze",
    coordinates: [11.25, 43.77],
    projects: 1,
  },
  {
    name: "Bologna",
    coordinates: [11.34, 44.49],
    projects: 1,
  },
  {
    name: "Napoli",
    coordinates: [14.25, 40.84],
    projects: 1,
  },
];

export default function ItalyMap() {
  return (
    <div className="w-full mb-12">
      <h3 className="text-xl font-medium text-black mb-2 text-left">
        I Nostri Progetti in Italia
      </h3>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [12, 42.5],
          scale: 2000,
        }}
        style={{
          width: "100%",
          height: "auto",
        }}
        className="w-full h-[500px]"
      >
        <ZoomableGroup center={[12, 42.5]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isItaly = geo.properties.NAME === "Italy";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isItaly ? "#e0e7ff" : "#f3f4f6"}
                    stroke={isItaly ? "#3730a3" : "#d1d5db"}
                    strokeWidth={isItaly ? 1.5 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        fill: isItaly ? "#c7d2fe" : "#e5e7eb",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {italianCities.map((city) => (
            <Marker key={city.name} coordinates={city.coordinates}>
              <g>
                {/* Outer circle for glow effect */}
                <circle
                  r={8}
                  fill="#1e40af"
                  fillOpacity={0.3}
                  className="animate-pulse"
                />
                {/* Main marker */}
                <circle
                  r={5}
                  fill="#1e3a8a"
                  stroke="#ffffff"
                  strokeWidth={2}
                  className="cursor-pointer hover:r-6 transition-all"
                />
                {/* City label */}
                <text
                  textAnchor="middle"
                  y={-12}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "12px",
                    fontWeight: "600",
                    fill: "#1f2937",
                    pointerEvents: "none",
                  }}
                >
                  {city.name}
                </text>
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-geist-sans">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-950 rounded-full"></div>
          <span>Progetti completati</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-indigo-200 border border-indigo-900 rounded-sm"></div>
          <span>Area operativa</span>
        </div>
      </div>
    </div>
  );
}
