import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Longtail Financial Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-gray-900">Longtail Financial</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
            Portfolio
          </Link>
          <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">
            Research
          </Link>
          <Button size="sm" className="bg-black hover:bg-gray-800 text-white rounded-full">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  )
}
