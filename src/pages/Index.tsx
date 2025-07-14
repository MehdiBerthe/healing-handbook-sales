import { TopBanner } from "@/components/TopBanner";
import { HeroSection } from "@/components/HeroSection";
import { TrustIcons } from "@/components/TrustIcons";
import { DiscoverSection } from "@/components/DiscoverSection";
import { EverydayHerbs } from "@/components/EverydayHerbs";
import { PainAgitation } from "@/components/PainAgitation";
import { ProductMechanism } from "@/components/ProductMechanism";
import { Differentiators } from "@/components/Differentiators";
import { SymptomAwareness } from "@/components/SymptomAwareness";
import { IngredientBenefits } from "@/components/IngredientBenefits";
import { ReaderTestimonials } from "@/components/ReaderTestimonials";
import { OfferStack } from "@/components/OfferStack";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FinalCTA } from "@/components/FinalCTA";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <TopBanner />
      <HeroSection />
      <TrustIcons />
      <DiscoverSection />
      <EverydayHerbs />
      <PainAgitation />
      <ProductMechanism />
      <Differentiators />
      <SymptomAwareness />
      <IngredientBenefits />
      <ReaderTestimonials />
      <OfferStack />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <FinalCTA />
    </div>
  );
};

export default Index;
