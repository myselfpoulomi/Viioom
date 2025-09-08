import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="flex items-center justify-center pt-20 pb-24">
          <div className="text-center glassmorphism rounded-xl px-10 py-12">
            <h1 className="mb-4 text-5xl font-bold animated-gradient bg-clip-text text-transparent">404</h1>
            <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
            <a href="/" className="magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold">
              Return to Home
            </a>
          </div>
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default NotFound;
