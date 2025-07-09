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
  return <section className="py-12 md:py-16 bg-gradient-to-br from-healing-light to-natural-sage/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-4">
            Here's What's Inside Your Package
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-healing-accent/20 shadow-warm mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:gap-8 mb-8">
                <div className="flex justify-center">
                  <img src="/lovable-uploads/60c1ff0d-c7ef-43ee-87d4-0c434207d65b.png" alt="Natural Medicine Book Package with Digital Bonuses" className="w-full max-w-md h-64 md:h-80 object-cover rounded-lg shadow-md" />
                </div>
                <div className="space-y-6">
                  {offerItems.map((item, index) => <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-natural rounded-full">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-healing-dark mb-1">{item.title}</h3>
                        <p className="text-sm text-healing-dark/70">{item.description}</p>
                      </div>
                      <Check className="w-5 h-5 text-natural-green mt-1" />
                    </div>)}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-healing-accent/20">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-healing-dark">$37</span>
                    <span className="text-lg text-healing-dark/60 line-through ml-2">$149</span>
                    
                  </div>
                  <Button variant="cta" size="lg" className="text-lg px-8 py-3">
                    SEND ME MY COPY NOW!
                  </Button>
                  
                  <SecurityBadges />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}