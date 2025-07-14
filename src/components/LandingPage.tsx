import Hero from "./Hero";
import Testimonial from "./Testimonial";
import BenefitsList from "./BenefitsList";
import SpecialOffer from "./SpecialOffer";
import Bonuses from "./Bonuses";
import PriceOffer from "./PriceOffer";
import Comments from "./Comments";
import Guarantee from "./Guarantee";
import Footer from "./Footer";
import StickyBottomButton from "./StickyBottomButton";
import StickyTopBanner from "./StickyTopBanner";

export default function LandingPage() {
  return (
    <div className="min-h-screen pt-16">
      <StickyTopBanner />
      <Hero />
      <Testimonial />
      <BenefitsList />
      <SpecialOffer />
      <Bonuses />
      <PriceOffer />
      <Guarantee />
      <Comments />
      <Footer />
      <StickyBottomButton />
    </div>
  );
}