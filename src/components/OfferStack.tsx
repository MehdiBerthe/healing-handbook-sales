import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Book, Gift, Shield, CreditCard } from "lucide-react";
import { SecurityBadges } from "@/components/SecurityBadges";
const offerItems = [{
  icon: Book,
  title: "1x Copy of the Natural Medicine Book",
  description: "Complete guide to natural healing"
}, {
  icon: Gift,
  title: "The Mini Garden Guide",
  description: "Value: $25 - FREE Digital Bonus"
}, {
  icon: Gift,
  title: "Herbal SOS Quick Reference",
  description: "Value: $20 - FREE Digital Bonus"
}, {
  icon: Shield,
  title: "60-Day Money-Back Guarantee",
  description: "Risk-free purchase"
}, {
  icon: CreditCard,
  title: "Safe, encrypted checkout",
  description: "Secure payment processing"
}];
export function OfferStack() {
  return <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border-2 border-forest-green shadow-lg overflow-hidden">
            {/* Green Header */}
            <div className="bg-forest-green text-white text-center py-4">
              <h2 className="text-xl md:text-2xl font-bold">LIMITED TIME OFFER</h2>
            </div>
            
            <CardContent className="p-6 md:p-8">
              {/* Product Image */}
              <div className="flex justify-center mb-6">
                <img src="/lovable-uploads/81ffda72-e71d-4a49-a36a-d27ff562e17a.png" alt="Natural Medicine Book Package with Digital Bonuses" className="w-full max-w-lg h-auto" />
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Natural Medicine Book
                </h3>
                <p className="text-gray-600 text-lg">The Complete Guide to Safe, Natural Health —Backed by Tradition and Science</p>
              </div>

              {/* Your Order Includes */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 text-center mb-6">Your Order Includes:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-forest-green mt-1 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">1 Copy of the Natural Medecine Book</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-forest-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-medium">Instant access to 2 FREE digital bonuses:</span>
                      <ul className="ml-6 mt-2 space-y-1">
                        <li className="text-gray-700">• The Backyard Medicine Garden (a $25 value)</li>
                        <li className="text-gray-700">• Herbal SOS (a $20 value)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-forest-green mt-1 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">60-Day 100% Money-Back Guarantee – no questions asked</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-forest-green mt-1 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">Safe & Secure Checkout – We accept Paypal, Visa, Mastercard, Amex & Discover</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">only $19</span>
                  <span className="text-lg text-gray-500 line-through ml-2">(Regular Price $149)</span>
                </div>
                
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <a href="https://b4sn2.ttrk.io/click">
                  <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">
                    SEND ME MY COPY NOW!
                  </Button>
                </a>
              </div>

              {/* Security Text */}
              <div className="text-center">
                <p className="text-gray-900 font-bold">Secure Payment</p>
                <SecurityBadges />
                {/* Payment Icons */}
                <div className="flex justify-center items-center gap-1 sm:gap-2 opacity-80 flex-wrap">
                  <div className="text-lg sm:text-xl font-bold text-blue-800">PayPal</div>
                  <div className="text-lg sm:text-xl font-bold text-blue-600">VISA</div>
                  <div className="flex">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full mr-1"></div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-blue-700 bg-blue-100 px-1 sm:px-2 py-1 rounded text-center">
                    AMERICAN<br />EXPRESS
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-orange-600 bg-gray-800 text-white px-1 sm:px-2 py-1 rounded">
                    DISCOVER
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}