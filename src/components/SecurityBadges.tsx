export function SecurityBadges() {
  return (
    <div className="text-center mt-6">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Norton_logo.svg/200px-Norton_logo.svg.png" 
          alt="Norton by Symantec" 
          className="h-8 md:h-10 object-contain opacity-80"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/McAfee_logo_%282017%29.svg/200px-McAfee_logo_%282017%29.svg.png" 
          alt="McAfee Secure" 
          className="h-8 md:h-10 object-contain opacity-80"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa_logo.svg/200px-Visa_logo.svg.png" 
          alt="Verified by Visa" 
          className="h-6 md:h-8 object-contain opacity-80"
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png" 
          alt="MasterCard SecureCode" 
          className="h-6 md:h-8 object-contain opacity-80"
        />
      </div>
      <p className="text-sm text-healing-dark/70 font-medium">Secure Payment</p>
    </div>
  );
}