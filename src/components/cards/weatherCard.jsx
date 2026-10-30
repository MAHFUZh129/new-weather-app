import { CloudSun, MapPin, ChevronDown } from "lucide-react";
import { Droplets, Wind, Gauge } from "lucide-react";


const details = [
  {
    label: "Humidity",
    value: "72%",
    icon: Droplets,
  },
  {
    label: "Wind",
    value: "12 km/h",
    icon: Wind,
  },
  {
    label: "Pressure",
    value: "1012 hPa",
    icon: Gauge,
  },
];


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

      {/* <WeatherDetails /> */}
       <div className="grid grid-cols-3 gap-4">
      {details.map(({ label, value, icon: Icon }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon size={23} className="shrink-0 text-white/90" />

          <div>
            <p className="text-xs text-white/70 sm:text-sm">{label}</p>
            <p className="text-sm font-semibold sm:text-base">{value}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}