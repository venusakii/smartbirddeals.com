export default function AboutSection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-12 text-center">Our Mission</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg">
              <p className="text-lg text-graphite/80 leading-relaxed mb-4">
                At <span className="font-bold text-leaf-green">SmartBirdDeals</span>, we help people reconnect with
                nature using smart technology — so every feed becomes a moment of wonder.
              </p>
              <p className="text-lg text-graphite/80 leading-relaxed mb-4">
                We believe that technology and nature aren't opposing forces. When thoughtfully combined, they can
                create deeper connections and richer experiences with the wildlife around us.
              </p>
              <p className="text-lg text-graphite/80 leading-relaxed">
                From AI-powered bird identification to solar-charging capabilities, every feature we design brings you
                closer to understanding and appreciating the birds in your backyard.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/modern-smart-bird-feeder-mounted-on-tree-with-bird.jpg" alt="Smart bird feeder in nature" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-green/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
