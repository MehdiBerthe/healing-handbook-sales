import { Card } from "@/components/ui/card";
import womanWithHerbs from "@/assets/woman-with-herbs.jpg";
export default function Testimonial() {
  return <section className="pb-16 bg-healing-light/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="pb-8 px-0 lg:pb-12 lg:px-3 bg-white/80 backdrop-blur-sm border-healing-green">
          <div className="w-full">
            <div className="space-y-6 px-3 lg:px-0">
              <div className="space-y-4">
                  <h3 className="font-bold text-earth-brown text-xl mb-4 pt-2">Summary:</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">If you've ever felt like modern medicine was missing something, you're not alone. 
Like many health-conscious people over 40, I was tired of the endless prescriptions, foggy thinking, and side effects. That's when I discovered "The Natural Healing Handbook", a powerful guide filled with remedies that have stood the test of time.</p>
                  <p className="text-muted-foreground leading-relaxed mt-4 text-base">
                    Created by renowned herbalist Clara Wells, it opened my eyes to what natural healing really looks like — and how to start using it today.
                  </p>
                
                <div className="flex justify-center mb-6 -mx-3 lg:mx-0">
                  <img alt="The Natural Healing Handbook" className="w-full lg:w-64 h-auto rounded-lg shadow-lg" src="/lovable-uploads/d570991c-488d-492d-8d16-70691a5680bb.png" />
                </div>
                
                <p className="text-xl italic text-earth-brown leading-relaxed">"I wasn't sick, but I wasn't myself."</p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  That's the feeling that made me look beyond the pharmacy.
                </p>
                
                <div>
                  <p className="text-muted-foreground leading-relaxed font-medium text-lg">
                    Inside the book, I found:
                  </p>
                  <ul className="mt-2 space-y-2 text-muted-foreground text-lg">
                    <li>• Remedies for energy, digestion, and immunity</li>
                    <li>• Clear steps, not vague tips</li>
                    <li>• Ingredients I already had at home</li>
                    <li>• No trends. No fluff. Just proven combinations that really work.</li>
                  </ul>
                </div>
              </div>
              
              
            </div>
          </div>
        </Card>
      </div>
    </section>;
}