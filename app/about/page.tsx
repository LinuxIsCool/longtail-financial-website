import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">About Longtail Financial</h1>
          <p className="text-xl text-gray-600 text-pretty">
            Building the future of tokenomics and regenerative finance through innovative engineering and research
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/headshot.jpg"
                  alt="Shawn Anderson"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
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

            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Shawn Anderson</h2>
                <p className="text-xl text-[#FF6B35] font-semibold mb-4">CEO & Founder</p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Shawn Anderson is the CEO and Founder of Longtail Financial, a token engineering consultancy
                  dedicated to designing sustainable tokenomics and regenerative financial systems.
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
                  create sustainable tokenomics models, and build the infrastructure for a more equitable and
                  regenerative financial future.
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

      {/* Key Achievements */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Achievements & Expertise</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Research & Innovation</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Token engineering frameworks for on-chain intelligent agents</li>
                <li>• Deep reinforcement learning for portfolio management</li>
                <li>• Cryptocurrency market visualization and forecasting</li>
                <li>• Evolution strategies in financial machine learning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Industry Experience</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Data Scientist at RBC Amplify (Award-winning solutions)</li>
                <li>• Blockchain and cryptocurrency markets expert</li>
                <li>• AI and machine learning systems architecture</li>
                <li>• Distributed systems and cloud computing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Speaking & Media</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• AIBC Summit Malta 2019 - "The Rise of The New World"</li>
                <li>• Blockgeeks Workshop on AI in Crypto Markets</li>
                <li>• Economics of Wellbeing Podcast</li>
                <li>• Bloom Living Podcast on Decentralized Banking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Thought Leadership</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Author on Nature 2.0 and token engineering</li>
                <li>• Solarpunk and regenerative land management</li>
                <li>• DAOs and future of human collaboration</li>
                <li>• ReFi (Regenerative Finance) education and advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Build the Future Together</h3>
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
    </main>
    <Footer />
    </>
  )
}
