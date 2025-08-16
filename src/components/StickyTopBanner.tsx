import { Gift } from "lucide-react";

export default function StickyTopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-banner-blue to-banner-blue-dark text-white py-3 shadow-lg border-t-[5px] border-b-[5px] border-banner-yellow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-center">
          <div className="flex items-center space-x-2">
            <Gift className="h-5 w-5 text-banner-yellow" />
            <span className="font-bold text-lg">
              GET 80% OFF + 2 Free Bonuses – Limited Time!
            </span>
            <Gift className="h-5 w-5 text-banner-yellow" />
          </div>
        </div>
      </div>
    </div>
  );
}