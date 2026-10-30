import { AlertCircle, CloudSun, MapPin, Navigation, Search, X } from 'lucide-react';
import { useState } from 'react';
import { getGeoLocation, } from '../actions/getGeocoding';
import { useNavigate } from 'react-router';

const SearchModal = ({ onClose }) => {

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
            onClose()
        } catch (error) {
            setError(error.message || "Something went wrong. Please try again.")
        }



    }


    const handleCurrentLocation = () => {

        setError('')
        
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.')
            return
        }

        navigator.geolocation.getCurrentPosition((p) => {
            const { latitude, longitude } = p.coords

            goToPage({ name: 'Your Current Location', latitude, longitude })
            onClose()


        }, (error) => {
            setError(error.message || "Unable to detect your current location.")

        }, {
            timeout: 7000
        })

    }


    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  px-4 py-6 bg-gray-500/40"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative my-auto w-full max-w-md shrink-0 overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-2xl shadow-blue-950/20"
            >
                {/* Top Gradient */}
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-br from-sky-100 via-blue-50 to-white" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 z-10 rounded-full bg-white/80 p-2.5 text-slate-500 shadow-sm transition hover:rotate-90 hover:bg-white hover:text-slate-900"
                >
                    <X size={19} />
                </button>

                <div className="relative p-7 sm:p-9">

                    {/* Header */}
                    <div className="mb-8">
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-200">
                            <CloudSun size={36} strokeWidth={1.6} />
                        </div>

                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                            Find Your Weather
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Discover weather conditions and forecasts
                            for any location around the world.
                        </p>
                    </div>

                    {/* showing Error */}
                    {error && (
                        <div
                            className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300"
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



                    {/* Search Input */}
                    <form
                        onSubmit={handleSearch}
                    >
                        <label
                            htmlFor="city-search"
                            className="mb-2.5 block text-sm font-semibold text-slate-700"
                        >
                            Enter City Name
                        </label>

                        <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition-all focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                            <Search
                                size={21}
                                className="text-slate-400 transition group-focus-within:text-blue-500"
                            />

                            <input
                                id="city-search"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="e.g. Dhaka, London, Tokyo"
                                className="w-full bg-transparent py-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                            />
                        </div>

                        <button
                            type="submit"
                            // disabled={!city.trim()}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Search size={19} />
                            Get Weather
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-slate-200" />
                        <span className="text-xs font-bold tracking-widest text-slate-400">
                            OR
                        </span>
                        <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    {/* Current Location */}
                    <button
                        onClick={handleCurrentLocation}
                        className="group flex w-full items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition group-hover:bg-blue-600 group-hover:text-white">
                            <Navigation size={22} />
                        </div>

                        <div className="flex-1">
                            <p className="font-bold text-slate-800">
                                Use My Current Location
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Automatically detect your location
                            </p>
                        </div>

                        <MapPin
                            size={19}
                            className="text-blue-400 transition group-hover:translate-x-1"
                        />
                    </button>

                    {/* Footer */}
                    <p className="mt-7 text-center text-xs text-slate-400">
                        <CloudSun size={14} className="mr-1 inline text-blue-400" />
                        Your weather companion, anywhere in the world.
                    </p>


                </div>

            </div>
        </div>
    )
};

export default SearchModal;