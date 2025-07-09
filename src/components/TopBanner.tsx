export function TopBanner() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-forest-green text-white py-2 md:py-3 px-4 text-center font-bold">
        <div className="container mx-auto">
          <div className="text-sm md:text-lg lg:text-xl">
            ⚡ UP TO 80% OFF YOUR FIRST ORDER + 2 FREE GIFTS ⚡
          </div>
        </div>
      </div>
      <div className="bg-natural-green text-white py-1 md:py-2 px-4 text-center">
        <div className="container mx-auto">
          <div className="text-xs md:text-sm lg:text-base opacity-90">
            LIMITED TIME OFFER: Get all 3! Only $37 (Regular Price $149)
          </div>
        </div>
      </div>
    </div>
  );
}