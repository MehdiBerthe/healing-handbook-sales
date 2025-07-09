import { Card, CardContent } from "@/components/ui/card";
import { BookMarked, Target, Clock, Shield } from "lucide-react";
export function Differentiators() {
  const features = [{
    icon: BookMarked,
    title: "Ultra-convenient",
    subtitle: "Organized by health concerns",
    description: "Find exactly what you need in seconds, not hours of searching"
  }, {
    icon: Target,
    title: "Precise & Effective",
    subtitle: "Ideal herbs, recipes, dosages",
    description: "No guesswork—exact measurements and timing for maximum results"
  }, {
    icon: Clock,
    title: "Save Time & Money",
    subtitle: "No need to buy tons of supplements",
    description: "Use what you have at home or buy affordable herbs from any store"
  }, {
    icon: Shield,
    title: "Safe & Natural",
    subtitle: "Science-backed, pure ingredients",
    description: "Every recipe researched and tested for safety and effectiveness"
  }];
  return <section className="py-16 px-2 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">What Makes The Natural Medicine Book Special?</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          It's not just another herb book—it's your complete healing system
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <Card key={index} className="text-center border-natural-green-light hover:border-natural-green hover:shadow-natural transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-natural-green-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-natural-green group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-natural-green group-hover:text-white" />
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm font-semibold text-natural-gold mb-3">
                  {feature.subtitle}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-natural max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Unlike other herb books that just list plants...
            </h3>
            <p className="text-lg text-muted-foreground">
              The Natural Healing Handbook gives you a complete system: 
              what to use, how to combine it, when to take it, and exactly how much.
            </p>
          </div>
        </div>
      </div>
    </section>;
}