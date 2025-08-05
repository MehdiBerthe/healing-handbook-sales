import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import gingerImage from "@/assets/ginger.jpg";

const ingredients = [
  {
    name: "Olive Oil",
    description: "Heart-friendly fat that may ease inflammation and help balance blood sugar.",
    emoji: "🫒",
  },
  {
    name: "Garlic",
    description: "May support blood pressure, cholesterol, and immunity.",
    emoji: "🧄",
  },
  {
    name: "Blueberries",
    description: "Antioxidant-rich, brain-loving, and gut-friendly.",
    emoji: "🫐",
  },
  {
    name: "Ginger",
    description: "Warms digestion, calms nausea, and eases inflammation.",
    emoji: "/lovable-uploads/2d877688-a234-46f9-8082-cad390309bc0.png",
  },
  {
    name: "Lemon",
    description: "Rich in vitamin C, may help detox and balance pH.",
    emoji: "🍋",
  },
  {
    name: "Dark Chocolate",
    description: "Flavonoid-rich treat that supports heart and mood.",
    emoji: "🍫",
  },
];

export function IngredientBenefits() {
  return (
    <section className="py-12 md:py-16 bg-healing-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-4">
            Everyday Ingredients. Extraordinary Results.
          </h2>
          <p className="text-base md:text-lg text-healing-dark/80 max-w-3xl mx-auto">
            This handbook reveals 200+ healing uses for everyday ingredients. Here are just a few all-stars you'll learn about:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          {ingredients.map((ingredient, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-healing-accent/20 hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center">
                    {ingredient.emoji.startsWith('/') ? (
                      <img src={ingredient.emoji} alt={ingredient.name} className="w-8 h-8" />
                    ) : (
                      <span className="text-2xl">{ingredient.emoji}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-healing-dark mb-2">{ingredient.name}</h3>
                    <p className="text-sm text-healing-dark/70">{ingredient.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="https://www.securepay.zone/natural-medicine">
            <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">
              REVEAL MY OFFER
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}