import { Sun, Cloud, CloudSun, CloudRain } from "lucide-react";

const weatherIcons = {
  sun: Sun,
  cloud: Cloud,
  "cloud-sun": CloudSun,
  "cloud-rain": CloudRain,
};

export default function ForecastCard({ day, index }) {
  const Icon = weatherIcons[day.icon] || Cloud;

  return (
    <article
      className={`rounded-2xl border p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        index === 0
          ? "border-blue-300 bg-blue-50"
          : "border-slate-200 bg-white/80"
      }`}
    >
      <p className="font-semibold text-slate-800">{day.day}</p>

      <p className="mt-1 text-xs text-slate-500">{day.date}</p>

      <Icon
        size={48}
        strokeWidth={1.6}
        className={`mx-auto my-5 ${
          day.icon === "sun" || day.icon === "cloud-sun"
            ? "text-amber-400"
            : "text-blue-500"
        }`}
      />

      <p className="text-sm font-medium text-slate-700">
        {day.condition}
      </p>

      <p className="mt-4 text-lg font-bold text-slate-900">
        {day.temp}°
        <span className="ml-2 font-medium text-slate-400">
          {day.low}°
        </span>
      </p>
    </article>
  );
}