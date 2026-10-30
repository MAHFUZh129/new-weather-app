import { Droplets, Wind, Gauge } from "lucide-react";
import { useLocation } from "react-router";

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

export default function WeatherDetails() {

  const l = useLocation()

  console.log(l)

  return (
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
  );
}