import { Shield, CreditCard, Lock, CheckCircle } from "lucide-react";

export function SecurityBadges() {
  return (
    <div className="text-center mt-6">
      <div className="flex justify-center items-center gap-6 mb-2">
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
      <p className="text-sm text-healing-dark/70 font-medium">Secure Payment</p>
    </div>
  );
}