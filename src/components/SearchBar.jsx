import { AlertCircle, MapPin, Search, X } from "lucide-react";
import { getGeoLocation, } from "../actions/getGeocoding";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {

  const [city, setCity] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const goToPage = (location) => {

    navigate('/weather', { state: { location } })

  }

  const handleSearch = async (e) => {
    e.preventDefault()

    setError('')

    const cityValue = city.trim()
    if (!cityValue) {
      setError("Please enter a city name.")

      return
    }

    try {
      const location = await getGeoLocation(cityValue)
      if (!location) {

        setError("Unable to find the requested location.")

        return

      }
      goToPage(location)

    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.")
    }


  }

  return (
    <div className="w-full max-w-md">

      <form
        onSubmit={handleSearch}
        className="flex max-w-md items-center gap-3 rounded-full bg-white p-2 pl-5 shadow-xl"
      >
        <MapPin size={20} className="shrink-0 text-blue-600" />

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          aria-label="City name"
          className="min-w-0 flex-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />

        <button
          type="submit"
          aria-label="Search weather"
          className="rounded-full bg-blue-500 p-3 text-white transition hover:bg-blue-600"
        >
          <Search size={20} />
        </button>
      </form>

      {/* showing Error */}
      {error && (
        <div
          className="my-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertCircle size={20} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold text-red-800">
              Oops! Something went wrong
            </p>
            <p className="mt-1 text-sm leading-5 text-red-600">
              {error}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setError('')}
            aria-label="Dismiss error"
            className="rounded-lg p-1 text-red-400 transition hover:bg-red-100 hover:text-red-700"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
}