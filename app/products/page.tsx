import Header from "@/components/header"
import TopFeeders from "@/components/top-feeders"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"

export default function ProductsPage() {
  return (
    <div className="min-h-screen relative">
      <BokehBackground />
      <Header />
      <main className="pt-20">
        <TopFeeders />
      </main>
      <Footer />
    </div>
  )
}
