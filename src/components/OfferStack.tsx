import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Book, Gift, Shield, CreditCard } from "lucide-react";

const offerItems = [
  {
    icon: Book,
    title: "1x Printed Copy of The Natural Healing Handbook",
    description: "Complete guide to natural healing",
  },
  {
    icon: Gift,
    title: "The Backyard Medicine Garden",
    description: "Value: $25 - FREE Digital Bonus",
  },
  {
    icon: Gift,
    title: "Herbal SOS Quick Reference",
    description: "Value: $20 - FREE Digital Bonus",
  },
  {
    icon: Shield,
    title: "60-Day Money-Back Guarantee",
    description: "Risk-free purchase",
  },
  {
    icon: CreditCard,
    title: "Safe, encrypted checkout",
    description: "Secure payment processing",
  },
];

export function OfferStack() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-healing-light to-natural-sage/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-4">
            Here's What's Inside Your Package
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-healing-accent/20 shadow-warm mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                {offerItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-natural rounded-full">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-healing-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-healing-dark/70">{item.description}</p>
                    </div>
                    <Check className="w-5 h-5 text-natural-green mt-1" />
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-healing-accent/20">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-healing-dark">$37</span>
                    <span className="text-lg text-healing-dark/60 line-through ml-2">$149</span>
                    <span className="text-sm text-healing-dark/80 ml-2">+ $9.99 shipping</span>
                  </div>
                  <Button variant="cta" size="lg" className="text-lg px-8 py-3">
                    SEND ME MY COPY NOW!
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}