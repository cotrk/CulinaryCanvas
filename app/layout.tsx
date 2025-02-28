import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "./components/Layout"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CulinaryCanvas",
  description: "Discover, create, and visualize your favorite recipes",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-50`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}



import './globals.css'