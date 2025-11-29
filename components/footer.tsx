import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 z-10 bg-graphite text-white overflow-hidden">
      {/* Floating feathers background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 text-white/10 text-4xl animate-feather">🪶</div>
        <div
          className="absolute top-20 right-1/3 text-white/10 text-3xl animate-feather"
          style={{ animationDelay: "2s" }}
        >
          🪶
        </div>
        <div
          className="absolute top-32 left-2/3 text-white/10 text-4xl animate-feather"
          style={{ animationDelay: "4s" }}
        >
          🪶
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" className="text-leaf-green">
                <path
                  d="M20 8 C25 8, 28 12, 28 16 C28 20, 25 24, 20 24 C15 24, 12 20, 12 16 C12 12, 15 8, 20 8 M18 24 L18 32 M22 24 L22 32"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="text-xl font-heading font-bold">SmartBirdDeals</span>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Bringing nature closer through intelligent technology and eco-friendly design.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/contact" className="hover:text-leaf-green transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-leaf-green transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-leaf-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-leaf-green transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="text-center space-y-2">
            <p className="text-white/70 text-sm">© 2025 SmartBirdDeals.com. All rights reserved.</p>
            <p className="text-white/60 text-xs">Participant in the Amazon Associates Program.</p>
            <p className="text-white/60 text-xs">🛒 As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
