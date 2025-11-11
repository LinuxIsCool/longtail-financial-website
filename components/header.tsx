"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2">
          <Image src="/logo.png" alt="Longtail Financial Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-gray-900">Longtail Financial</span>
        </button>

        <nav className="flex items-center gap-8">
          <button onClick={() => scrollToSection("what-we-do")} className="text-gray-600 hover:text-gray-900 transition-colors">
            What We Do
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="text-gray-600 hover:text-gray-900 transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("research")} className="text-gray-600 hover:text-gray-900 transition-colors">
            Research
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </button>
          <Button onClick={() => scrollToSection("contact")} size="sm" className="bg-black hover:bg-gray-800 text-white rounded-full">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  )
}
