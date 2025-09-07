import Navbar from "../components/Navbar";
import RatingsSection from "../components/RatingsSection";
import Footer from "../components/Footer";

const Ratings = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <RatingsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Ratings;
