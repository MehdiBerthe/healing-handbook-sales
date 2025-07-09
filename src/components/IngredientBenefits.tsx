import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Brain, Zap, Droplets, Smile } from "lucide-react";

const ingredients = [
  {
    name: "Olive Oil",
    description: "Heart-friendly fat that may ease inflammation and help balance blood sugar.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop&crop=center",
  },
  {
    name: "Garlic",
    description: "May support blood pressure, cholesterol, and immunity.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1553978297-667455608829?w=200&h=200&fit=crop&crop=center",
  },
  {
    name: "Blueberries",
    description: "Antioxidant-rich, brain-loving, and gut-friendly.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=200&h=200&fit=crop&crop=center",
  },
  {
    name: "Ginger",
    description: "Warms digestion, calms nausea, and eases inflammation.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1577894947621-3e10e41e76a7?w=200&h=200&fit=crop&crop=center",
  },
  {
    name: "Lemon",
    description: "Rich in vitamin C, may help detox and balance pH.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=200&h=200&fit=crop&crop=center",
  },
  {
    name: "Dark Chocolate",
    description: "Flavonoid-rich treat that supports heart and mood.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=200&h=200&fit=crop&crop=center",
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
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-healing-accent/20 hover:shadow-warm transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-gradient-natural rounded-full">
                    <ingredient.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-healing-dark mb-2">{ingredient.name}</h3>
                  <p className="text-sm text-healing-dark/70">{ingredient.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-3">
            REVEAL MY OFFER
          </Button>
        </div>
      </div>
    </section>
  );
}