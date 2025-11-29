"use client"

import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "📸",
    title: "HD Camera & Night Vision",
    description: "Crystal clear footage day and night",
    animation: "animate-pulse",
  },
  {
    icon: "☀️",
    title: "Solar Charging",
    description: "Sustainable power, never change batteries",
    animation: "animate-float",
  },
  {
    icon: "🔋",
    title: "Long-life Battery",
    description: "Weeks of operation on a single charge",
    animation: "",
  },
  {
    icon: "🧠",
    title: "AI Bird Recognition",
    description: "Identify over 1000 bird species automatically",
    animation: "",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 z-10 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-16 text-center">
          Features that Matter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-white/80 backdrop-blur-sm border-leaf-green/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`text-6xl mb-4 ${feature.animation}`}>{feature.icon}</div>
              <h3 className="text-xl font-heading font-bold text-graphite mb-3">{feature.title}</h3>
              <p className="text-graphite/70 leading-relaxed text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
