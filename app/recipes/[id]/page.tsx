import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RecipePage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the recipe data based on the id
  const recipe = {
    id: params.id,
    title: `Delicious Recipe ${params.id}`,
    description: "A mouth-watering dish that combines flavors from around the world.",
    ingredients: ["2 cups of flour", "1 cup of sugar", "3 eggs", "1 tsp vanilla extract", "1/2 cup milk"],
    instructions: [
      "Preheat the oven to 350°F (175°C).",
      "Mix dry ingredients in a large bowl.",
      "In a separate bowl, whisk together wet ingredients.",
      "Combine wet and dry ingredients, stirring until just mixed.",
      "Pour batter into a greased baking pan.",
      "Bake for 30-35 minutes or until a toothpick comes out clean.",
    ],
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/recipes" className="text-primary hover:text-primary/80 font-medium flex items-center mb-6">
        <ArrowLeft className="mr-2 w-5 h-5" /> Back to Recipes
      </Link>
      <h1 className="text-4xl font-bold text-text mb-6 font-serif">{recipe.title}</h1>
      <p className="text-lg text-text/80 mb-8">{recipe.description}</p>

      <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-text mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-text/80">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-text mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="text-text/80">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

