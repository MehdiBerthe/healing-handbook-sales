import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-natural rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-6">
              Try It Risk-Free for 60 Days
            </h2>
          </div>

          <Card className="bg-healing-light/50 border-healing-accent/20 shadow-warm">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg md:text-xl text-healing-dark/80 leading-relaxed">
                We're confident you'll love this guide. But if you're not 100% happy, just let us know within 60 days and we'll refund every penny — no questions asked.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}