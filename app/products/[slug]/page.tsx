import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import BokehBackground from "@/components/bokeh-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
    amazonUrl: "https://www.amazon.com/Bird-Buddy-Solar-Feeder-Camera/dp/B0DHY6B9GY",
    description:
      "The Birdbuddy PRO Solar Smart Bird Feeder combines advanced AI technology with a high-quality camera for seamless bird watching. Featuring AI-powered species identification, 5MP HDR photos, 2K HD live streaming, and slow-motion video, it's perfect for bird enthusiasts. Solar-powered for eco-friendly operation and weatherproof design ensures year-round use.",
    specifications: [
      "5MP photos with HDR support",
      "2K HD video live stream with slow-motion",
      "AI bird species and individual recognition",
      "Solar-powered with 2.6-inch focus lens",
      "Weatherproof and UV-resistant ABS material",
      "Real-time app alerts and easy mounting",
      "Privacy-focused camera design",
    ],
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
    amazonUrl: "https://www.amazon.com/Identify-Species-Powered-Backyard-Notifications/dp/B0CYH237TV",
    description:
      "This smart bird feeder with camera uses AI to identify over 10,000 bird species, auto-records FHD videos upon motion detection, and sends instant notifications to your app. Solar-powered with a large capacity, it's weatherproof and easy to mount, making it an ideal gift for bird lovers and families.",
    specifications: [
      "FHD video recording with 160° field of view",
      "AI identification for over 10,000 species",
      "Solar-powered with 5200mAh battery",
      "1.3 liters seed capacity",
      "Two-way audio and motion detection",
      "Supports microSD up to 128GB or cloud storage",
      "2.4GHz Wi-Fi connectivity",
      "Rainproof ABS and PC material",
    ],
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
    amazonUrl: "https://www.amazon.com/TT-Nature-Upgraded-Real-time-Notifications/dp/B0CZRKX894",
    description:
      "The upgraded TT Nature bird feeder features a smart camera with AI for identifying over 10,000 species, 2K live streaming, and 5MP photos. With 1.8L capacity and real-time notifications, it's designed for easy outdoor setup and is a thoughtful gift for bird enthusiasts.",
    specifications: [
      "2K HD live streaming video",
      "5MP photo resolution",
      "AI species identification",
      "Solar-powered operation",
      "1.8L large seed capacity",
      "Auto capture functionality",
      "Real-time app notifications",
      "Iron roof for durability",
    ],
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
    amazonUrl: "https://www.amazon.com/Identify-Birdfeeder-Chew-Proof-Waterproof-Real-Time/dp/B0FJFJCB8S",
    description:
      "Enhance your bird watching with this solar-powered smart feeder featuring AI identification for over 11,000 species, 2K HD video, and real-time alerts. Chew-proof and waterproof, it includes two-way audio and free cloud storage, perfect as a gift for nature lovers.",
    specifications: [
      "2K HD camera with 160° wide-angle lens",
      "AI identifies over 11,000 bird species",
      "Solar panel with 5000mAh battery",
      "IP65 waterproof and chew-proof design",
      "Two-way audio communication",
      "Free 3-day cloud storage (2-year trial)",
      "2.4GHz Wi-Fi connectivity",
      "Supports SD card up to 128GB",
    ],
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
    amazonUrl: "https://www.amazon.com/Feeder-Camera-Powered-Identification-Arrival/dp/B0DBQKYBMF",
    description:
      "This indigo blue smart bird feeder offers AI bird identification, 2K live video streaming, and instant arrival alerts via app. Solar-powered for hassle-free outdoor use, it's weatherproof and a top gift choice for bird lovers seeking high-tech backyard enjoyment.",
    specifications: [
      "2K HD live video streaming",
      "AI-powered bird identification",
      "Solar-powered with rechargeable battery",
      "2.4GHz Wi-Fi connectivity",
      "Instant motion detection alerts",
      "Weatherproof outdoor design",
      "Easy app integration for iOS/Android",
      "Large seed capacity for extended use",
    ],
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
    amazonUrl: "https://www.amazon.com/Powered-Species-Identification-Weatherproof-Christmas/dp/B0FQ5TXJ83",
    description:
      "Discover birds in stunning 2.5K HD with this solar-powered feeder that uses AI to identify over 10,000 species and sends real-time alerts. Featuring a 1.6L capacity and weatherproof build, it's an excellent Christmas gift for bird lovers.",
    specifications: [
      "2.5K HD video with 130° wide-angle lens",
      "5MP sensor for clear photos",
      "AI identifies over 10,000 species",
      "Solar-powered with 4000mAh battery",
      "1.6L food reservoir capacity",
      "2.4GHz Wi-Fi (no 5G support)",
      "Rain-proof weatherproof design",
      "SD card or 30-day cloud storage trial",
    ],
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
    amazonUrl: "https://www.amazon.com/HARYMOR-Identify-Species-Watching-Capture/dp/B0C4Y6D5BD",
    description:
      "This smart bird house feeder integrates a camera with AI for species identification, 2K live view, and instant alerts. Solar panel ensures continuous power, making it a reliable choice for outdoor bird observation and enjoyment.",
    specifications: [
      "2K HD live view camera",
      "AI bird species identification",
      "Solar panel for power",
      "Instant arrival notifications",
      "Weather-resistant construction",
      "App-controlled viewing and alerts",
      "Easy installation and refill",
      "Compatible with 2.4GHz Wi-Fi",
    ],
  },
  {
    id: 8,
    slug: "bird-feeders-outdoors-hanging-black",
    name: "Bird Feeders for Outdoors Hanging Bird Feeder Wild Birds Seed, Black",
    price: "$19.99",
    features: "Hanging Design, Squirrel-Proof, Metal Construction",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/813f1HTPtTL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Jealoeur-Feeders-Squirrel-Decoration-Watchers/dp/B093BPW6HC",
    description:
      "A classic hanging bird feeder in black, designed for outdoor use to attract wild birds. Featuring durable metal construction and squirrel-deterrent design, it's perfect for gardens and backyards to provide a reliable feeding station.",
    specifications: [
      "Durable metal hanging design",
      "Suitable for wild bird seeds",
      "Squirrel-proof features",
      "Weather-resistant black finish",
      "Easy to fill and clean",
      "Multiple feeding ports",
      "Holds up to 2 lbs of seed",
      "Ideal for outdoor decoration",
    ],
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
    amazonUrl: "https://www.amazon.com/Bird-Feeder-Camera-Solar-Powered/dp/B0FL285WJX",
    description:
      "Transform your garden with this solar-powered bird feeder camera that auto-captures 2K HD videos, identifies birds via AI, and offers live WiFi view. With night vision and real-time alerts, it's a fantastic gift for bird lovers.",
    specifications: [
      "2K HD camera with 140° wide-angle",
      "AI identification for 10,000+ species",
      "Solar-powered with 5000mAh battery",
      "1.25L feed hopper capacity",
      "Color night vision support",
      "Two-way audio and alarms",
      "Supports 128GB microSD or cloud",
      "2.4G Wi-Fi connectivity",
    ],
  },
  {
    id: 10,
    slug: "wagners-farmers-delight-10-pound",
    name: "Wagner's 53002 Farmer's Delight Wild Bird Food with Cherry Flavor, 10-Pound Bag",
    price: "$12.48",
    features: "Cherry Flavor, Attracts Ground Feeders, Immune Support",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81gIvBzsnaL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Wagners-53002-Farmers-Delight-10-Pound/dp/B00LHE5OSQ",
    description:
      "Wagner's Farmer's Delight is a premium wild bird food blend with cherry flavor, attracting a variety of backyard birds especially ground feeders. Made with high-quality grains and sunflower seeds, it supports immune health and is allergen-free.",
    specifications: [
      "10-pound bag size",
      "Cherry flavored for appeal",
      "Includes sunflower seed, millet, cracked corn",
      "Attracts wide variety of birds",
      "Supports immune health",
      "Allergen-free formula",
      "Suitable for hopper or tube feeders",
      "Made in the USA",
    ],
  },
  {
    id: 11,
    slug: "kaytee-hummingbird-electronectin-64-oz",
    name: "Kaytee Hummingbird ElectroNectar Wild Bird Food, Ready to Use, 64 Ounces",
    price: "$9.99",
    features: "Ready to Use, For Hummingbirds, No Mess",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/71sh8qAWtdL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Kaytee-Hummingbird-Electro-Nectar-Ready/dp/B007FJ0FJU",
    description:
      "Kaytee ElectroNectar is a ready-to-use liquid nectar specifically formulated for hummingbirds, providing essential energy without the need for mixing. It's mess-free and attracts hummingbirds to your feeders effortlessly.",
    specifications: [
      "64 ounces ready-to-use volume",
      "Scientifically developed for hummingbirds",
      "No boiling or mixing required",
      "Contains vitamins and minerals",
      "Clear liquid to mimic natural nectar",
      "Suitable for all hummingbird species",
      "Long shelf life",
      "Easy pour bottle design",
    ],
  },
  {
    id: 12,
    slug: "wagners-farmers-delight-20-pound",
    name: "Wagner's 53003 Farmer's Delight Wild Bird Food with Cherry Flavor, 20-Pound Bag",
    price: "$21.99",
    features: "Cherry Flavor, Large Bag, Attracts Variety of Birds",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81YgJsBGZKL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Wagners-53003-Farmers-Delight-20-Pound/dp/B005KOJ86I",
    description:
      "The larger 20-pound bag of Wagner's Farmer's Delight offers extended supply of cherry-flavored bird food, ideal for frequent feeders. It attracts diverse birds with its quality grains and supports overall bird health.",
    specifications: [
      "20-pound bag size",
      "Cherry flavor enhancement",
      "Premium grains and seeds blend",
      "Attracts ground and platform feeders",
      "Immune system support ingredients",
      "Allergen-free and limited diet",
      "Versatile for multiple feeder types",
      "Proudly made in the USA",
    ],
  },
  {
    id: 13,
    slug: "kaytee-wild-bird-ultimate-blend-10-pound",
    name: "Kaytee Wild Bird Ultimate Birder's Blend Food Seed For Grosbeaks, Cardinals, Nuthatches, Woodpeckers & Other Wild Birds, 10 Pound",
    price: "$17.99",
    features: "High-Energy Blend, Attracts Multiple Birds, Premium Seeds",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81k4ah6n-hL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Kaytee-Ultimate-Birders-Blend-Wild/dp/B07QYCJ1VV",
    description:
      "Kaytee's Ultimate Birder's Blend is a high-energy seed mix designed to attract grosbeaks, cardinals, nuthatches, woodpeckers, and more. Formulated by bird enthusiasts, it provides nutrition for consistent bird visits to your feeders.",
    specifications: [
      "10-pound bag weight",
      "Includes safflower, peanuts, sunflower, millet",
      "Attracts grosbeaks, cardinals, woodpeckers",
      "High-energy nutrition formula",
      "Suitable for hopper, tube feeders",
      "Calcium carbonate for health",
      "All life stages appropriate",
      "Unflavored natural seeds",
    ],
  },
  {
    id: 14,
    slug: "wagners-safflower-seed-5-pound",
    name: "Wagner's 57075 Safflower Seed Wild Bird Food, 5 Pound (Pack of 1)",
    price: "$11.98",
    features: "Safflower Seeds, Squirrel Deterrent, Low Fat",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81izIQn+LvL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Wagners-57075-Safflower-Seed-5-Pound/dp/B004477AOO",
    description:
      "Wagner's Safflower Seed is a favorite for songbirds like cardinals and chickadees, while its bitter taste deters squirrels and unwanted birds. This 5-pound pack offers low-fat, plant-based nutrition for all life stages.",
    specifications: [
      "5-pound bag weight",
      "Pure safflower seeds",
      "Attracts cardinals, chickadees, grosbeaks",
      "Discourages squirrels and grackles",
      "Low fat, non-GMO formula",
      "Mild nutty flavor",
      "Suitable for all bird life stages",
      "Made in the USA",
    ],
  },
  {
    id: 15,
    slug: "heath-all-season-suet-cake-case-10",
    name: "Heath Outdoor Products birds DD4-10 All Season High Energy Suet Cake, Case Of 10",
    price: "$24.99",
    features: "High Energy Suet, All Season, Case of 10",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/61zmSacdJOL._AC_SX466_.jpg",
    amazonUrl: "https://www.amazon.com/Heath-Outdoor-Products-DD4-10-Season/dp/B000HHJKM0",
    description:
      "Heath's All Season High Energy Suet Cakes provide essential fats and nutrients for birds year-round. This case of 10 is perfect for keeping suet feeders stocked, attracting woodpeckers and other suet-loving birds.",
    specifications: [
      "Case of 10 suet cakes",
      "High energy formula for all seasons",
      "Attracts woodpeckers and songbirds",
      "Rendered beef fat base",
      "Contains grains and fruits",
      "Easy to use in suet cages",
      "Melt-resistant in warm weather",
      "Supports bird energy needs",
    ],
  },
  {
    id: 16,
    slug: "audubon-park-cardinal-blend-4-pound",
    name: "Audubon Park Cardinal Blend Wild Bird Food, Cardinal Bird Seed for Outside Feeders, 4-Pound Bag",
    price: "$7.99",
    features: "100% Sunflower & Safflower, No Fillers, Attracts Cardinals",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81hnweCIHWL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Aududon-Park-12231-Cardinal-4-Pounds/dp/B0037UZZYQ",
    description:
      "Audubon Park's Cardinal Blend is a premium mix of 100% sunflower and safflower seeds with no fillers, specifically to attract cardinals, finches, and grosbeaks. Squirrels dislike safflower, making it ideal for targeted feeding.",
    specifications: [
      "4-pound bag weight",
      "100% black oil sunflower and safflower",
      "No fillers or cheap grains",
      "Attracts cardinals, titmice, chickadees",
      "Squirrel-resistant due to safflower",
      "Suitable for hopper, tube feeders",
      "Provides wholesome energy",
      "All life stages for songbirds",
    ],
  },
  {
    id: 17,
    slug: "planters-choice-9-herb-indoor-kit",
    name: "Planters' Choice 9 Herb Indoor Window Garden Kit - House Plants Seeds - Best Unique Christmas Gift Ideas for Women, Mom, Friend, Her, Birthday, Housewarming, Mother - New Home Kitchen Gifts",
    price: "$19.99",
    features: "9 Herb Seeds, Indoor Window Kit, Unique Gift",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/91xCqwOqLDL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Herb-Indoor-Window-Garden-Kit/dp/B0CJYN69ZY",
    description:
      "This 9 Herb Indoor Window Garden Kit from Planters' Choice includes seeds for popular kitchen herbs, perfect for growing fresh plants indoors. It's a unique gift idea for women, moms, or anyone starting a home garden.",
    specifications: [
      "9 varieties of herb seeds included",
      "Designed for indoor window growing",
      "Includes pots, soil pellets, markers",
      "Easy for beginners setup",
      "Promotes fresh kitchen herbs",
      "Ideal for small spaces",
      "Complete starter kit",
      "Great for gifts and housewarming",
    ],
  },
  {
    id: 18,
    slug: "sereniseed-organic-herb-seeds-10-pack",
    name: "Sereniseed Certified Organic Herb Seeds (10-Pack) – Non GMO, Heirloom – Seed Starting Video - Basil, Cilantro, Oregano, Thyme, Parsley, Lavender, Chives, Sage, Dill Seeds for Indoor & Outdoor Planting",
    price: "$9.99",
    features: "Certified Organic, 10-Pack, Non-GMO Heirloom",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/811nANw85hL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Sereniseed-Certified-Organic-Collection-10-Pack/dp/B08QLFM4GQ",
    description:
      "Sereniseed's 10-pack of certified organic herb seeds includes heirloom varieties like basil, cilantro, and more, with a seed-starting video guide. Perfect for indoor or outdoor planting, ensuring high germination and fresh herbs.",
    specifications: [
      "10-pack: Basil, Cilantro, Oregano, Thyme, etc.",
      "USDA certified organic",
      "Non-GMO, heirloom seeds",
      "Includes starting video guide",
      "Germination guaranteed",
      "Suitable for indoor/outdoor",
      "Full sun, well-drained soil",
      "Moderate watering needs",
    ],
  },
  {
    id: 19,
    slug: "gardeners-basics-survival-vegetable-kit",
    name: "Gardeners Basics Survival Vegetable Seeds Garden Kit Over 16,000 Seeds Non-GMO and Heirloom, Great for Emergency Bugout Survival Gear 35 Varieties Seeds for Planting Vegetables 35 Free Plant Markers",
    price: "$23.95",
    features: "Over 16,000 Seeds, 35 Varieties, Non-GMO Heirloom",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/81OruoYg7vS._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Vegetable-Emergency-Vegetables-Gardeners-Basics/dp/B08S7S98L2",
    description:
      "This survival vegetable seed kit from Gardeners Basics contains over 16,000 non-GMO heirloom seeds across 35 varieties, ideal for emergency preparedness or home gardening. Includes 35 plant markers and instructions for successful planting.",
    specifications: [
      "Over 16,000 seeds total",
      "35 vegetable varieties included",
      "Non-GMO, heirloom, open-pollinated",
      "Individual packets with instructions",
      "35 free plant markers",
      "Suitable for indoor/outdoor",
      "Up to 25-year shelf life",
      "USA sourced and packaged",
    ],
  },
  {
    id: 20,
    slug: "bonsai-starter-kit-gardening-gift",
    name: "Bonsai Starter Kit - Gardening Easter Gift for Women & Men - Bonsai Tree Growing Garden Crafts Hobby Kits for Adults, Unique DIY Hobbies for Plant Lovers - Unusual Christmas Gifts Ideas",
    price: "$18.99",
    features: "4 Bonsai Seed Types, Complete Kit, DIY Hobby",
    hasCamera: false,
    image: "https://m.media-amazon.com/images/I/814po+xzHvL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Planters-Choice-Bonsai-Starter-Comprehensive/dp/B06XH2ZDTM",
    description:
      "This bonsai starter kit is perfect for beginners and includes everything needed to grow your own bonsai tree. With 4 seed types and complete instructions, it's an excellent DIY hobby kit and a unique gift for plant lovers.",
    specifications: [
      "4 types of bonsai tree seeds",
      "Includes soil, pots, and tools",
      "Step-by-step growing instructions",
      "Suitable for beginners",
      "Complete DIY hobby kit",
      "Great for stress relief and meditation",
      "Makes a unique gift",
      "Ideal for indoor growing",
    ],
  },
]

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = feeders.find((f) => f.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <BokehBackground />
      <Header />
      <main className="relative z-10 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <Card className="p-8 bg-gradient-to-br from-leaf-green/10 to-sky-blue/10 border-leaf-green/20">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </Card>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-heading font-bold text-graphite mb-4">{product.name}</h1>
                
                <p className="text-lg text-graphite/80 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-heading font-bold text-graphite mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.split(", ").map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-leaf-green/10 text-leaf-green rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-heading font-bold text-graphite mb-3">Specifications</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-leaf-green mr-2">✓</span>
                      <span className="text-graphite/80">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-leaf-green hover:bg-leaf-green/90 text-white text-lg py-6"
                  asChild
                >
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </Button>
                
              </div>

              {/* Amazon Disclosure */}
              <p className="text-sm text-graphite/60 italic">
                *As an Amazon Associate, we earn from qualifying purchases. Prices and availability may vary.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
