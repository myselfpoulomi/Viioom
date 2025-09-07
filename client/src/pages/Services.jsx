import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
