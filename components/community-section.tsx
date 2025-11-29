"use client"

import { Card } from "@/components/ui/card"

const reviews = [
  {
    text: "I've seen species I never knew visited my garden!",
    author: "Clara M.",
    image: "/blue-jay-at-bird-feeder.jpg",
  },
  {
    text: "The AI bird recognition is incredibly accurate!",
    author: "James T.",
    image: "/cardinal-at-smart-bird-feeder.jpg",
  },
  {
    text: "My kids love watching the live feed every morning",
    author: "Sarah K.",
    image: "/happy-children-watching-colorful-birds-at-smart-fe.jpg",
  },
  {
    text: "Best investment for nature lovers!",
    author: "Mike R.",
    image: "/hummingbird-at-smart-feeder.jpg",
  },
]

export default function CommunitySection() {
  return (
    <section className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-16 text-center">
          Community of Bird Lovers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-leaf-green/20 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={review.image || "/placeholder.svg"}
                  alt="Bird feeder photo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="relative">
                  <div className="absolute -top-8 left-4 bg-white rounded-full p-2 shadow-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-warm-amber fill-current">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <p className="text-graphite/80 italic mb-2 pt-4 text-sm leading-relaxed">"{review.text}"</p>
                  <p className="text-graphite font-semibold text-sm">— {review.author}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
