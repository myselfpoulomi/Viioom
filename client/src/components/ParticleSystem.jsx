import { useEffect } from "react";

const ParticleSystem = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 5 + 8}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.background = `hsl(${Math.random() * 60 + 240}, 90%, 70%)`;

      const particlesContainer = document.getElementById("particles");
      if (particlesContainer) {
        particlesContainer.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 13000);
      }
    };

    const interval = setInterval(createParticle, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="particles"
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default ParticleSystem;

// Add particle styles to global CSS
const style = document.createElement("style");
style.textContent = `
  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.6;
    animation: particleFloat 8s linear infinite;
  }
`;
document.head.appendChild(style);
