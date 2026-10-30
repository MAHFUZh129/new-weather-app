import { CloudSun, MapPin, ChevronDown } from "lucide-react";
import WeatherDetails from "../WeatherDetails";

export default function WeatherCard({ weather }) {
  return (
    <div className="rounded-3xl border border-white/30 bg-white/15 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      <div className="flex items-center gap-2">
        <MapPin size={20} />

        <h2 className="text-lg font-semibold">{weather.city}</h2>

        <ChevronDown size={17} />
      </div>

      <p className="mt-2 text-sm text-white/80">{weather.country}</p>

      <div className="my-8 flex items-center justify-center gap-4">
        <CloudSun
          size={100}
          strokeWidth={1.5}
          className="text-yellow-300"
        />

        <div>
          <p className="text-5xl font-bold tracking-tight sm:text-6xl">
            {weather.temperature}°C
          </p>

          <p className="mt-2 text-lg text-white/90">
            {weather.condition}
          </p>
        </div>
      </div>

      <WeatherDetails />
    </div>
  );
}