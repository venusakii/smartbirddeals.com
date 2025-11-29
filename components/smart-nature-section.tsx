export default function SmartNatureSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-6">Smart Meets Nature</h2>

        {/* Tree branch illustration */}
        <div className="my-12 flex justify-center">
          <img
            src="/nature-technology-fusion.jpg"
            alt="Smart technology meeting nature - circuit board with natural elements"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg md:text-xl text-graphite/80 max-w-3xl mx-auto leading-relaxed text-pretty">
          SmartBirdDeals bridges nature and innovation — combining AI detection, real-time cameras, and eco-friendly
          design to bring you closer to the wildlife in your backyard.
        </p>
      </div>
    </section>
  )
}
