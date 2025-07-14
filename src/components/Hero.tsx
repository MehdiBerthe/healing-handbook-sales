import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-healing-green/10 to-natural-gold/10 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-earth-brown leading-tight">
                Discover Natural
                <span className="text-healing-green block">Healing Secrets</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Transform your health with time-tested natural remedies and ancient wisdom.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-healing-green">✓</span>
                <span className="text-lg">500+ Proven Natural Remedies</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-healing-green">✓</span>
                <span className="text-lg">Ancient Wisdom Meets Modern Science</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-healing-green">✓</span>
                <span className="text-lg">Safe & Effective Solutions</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-healing-green hover:bg-healing-green/90 text-white text-xl px-8 py-4 h-auto"
            >
              Get Your Copy Now - Only $37
            </Button>
          </div>
          
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/75be8ae3-da9c-40e3-b737-d0a36552ca0c.png" 
              alt="Natural Medicine Book" 
              className="w-80 h-auto rounded-lg shadow-natural"
            />
          </div>
        </div>
      </div>
    </section>
  );
}