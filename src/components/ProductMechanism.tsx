import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Target } from "lucide-react";

export function ProductMechanism() {
  return (
    <section className="py-8 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
          Nature has an answer – the magic of{" "}
          <span className="text-natural-green">herbal synergies</span>
        </h2>

        <div className="bg-gradient-natural rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-12 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Real Example: The Turmeric Transformation</h3>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Turmeric alone has poor absorption and limited effects. But when combined 
            with just a pinch of black pepper...
          </p>
          
          <div className="bg-white/20 rounded-lg p-4 md:p-6 inline-block max-w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl font-bold">
              <span>Turmeric</span>
              <span>+</span>
              <span className="text-center">Black Pepper</span>
              <span>=</span>
              <span className="text-white font-extrabold text-center">2000% Increase</span>
            </div>
            <p className="text-xs md:text-sm mt-2 opacity-90">in bioavailability and absorption</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="text-center border-natural-green-light">
            <CardContent className="p-8">
              <div className="bg-natural-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-natural-green" />
              </div>
              <h3 className="font-bold text-xl mb-3">2x More Effective</h3>
              <p className="text-muted-foreground">
                Strategic combinations double the healing power
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-natural-gold-light">
            <CardContent className="p-8">
              <div className="bg-natural-gold-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-natural-gold" />
              </div>
              <h3 className="font-bold text-xl mb-3">5x Faster Results</h3>
              <p className="text-muted-foreground">
                See improvements in days, not months
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary">
            <CardContent className="p-8">
              <div className="bg-natural-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">20x More Targeted</h3>
              <p className="text-muted-foreground">
                Precision healing for specific conditions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-natural-cream rounded-2xl p-8">
          <p className="text-xl font-semibold text-foreground mb-4">
            "Synergies can make herbs 2x, 5x, or even 20x more effective."
          </p>
          <p className="text-muted-foreground">
            This is the science behind every recipe in The Natural Healing Handbook
          </p>
        </div>
      </div>
    </section>
  );
}