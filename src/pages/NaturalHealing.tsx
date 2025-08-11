import { useEffect } from "react";
import LandingPage from "@/components/LandingPage";

const NaturalHealing = () => {
  useEffect(() => {
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