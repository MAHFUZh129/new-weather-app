import { Sun, ArrowRight } from "lucide-react";

export default function PromoCard() {
  return (
    <article
      className="flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl bg-cover bg-center p-8 text-white shadow-lg"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,54,100,0.9), rgba(0,80,130,0.15)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80')",
      }}
    >
      <div>
        <Sun size={34} className="mb-4" />

        <h2 className="max-w-xs text-3xl font-bold leading-tight">
          Weather for a Better Tomorrow
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white/90">
          From daily plans to outdoor adventures, we're here
          to help you stay prepared.
        </p>
      </div>

      <button className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
        Explore More
        <ArrowRight size={17} />
      </button>
    </article>
  );
}