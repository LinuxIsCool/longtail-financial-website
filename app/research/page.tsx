import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const articles = [
  {
    title: "On Nature 2.0: A Token Engineering Framework",
    description: "A token engineering framework for designing on-chain behaviour of intelligent agents",
    url: "https://shawnltf.medium.com/on-nature-2-0-a-token-engineering-framework-for-designing-on-chain-behaviour-of-intelligent-agents-432a266e5af1",
    image: "/nature-technology-artificial-intelligence-network.jpg",
  },
  {
    title: "Longtail Token: Block Rewards for Evolution Strategies",
    description: "Exploring block rewards for evolution strategies in financial machine learning",
    url: "https://shawnltf.medium.com/longtail-token-block-rewards-for-evolution-strategies-in-financial-machine-learning-6491bddad83f",
    image: "/blockchain-tokens-machine-learning-evolution.jpg",
  },
  {
    title: "Longtail Financial: Exposure to the Singularity",
    description: "Understanding how Longtail Financial positions itself in relation to technological singularity",
    url: "https://shawnltf.medium.com/longtail-financial-is-exposure-to-the-singularity-d345b1c46a5c",
    image: "/technological-singularity-future-ai-exponential.jpg",
  },
  {
    title: "Solarpunk: A Regenerative Land Management Framework",
    description: "A framework for economical carbon neutrality through regenerative land management",
    url: "https://shawnltf.medium.com/solarpunk-a-regenerative-land-management-framework-for-economical-carbon-neutrality-499479e6c07e",
    image: "/solarpunk-green-sustainable-nature-renewable-energ.jpg",
  },
  {
    title: "Token Engineering in Our Heritage",
    description: "What we can learn from ancient and modern indigenous cultures about token engineering",
    url: "https://medium.com/token-engineering-commons/token-engineering-in-our-heritage-what-we-can-learn-from-ancient-and-modern-indigenous-cultures-fb4961a8cd24",
    image: "/indigenous-culture-heritage-community-collaboratio.jpg",
  },
  {
    title: "DAOs: The Latest Iteration in Human Collaboration",
    description: "Exploring decentralized autonomous organizations as the next evolution of human cooperation",
    url: "https://medium.com/longtail-financial/daos-the-latest-iteration-in-human-collaboration-5db2dde7a984",
    image: "/dao-collaboration-decentralized-network-community.jpg",
  },
  {
    title: "Looking for Flexible Work? Join a DAO",
    description: "Discover flexible work-from-home opportunities through decentralized autonomous organizations",
    url: "https://medium.com/longtail-financial/looking-for-a-flexible-work-from-home-opportunity-join-a-dao-dd55d81327df",
    image: "/remote-work-flexibility-digital-nomad-collaboratio.jpg",
  },
  {
    title: "Introducing Longtail Financial's ReFi Bootcamp",
    description: "Let's engineer a brighter future together with regenerative finance education",
    url: "https://medium.com/longtail-financial/lets-engineer-a-brighter-future-together-introducing-longtail-financial-s-refi-bootcamp-daf1323a8ed4",
    image: "/education-bootcamp-learning-regenerative-finance.jpg",
  },
  {
    title: "Healing the Earth by Healing the Economy",
    description: "Could the blockchain help us create a regenerative economic system?",
    url: "https://medium.com/longtail-financial/to-heal-the-earth-we-must-heal-the-economy-could-the-blockchain-help-us-get-there-e48072bcb697",
    image: "/earth-healing-regenerative-economy-sustainability.jpg",
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Research & Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our thought leadership on token engineering, regenerative finance, DAOs, and the future of economic
            systems.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Article
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow">{article.description}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-orange-600 font-semibold group-hover:underline">
                        Read on Medium →
                      </span>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
