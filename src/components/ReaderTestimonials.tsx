import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    quote: "This book made natural healing easy. I finally understand how to use everyday ingredients the right way.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b9c776c2?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "David L.",
    quote: "A great gift! I've used herbal remedies for years and this guide gave me new insights.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Maria K.",
    quote: "Simple, clear, and incredibly practical. I love how it explains why each remedy works.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "John R.",
    quote: "Perfect for anyone who wants to ditch pills and take charge of their health naturally.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
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