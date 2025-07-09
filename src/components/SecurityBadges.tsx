import { Shield, CreditCard, Lock, CheckCircle } from "lucide-react";

export function SecurityBadges() {
  return (
    <div className="text-center mt-6">
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-2 max-w-full px-4">
        <div className="flex items-center gap-1.5 text-xs font-medium text-healing-dark/70">
          <Shield className="w-4 h-4 text-forest-green" />
          <span>NORTON</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-healing-dark/70">
          <Lock className="w-4 h-4 text-forest-green" />
          <span>McAFEE</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-healing-dark/70">
          <CheckCircle className="w-4 h-4 text-forest-green" />
          <span>VISA</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-healing-dark/70">
          <CreditCard className="w-4 h-4 text-forest-green" />
          <span>MASTERCARD</span>
        </div>
      </div>
      
    </div>
  );
}