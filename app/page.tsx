import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Atom, Rocket } from "lucide-react"
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative">
                  <FileText className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Research, Collect and Analyze Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our data scientists extend the AI capacity of the client, researching and collecting data from open
                  markets and variable input which are understood through general token engineering dashboard tools.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative">
                  <Atom className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design, Simulate and Model Systems</h3>
                <p className="text-gray-600 leading-relaxed">
                  To fully understand and make optimizations to the token system, we build simulations and models to
                  inform strategic decision making and confirm hypotheses.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative">
                  <Rocket className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimize and Deploy Tokenomic System</h3>
                <p className="text-gray-600 leading-relaxed">
                  Once fully understood and optimized, we advise on platform development, market presence, NFT
                  implementation, token configuration, as well as ecosystem and mechanism design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/futuristic-nft-drop-poster-with-green-and-teal-tec.jpg"
                alt="Future Thinkers NFT Drop"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Over $800,000 raised with Future Thinkers Podcast
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide services across all stages of the token model generation processes. Check out this project!
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg rounded-full bg-transparent"
              >
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
