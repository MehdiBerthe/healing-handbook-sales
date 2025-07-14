import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CreditCard } from "lucide-react";
import { SecurityBadges } from "@/components/SecurityBadges";

const trustBadges = [
  {
    icon: Shield,
    title: "60-Day Guarantee",
    description: "Risk-free purchase",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "SSL encrypted",
  },
];

export function FinalCTASection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-natural-sage to-healing-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-4">
            Take Back Control of Your Health — Naturally
          </h2>
          <p className="text-lg md:text-xl text-healing-dark/80 max-w-3xl mx-auto mb-8">
            Join thousands of readers who are using nature's remedies to feel better, think clearer, and live with more energy.
          </p>
          
          <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto animate-pulse mb-8 max-w-md mx-auto">
            GET THE NATURAL HEALING HANDBOOK NOW
          </Button>
          
          <SecurityBadges />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {trustBadges.map((badge, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-healing-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-natural rounded-full mb-4">
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-healing-dark mb-2">{badge.title}</h3>
                  <p className="text-sm text-healing-dark/70">{badge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs text-healing-dark/60 max-w-2xl mx-auto">
              This information is for educational purposes only and is not intended to diagnose or treat medical conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}