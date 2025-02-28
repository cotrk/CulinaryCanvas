import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-24">
      <section
        className="min-h-screen flex flex-col justify-center items-end px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-image-placeholder.jpg-L1vmGHmm0GlnaTN6q7kPZXal5Ukh6j.jpeg')",
          backgroundPosition: "left center",
        }}
      >
        <div className="max-w-xl w-full sm:max-w-2xl md:max-w-3xl bg-white bg-opacity-95 p-8 sm:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text font-serif mb-6 leading-tight">
            Paint Your Plate, <br />
            <span className="text-primary">Share Your Passion</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-text/80 mb-10 leading-relaxed">
            Discover, create, and visualize your favorite recipes with CulinaryCanvas. Turn your kitchen into a studio
            of gastronomic artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/recipes"
              className="px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors duration-300 text-center sm:text-left flex-1 sm:flex-none"
            >
              Get started
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full text-lg font-medium hover:bg-primary/10 transition-colors duration-300 text-center sm:text-left flex-1 sm:flex-none"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-xl p-8 sm:p-12 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-10 font-serif">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-secondary"></div>
              <div className="p-6 sm:p-8">
                <h3 className="font-semibold text-xl mb-4 text-text">Delicious Recipe {i}</h3>
                <p className="text-text/80 text-base mb-6">
                  A brief description of this amazing recipe that will make your mouth water.
                </p>
                <Link
                  href={`/recipes/${i}`}
                  className="text-primary hover:text-primary/80 font-medium flex items-center text-lg"
                >
                  View Recipe <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

