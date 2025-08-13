export default function StickyTopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-healing-green to-natural-green text-white shadow-lg">
      <div className="py-2 md:py-3 px-4 text-center">
        <div className="container mx-auto">
          <div className="text-sm md:text-lg lg:text-xl font-bold">
            ⚡ UP TO 80% OFF YOUR FIRST ORDER + 2 FREE GIFTS ⚡
          </div>
        </div>
      </div>
      <div className="bg-natural-green/90 py-1 md:py-2 px-4 text-center">
        <div className="container mx-auto">
          <div className="text-xs md:text-sm lg:text-base opacity-90">
            LIMITED TIME OFFER: Get all 3! Only $34.99 (Regular Price $149)
          </div>
        </div>
      </div>
    </div>
  );
}