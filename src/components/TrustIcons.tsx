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
    <section className="py-8 md:py-12 px-4 bg-natural-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-natural-green-light rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-natural-green" />
              </div>
              <h3 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}