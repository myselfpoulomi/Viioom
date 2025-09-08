import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="pt-20">
          <ServicesSection />
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default Services;
