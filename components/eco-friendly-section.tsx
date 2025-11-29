export default function EcoFriendlySection() {
  return (
    <section className="relative py-24 px-4 z-10 bg-gradient-to-br from-leaf-green/10 to-sky-blue/10">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239EDC8B' fillOpacity='0.4'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-6xl mb-6">🌿</div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-6">Eco-Friendly Design</h2>
        <div className="space-y-4 text-lg text-graphite/80 leading-relaxed">
          <p className="text-2xl font-semibold text-leaf-green">
            Made from recycled materials. Solar-powered. Zero waste packaging.
          </p>
          <p className="max-w-2xl mx-auto">
            We're committed to protecting the environment we help you enjoy. Every feeder is crafted with sustainability
            in mind, from eco-friendly materials to renewable energy sources.
          </p>
        </div>
      </div>
    </section>
  )
}
