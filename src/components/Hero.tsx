import { Button } from "@/components/ui/button";
export default function Hero() {
  return <section className="relative bg-gradient-to-br from-healing-green/5 to-natural-gold/5 py-16 lg:py-24 mt-4">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-healing-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌿</span>
            </div>
            <span className="text-2xl font-bold text-healing-green">Natural Healing Hub</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="text-healing-green">I Tried Natural Remedies for 30 Days</span>
            <span className="text-earth-brown"> — Here's What Actually Helped</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Forget overpriced pills and confusing advice. This $37 Natural Medicine Book is helping thousands regain control, naturally."
          </p>
          
          {/* Author Info */}
          <div className="space-y-2">
            <p className="text-lg font-semibold text-earth-brown">
              By Emma Lang | Natural Health Researcher
            </p>
            <p className="text-muted-foreground">
              Last updated: July 2025
            </p>
          </div>
          
          {/* CTA Button */}
          
        </div>
      </div>
    </section>;
}