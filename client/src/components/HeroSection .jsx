import { useEffect, useRef } from "react";
import Counter from "./Counter";
import ParticleSystem from "./ParticleSystem";

const HeroSection = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const texts = ["One Profile", "One Link", "One Brand"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = texts[textIndex];

      if (typingRef.current) {
        if (isDeleting) {
          typingRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
          }
        } else {
          typingRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;

          if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
          }
        }
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    setTimeout(type, 1000);

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
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      <ParticleSystem />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 transform rotate-12 floating glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-4xl">
            📸
          </div>
        </div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full overflow-hidden opacity-25 floating floating-delay-1 glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-2xl">
            🎨
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-2xl overflow-hidden opacity-15 transform -rotate-6 floating floating-delay-2 glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-3xl">
            🌟
          </div>
        </div>

        {/* Pulsing Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="pulse-ring w-96 h-96 border-2 border-primary/30 rounded-full absolute"></div>
          <div
            className="pulse-ring w-96 h-96 border-2 border-accent/30 rounded-full absolute"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            All Your Links,
            <br />
            <span
              ref={typingRef}
              className="animated-gradient bg-clip-text text-transparent typing-animation"
            >
              One Profile
            </span>
          </h1>
        </div>

        <div className="scroll-reveal">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Create a beautiful, personalized profile that brings together all your
            links, social media, and photo gallery in one stunning place.
          </p>
        </div>

        <div className="scroll-reveal">
          <button className="magnetic-btn animated-gradient text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold mb-12 transform hover:scale-110 shadow-2xl">
            Create Your Profile
          </button>
        </div>

        {/* Live Stats */}
        <div className="scroll-reveal grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
          <div className="glassmorphism p-4 rounded-2xl">
            <Counter
              target={50000}
              className="text-3xl font-bold animated-gradient bg-clip-text text-transparent"
            />
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="glassmorphism p-4 rounded-2xl">
            <Counter
              target={1000000}
              className="text-3xl font-bold animated-gradient bg-clip-text text-transparent"
            />
            <div className="text-sm text-muted-foreground">Links Shared</div>
          </div>
          <div className="glassmorphism p-4 rounded-2xl">
            <Counter
              target={99}
              suffix="%"
              className="text-3xl font-bold animated-gradient bg-clip-text text-transparent"
            />
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
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
    </section>
  );
};

export default HeroSection;
