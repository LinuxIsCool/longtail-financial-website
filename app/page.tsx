"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, Linkedin, Github, Mail } from "lucide-react"

const offerings = [
  {
    title: "Data Collection & Analysis",
    description: "Research and collect data from open markets and variable inputs, analyzed through specialized token engineering tools.",
    image: "/Offerings/data_collection.png",
  },
  {
    title: "Interactive Data Dashboards",
    description: "Real-time visualization and monitoring tools for tracking tokenomic metrics and system performance.",
    image: "/Offerings/interactive_data_dashboards.png",
  },
  {
    title: "Token Engineering Methodology",
    description: "Systematic design frameworks integrating mechanism design, game theory, and complex systems engineering.",
    image: "/Offerings/token_engineering_methodology.png",
  },
  {
    title: "Component Validation & Parameter Tuning",
    description: "Rigorous testing and optimization of tokenomic components through simulation and sensitivity analysis.",
    image: "/Offerings/component_validation.png",
  },
  {
    title: "Governance Advisory",
    description: "Design and implementation of decentralized governance mechanisms, voting systems, and DAO structures.",
    image: "/Offerings/governance.png",
  },
  {
    title: "NFT Campaign Advisory",
    description: "Strategic planning and execution for NFT launches, collection design, and community-driven campaigns.",
    image: "/Offerings/nft.png",
  },
  {
    title: "Token Launch Advisory",
    description: "End-to-end guidance for token generation events, distribution strategies, and market launch planning.",
    image: "/Offerings/token_launch_advisory.png",
  },
  {
    title: "Mechanism Design",
    description: "Game-theoretic design of incentive structures, auction mechanisms, and protocol economics.",
    image: "/Offerings/mechanism_design.png",
  },
  {
    title: "Quantitative Finance",
    description: "Mathematical modeling, risk analysis, and financial engineering for DeFi protocols and token systems.",
    image: "/Offerings/quant.png",
  },
  {
    title: "Economic Modeling",
    description: "Agent-based simulations and dynamic modeling to predict system behavior and optimize token economics.",
    image: "/Offerings/economic_modeling.png",
  },
  {
    title: "Blockchain Advisory",
    description: "Strategic consultation on blockchain architecture, platform selection, and technical implementation.",
    image: "/Offerings/blockchain.png",
  },
  {
    title: "Machine Learning & AI Development",
    description: "AI-powered analytics, predictive modeling, and automated optimization for tokenomic systems.",
    image: "/Offerings/machine_learning.png",
  },
  {
    title: "AI Agent Development",
    description: "Custom autonomous agents for protocol interaction, market making, and decentralized system optimization.",
    image: "/Offerings/agent_development.png",
  },
]

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative px-6 pt-20 pb-32 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400/30 via-orange-500/20 to-red-400/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Elevate Your Impact with Token Engineering
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We design, model, and verify complex tokenomic systems proven to boost your funding and activate your
            community.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full"
          >
            Activate Your Network
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">What We Do</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive token engineering and blockchain advisory services to design, validate, and deploy sustainable
            crypto-economic systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Our Portfolio</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Trusted by leading Web3 organizations to design, model, and verify sustainable tokenomic systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              >
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={client.image}
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
                        <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
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

      {/* Research Section */}
      <section id="research" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Research & Resources</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Explore our thought leadership on token engineering, regenerative finance, DAOs, and the future of economic
            systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer overflow-hidden"
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={article.image}
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

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">About Longtail Financial</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">
            Building the future of tokenomics and regenerative finance through innovative engineering and research
          </p>

          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image src="/headshot.jpg" alt="Shawn Anderson" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="mt-6 flex gap-3 justify-center">
                <Link
                  href="https://www.linkedin.com/in/shawnwanderson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </Link>
                <Link
                  href="https://github.com/longtailfinancial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Shawn Anderson</h3>
                <p className="text-xl text-[#FF6B35] font-semibold mb-4">CEO & Founder</p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Shawn Anderson is the CEO and Founder of Longtail Financial, a token engineering consultancy dedicated
                  to designing sustainable tokenomics and regenerative financial systems.
                </p>

                <p>
                  With a background in data science, machine learning, and distributed systems, Shawn has worked at the
                  intersection of finance and technology for over a decade. His work spans from building AI trading
                  systems and portfolio management algorithms to pioneering research in decentralized banking and
                  regenerative economics.
                </p>

                <p>
                  As a Data Scientist at RBC Amplify, Shawn led the development of Bundle, an award-winning internal
                  solution leveraging machine learning for access management. His academic research includes deep
                  reinforcement learning for portfolio management, cryptocurrency market visualization, and distributed
                  multi-agent learning systems.
                </p>

                <p>
                  Shawn is passionate about using blockchain technology and token engineering to address climate change
                  and build regenerative economic systems. He has authored numerous articles on topics including Nature
                  2.0, Solarpunk frameworks for carbon neutrality, and the role of DAOs in human collaboration.
                </p>

                <p>
                  Through Longtail Financial, Shawn works with projects to design intelligent agent behavior on-chain,
                  create sustainable tokenomics models, and build the infrastructure for a more equitable and regenerative
                  financial future.
                </p>
              </div>

              <div className="pt-6">
                <Link href="https://shawnwanderson.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full bg-transparent">
                    View Full Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Build the Future Together</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in token engineering, regenerative finance, or collaborating on innovative Web3 projects?
          </p>
          <Link href="mailto:contact@longtailfinancial.com">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white rounded-full">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
