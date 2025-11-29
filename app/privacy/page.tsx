import Header from "@/components/header"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen relative">
      <BokehBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-graphite/80">
            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us, such as when you subscribe to our newsletter, contact
                us, or interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to communicate with
                you, and to personalize your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">3. Cookies</h2>
              <p className="leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and understand where our
                visitors are coming from. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">4. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website contains links to Amazon and other third-party websites. We are not responsible for the
                privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access,
                alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">6. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">7. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page.
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
