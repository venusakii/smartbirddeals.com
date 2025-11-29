"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-leaf-green/20 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-graphite/80 text-center sm:text-left leading-relaxed">
          🍪 This website uses cookies to enhance your browsing experience. By continuing, you agree to our use of
          cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="border-leaf-green/30 hover:bg-leaf-green/10"
          >
            Decline
          </Button>
          <Button size="sm" onClick={handleAccept} className="bg-leaf-green hover:bg-leaf-green/90 text-white">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
