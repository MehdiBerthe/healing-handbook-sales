import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock } from "lucide-react";
import heroImage from "@/assets/healing-handbook-hero.jpg";
export function HeroSection() {
  return <section className="bg-cream py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-6 bg-forest-green/10 text-forest-green border-forest-green/20">
            <Users className="w-4 h-4 mr-1" />
            Trusted by 50,000+ Herbal Wellness Readers
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
          <div className="flex justify-center relative order-2 lg:order-1">
            <div className="relative max-w-md w-full">
              <div className="absolute -top-4 -left-4 bg-forest-green text-white px-4 py-2 rounded-lg font-bold text-sm z-10">
                BESTSELLER
              </div>
              <img 
                src="/lovable-uploads/af667fb9-5b4b-45d0-9a36-e91a59c8edbe.png" 
                alt="The Natural Medicine Book" 
                className="w-full h-auto rounded-lg shadow-natural"
              />
              
              {/* Zoom-in callouts */}
              <div className="hidden lg:block absolute -right-8 top-1/4 bg-white p-3 rounded-lg shadow-lg border-2 border-forest-green/20 max-w-[200px] z-20">
                <div className="text-xs font-semibold text-forest-green mb-1">Safety Guidelines</div>
                <div className="text-xs text-gray-600">Essential precautions and dosage information</div>
                <div className="absolute -left-2 top-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
              </div>
              
              <div className="hidden lg:block absolute -right-12 bottom-1/4 bg-white p-3 rounded-lg shadow-lg border-2 border-forest-green/20 max-w-[200px] z-20">
                <div className="text-xs font-semibold text-forest-green mb-1">Side Effects & Interactions</div>
                <div className="text-xs text-gray-600">What to watch for and avoid</div>
                <div className="absolute -left-2 top-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green mb-6 leading-tight font-merriweather">
              Get Ready to Unlock the{" "}
              <span className="text-natural-green">Healing Power</span>{" "}
              of Nature
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Discover Simple Herbal Remedies That Help Relieve Pain, Boost Immunity, and Balance Your Body—Without Harsh Chemicals.
            </p>

            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700">Natural relief for inflammation, digestion, immunity & more</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700">120+ pages of expert herbal remedies</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700">Made with common ingredients in your kitchen or garden</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-forest-green mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700">Based on science and traditional wisdom</span>
              </div>
            </div>

            <div className="bg-forest-green/10 p-4 rounded-lg mb-6 border border-forest-green/20">
              <p className="text-forest-green font-bold text-lg mb-2">
                LIMITED TIME: Get the Full Book for Just $37 (Reg. $149) + 2 FREE BONUSES
              </p>
            </div>

            <Button variant="forest" size="lg" className="text-xl px-12 py-6 animate-pulse">
              YES, I WANT MY BOOK NOW!
            </Button>
          </div>
        </div>
      </div>
    </section>;
}