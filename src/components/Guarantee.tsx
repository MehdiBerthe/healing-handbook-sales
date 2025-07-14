import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-16 bg-healing-light/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-natural border border-healing-light">
            <div className="flex justify-center mb-6">
              <div className="bg-healing-green/10 p-4 rounded-full">
                <Shield className="w-16 h-16 text-healing-green" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-earth-brown mb-6">
              100% Money-Back Guarantee
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-muted-foreground">
              <p>
                We're so confident in the power of these natural remedies that we offer a 
                <span className="font-bold text-healing-green"> 60-day money-back guarantee</span>.
              </p>
              
              <p>
                If you don't see improvements in your health within 60 days, simply contact us 
                for a full refund - no questions asked.
              </p>
              
              <div className="bg-healing-light/30 p-6 rounded-lg border-l-4 border-healing-green">
                <p className="font-semibold text-earth-brown">
                  Your satisfaction is our priority. Try it risk-free today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}