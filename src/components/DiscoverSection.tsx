import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Clock, Shield, Heart } from "lucide-react";
import openBookImage from "@/assets/open-book-pages.jpg";

export function DiscoverSection() {
  const discoveries = [
    {
      icon: Leaf,
      title: "Healing Herbs & Synergies",
      description: "Learn which herbs work better together"
    },
    {
      icon: Target,
      title: "Targeted Recipes for Common Ailments",
      description: "Specific solutions for your health concerns"
    },
    {
      icon: Clock,
      title: "Everyday Healing Rituals",
      description: "Simple daily practices for optimal health"
    },
    {
      icon: Shield,
      title: "Trusted Supplement Guide",
      description: "Know what works and what doesn't"
    },
    {
      icon: Heart,
      title: "Real-Life Transformations",
      description: "Stories from people just like you"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          What You'll Discover Inside This Book
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            {discoveries.map((item, index) => (
              <Card key={index} className="border-natural-green-light hover:shadow-natural transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-natural-green-light rounded-lg p-2 md:p-3">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-natural-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center order-first lg:order-last">
            <img 
              src={openBookImage} 
              alt="Open book showing labeled pages"
              className="rounded-2xl shadow-natural max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}