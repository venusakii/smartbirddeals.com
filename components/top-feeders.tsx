"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

const feeders = [
  {
    id: 1,
    slug: "birdbuddy-pro-solar-smart-bird-feeder",
    name: "Birdbuddy PRO Solar Smart Bird Feeder with Camera - AI Bird Species Identification, 5MP Photos, 2K HD Video Live Stream Camera, Slow-Motion Video, 2.6in Focus - Blue Solar",
    price: "$189.00",
    features: "AI Bird Identification, 5MP Photos, 2K HD Video, Solar Powered",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/61P838-02aL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Birdbuddy+PRO+Solar+Smart+Bird+Feeder",
  },
  {
    id: 2,
    slug: "bird-feeder-ai-identify-solar-navy-blue",
    name: "Bird Feeder with Camera,AI Identify Birds Species,Smart Bird Camera with Solar Powered,Auto Record FHD Birds Video in Backyard,Instant Notifications,Ideal Gift for Family and Bird Lovers,Navy Blue",
    price: "$58.65",
    features: "AI Species Identification, FHD Video, Solar Powered, Instant Notifications",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/71faS6HlT2L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Bird+Feeder+Camera+AI+Identify+Solar+Powered",
  },
  {
    id: 3,
    slug: "tt-nature-bird-feeder-upgraded-iron-roof",
    name: "TT Nature Bird Feeder with Camera, Upgraded 1.5L Smart Birdhouse Al Identify for 10000 Plus Species, Auto Capture & Real-time Notifications, Ideal Gift for Bird Lovers (Iron Roof)",
    price: "$169.99",
    features: "AI Identification, 2K Video, Auto Capture, Real-time Notifications",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/81PRe1qY8OL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=TT+Nature+Bird+Feeder+Camera+Iron+Roof",
  },
  {
    id: 4,
    slug: "smart-bird-feeder-ai-solar-green",
    name: "Smart Bird Feeder with Camera with AI Identify Birds Species & Solar Panel, WiFi Birdfeeder with Cam, 2K Live View, Chew-Proof & Waterproof Design, Real-Time App Alerts, Gift for Bird Lovers, Green",
    price: "$69.98",
    features: "AI Bird Identification, 2K Live View, Solar Panel, Chew-Proof",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/81nHh+VVPXL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Smart+Bird+Feeder+Camera+AI+Solar+Panel+Green",
  },
  {
    id: 5,
    slug: "smart-bird-feeder-solar-ai-indigo-blue",
    name: "Smart Bird Feeder with Camera Solar Powered & AI Bi rd Identification, 2.4Ghz WiFi Bird feeders for Outdoors, 2K Live Video, Nstant Arrival Alerts - Best Gifts for Bi rd Lovers（Indigo Blue）",
    price: "$59.99",
    features: "AI Identification, 2K Live Video, Solar Powered, Instant Alerts",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/81Lszvf-BjL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Smart+Bird+Feeder+Camera+Solar+Powered+Indigo+Blue",
  },
  {
    id: 6,
    slug: "smart-bird-feeder-2-5k-hd-green",
    name: "Smart Bird Feeder with Camera Solar Powered, AI Birds Species Identification, 2.5K HD Video Bird House with Camera for Outside, Weatherproof Design Ideal Gifts for Christmas, Bird Lovers, Green",
    price: "$60.99",
    features: "AI Species Identification, 2.5K HD Video, Solar Powered, Weatherproof",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/81dHegjOCrL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Smart+Bird+Feeder+Camera+2.5K+HD+Solar",
  },
  {
    id: 7,
    slug: "bird-feeder-camera-ai-solar-panel",
    name: "Bird Feeder with Camera with AI Identify Birds Species Solar Panel, Smart Bird House with Cam, 2K Live View, Instant Arrival Alerts",
    price: "$79.99",
    features: "AI Identify Birds, 2K Live View, Solar Panel, Instant Alerts",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/71bnIiqaMAL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Bird+Feeder+Camera+AI+Solar+Panel+2K",
  },
  {
    id: 8,
    slug: "bird-feeders-outdoors-hanging-black",
    name: "Bird Feeders for Outdoors Hanging Bird Feeder Wild Birds Seed, Black",
    price: "$19.99",
    features: "Hanging Design, Squirrel-Proof, Metal Construction",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/813f1HTPtTL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Bird+Feeders+Outdoors+Hanging+Black",
  },
  {
    id: 9,
    slug: "bird-feeder-camera-solar-ai-2k-hd",
    name: "Bird Feeder with Camera Solar Powered: Smart Bird Feeders for Outdoors Garden with AI Identify Auto Capture 2K HD Bird House with Camera Outside WiFi Live View Birdfeeder Cam Gift for Birds Lover",
    price: "$49.99",
    features: "AI Identify, Auto Capture, 2K HD, Solar Powered",
    hasCamera: true,
    solar: true,
    image: "https://m.media-amazon.com/images/I/81kLLz8s+nL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Bird+Feeder+Camera+Solar+AI+2K+HD",
  },
  {
    id: 10,
    slug: "wagners-farmers-delight-10-pound",
    name: "Wagner's 53002 Farmer's Delight Wild Bird Food with Cherry Flavor, 10-Pound Bag",
    price: "$12.48",
    features: "Cherry Flavor, Attracts Ground Feeders, Immune Support",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81gIvBzsnaL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Wagner's+53002+Farmer's+Delight+Wild+Bird+Food",
  },
  {
    id: 11,
    slug: "kaytee-hummingbird-electronectin-64-oz",
    name: "Kaytee Hummingbird ElectroNectar Wild Bird Food, Ready to Use, 64 Ounces",
    price: "$9.99",
    features: "Ready to Use, For Hummingbirds, No Mess",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/71sh8qAWtdL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Kaytee+Hummingbird+ElectroNectar+64+Ounces",
  },
  {
    id: 12,
    slug: "wagners-farmers-delight-20-pound",
    name: "Wagner's 53003 Farmer's Delight Wild Bird Food with Cherry Flavor, 20-Pound Bag",
    price: "$21.99",
    features: "Cherry Flavor, Large Bag, Attracts Variety of Birds",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81YgJsBGZKL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Wagner's+53003+Farmer's+Delight+20+Pound",
  },
  {
    id: 13,
    slug: "kaytee-wild-bird-ultimate-blend-10-pound",
    name: "Kaytee Wild Bird Ultimate Birder's Blend Food Seed For Grosbeaks, Cardinals, Nuthatches, Woodpeckers & Other Wild Birds, 10 Pound",
    price: "$17.99",
    features: "High-Energy Blend, Attracts Multiple Birds, Premium Seeds",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81k4ah6n-hL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Kaytee+Wild+Bird+Ultimate+Birder's+Blend",
  },
  {
    id: 14,
    slug: "wagners-safflower-seed-5-pound",
    name: "Wagner's 57075 Safflower Seed Wild Bird Food, 5 Pound (Pack of 1)",
    price: "$11.98",
    features: "Safflower Seeds, Squirrel Deterrent, Low Fat",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81izIQn+LvL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Wagner's+57075+Safflower+Seed+Wild+Bird+Food",
  },
  {
    id: 15,
    slug: "heath-all-season-suet-cake-case-10",
    name: "Heath Outdoor Products birds DD4-10 All Season High Energy Suet Cake, Case Of 10",
    price: "$24.99",
    features: "High Energy Suet, All Season, Case of 10",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/61zmSacdJOL._AC_SX466_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Heath+Outdoor+Products+DD4-10+Suet+Cake",
  },
  {
    id: 16,
    slug: "audubon-park-cardinal-blend-4-pound",
    name: "Audubon Park Cardinal Blend Wild Bird Food, Cardinal Bird Seed for Outside Feeders, 4-Pound Bag",
    price: "$7.99",
    features: "100% Sunflower & Safflower, No Fillers, Attracts Cardinals",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81hnweCIHWL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Audubon+Park+Cardinal+Blend+Wild+Bird+Food",
  },
  {
    id: 17,
    slug: "planters-choice-9-herb-indoor-kit",
    name: "Planters' Choice 9 Herb Indoor Window Garden Kit - House Plants Seeds - Best Unique Christmas Gift Ideas for Women, Mom, Friend, Her, Birthday, Housewarming, Mother - New Home Kitchen Gifts",
    price: "$19.99",
    features: "9 Herb Seeds, Indoor Window Kit, Unique Gift",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/91xCqwOqLDL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Planters+Choice+9+Herb+Indoor+Window+Garden+Kit",
  },
  {
    id: 18,
    slug: "sereniseed-organic-herb-seeds-10-pack",
    name: "Sereniseed Certified Organic Herb Seeds (10-Pack) – Non GMO, Heirloom – Seed Starting Video - Basil, Cilantro, Oregano, Thyme, Parsley, Lavender, Chives, Sage, Dill Seeds for Indoor & Outdoor Planting",
    price: "$9.99",
    features: "Certified Organic, 10-Pack, Non-GMO Heirloom",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/811nANw85hL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Sereniseed+Certified+Organic+Herb+Seeds+10+Pack",
  },
  {
    id: 19,
    slug: "gardeners-basics-survival-vegetable-kit",
    name: "Gardeners Basics Survival Vegetable Seeds Garden Kit Over 16,000 Seeds Non-GMO and Heirloom, Great for Emergency Bugout Survival Gear 35 Varieties Seeds for Planting Vegetables 35 Free Plant Markers",
    price: "$23.95",
    features: "Over 16,000 Seeds, 35 Varieties, Non-GMO Heirloom",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81OruoYg7vS._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Gardeners+Basics+Survival+Vegetable+Seeds+Kit",
  },
  {
    id: 20,
    slug: "bonsai-starter-kit-gardening-gift",
    name: "Bonsai Starter Kit - Gardening Easter Gift for Women & Men - Bonsai Tree Growing Garden Crafts Hobby Kits for Adults, Unique DIY Hobbies for Plant Lovers - Unusual Christmas Gifts Ideas",
    price: "$18.99",
    features: "4 Bonsai Seed Types, Complete Kit, DIY Hobby",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/814po+xzHvL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=Bonsai+Starter+Kit+Gardening+Gift",
  },
]

export default function TopFeeders() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filteredFeeders = feeders.filter((feeder) => {
    if (filter === "all") return true
    if (filter === "camera") return feeder.hasCamera
    if (filter === "solar") return feeder.solar
    if (filter === "night") return feeder.nightVision
    return true
  })

  return (
    <section className="relative py-24 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-graphite mb-4 text-center">
          Top Smart Feeders
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "camera", "solar", "night"].map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? "default" : "outline"}
              onClick={() => setFilter(filterType)}
              className={
                filter === filterType
                  ? "bg-leaf-green hover:bg-leaf-green/90 text-white"
                  : "border-leaf-green/30 hover:bg-leaf-green/10"
              }
            >
              {filterType === "all" && "All Feeders"}
              {filterType === "camera" && "With Camera 📸"}
              {filterType === "solar" && "Solar-Powered ☀️"}
              {filterType === "night" && "Night Vision 🌙"}
            </Button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeeders.map((feeder) => (
            <Card
              key={feeder.id}
              className={`p-6 bg-gradient-to-br from-leaf-green/5 to-sky-blue/5 border-leaf-green/20 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden ${
                hoveredId === feeder.id ? "shadow-2xl ring-2 ring-leaf-green/30" : ""
              }`}
              onMouseEnter={() => setHoveredId(feeder.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated birds on hover */}
              {hoveredId === feeder.id && (
                <>
                  <span className="absolute top-4 right-4 text-2xl animate-float">🐦</span>
                  <span className="absolute bottom-4 left-4 text-2xl animate-float" style={{ animationDelay: "1s" }}>
                    🐦
                  </span>
                </>
              )}

              <div className="mb-4 h-48 bg-gradient-to-br from-sky-blue/20 to-warm-amber/20 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={feeder.image || "/placeholder.svg"}
                  alt={feeder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-heading font-bold text-graphite mb-2 line-clamp-2">{feeder.name}</h3>
              <p className="text-sm text-graphite/70 mb-3">{feeder.features}</p>
              <div className="flex items-center justify-between">
                <Link href={`/products/${feeder.slug}`}>
                  <Button size="sm" className="bg-leaf-green hover:bg-leaf-green/90 text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
