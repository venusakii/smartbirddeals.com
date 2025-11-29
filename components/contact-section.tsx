"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section className="relative py-24 px-4 z-10 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-graphite/70 mb-12">Have questions? We'd love to hear from you.</p>

        <Card className="p-8 bg-white/80 backdrop-blur-sm border-leaf-green/20 shadow-xl relative overflow-hidden">
          {/* Birdhouse shape decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="text-leaf-green fill-current">
              <path d="M50 10 L80 40 L80 90 L20 90 L20 40 Z" />
              <circle cx="50" cy="60" r="8" fill="white" />
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-graphite mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-leaf-green/30 focus:outline-none focus:ring-2 focus:ring-leaf-green bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-graphite mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-leaf-green/30 focus:outline-none focus:ring-2 focus:ring-leaf-green bg-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-graphite mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-leaf-green/30 focus:outline-none focus:ring-2 focus:ring-leaf-green bg-white resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-leaf-green hover:bg-leaf-green/90 text-white py-6 text-lg rounded-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message ✈️"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
