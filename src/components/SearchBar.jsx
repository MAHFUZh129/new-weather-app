import { MapPin, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex max-w-md items-center gap-3 rounded-full bg-white p-2 pl-5 shadow-xl"
    >
      <MapPin size={20} className="shrink-0 text-blue-600" />

      <input
        type="text"
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
  );
}