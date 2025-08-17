import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock } from "lucide-react";
import heroImage from "@/assets/healing-handbook-hero.jpg";
import { SecurityBadges } from "@/components/SecurityBadges";
export function HeroSection() {
  return <section className="bg-cream py-4 md:py-8 lg:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Logo at the top */}
        <div className="text-center mb-6 md:mb-8">
          <img 
            src="/lovable-uploads/41c7e51c-9154-436f-bec6-3635e2f510f9.png" 
            alt="Ancient Medicine Logo" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto"
          />
        </div>
        {/* Mobile-only layout: Image first, then trust badge */}
        <div className="lg:hidden">
          {/* Image at the very top for mobile */}
          <div className="flex justify-center mb-3">
            <div className="relative max-w-sm md:max-w-md w-full">
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-forest-green text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm z-10">
                BESTSELLER
              </div>
              <img alt="The Natural Medicine Book" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/3342df2a-1681-463a-b52a-f852e4f439da.png" />
            </div>
          </div>

          {/* Trust badge for mobile */}
          <div className="text-center mb-3">
            <Badge variant="secondary" className="bg-forest-green/10 text-forest-green border-forest-green/20 text-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-forest-green text-forest-green" />)}
              </div>
              Trusted by 50,000+ Customers
            </Badge>
          </div>
        </div>

        {/* Desktop layout: Trust badge at top */}
        <div className="hidden lg:block text-center mb-4 lg:mb-6">
          <Badge variant="secondary" className="bg-forest-green/10 text-forest-green border-forest-green/20 text-sm">
            <div className="flex items-center gap-1 mr-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-forest-green text-forest-green" />)}
            </div>
            Trusted by 50,000+ Happy Customers
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
              <img src="/lovable-uploads/3342df2a-1681-463a-b52a-f852e4f439da.png" alt="The Natural Medicine Book" className="w-full h-auto rounded-lg shadow-natural" />
            </div>
          </div>

          {/* Text content column - right on desktop, full width on mobile */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-forest-green mb-4 md:mb-6 leading-tight font-heading mt-0 pt-0">
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

            

            <a href="https://b4sn2.ttrk.io/click">
              <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">
                YES, I WANT MY BOOK NOW!
              </Button>
            </a>
            
            <SecurityBadges />
          </div>
        </div>
      </div>
    </section>;
}