import { CloudSun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
        <CloudSun size={23} className="text-blue-500" />

        <span className="font-semibold text-slate-600">
          SkyCast
        </span>

        <span>•</span>
        <span>Accurate</span>

        <span>•</span>
        <span>Reliable</span>

        <span>•</span>
        <span>Always With You</span>
      </div>
    </footer>
  );
}