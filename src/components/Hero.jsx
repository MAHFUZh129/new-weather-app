import WeatherCard from "./cards/weatherCard";
import SearchBar from "./SearchBar";


export default function Hero({ weather }) {
  return (
   <section
  className="relative min-h-[500px] overflow-hidden bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,60,120,0.75), rgba(0,110,190,0.2)), url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=90')",
  }}
>
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-10">

        <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-100">
              Your weather, anywhere
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Know the Weather,
              <span className="mt-2 block text-blue-100">
                Plan Your Day
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
              Get real-time weather updates, detailed forecasts
              and more — all in one place.
            </p>

            <div className="mt-8">
              <SearchBar />
            </div>
          </div>

          <WeatherCard weather={weather} />
        </div>
      </div>
    </section>
  );
}