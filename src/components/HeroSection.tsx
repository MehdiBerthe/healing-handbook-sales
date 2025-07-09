import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock } from "lucide-react";
import heroImage from "@/assets/healing-handbook-hero.jpg";
import { SecurityBadges } from "@/components/SecurityBadges";
export function HeroSection() {
  return <section className="bg-cream py-4 md:py-8 lg:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile-only layout: Image first, then trust badge */}
        <div className="lg:hidden">
          {/* Image at the very top for mobile */}
          <div className="flex justify-center mb-6">
            <div className="relative max-w-sm md:max-w-md w-full">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-forest-green text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm z-10">
                BESTSELLER
              </div>
              <img 
                src="/lovable-uploads/cabb9830-4a67-4b5f-ad06-9660df6b832e.png" 
                alt="The Natural Medicine Book" 
                className="w-full h-auto rounded-lg shadow-natural"
              />
            </div>
          </div>

          {/* Trust badge for mobile */}
          <div className="text-center mb-6">
            <Badge variant="secondary" className="bg-forest-green/10 text-forest-green border-forest-green/20 text-sm">
              <Users className="w-4 h-4 mr-1" />
              Trusted by 50,000+ Herbal Wellness Readers
            </Badge>
          </div>
        </div>

        {/* Desktop layout: Trust badge at top */}
        <div className="hidden lg:block text-center mb-4 lg:mb-6">
          <Badge variant="secondary" className="bg-forest-green/10 text-forest-green border-forest-green/20 text-sm">
            <Users className="w-4 h-4 mr-1" />
            Trusted by 50,000+ Herbal Wellness Readers
          </Badge>
        </div>

        {/* Two-column layout for desktop, single column for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[400px]">
          {/* Image column - left on desktop, hidden on mobile (shown above) */}
          <div className="hidden lg:flex justify-center relative">
            <div className="relative max-w-sm md:max-w-md w-full">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-forest-green text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm z-10">
                BESTSELLER
              </div>
              <img 
                src="/lovable-uploads/cabb9830-4a67-4b5f-ad06-9660df6b832e.png" 
                alt="The Natural Medicine Book" 
                className="w-full h-auto rounded-lg shadow-natural"
              />
              
              {/* Zoom-in callouts - Show on desktop only */}
              <div className="absolute -right-8 top-1/4 bg-white p-3 rounded-lg shadow-lg border-2 border-forest-green/20 max-w-[200px] z-20">
                <div className="text-xs font-semibold text-forest-green mb-1">Safety Guidelines</div>
                <div className="text-xs text-gray-600">Essential precautions and dosage information</div>
                <div className="absolute -left-2 top-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
              </div>
              
              <div className="absolute -right-12 bottom-1/4 bg-white p-3 rounded-lg shadow-lg border-2 border-forest-green/20 max-w-[200px] z-20">
                <div className="text-xs font-semibold text-forest-green mb-1">Side Effects & Interactions</div>
                <div className="text-xs text-gray-600">What to watch for and avoid</div>
                <div className="absolute -left-2 top-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
              </div>
            </div>
          </div>

          {/* Text content column - right on desktop, full width on mobile */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-forest-green mb-4 md:mb-6 leading-tight font-merriweather">
              Get Ready to Unlock the{" "}
              <span className="text-natural-green">Healing Power</span>{" "}
              of Nature
            </h1>
            
            <p className="text-base md:text-lg xl:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Discover Simple Herbal Remedies That Help Relieve Pain, Boost Immunity, and Balance Your Body—Without Harsh Chemicals.
            </p>

            <div className="space-y-3 mb-6 md:mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700">Natural relief for inflammation, digestion, immunity & more</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700">120+ pages of expert herbal remedies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700">Made with common ingredients in your kitchen or garden</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700">Based on science and traditional wisdom</span>
              </div>
            </div>

            <div className="bg-forest-green/10 p-3 md:p-4 rounded-lg mb-4 md:mb-6 border border-forest-green/20">
              <p className="text-forest-green font-bold text-sm md:text-base lg:text-lg">
                LIMITED TIME: Get the Full Book for Just $37 (Reg. $149) + 2 FREE BONUSES
              </p>
            </div>

            <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto animate-pulse">
              YES, I WANT MY BOOK NOW!
            </Button>
            
            <SecurityBadges />
          </div>
        </div>
      </div>
    </section>;
}