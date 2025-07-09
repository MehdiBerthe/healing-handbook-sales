import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes this different from other herbal books?",
    answer: "Our handbook focuses on everyday ingredients you already have at home, with clear explanations of why each remedy works. It's practical, accessible, and backed by traditional wisdom.",
  },
  {
    question: "Can I use this if I'm new to natural remedies?",
    answer: "Absolutely! The handbook is designed for beginners and experts alike. Each remedy includes simple step-by-step instructions and safety guidelines.",
  },
  {
    question: "Are the ingredients easy to find?",
    answer: "Yes! Most ingredients are common household items or easily found at your local grocery store. We focus on accessible, everyday ingredients.",
  },
  {
    question: "Do I need special tools to prepare the recipes?",
    answer: "No special equipment needed! All remedies can be prepared with basic kitchen tools you already have at home.",
  },
  {
    question: "How fast can I expect to see results?",
    answer: "Results vary depending on the remedy and individual circumstances. Some provide immediate relief, while others work best as part of a consistent routine.",
  },
  {
    question: "Can these help with common health issues?",
    answer: "The handbook covers remedies for many common concerns including digestive issues, skin problems, sleep difficulties, and general wellness support.",
  },
  {
    question: "How do I access the bonus ebooks?",
    answer: "Digital bonuses are delivered instantly via email after your purchase. You'll receive download links and instructions immediately.",
  },
  {
    question: "Will this interfere with my current medications?",
    answer: "Always consult your healthcare provider before starting any new remedies, especially if you're taking medications or have health conditions.",
  },
];

export function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-healing-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-healing-dark mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm border border-healing-accent/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-healing-dark hover:text-natural-green font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-healing-dark/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}