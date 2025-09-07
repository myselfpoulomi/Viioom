import Navbar from "../components/Navbar";
import ProfilesSection from "../components/ProfilesSection";
import Footer from "../components/Footer";

const Profiles = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ProfilesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Profiles;
