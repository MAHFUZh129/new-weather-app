import { useLocation } from "react-router";
import { getWeather } from "../actions/getWeather";
import { useEffect, useState } from "react";
import { ArrowLeft, Cloud, CloudRain, Droplets, Gauge, MapPin, Moon, Navigation, Snowflake, Sun, Thermometer, Wind } from "lucide-react";


export default function WeatherDetails() {

  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const value = useLocation()

  const place = value.state?.location


  useEffect(() => {
    const fetchWeather = async () => {

      if (!place) {
        setError('Please select a location first.');
        setLoading(false);
        return
      }

      try {

         setLoading(true);
                setError('');

        const result = await getWeather(place)
        console.log(result)
        setWeather(result)


      } catch (error) {
       setError(error.message || 'Unable to load weather data.')
      }finally{
        setLoading(false)
      }

    }

    fetchWeather()

  }, [place])

  console.log(weather)

   if (error) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4">
                <p className="text-red-600">{error}</p>
                <button
                    onClick={() => navigate('/')}
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-white"
                >
                    Back to Home
                </button>
            </div>
        );
    }


  if (!weather) return null

  const details = [
    {
      label: 'Feels Like',
      value: `${weather.feelsLike}°C`,
      description: 'Perceived temperature',
      icon: Thermometer,
    },
    {
      label: 'Humidity',
      value: `${weather.humidity}%`,
      description: 'Relative humidity',
      icon: Droplets,
    },
    {
      label: 'Wind Speed',
      value: `${weather.windSpeed} km/h`,
      description: 'Current wind speed',
      icon: Wind,
    },
    {
      label: 'Wind Gusts',
      value: `${weather.windGusts} km/h`,
      description: 'Maximum wind gusts',
      icon: Wind,
    },
    {
      label: 'Pressure',
      value: `${weather.pressure} hPa`,
      description: 'Sea-level pressure',
      icon: Gauge,
    },
    {
      label: 'Cloud Cover',
      value: `${weather.cloudCover}%`,
      description: 'Cloud coverage',
      icon: Cloud,
    },
    {
      label: 'Precipitation',
      value: `${weather.precipitation} mm`,
      description: 'Total precipitation',
      icon: CloudRain,
    },
    {
      label: 'Rain',
      value: `${weather.rain} mm`,
      description: 'Current rainfall',
      icon: Droplets,
    },
    {
      label: 'Showers',
      value: `${weather.showers} mm`,
      description: 'Rain showers',
      icon: CloudRain,
    },
    {
      label: 'Snowfall',
      value: `${weather.snowfall} cm`,
      description: 'Current snowfall',
      icon: Snowflake,
    },
    {
      label: 'Surface Pressure',
      value: `${weather.surfacePressure} hPa`,
      description: 'Pressure at surface',
      icon: Gauge,
    },
    {
      label: 'Wind Direction',
      value: `${weather.windDirection}°`,
      description: 'Wind direction',
      icon: Navigation,
    },
  ]

  return (
    <div className="mx-auto max-w-6xl">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <button
          // onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={17} className="text-blue-500" />
          Weather Details
        </div>
      </div>

      {/* Weather Overview */}
      <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-7 text-white shadow-xl shadow-blue-200/50 sm:p-10">

        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-blue-100">
              <MapPin size={17} />
              {weather.location}
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {weather.label}
            </h1>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              {weather.description}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm text-blue-100">
              {weather.isDay ? <Sun size={18} /> : <Moon size={18} />}
              {weather.isDay ? 'Daytime' : 'Night'}
            </div>
          </div>

          <div className="flex items-center gap-5 md:gap-7">
            <div className="text-7xl sm:text-8xl">
              {weather.icon}
            </div>

            <div>
              <div className="text-6xl font-bold tracking-tighter sm:text-7xl">
                {weather.temperature}°
              </div>
              <p className="mt-2 text-sm text-blue-100">
                Current Temperature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Details */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Weather Information
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Detailed information about current weather conditions.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  {item.label}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {item.value}
              </h3>

              <p className="mt-1.5 text-xs text-slate-400">
                {item.description}
              </p>
            </div>
          );
        })}

      </section>

      <footer className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        Weather information powered by Open-Meteo.
      </footer>

    </div>

  );
}