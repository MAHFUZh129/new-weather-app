import {
  Cloud,
  MapPin,
  Radar,
  Bell,
} from "lucide-react";
import PromoCard from "./cards/PromoCard";
import FeatureCard from "./cards/FeatureCard";



const features = [
  {
    title: "Real-Time Updates",
    description: "Get the latest weather conditions instantly.",
    icon: Cloud,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Multiple Locations",
    description: "Check weather for any city around the world.",
    icon: MapPin,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Interactive Radar",
    description: "Track rain, storms and more with weather radar.",
    icon: Radar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Weather Alerts",
    description: "Stay informed about severe weather conditions.",
    icon: Bell,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="grid gap-6 py-5 lg:grid-cols-2">
      <PromoCard />

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}