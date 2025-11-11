import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  {
    name: "Gaia AI",
    url: "https://gaiaai.xyz/",
    description: "A decentralized AI infrastructure enabling users to create, deploy, and monetize customized AI agents, combining blockchain technology with artificial intelligence to address privacy risks and censorship concerns in centralized AI services.",
    year: "2025",
    tags: ["AI", "Infrastructure", "Decentralized"],
    image: "/clients/GAIAAI.jpg",
  },
  {
    name: "The Bonding Curve Research Group",
    url: "https://bondingcurve.tech/",
    description: "An independent, decentralized collective of engineers, researchers, and data analysts studying and implementing bonding curves as programmable financial tools, creating open-source tooling and publishing research to advance Web3 crypto-economic primitives.",
    year: "2025",
    tags: ["Research", "Token Engineering", "DeFi"],
    image: "/clients/BCRG.png",
  },
  {
    name: "Avalanche",
    url: "https://www.avax.network/",
    description: "A blockchain network that enables builders to create applications and custom Layer 1 blockchains with lightning-fast transaction finality and scalability, powering a global community developing real-world use cases across DeFi, gaming, and institutional finance.",
    year: "2025",
    tags: ["Layer 1", "Blockchain", "Infrastructure"],
    image: "/clients/AVALANCHE.jpeg",
  },
  {
    name: "Psychedelic Puppet Show DAO",
    url: "https://psychedelicpuppet.show/",
    description: "A non-profit organization creating psychedelic art and storytelling content while supporting artists through NFT sales and grants, awakening curiosity and connection through immersive performances and digital collectibles.",
    year: "2024",
    tags: ["NFT", "Art", "DAO"],
    image: "/clients/PPSD.png",
  },
  {
    name: "BlockScience",
    url: "https://block.science/",
    description: "A complex systems engineering, R&D, and analytics firm integrating cutting-edge research, applied mathematics, and computational engineering to analyze and design safe and resilient socio-technical systems.",
    year: "2024",
    tags: ["Research", "Engineering", "Token Engineering"],
    image: "/clients/BLOCK-SCIENCE.png",
  },
  {
    name: "Token Engineering Commons",
    url: "https://tecommons.org/",
    description: "A community dedicated to advancing sustainable and ethical design for token ecosystems, serving as a gathering point for engineers and researchers to establish best practices for designing secure, resilient decentralized economic systems.",
    year: "2023",
    tags: ["Token Engineering", "DAO", "Commons"],
    image: "/clients/TEC.png",
  },
  {
    name: "Asymmetry Finance",
    url: "https://www.asymmetry.finance/",
    description: "A DeFi protocol offering USDaf, an immutable synthetic dollar stablecoin, and liquid staking solutions including safETH and afCVX, designed to provide innovative solutions for borrowing, stablecoins, and yield optimization.",
    year: "2023",
    tags: ["DeFi", "Stablecoin", "Liquid Staking"],
    image: "/clients/ASYMMETRY-FINANCE.png",
  },
  {
    name: "Inverter Network",
    url: "https://www.inverter.network/",
    description: "A pioneering Web3 protocol for token economies enabling conditional token issuance, dynamic utility management and token distribution through modular, plug-and-play smart contract modules.",
    year: "2022",
    tags: ["Token Engineering", "Infrastructure", "Protocol"],
    image: "/clients/INVERTER.png",
  },
  {
    name: "fx.land",
    url: "https://fx.land/",
    description: "The first DePIN blockchain platform for decentralized data storage where users can own their data through FxBlox hardware, earn cryptocurrency rewards, and participate in a decentralized storage network.",
    year: "2022",
    tags: ["DePIN", "Storage", "Infrastructure"],
    image: "/clients/FUCNTIONLAND.png",
  },
  {
    name: "Wooshi World",
    url: "https://www.wooshi.world/",
    description: "A brand featuring rubbery fun lovin' Wooshis designed to spread positivity, offering characters, video content, and merchandise including toys and coloring books.",
    year: "2022",
    tags: ["NFT", "Entertainment", "Brand"],
    image: "/clients/WOOSHI-WORLD.png",
  },
  {
    name: "NVAL",
    url: "https://www.nval.com/",
    description: "A digital asset pricing service that calculates current and historical market value for NFTs using evaluated pricing methods, providing real-time, unbiased pricing data across NFT marketplaces and blockchains.",
    year: "2022",
    tags: ["NFT", "Data", "Analytics"],
    image: "/clients/NVAL.png",
  },
  {
    name: "The Token Engineering Academy",
    url: "https://www.tokenengineering.net/",
    description: "A systems discipline that integrates economic theory, protocol architecture, data analytics, software engineering, and legal engineering into coherent design and evaluation methodologies for blockchain protocols.",
    year: "2022",
    tags: ["Education", "Research", "Tokenomics"],
    image: "/clients/TOKENENGINEERING.png",
  },
  {
    name: "Future Thinkers",
    url: "https://futurethinkers.org/",
    description: "A media and education platform helping people wake up, evolve, and adapt to the changing world through podcasts, courses, community events, and an experimental regenerative village project.",
    year: "2021",
    tags: ["Education", "Media", "Community"],
    image: "/clients/FUTURE_THINKERS.png",
  },
  {
    name: "Panther Protocol",
    url: "https://www.pantherprotocol.io/",
    description: "An end-to-end privacy protocol for digital assets using zero-knowledge technology to build DeFi solutions that meet regulatory requirements while preserving on-chain data privacy through zAssets and Shielded Pools.",
    year: "2021",
    tags: ["Privacy", "DeFi", "Zero-Knowledge"],
    image: "/clients/PANTHER-PROTOCOL.png",
  },
  {
    name: "Boson Protocol",
    url: "https://www.bosonprotocol.io/",
    description: "A decentralized commerce platform that enables trustless transactions between humans and AI agents, supporting everything from everyday goods to high-value real-world assets using blockchain-based smart contracts.",
    year: "2021",
    tags: ["DeFi", "Commerce", "RWA"],
    image: "/clients/BOSON-PROTOCOL.png",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading Web3 organizations to design, model, and verify sustainable tokenomic systems
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              >
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={client.image || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {client.year}
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-balance group-hover:text-orange-600 transition-colors">
                      {client.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow mb-4">{client.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {client.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm text-orange-600 font-semibold group-hover:underline">
                        Visit Website →
                      </span>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Together?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our portfolio of innovative Web3 projects. Let's design sustainable tokenomics for your protocol.
          </p>
          <a
            href="mailto:contact@longtailfinancial.com"
            className="inline-block px-8 py-3 bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
