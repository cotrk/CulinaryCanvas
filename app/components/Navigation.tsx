import Link from "next/link"
import { Github } from "lucide-react"
import { menuItems } from "../config/navigation"

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-primary">
            CulinaryCanvas
          </Link>
        </div>
        <div className="hidden sm:flex sm:items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-text hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://github.com/cotrk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

