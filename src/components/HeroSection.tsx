import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock } from "lucide-react";
import heroImage from "@/assets/healing-handbook-hero.jpg";
import { SecurityBadges } from "@/components/SecurityBadges";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export function HeroSection() {
  return <section className="bg-cream py-4 md:py-8 lg:py-12 px-2">
      <div className="mx-auto max-w-6xl">
        {/* Mobile-only layout: Carousel first, then trust badge */}
        <div className="lg:hidden">
          {/* Carousel at the very top for mobile */}
          <div className="flex justify-center mb-3">
            <div className="relative max-w-md md:max-w-lg w-full">
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-forest-green text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm z-20">
                BESTSELLER
              </div>
              <Carousel className="w-full">
                <CarouselContent>
                   <CarouselItem>
                     <img alt="The Natural Medicine Book" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/609c2e5e-3e22-4cc5-bc1c-6e601c8c9cba.png" loading="lazy" fetchPriority="high" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="Natural Medicine Book with Content" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/bcd0e1b1-9d0a-46c5-a5b6-90165bccaff4.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="Complete Natural Medicine Bundle" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/2a0a2b4d-0ce1-495d-84ed-60f59190f828.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="What Others Are Saying" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/f5a108b9-5d6f-4d91-a186-486c84d9ff8c.png" loading="lazy" />
                   </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 data-[disabled]:hidden" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 data-[disabled]:hidden" />
              </Carousel>
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
          {/* Carousel column - left on desktop, hidden on mobile (shown above) */}
          <div className="hidden lg:flex justify-center relative">
            <div className="relative max-w-md md:max-w-lg w-full">
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-forest-green text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm z-20">
                BESTSELLER
              </div>
              <Carousel className="w-full">
                <CarouselContent>
                   <CarouselItem>
                     <img alt="The Natural Medicine Book" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/609c2e5e-3e22-4cc5-bc1c-6e601c8c9cba.png" loading="lazy" fetchPriority="high" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="Natural Medicine Book with Content" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/bcd0e1b1-9d0a-46c5-a5b6-90165bccaff4.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="Complete Natural Medicine Bundle" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/2a0a2b4d-0ce1-495d-84ed-60f59190f828.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="What Others Are Saying" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/f5a108b9-5d6f-4d91-a186-486c84d9ff8c.png" loading="lazy" />
                   </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 data-[disabled]:hidden" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 data-[disabled]:hidden" />
              </Carousel>
            </div>
          </div>

          {/* Text content column - right on desktop, full width on mobile */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-forest-green mb-4 md:mb-6 leading-tight font-heading mt-0 pt-0">
              Get Ready to Experience the{" "}
              <span className="text-natural-green">Healing Power</span>{" "}
              of Nature
            </h1>
            
            <a href="https://b4sn2.ttrk.io/click">
              <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto mb-6 md:mb-8">
                YES, I WANT MY BOOK NOW!
              </Button>
            </a>
            
            <p className="text-base md:text-lg xl:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Discover Simple Herbal Remedies That Help Relieve Pain, Boost Immunity, and Balance Your Body—Without Harsh Chemicals Side Effects.
            </p>

            <div className="space-y-3 mb-6 md:mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700"><strong>Natural Relief</strong> for Arthritis, High Blood Pressure, inflammation, & more</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700"><strong>120+ Pages</strong> of Expert Herbal Remedies with Easy to Follow Recipes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700"><strong>Everyday Ingredients</strong> you can find in your kitchen or garden</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg text-gray-700"><strong>Scientifically Backed</strong> Recipes</span>
              </div>
            </div>

            
            <SecurityBadges />
          </div>
        </div>
      </div>
    </section>;
}