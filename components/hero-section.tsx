"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="/soft-focus-birds-feeding-at-smart-feeder-nature-sc.jpg"
            alt="Birds at smart feeder"
            className="w-full h-full object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-start/50 to-sky-end" />
        </div>
      </div>

      {/* Logo */}

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-heading font-bold text-graphite mb-6 text-balance">
          Watch. Feed. Connect.
        </h1>
        <p className="text-xl md:text-2xl text-graphite/80 mb-10 leading-relaxed max-w-2xl mx-auto text-pretty">
          Bring nature closer with intelligent feeders that see, learn, and notify.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button
              size="lg"
              className={`bg-leaf-green hover:bg-leaf-green/90 text-white text-lg px-8 py-6 rounded-xl transition-all ${
                hoveredButton === "shop" ? "animate-wing-flap" : ""
              }`}
              onMouseEnter={() => setHoveredButton("shop")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Shop Smart Feeders
            </Button>
          </Link>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-leaf-green">
          <path
            d="M12 5v14M19 12l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
