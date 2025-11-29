import Header from "@/components/header"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"

export default function TermsPage() {
  return (
    <div className="min-h-screen relative">
      <BokehBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-8 text-center">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-graphite/80">
            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using SmartBirdDeals.com, you accept and agree to be bound by the terms and provision
                of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">2. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily access the materials on SmartBirdDeals.com for personal,
                non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">3. Amazon Associates Program</h2>
              <p className="leading-relaxed">
                SmartBirdDeals.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                advertising program designed to provide a means for sites to earn advertising fees by advertising and
                linking to Amazon.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">4. Product Information</h2>
              <p className="leading-relaxed">
                We strive to provide accurate product information. However, we do not warrant that product descriptions
                or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall SmartBirdDeals.com or its suppliers be liable for any damages arising out of the use
                or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">6. Modifications</h2>
              <p className="leading-relaxed">
                SmartBirdDeals.com may revise these terms of service at any time without notice. By using this website,
                you agree to be bound by the current version of these terms.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-graphite/60 text-sm">Last updated: January 2025</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
