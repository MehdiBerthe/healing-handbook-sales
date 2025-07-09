import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    quote: "This book made natural healing easy. I finally understand how to use everyday ingredients the right way.",
    rating: 5,
    photo: "/lovable-uploads/2d1836c1-e547-4f54-868e-5d529633e84e.png",
  },
  {
    name: "David L.",
    quote: "A great gift! I've used herbal remedies for years and this guide gave me new insights.",
    rating: 5,
    photo: "/lovable-uploads/e7fb818a-900c-4c59-bffe-c76c703ed6f4.png",
  },
  {
    name: "Maria K.",
    quote: "Simple, clear, and incredibly practical. I love how it explains why each remedy works.",
    rating: 5,
    photo: "/lovable-uploads/72c0c9fe-0bcb-434d-8225-73c923ae20f5.png",
  },
  {
    name: "John R.",
    quote: "Perfect for anyone who wants to ditch pills and take charge of their health naturally.",
    rating: 5,
    photo: "/lovable-uploads/3fa42c30-9aab-4c25-8e53-4959fd8e862c.png",
  },
];

export function ReaderTestimonials() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-4">
            What Our Readers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-healing-light/50 border-healing-accent/20 hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-healing-dark">{testimonial.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-natural-gold text-natural-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-healing-dark/80 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}