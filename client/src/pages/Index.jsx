import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProfilesSection from "./components/ProfilesSection";
import RatingsSection from "./components/RatingsSection";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProfilesSection />
      <RatingsSection />
      <Footer />
    </div>
  );
};

export default Index;
