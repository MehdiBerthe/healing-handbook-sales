import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Hero() {
  return <section className="relative bg-gradient-to-br from-healing-green/5 to-natural-gold/5 pt-0 pb-16 lg:pt-0 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img 
            src="/lovable-uploads/e6ef64e0-c778-4c02-9ebc-7544a2360042.png" 
            alt="Ancient Medicine Logo" 
            className="h-16 w-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="bg-blue-50 p-8 lg:p-12 rounded-lg">
            {/* Main Headline */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-green-600">I Tried Natural Remedies for 30 Days</span>
              <span className="text-earth-brown"> — Here's What Actually Helped</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              "Forget overpriced pills and confusing advice. This $34.99 Natural Medicine Book is helping thousands regain control, naturally."
            </p>
            
            {/* Author Info */}
            <div className="space-y-2">
              <p className="text-base font-semibold text-earth-brown">
                By Emma Lang | Health Contributor
              </p>
              <p className="text-muted-foreground">
                Last updated: July 2025
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link to="/">
            
          </Link>
          
        </div>
      </div>
    </section>;
}