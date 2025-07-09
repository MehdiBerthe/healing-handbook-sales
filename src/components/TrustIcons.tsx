import { Shield, Truck, BookOpen } from "lucide-react";

export function TrustIcons() {
  const trustItems = [
    {
      icon: Shield,
      title: "60-Day Risk-Free Guarantee",
      description: "Full money back guarantee"
    },
    {
      icon: Truck,
      title: "Fast 3–5 Day Shipping",
      description: "Printed in the USA"
    },
    {
      icon: BookOpen,
      title: "200 Herbs & 100+ Synergistic Recipes",
      description: "Complete healing guide"
    }
  ];

  return (
    <section className="py-12 px-4 bg-natural-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-natural-green-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-natural-green" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}