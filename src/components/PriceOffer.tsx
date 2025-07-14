import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function PriceOffer() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Product Bundle Image */}
          <div className="relative mb-8">
            <img src="/lovable-uploads/440a78a5-11f3-4291-8140-e771d5085fa3.png" alt="The Natural Medicine Book Bundle with Bonuses" className="w-full max-w-lg mx-auto h-auto" />
          </div>
          
          {/* Included Text */}
          <div className="mb-6">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              INCLUDED: 2 FREE Bonuses
            </p>
          </div>
          
          {/* Pricing */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-black mb-2">
              $37<span className="text-3xl">ONLY</span>
            </div>
            <div className="text-xl text-red-500 mb-4">
              Original Price: <span className="line-through">$149</span>
            </div>
            <div className="text-2xl font-bold text-black mb-6">
              Save $112 Now!
            </div>
            
            {/* Additional CTA Button */}
            <div className="mb-6">
              <Link to="/">
                <Button variant="forest" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto animate-pulse max-w-md">
                  Yes, Get 80% OFF
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Shipping Info Box */}
          
          
          {/* CTA Button */}
          <div className="mb-6">
            
          </div>
          
          {/* Order Info */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="font-semibold">
                Order Now for Guaranteed<br />
                Discounts and Free Gifts
              </span>
            </div>
          </div>
          
          {/* Payment Icons */}
          <div className="flex justify-center items-center gap-1 sm:gap-2 opacity-80 flex-wrap">
            <div className="text-lg sm:text-xl font-bold text-blue-800">PayPal</div>
            <div className="text-lg sm:text-xl font-bold text-blue-600">VISA</div>
            <div className="flex">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full mr-1"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full"></div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-blue-700 bg-blue-100 px-1 sm:px-2 py-1 rounded text-center">
              AMERICAN<br />EXPRESS
            </div>
            <div className="text-xs sm:text-sm font-bold text-orange-600 bg-gray-800 text-white px-1 sm:px-2 py-1 rounded">
              DISCOVER
            </div>
          </div>
        </div>
      </div>
    </section>;
}