import { Card } from "@/components/ui/card";
import womanWithHerbs from "@/assets/woman-with-herbs.jpg";
export default function Testimonial() {
  return <section className="py-16 bg-healing-light/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm border-healing-light">
          <div className="w-full">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-healing-light/20 p-6 rounded-lg border-l-4 border-healing-green mb-6">
                  <h3 className="font-bold text-earth-brown text-xl mb-4">Summary:</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">If you've ever felt like modern medicine was missing something, you're not alone. 
Like many health-conscious people over 40, I was tired of the endless prescriptions, foggy thinking, and side effects. That's when I discovered "The Natural Medicine Book", a powerful guide filled with remedies that have stood the test of time.</p>
                  <p className="text-muted-foreground leading-relaxed mt-4 text-lg">
                    Created by renowned herbalist Clara Wells, it opened my eyes to what natural healing really looks like — and how to start using it today.
                  </p>
                </div>
                
                <div className="flex justify-center mb-6">
                  <img alt="The Natural Medicine Book" className="w-64 h-auto rounded-lg shadow-lg" src="/lovable-uploads/e759cafe-ed71-466c-92f3-615aacbaa819.png" />
                </div>
                
                <p className="text-xl italic text-earth-brown leading-relaxed">
                  "I wasn't sick, but I wasn't herself."
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  That's the feeling that made me look beyond the pharmacy.
                </p>
                
                <div className="bg-white/80 p-4 rounded-lg border border-healing-light/50">
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