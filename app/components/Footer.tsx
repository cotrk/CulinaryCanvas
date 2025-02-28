import Link from "next/link"
import { footerLinks } from "../config/navigation"

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-base">© {new Date().getFullYear()} CulinaryCanvas. All rights reserved.</p>
          <div className="flex space-x-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

