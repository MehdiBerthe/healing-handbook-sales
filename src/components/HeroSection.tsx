import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock } from "lucide-react";
import heroImage from "@/assets/healing-handbook-hero.jpg";
export function HeroSection() {
  return <section className="bg-gradient-subtle py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          
          <Badge variant="secondary" className="mb-6">
            <Users className="w-4 h-4 mr-1" />
            Trusted by 50,000+ Happy Customers
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get Ready to Experience the{" "}
              <span className="text-natural-green">Transformative Power</span>{" "}
              of Synergies
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how combining everyday herbs can yield potent healing effects 
              that outperform conventional pills—without the side effects!
            </p>

            <div className="space-y-3 mb-10 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-natural-green mt-0.5 flex-shrink-0" />
                <span className="text-lg">Natural Relief for everything from Arthritis to High Blood Pressure</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-natural-green mt-0.5 flex-shrink-0" />
                <span className="text-lg">120+ Pages of Herbal Magic with Easy-to-Follow Recipes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-natural-green mt-0.5 flex-shrink-0" />
                <span className="text-lg">Everyday Ingredients from Your Kitchen or Garden</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-natural-green mt-0.5 flex-shrink-0" />
                <span className="text-lg">Scientifically Backed Recipes</span>
              </div>
            </div>

            <Button variant="cta" size="lg" className="text-xl px-12 py-6 animate-bounce">
              YES, I WANT MY BOOK NOW!
            </Button>
          </div>

          <div className="flex justify-center">
            
          </div>
        </div>
      </div>
    </section>;
}