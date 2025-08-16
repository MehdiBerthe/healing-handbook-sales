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
    // Facebook Pixel
    (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);
    
    (window as any).fbq('init', '624511053638780');
    (window as any).fbq('track', 'PageView');
    
    // Add small delay to ensure pixel is fully loaded before custom events
    setTimeout(() => {
      (window as any).fbq('track', 'AddToCart');
    }, 1000);
    
    // Tracking script
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
