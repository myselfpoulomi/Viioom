import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";

const HeroSection = () => {
  const texts = ["One Profile", "One Link", "One Brand"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    const currentFullText = texts[currentIndex];
    const variableFull = currentFullText.slice(1); // keep the first character static ("O")
    const isFinishedTyping = displayedText === variableFull;
    const isFinishedDeleting = displayedText.length === 0;

    // Determine typing speed
    const baseSpeed = 90; // ms per character
    const deleteSpeed = 45; // faster when deleting
    const pauseAfterTypeMs = 1200; // pause before deleting
    const pauseAfterDeleteMs = 300; // pause before next word

    if (!isDeleting && !isFinishedTyping) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(variableFull.slice(0, displayedText.length + 1));
      }, baseSpeed);
    } else if (!isDeleting && isFinishedTyping) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseAfterTypeMs);
    } else if (isDeleting && !isFinishedDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(variableFull.slice(0, displayedText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && isFinishedDeleting) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, pauseAfterDeleteMs);
    }

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(typingTimeout);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <section className="pt-24 pb-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto text-center md:text-left relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex-1">
            <div className="scroll-reveal">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                All Your Links,
                <br />
                <span className="inline-flex">
                  <span className="animated-gradient bg-clip-text text-transparent">O</span>
                  <span className="animated-gradient bg-clip-text text-transparent">{displayedText}</span>
                </span>
              </h1>
            </div>

            <div className="scroll-reveal">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl md:mx-0 mx-auto leading-relaxed">
                Create a beautiful, personalized profile that brings together all your
                links, social media, and photo gallery in one stunning place.
              </p>
            </div>

            <div className="scroll-reveal">
              <Link to="/create-profile" className="inline-block magnetic-btn animated-gradient text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold mb-4 transform hover:scale-110 shadow-2xl">
                Create Your Profile
              </Link>
            </div>

            <div className="scroll-reveal">
              <div className="inline-flex items-center space-x-2 text-muted-foreground glassmorphism px-4 py-2 rounded-full">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Free to start • No credit card required</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto md:flex-none scroll-reveal">
            <img
              src="/banner.png"
              alt="Hero Banner"
              className="w-72 md:w-96 lg:w-[420px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
