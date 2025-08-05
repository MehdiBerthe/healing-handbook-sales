export default function SpecialOffer() {
  return <section className="py-16 bg-gradient-to-br from-healing-green/10 to-natural-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-natural border border-healing-light">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-64 h-64 rounded-lg shadow-natural overflow-hidden">
                  <img src="/lovable-uploads/0ccfae5d-d7dd-42bd-a589-3d910a09173c.png" alt="The Natural Medicine Book - Traditional Remedies for Modern Times" className="w-full h-full object-cover rounded-lg shadow-natural" />
                </div>
              </div>
              
              
              <div className="bg-healing-light/30 p-6 rounded-lg border-l-4 border-healing-green">
                <p className="text-xl lg:text-2xl font-semibold text-earth-brown mb-2">Valued at $149 - now only $34.99
 Get your copy before they try to ban this book again!</p>
              </div>
              
              <div className="text-2xl lg:text-3xl font-bold text-healing-green mb-6">
                🍃 A Special Offer for Natural Health Enthusiasts 🍃
              </div>
              
              <div className="space-y-4 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                <p>
                  If you've read this far, there's a good chance you're serious about taking your health into your own hands.
                </p>
                
                <p className="font-semibold text-earth-brown">
                  Right now, Clara is offering <span className="text-healing-green">The Natural Medicine Book</span> for just <span className="text-2xl text-natural-gold font-bold">$34.99</span> — that's <span className="text-xl font-bold text-healing-green">$114.01 off</span> the regular retail price of $149.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}