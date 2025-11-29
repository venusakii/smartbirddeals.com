"use client"

import { useEffect, useRef } from "react"

export default function BokehBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create bokeh particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = "bokeh-particle"

      const size = Math.random() * 100 + 50
      const left = Math.random() * 100
      const top = Math.random() * 100
      const delay = Math.random() * 8

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${left}%`
      particle.style.top = `${top}%`
      particle.style.animationDelay = `${delay}s`

      container.appendChild(particle)
    }

    return () => {
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return <div ref={containerRef} className="bokeh-container" />
}
