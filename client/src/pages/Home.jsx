import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection .jsx";
import WelcomeSection from "../components/WelcomeSection";
import CompleteDigitalSolutionsSection from "../components/CompleteDigitalSolutionsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CompleteDigitalSolutionsSection />
      <WelcomeSection />
      <Footer />
    </div>
  );
};

export default Home;
