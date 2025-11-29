import Header from "@/components/header"
import Footer from "@/components/footer"
import BokehBackground from "@/components/bokeh-background"
import { Truck, Package, Clock, MapPin } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen relative">
      <BokehBackground />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-8 text-center">
            Shipping Information
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-graphite/80">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-leaf-green" />
                <h2 className="text-2xl font-heading font-bold text-graphite">Shipping Methods</h2>
              </div>
              <p className="leading-relaxed">
                All products featured on SmartBirdDeals.com are fulfilled by Amazon. When you click on a product link
                and make a purchase, you'll be shopping directly through Amazon's secure checkout and benefit from their
                trusted shipping services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-leaf-green" />
                <h2 className="text-2xl font-heading font-bold text-graphite">Delivery Times</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong>Amazon Prime Members:</strong> Free 2-day shipping on eligible items
                </li>
                <li>
                  <strong>Standard Shipping:</strong> 5-7 business days
                </li>
                <li>
                  <strong>Expedited Shipping:</strong> 2-3 business days
                </li>
                <li>
                  <strong>Next Day Delivery:</strong> Available in select areas
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-leaf-green" />
                <h2 className="text-2xl font-heading font-bold text-graphite">International Shipping</h2>
              </div>
              <p className="leading-relaxed">
                Many of our featured products are available for international shipping through Amazon Global. Delivery
                times and costs vary by destination. Check the product page on Amazon for specific international
                shipping options.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-leaf-green" />
                <h2 className="text-2xl font-heading font-bold text-graphite">Order Tracking</h2>
              </div>
              <p className="leading-relaxed">
                Once your order ships from Amazon, you'll receive tracking information via email. You can track your
                package status through your Amazon account or using the tracking number provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">Returns & Exchanges</h2>
              <p className="leading-relaxed">
                All returns and exchanges are handled directly through Amazon's return policy. Most items can be
                returned within 30 days of receipt. Please refer to Amazon's return policy for specific details about
                your purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-graphite mb-4">Customer Support</h2>
              <p className="leading-relaxed">
                For questions about shipping, delivery status, or order issues, please contact Amazon customer service
                directly through your Amazon account. For general inquiries about our product recommendations, feel free
                to contact us.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-graphite/60 text-sm">All shipping and fulfillment services provided by Amazon</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
