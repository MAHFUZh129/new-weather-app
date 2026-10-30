export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mb-4 inline-flex rounded-2xl p-3 ${color}`}
      >
        <Icon size={25} />
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </article>
  );
}