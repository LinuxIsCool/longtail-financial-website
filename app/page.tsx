import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 overflow-hidden">
        {/* Orange gradient blob */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400/30 via-orange-500/20 to-red-400/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Elevate Your Impact with Token Engineering
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We design, model, and verify complex tokenomic systems proven to boost your funding and activate your
            community.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full">
            Activate Your Network
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">What We Do</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive token engineering and blockchain advisory services to design, validate, and deploy sustainable crypto-economic systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Data Collection and Analysis */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/data_collection.png"
                  alt="Data Collection and Analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Data Collection & Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Research and collect data from open markets and variable inputs, analyzed through specialized token engineering tools.
                </p>
              </CardContent>
            </Card>

            {/* Interactive Data Dashboards */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/interactive_data_dashboards.png"
                  alt="Interactive Data Dashboards"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Interactive Data Dashboards
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Real-time visualization and monitoring tools for tracking tokenomic metrics and system performance.
                </p>
              </CardContent>
            </Card>

            {/* Token Engineering Methodology */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/token_engineering_methodology.png"
                  alt="Token Engineering Methodology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Token Engineering Methodology
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Systematic design frameworks integrating mechanism design, game theory, and complex systems engineering.
                </p>
              </CardContent>
            </Card>

            {/* Component Validation Testing */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/component_validation.png"
                  alt="Component Validation Testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Component Validation & Parameter Tuning
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Rigorous testing and optimization of tokenomic components through simulation and sensitivity analysis.
                </p>
              </CardContent>
            </Card>

            {/* Governance Advisory */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/governance.png"
                  alt="Governance Advisory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Governance Advisory
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Design and implementation of decentralized governance mechanisms, voting systems, and DAO structures.
                </p>
              </CardContent>
            </Card>

            {/* NFT Campaign Advisory */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/nft.png"
                  alt="NFT Campaign Advisory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  NFT Campaign Advisory
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Strategic planning and execution for NFT launches, collection design, and community-driven campaigns.
                </p>
              </CardContent>
            </Card>

            {/* Token Launch Advisory */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/token_launch_advisory.png"
                  alt="Token Launch Advisory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Token Launch Advisory
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  End-to-end guidance for token generation events, distribution strategies, and market launch planning.
                </p>
              </CardContent>
            </Card>

            {/* Mechanism Design */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/mechanism_design.png"
                  alt="Mechanism Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Mechanism Design
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Game-theoretic design of incentive structures, auction mechanisms, and protocol economics.
                </p>
              </CardContent>
            </Card>

            {/* Quantitative Finance */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/quant.png"
                  alt="Quantitative Finance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Quantitative Finance
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Mathematical modeling, risk analysis, and financial engineering for DeFi protocols and token systems.
                </p>
              </CardContent>
            </Card>

            {/* Economic Modeling */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/economic_modeling.png"
                  alt="Economic Modeling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Economic Modeling
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Agent-based simulations and dynamic modeling to predict system behavior and optimize token economics.
                </p>
              </CardContent>
            </Card>

            {/* Blockchain Advisory */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/blockchain.png"
                  alt="Blockchain Advisory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Blockchain Advisory
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Strategic consultation on blockchain architecture, platform selection, and technical implementation.
                </p>
              </CardContent>
            </Card>

            {/* Machine Learning and AI Development */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/machine_learning.png"
                  alt="Machine Learning and AI Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Machine Learning & AI Development
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  AI-powered analytics, predictive modeling, and automated optimization for tokenomic systems.
                </p>
              </CardContent>
            </Card>

            {/* AI Agent Development */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <Image
                  src="/Offerings/agent_development.png"
                  alt="AI Agent Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  AI Agent Development
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Custom autonomous agents for protocol interaction, market making, and decentralized system optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
