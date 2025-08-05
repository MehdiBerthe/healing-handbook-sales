import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyBottomButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-md mx-auto space-y-3">
          <Link to="/">
            <Button 
              className="w-full bg-sky-500 text-white font-bold text-lg py-3 h-auto rounded-lg"
              size="lg"
            >
              YES, GET 80% OFF
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-healing-green mr-2" />
            <span className="text-center">Order Now for Guaranteed Discounts and Free Gifts</span>
          </div>
        </div>
      </div>
    </div>
  );
}