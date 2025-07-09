import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-natural text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          You Deserve to Feel Better
        </h2>

        <Card className="bg-white/10 border-white/20 text-white mb-6 md:mb-8">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
              The Natural Healing Handbook helps you understand what your body is saying — 
              then gives you safe, effective remedies to restore balance. You'll be amazed 
              what your body can do when it's supported.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center mb-6 md:mb-8">
              <div className="flex flex-col items-center">
                <Heart className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 text-natural-gold" />
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Feel Better</h3>
                <p className="text-xs md:text-sm opacity-90">Natural energy and vitality</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 text-natural-gold" />
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Save Time</h3>
                <p className="text-xs md:text-sm opacity-90">Quick, effective solutions</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 text-natural-gold" />
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Stay Safe</h3>
                <p className="text-xs md:text-sm opacity-90">No harmful side effects</p>
              </div>
            </div>

            <Button 
              variant="ctaSecondary" 
              size="lg" 
              className="text-lg md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 w-full sm:w-auto animate-pulse shadow-2xl"
            >
              YES, I WANT MY BOOK NOW!
            </Button>

            <div className="mt-4 md:mt-6 text-xs md:text-sm opacity-90">
              <p>🚚 Free shipping • 💰 60-day guarantee • 🎁 2 bonus gifts included</p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white/5 rounded-lg p-4 md:p-6 text-center">
          <p className="text-base md:text-lg font-semibold mb-2">
            ⏰ Limited Time: Get all 3 items for just $37
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Regular price $149 • Save over 75% today only
          </p>
        </div>
      </div>
    </section>
  );
}