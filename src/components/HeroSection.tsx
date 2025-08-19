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
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                   <CarouselItem>
                     <img alt="The Natural Medicine Book with Content Pages" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/eb48a3b1-af98-43f1-bce5-850f741ad199.png" loading="lazy" fetchPriority="high" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="Why You Need This Book - 6 Key Benefits" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/d5332c9b-a80f-4c89-b748-2a16471fe0dc.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="A Recipe for Any Ailment - Health Categories" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/610d95b8-1663-4d5a-baaf-3a6af39e11b9.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="What Others Are Saying - Customer Testimonials" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/dc361f58-e6f2-470e-ad04-acddc0156ea7.png" loading="lazy" />
                   </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8" />
              </Carousel>
            </div>
          </div>

          {/* Trust badge and price for mobile */}
          <div className="text-center mb-3 flex items-center justify-between gap-4 px-4">
            <Badge variant="secondary" className="bg-red-500 text-white border-0 text-sm font-bold px-3 py-1">
              <span className="text-lg">$19</span> <span className="line-through text-red-200 ml-1 font-normal text-xs">$149</span>
            </Badge>
            <Badge variant="secondary" className="bg-forest-green/10 text-forest-green border-forest-green/20 text-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-forest-green text-forest-green" />)}
              </div>
              Trusted by 50,000+ Customers
            </Badge>
          </div>
        </div>

        {/* Desktop layout: Trust badge and price at top */}
        <div className="hidden lg:block text-center mb-4 lg:mb-6">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-red-500 text-white border-0 text-lg font-bold px-4 py-2">
              <span className="text-xl">$19</span> <span className="line-through text-red-200 ml-2 font-normal text-sm">$149</span>
            </Badge>
            <Badge variant="secondary" className="bg-forest-green/10 text-forest-green border-forest-green/20 text-sm">
              <div className="flex items-center gap-1 mr-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-forest-green text-forest-green" />)}
              </div>
              Trusted by 50,000+ Happy Customers
            </Badge>
          </div>
        </div>

        {/* Two-column layout for desktop, single column for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[400px]">
          {/* Carousel column - left on desktop, hidden on mobile (shown above) */}
          <div className="hidden lg:flex justify-center relative">
            <div className="relative max-w-md md:max-w-lg w-full">
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-forest-green text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm z-20">
                BESTSELLER
              </div>
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                   <CarouselItem>
                     <img alt="The Natural Medicine Book with Content Pages" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/eb48a3b1-af98-43f1-bce5-850f741ad199.png" loading="lazy" fetchPriority="high" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="Why You Need This Book - 6 Key Benefits" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/d5332c9b-a80f-4c89-b748-2a16471fe0dc.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="A Recipe for Any Ailment - Health Categories" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/610d95b8-1663-4d5a-baaf-3a6af39e11b9.png" loading="lazy" />
                   </CarouselItem>
                   <CarouselItem>
                     <img alt="What Others Are Saying - Customer Testimonials" className="w-full h-auto rounded-lg shadow-natural" src="/lovable-uploads/dc361f58-e6f2-470e-ad04-acddc0156ea7.png" loading="lazy" />
                   </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8" />
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