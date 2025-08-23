import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-healing-light/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1f2535c5-2ae3-49ad-b55b-cf1ef6e8be7c.png" 
              alt="Ancient Remedies" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "outline"}
                size="sm"
              >
                Original Landing
              </Button>
            </Link>
            <Link to="/offer">
              <Button 
                variant={location.pathname === "/offer" ? "default" : "outline"}
                size="sm"
              >
                Natural Healing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}