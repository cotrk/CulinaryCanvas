import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Recipes() {
  const recipes = [
    { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish." },
    { id: 2, title: "Chicken Tikka Masala", description: "A flavorful Indian curry." },
    { id: 3, title: "Beef Bourguignon", description: "A hearty French stew." },
    { id: 4, title: "Sushi Rolls", description: "Japanese delicacy with fresh fish." },
    { id: 5, title: "Greek Salad", description: "A refreshing Mediterranean salad." },
    { id: 6, title: "Apple Pie", description: "A classic American dessert." },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-text mb-8 font-serif">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-secondary"></div>
            <div className="p-6">
              <h2 className="font-semibold text-xl mb-4 text-text">{recipe.title}</h2>
              <p className="text-text/80 mb-6">{recipe.description}</p>
              <Link
                href={`/recipes/${recipe.id}`}
                className="text-primary hover:text-primary/80 font-medium flex items-center"
              >
                View Recipe <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

