import type React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <Navigation />
      </header>
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  )
}

