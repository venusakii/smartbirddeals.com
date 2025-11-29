import HeroSection from "@/components/hero-section"
import SmartNatureSection from "@/components/smart-nature-section"
import TopFeeders from "@/components/top-feeders"
import HowItWorks from "@/components/how-it-works"
import VideoSection from "@/components/video-section"
import FeaturesSection from "@/components/features-section"
import CommunitySection from "@/components/community-section"
import EcoFriendlySection from "@/components/eco-friendly-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"
import CookieBanner from "@/components/cookie-banner"
import Header from "@/components/header"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BokehBackground />
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <SmartNatureSection />
      <div id="products">
        <TopFeeders />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <VideoSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <EcoFriendlySection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}
