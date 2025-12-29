import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import MicrogreensSection from "../components/MicrogreensSection";
import AboutMicrogreens from "../components/AboutMicrogreens";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-beigeBg min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <ServicesSection />
      <MicrogreensSection />
      <AboutMicrogreens />
    

     




      {/* Product Preview */}
   
    </div>
  );
}
