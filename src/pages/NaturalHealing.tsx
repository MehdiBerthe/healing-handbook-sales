import { useEffect } from "react";
import LandingPage from "@/components/LandingPage";

const NaturalHealing = () => {
  useEffect(() => {
    // Facebook Pixel
    (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);
    
    (window as any).fbq('init', '624511053638780');
    (window as any).fbq('track', 'PageView');
    
    // Add small delay to ensure pixel is fully loaded before custom events
    setTimeout(() => {
      (window as any).fbq('track', 'AddToWishlist');
    }, 1000);
    
    // Tracking script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://b4sn2.ttrk.io/track.js?rtkcmpid=689790b6606ca24fcd74ba43";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);

  return <LandingPage />;
};

export default NaturalHealing;