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
    <section className="py-16 px-4 bg-natural-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Is Your Body Trying to Tell You Something?
          </h2>
          <p className="text-xl text-muted-foreground">
            <strong>Fatigue. Bloating. Aches.</strong> Your body isn't broken — it's just asking for support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Positive Section */}
          <Card className="border-success hover:shadow-natural transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-success mb-2">
                  Subtle Signs You May Need a Healing Reset
                </h3>
                <p className="text-muted-foreground">
                  Your body is asking for natural support
                </p>
              </div>

              <div className="space-y-4">
                {positiveSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{symptom}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-success/5 rounded-lg">
                <p className="text-sm text-success font-semibold">
                  ✨ Good news: These are all addressable with the right herbal combinations
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Negative Section */}
          <Card className="border-destructive hover:shadow-warm transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="bg-destructive/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive mb-2">
                  What Happens If You Ignore These Clues?
                </h3>
                <p className="text-muted-foreground">
                  Small problems become bigger ones
                </p>
              </div>

              <div className="space-y-4">
                {negativeConsequences.map((consequence, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{consequence}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-destructive/5 rounded-lg">
                <p className="text-sm text-destructive font-semibold">
                  ⚠️ The longer you wait, the harder it becomes to restore balance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-natural max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Body Is Smarter Than You Think
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
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