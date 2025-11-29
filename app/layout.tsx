import type React from "react"
import type { Metadata } from "next"
import { Quicksand, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Updated fonts to match design brief: Quicksand for headlines, Inter for body text
const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"], variable: "--font-quicksand" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// <CHANGE> Updated metadata for SmartBirdDeals brand
export const metadata: Metadata = {
  title: "SmartBirdDeals - Watch. Feed. Connect.",
  description:
    "Bring nature closer with intelligent feeders that see, learn, and notify. Smart bird feeders with AI detection, real-time cameras, and eco-friendly design.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
