import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "glassmorphism fixed w-full z-50 transition-all duration-300",
        scrolled && "shadow-lg"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl font-bold animated-gradient bg-clip-text text-transparent breathing"
            >
              Viioom.in
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center glassmorphism px-4 py-2 rounded-full min-w-[400px]">
              <svg
                className="w-5 h-5 text-muted-foreground mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search businesses, services, or locations..."
                className="bg-transparent text-foreground placeholder:text-muted-foreground outline-none flex-1 text-sm"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={cn(
                "text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium",
                location.pathname === "/" && "text-primary"
              )}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={cn(
                "text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium",
                location.pathname === "/services" && "text-primary"
              )}
            >
              Services
            </Link>
            <Link
              to="/profiles"
              className={cn(
                "text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium",
                location.pathname === "/profiles" && "text-primary"
              )}
            >
              Profiles
            </Link>
            <Link
              to="/ratings"
              className={cn(
                "text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium",
                location.pathname === "/ratings" && "text-primary"
              )}
            >
              Ratings
            </Link>
            <Link to="/login" className="magnetic-btn animated-gradient text-primary-foreground px-6 py-2 rounded-full font-medium transform hover:scale-110">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
