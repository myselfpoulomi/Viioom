import Navbar from "../components/Navbar";
import ProfilesSection from "../components/ProfilesSection";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const Profiles = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="pt-20">
          <ProfilesSection />
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default Profiles;
