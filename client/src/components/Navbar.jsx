import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
              className="flex items-center gap-3 text-2xl font-bold animated-gradient bg-clip-text text-transparent breathing"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-10 h-10 rounded-lg"
              >
                <source src="/logo.mp4" type="video/mp4" />
              </video>
              Viioom.in
            </Link>
          </div>

          {/* Center: Search Bar - Desktop */}
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

          {/* Right: Desktop Nav links */}
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
            {isLoggedIn ? (
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
            ) : (
              <Link to="/login" className="magnetic-btn animated-gradient text-primary-foreground px-6 py-2 rounded-full font-medium transform hover:scale-110">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile: Search and Menu Icons */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Search Icon */}
            <button
              onClick={() => navigate("/profiles")}
              className="p-2 glassmorphism rounded-full border border-input/60 hover:border-input transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 text-muted-foreground"
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
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 glassmorphism rounded-full border border-input/60 hover:border-input transition-colors"
              aria-label="Menu"
            >
              <svg
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-300",
                  isMobileMenuOpen && "rotate-90"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden glassmorphism border-t border-input/60 mt-2 rounded-b-lg">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium",
                    location.pathname === "/" && "text-primary bg-primary/10"
                  )}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium",
                    location.pathname === "/services" && "text-primary bg-primary/10"
                  )}
                >
                  Services
                </Link>
                <Link
                  to="/profiles"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium",
                    location.pathname === "/profiles" && "text-primary bg-primary/10"
                  )}
                >
                  Profiles
                </Link>
                <Link
                  to="/ratings"
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-2 px-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium",
                    location.pathname === "/ratings" && "text-primary bg-primary/10"
                  )}
                >
                  Ratings
                </Link>
              </div>

              {/* Mobile Auth Section */}
              <div className="pt-3 border-t border-input/60">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      navigate('/profile');
                      closeMobileMenu();
                    }}
                    className="w-full flex items-center justify-center py-2 px-3 rounded-lg glassmorphism border border-border/60 hover:scale-105 transition-transform"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-foreground/90 mr-2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Profile
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    onClick={closeMobileMenu}
                    className="w-full block text-center magnetic-btn animated-gradient text-primary-foreground px-6 py-2 rounded-full font-medium transform hover:scale-110"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
