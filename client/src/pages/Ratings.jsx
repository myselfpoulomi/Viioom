import Navbar from "../components/Navbar";
import RatingsSection from "../components/RatingsSection";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const Ratings = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="pt-20">
          <RatingsSection />
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default Ratings;
