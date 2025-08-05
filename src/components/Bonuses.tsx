import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Sprout, Shield } from "lucide-react";
import { Link } from "react-router-dom";
export default function Bonuses() {
  return <section className="py-16 bg-healing-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-earth-brown mb-4">
            But That's Not All — You'll Also Get 2 FREE Bonus Guides:
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bonus 1 */}
          <Card className="p-8 bg-white border-healing-light shadow-natural hover:shadow-warm transition-all duration-300">
            <div className="space-y-6">
              {/* Mini Garden Guide Image */}
              
              
              <div className="text-center space-y-4">
                
                <h3 className="text-2xl font-bold text-earth-brown">
                  The Mini Garden Guide
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Learn how to grow and harvest your own powerful herbs, even with no garden experience. From containers on a balcony to full garden beds, this guide makes it easy to harvest what you need for sleep, immunity, digestion, and more.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Bonus 2 */}
          <Card className="p-8 bg-white border-healing-light shadow-natural hover:shadow-warm transition-all duration-300">
            <div className="space-y-6">
              {/* Herbal Emergency Kit Image */}
              
              
              <div className="text-center space-y-4">
                
                <h3 className="text-2xl font-bold text-earth-brown">
                  The Herbal Emergency Kit
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A practical, go-to guide for handling everyday health concerns naturally and confidently. The Herbal Emergency Kit walks you through how to make a natural first aid kit with remedies for pain, burns, infections, inflammation, and more — using tools you can keep at home, ready for anything.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Value Proposition */}
        <div className="text-center space-y-6">
          <p className="text-xl text-muted-foreground">
            <strong className="text-earth-brown">That's a total value of $149 —
yours today for just $34.99.</strong>
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">
                YES, GET 80% OFF
              </Button>
            </Link>
            <p className="text-lg text-muted-foreground">
              <span className="text-healing-green font-medium">✓</span> Order now for guaranteed discounts and free gifts
            </p>
          </div>
        </div>
      </div>
    </section>;
}