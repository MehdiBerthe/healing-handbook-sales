import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Shield } from "lucide-react";
export function FinalCTA() {
  return <section className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-natural text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          You Deserve to Feel Better
        </h2>

        <Card className="bg-white/10 border-white/20 text-white mb-6 md:mb-8">
          <CardContent className="p-4 md:p-6 lg:p-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6">
              The Natural Healing Handbook helps you understand what your body is saying — 
              then gives you safe, effective remedies to restore balance. You'll be amazed 
              what your body can do when it's supported.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 text-center mb-6 md:mb-8">
              <div className="flex flex-col items-center">
                <Heart className="w-6 h-6 md:w-8 md:h-8 mb-2 text-natural-gold" />
                <h3 className="font-bold mb-1 text-sm md:text-base">Feel Better</h3>
                <p className="text-xs md:text-sm opacity-90">Natural energy and vitality</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 md:w-8 md:h-8 mb-2 text-natural-gold" />
                <h3 className="font-bold mb-1 text-sm md:text-base">Save Time</h3>
                <p className="text-xs md:text-sm opacity-90">Quick, effective solutions</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 mb-2 text-natural-gold" />
                <h3 className="font-bold mb-1 text-sm md:text-base">Stay Safe</h3>
                <p className="text-xs md:text-sm opacity-90">No harmful side effects</p>
              </div>
            </div>

            <a href="https://b4sn2.ttrk.io/click">
              <Button variant="ctaSecondary" size="lg" className="text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 w-full sm:w-auto">
                <span className="sm:hidden">GET MY BOOK NOW!</span>
                <span className="hidden sm:inline">YES, I WANT MY BOOK NOW!</span>
              </Button>
            </a>

            <div className="mt-4 md:mt-6 text-xs md:text-sm opacity-90">
              <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-1 sm:gap-2">
                
                <span className="hidden sm:inline">•</span>
                <span>💰 60-day guarantee</span>
                <span className="hidden sm:inline">•</span>
                <span>🎁 2 bonus gifts included</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white/5 rounded-lg p-3 md:p-4 lg:p-6 text-center">
          <p className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">
            ⏰ Limited Time: Get all 3 items for just $19
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Regular price $149 • Save over 85% today only
          </p>
        </div>
      </div>
    </section>;
}