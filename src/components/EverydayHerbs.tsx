import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import herbsImage from "@/assets/herbs-ingredients.jpg";

export function EverydayHerbs() {
  const herbSecrets = [
    {
      title: "Garlic's 15-Minute Rule",
      description: "The critical timing that multiplies garlic's healing power"
    },
    {
      title: "Turmeric Trap",
      description: "Why most people get zero benefits from turmeric (and how to fix it)"
    },
    {
      title: "The Backyard Painkiller",
      description: "This common weed is stronger than aspirin"
    },
    {
      title: "Herbal Sleep Switch",
      description: "3 herbs that reset your natural sleep cycle in days"
    },
    {
      title: "Synergy Secret",
      description: "How combining 2 simple spices creates a inflammation fighter"
    },
    {
      title: "Spice Elixirs",
      description: "Kitchen cabinet combinations that boost immunity by 300%"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-3 md:mb-4">
          Discover the Hidden Powers of Everyday Herbs
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-8 md:mb-12">
          These aren't exotic ingredients—they're probably in your kitchen right now
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center lg:order-last">
            <img 
              src={herbsImage} 
              alt="Everyday herbs and ingredients with arrows"
              className="rounded-2xl shadow-warm max-w-full h-auto"
            />
          </div>

          <div className="space-y-3 md:space-y-4">
            {herbSecrets.map((secret, index) => (
              <Card key={index} className="border-natural-gold-light hover:border-natural-gold hover:shadow-warm transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-3">
                      <h3 className="font-bold text-base md:text-lg text-natural-green mb-1 md:mb-2 group-hover:text-natural-gold transition-colors">
                        {secret.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">{secret.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-natural-gold group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}