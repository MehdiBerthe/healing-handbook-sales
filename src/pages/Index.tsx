import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://b4sn2.ttrk.io/track.js?rtkcmpid=68979121b38f8b9d45aff64c";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);
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
