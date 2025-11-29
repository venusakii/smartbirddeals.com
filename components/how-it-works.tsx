export default function HowItWorks() {
  const steps = [
    { number: 1, title: "Mount it anywhere", icon: "🏡", description: "Easy installation in your backyard or balcony" },
    { number: 2, title: "Connect via Wi-Fi & App", icon: "📱", description: "Simple setup with our mobile app" },
    {
      number: 3,
      title: "Get live video + bird ID alerts",
      icon: "🔔",
      description: "Real-time notifications when birds visit",
    },
  ]

  return (
    <section className="relative py-24 px-4 z-10 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-16 text-center">How It Works</h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-leaf-green via-sky-blue to-warm-amber -translate-y-1/2 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center relative">
                {/* Icon circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-leaf-green to-sky-blue flex items-center justify-center text-4xl mb-6 shadow-lg relative z-10">
                  {step.icon}
                </div>

                {/* Step number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-warm-amber text-white font-bold flex items-center justify-center z-20">
                  {step.number}
                </div>

                <h3 className="text-xl font-heading font-bold text-graphite mb-3">{step.title}</h3>
                <p className="text-graphite/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
