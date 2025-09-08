import React from "react";
import ParticleSystem from "./ParticleSystem";

const AnimatedLayout = ({ children }) => {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <ParticleSystem />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 transform rotate-12 floating glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-4xl">
            🎯
          </div>
        </div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full overflow-hidden opacity-25 floating floating-delay-1 glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-2xl">
            ⚡
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-2xl overflow-hidden opacity-15 transform -rotate-6 floating floating-delay-2 glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-3xl">
            🔧
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default AnimatedLayout;


