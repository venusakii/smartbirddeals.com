import Header from "@/components/header"
import SmartNatureSection from "@/components/smart-nature-section"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <BokehBackground />
      <Header />
      <main className="pt-20">
        <SmartNatureSection />
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-graphite mb-8 text-center font-display">
                About SmartBirdDeals
              </h1>
              <div className="prose prose-lg max-w-none space-y-6 text-graphite/80">
                <p className="leading-relaxed">
                  Welcome to SmartBirdDeals, where cutting-edge technology meets the timeless beauty of nature. We
                  believe that connecting with wildlife should be effortless, educational, and inspiring.
                </p>
                <p className="leading-relaxed">
                  Our mission is to bring birds closer to you through innovative smart feeders equipped with HD cameras,
                  AI recognition, and eco-friendly features. Whether you're a seasoned birdwatcher or just starting your
                  journey, we provide the tools to transform your backyard into a vibrant wildlife observatory.
                </p>
                <p className="leading-relaxed">
                  Every product we recommend combines sustainability with smart design, helping you enjoy nature while
                  protecting it for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
