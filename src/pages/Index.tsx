import { TopBanner } from "@/components/TopBanner";
import { HeroSection } from "@/components/HeroSection";
import { TrustIcons } from "@/components/TrustIcons";
import { DiscoverSection } from "@/components/DiscoverSection";
import { EverydayHerbs } from "@/components/EverydayHerbs";
import { PainAgitation } from "@/components/PainAgitation";
import { ProductMechanism } from "@/components/ProductMechanism";
import { Differentiators } from "@/components/Differentiators";
import { SymptomAwareness } from "@/components/SymptomAwareness";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <HeroSection />
      <TrustIcons />
      <DiscoverSection />
      <EverydayHerbs />
      <PainAgitation />
      <ProductMechanism />
      <Differentiators />
      <SymptomAwareness />
      <FinalCTA />
    </div>
  );
};

export default Index;
