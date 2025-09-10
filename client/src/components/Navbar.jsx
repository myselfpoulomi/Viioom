import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold animated-gradient bg-clip-text text-transparent breathing"
            >
              Viioom.in
            </Link>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="flex items-center glassmorphism h-11 px-4 rounded-full w-full max-w-2xl mx-4 border border-input/60 hover:border-input focus-within:border-primary/50 transition-colors"
              onClick={() => navigate("/profiles")}
            >
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

          {/* Right: Nav links */}
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
            <button
              aria-label="User menu"
              onClick={() => navigate('/profile')}
              className="relative w-9 h-9 rounded-full glassmorphism border border-border/60 grid place-items-center hover:scale-105 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-foreground/90">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
