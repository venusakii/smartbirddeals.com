import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      <BokehBackground />
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
