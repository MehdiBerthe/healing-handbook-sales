export function PainAgitation() {
  return (
    <section className="py-16 px-4 bg-natural-cream">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Are you tired of relying on pills with endless side effects?
        </h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-natural mb-8">
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Whether it's arthritis, memory problems, or blood sugar — your kitchen cabinet 
            might hold the answer.
          </p>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            It's not more meds or supplements… It's about using the right combination of herbs.
          </p>
          
          <div className="bg-natural-gold-light rounded-lg p-6 inline-block">
            <p className="text-2xl font-bold text-natural-brown">
              The secret is in <span className="text-natural-gold">herbal synergies</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-card rounded-lg p-6 shadow-natural">
            <h3 className="font-bold text-lg text-destructive mb-3">❌ The Problem</h3>
            <p className="text-muted-foreground">
              Single herbs often work slowly or not at all when used alone
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-natural">
            <h3 className="font-bold text-lg text-warning mb-3">⚠️ The Trap</h3>
            <p className="text-muted-foreground">
              Most people waste money on supplements that barely absorb
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-natural">
            <h3 className="font-bold text-lg text-success mb-3">✅ The Solution</h3>
            <p className="text-muted-foreground">
              Strategic herb combinations that amplify each other's effects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}