import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Shield, Zap, Brain, Utensils, BookOpen, Sprout, Stethoscope, Sparkles } from "lucide-react";

// Import benefit images
import benefit1Herbs from "@/assets/benefit-1-herbs.jpg";
import benefit2Relief from "@/assets/benefit-2-relief.jpg";
import benefit3Control from "@/assets/benefit-3-control.jpg";
import benefit4Wisdom from "@/assets/benefit-4-wisdom.jpg";
import benefit5Knowledge from "@/assets/benefit-5-knowledge.jpg";
import benefit6Kitchen from "@/assets/benefit-6-kitchen.jpg";
import benefit7Preparation from "@/assets/benefit-7-preparation.jpg";
import benefit8Garden from "@/assets/benefit-8-garden.jpg";
import benefit9Emergency from "@/assets/benefit-9-emergency.jpg";
import benefit10Renewed from "@/assets/benefit-10-renewed.jpg";
const benefits = [{
  id: 1,
  icon: Sparkles,
  image: "/lovable-uploads/ad15583d-5cc7-4c5b-9e03-00dfeacaf125.png",
  title: "The Hidden Healing Secrets That's in Your Kitchen",
  description: "Nature doesn't work in isolation, and neither should your remedies. Herbal synergy is the art of combining plants that amplify each other's healing properties, producing effects far more powerful than any single ingredient alone.\n\nThis book unveils ancient pairings that have been quietly passed down by healers for generations, now backed by modern science. If you've ever felt like natural remedies weren't \"strong enough,\" you've just been missing the right combinations."
}, {
  id: 2,
  icon: Stethoscope,
  image: "/lovable-uploads/eaacee63-b209-4392-98a7-d634164e0a25.png",
  title: "The Overlooked Healing Secret That's Hiding in Plain Sight",
  description: "You shouldn't have to be an herbalist or chemist to feel better. Whether you're dealing with stubborn joint pain, frustrating insomnia, or chronic stress, every remedy in this guide is organized by everyday ailment and crafted with accessibility in mind.\n\nNo complex instructions or hard-to-find ingredients, just step-by-step guidance using familiar items from your kitchen or local market. It's real relief, made practical."
}, {
  id: 3,
  icon: Shield,
  image: "/lovable-uploads/752d227b-20e8-444c-aff0-a0947682b128.png",
  title: "No More Waiting Rooms. Your Healing Starts in the Kitchen",
  description: "Modern healthcare can leave you feeling like just another number, but healing doesn't have to be so distant or disempowering. This book gives you immediate, tangible tools to support your body naturally.\n\nNo waiting for appointments, no endless refills. Just knowledge you can use today, from making a calming tea to building a healing routine. Reclaim your role as your own best healer, starting right now."
}, {
  id: 4,
  icon: BookOpen,
  image: "/lovable-uploads/f99fd21a-274a-46f7-9f15-a8b675186b9b.png",
  title: "The Remedies That Helped 10,000 People. Now In Your Hands",
  description: "Clara Wells didn't learn herbal healing from a textbook, she spent decades helping real people solve real health challenges, from stubborn skin conditions to hormone imbalances.\n\nAfter guiding over 10,000 clients, she's distilled her most effective remedies and insights into this one-of-a-kind book. You're not just getting recipes, you're getting decades of lived experience, simplified and delivered with care."
}, {
  id: 5,
  icon: Brain,
  image: "/lovable-uploads/da3a802e-45ea-4c54-8fc2-ab49d3591f81.png",
  title: "You are Guided Now : Know Exactly What Works and Why",
  description: "It's exhausting trying to piece together health advice from a hundred sources. This guide cuts through the noise. Instead of vague suggestions or trendy fads, you'll get clear explanations for each remedy: what it does, why it works, and how to use it.\n\nWhether you're a complete beginner or someone already using herbs, this book brings the science, tradition, and application together, so you can feel confident with every recipe."
}, {
  id: 6,
  icon: Utensils,
  image: "/lovable-uploads/bfb27599-8f58-4884-a4b4-4036c06d4326.png",
  title: "Your Spice Rack Might Be the Best Pharmacy You've Never Used",
  description: "Open your cabinet, you might already own some of the world's most powerful healing tools. Garlic, turmeric, lemon, ginger, common staples with extraordinary potential when used correctly.\n\nThis book shows you exactly how to activate their healing compounds, pair them for maximum impact, and transform your everyday meals into medicine. It's not about adding new ingredients, it's about unlocking the power of the ones you already have."
}, {
  id: 7,
  icon: Eye,
  image: "/lovable-uploads/1b08614a-ee3d-4ae8-a106-f675c28935f9.png",
  title: "The Little-Known Prep Tricks That Turn Herbs Into Medicine",
  description: "It's not just what you use, it's how you use it. Boil the wrong herb and you destroy its potency. Mix two others and they become a natural antibiotic.\n\nThis book reveals the preparation techniques that make all the difference, inspired by centuries of traditional wisdom and adapted for modern kitchens. With simple instructions and beautiful illustrations, you'll feel like a true herbalist in no time."
}, {
  id: 8,
  icon: Sprout,
  image: "/lovable-uploads/b6d6eb82-7f82-40c0-af52-47e546b50ec9.png",
  title: "Even If You Only Have a Balcony, You Can Grow This",
  description: "🌿 BONUS: You don't need acres of land or a green thumb to grow your own medicine. This bonus Mini Garden Guide shows you how to cultivate seven essential healing herbs  even if you only have a windowsill or balcony.\n\nFrom calming lavender to immune-boosting oregano, you'll always have fresh remedies within arm's reach grown with your own hands."
}, {
  id: 9,
  icon: Zap,
  image: "/lovable-uploads/2a434006-3580-4101-85b9-4bbe8682c740.png",
  title: "What to Reach For When Life Throws You a Curveball",
  description: "⚕️ BONUS: When a cold strikes or a burn catches you off guard, it helps to have something on hand fast. That's why we've included the Herbal Emergency Kit, filled with quick, reliable solutions for life's most common mishaps.\n\nLearn what to keep in your herbal first-aid kit and how to use it to calm inflammation, support recovery, and feel in control even in the unexpected."
}, {
  id: 10,
  icon: Heart,
  image: "/lovable-uploads/3f445193-48a7-49f1-99be-69b87c7ca8d7.png",
  title: "What Happens When Your Body Finally Feels \"Right\" Again",
  description: "When pain and fatigue pile up, it's easy to feel like you're losing touch with who you are. But healing isn't just physical, it's emotional, energetic, and deeply personal.\n\nAs your body begins to regulate and rebalance, you'll feel a renewed sense of clarity, vitality, and calm. You'll sleep better, think sharper, and move through your day with more lightness. This book isn't just about feeling better, it's about feeling like you again."
}];
export default function BenefitsList() {
  return <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-earth-brown mb-3 md:mb-4">Welcome to Herbal Synergy — The Ancient Art Modern Medicine Forgot</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Keep scrolling to discover 10 ways this book is helping thousands reduce inflammation, sharpen focus, improve sleep, and feel like themselves again — all using simple kitchen remedies made smarter.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {benefits.map((benefit, index) => <Card key={benefit.id} className="p-4 md:p-8 hover:shadow-natural transition-all duration-300 animate-fade-in border-healing-light/50" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Image Side - Left Column */}
                <div className="flex justify-center">
                  <div className="aspect-square w-full max-w-sm">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-full object-contain rounded-lg shadow-natural" />
                  </div>
                </div>
                
                {/* Content Side - Right Column */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Badge variant="secondary" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-healing-green/10 border-healing-green/20 flex items-center justify-center text-base md:text-lg font-bold text-healing-green">
                      {benefit.id}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-earth-brown leading-tight">
                      {benefit.title}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed text-lg md:text-xl lg:text-2xl space-y-3 md:space-y-4">
                      {benefit.description.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
}