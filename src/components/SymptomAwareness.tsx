import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";

export function SymptomAwareness() {
  const positiveSymptoms = [
    "Always tired, even after a full night's sleep",
    "Digestive issues and bloating after meals",
    "Joint aches and morning stiffness",
    "Frequent headaches or brain fog",
    "Skin flare-ups and irritation"
  ];

  const negativeConsequences = [
    "Chronic inflammation spreads throughout your body",
    "Vital organs work harder under constant stress",
    "Immune system becomes weakened and compromised",
    "Energy levels drop and mood swings increase",
    "Simple problems become serious health conditions"
  ];

  return (
    <section className="py-8 md:py-16 px-2 bg-natural-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Is Your Body Trying to Tell You Something?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            <strong>Fatigue. Bloating. Aches.</strong> Your body isn't broken — it's just asking for support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          {/* Positive Section */}
          <Card className="border-success hover:shadow-natural transition-all duration-300">
            <CardContent className="p-4 md:p-8">
              <div className="text-center mb-4 md:mb-6">
                <div className="bg-success/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-success" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-success mb-2">
                  Subtle Signs You May Need a Healing Reset
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Your body is asking for natural support
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {positiveSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{symptom}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-success/5 rounded-lg">
                <p className="text-xs md:text-sm text-success font-semibold">
                  ✨ Good news: These are all addressable with the right herbal combinations
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Negative Section */}
          <Card className="border-destructive hover:shadow-warm transition-all duration-300">
            <CardContent className="p-4 md:p-8">
              <div className="text-center mb-4 md:mb-6">
                <div className="bg-destructive/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-destructive" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-destructive mb-2">
                  What Happens If You Ignore These Clues?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Small problems become bigger ones
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {negativeConsequences.map((consequence, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{consequence}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-destructive/5 rounded-lg">
                <p className="text-xs md:text-sm text-destructive font-semibold">
                  ⚠️ The longer you wait, the harder it becomes to restore balance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6 md:mt-12">
          <div className="bg-card rounded-2xl p-4 md:p-8 shadow-natural max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Your Body Is Smarter Than You Think
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              These "minor" symptoms are actually your body's early warning system. 
              When you give it the right natural support, you'll be amazed how quickly 
              it can restore itself to optimal health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}