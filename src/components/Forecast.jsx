import { ArrowRight } from "lucide-react";
import ForecastCard from "./cards/ForecastCard";

export default function Forecast({ days }) {
  return (
    <section id="forecast" className="py-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-900">
          5-Day Forecast
        </h2>

        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
          View Full Forecast
          <ArrowRight size={17} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {days.map((day, index) => (
          <ForecastCard
            key={day.date}
            day={day}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}