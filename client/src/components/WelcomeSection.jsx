import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-2xl overflow-hidden opacity-20 transform rotate-12 floating glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-4xl">
            🚀
          </div>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full overflow-hidden opacity-25 floating floating-delay-1 glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-2xl">
            💼
          </div>
        </div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 rounded-2xl overflow-hidden opacity-15 transform -rotate-6 floating floating-delay-2 glassmorphism">
          <div className="w-full h-full animated-gradient flex items-center justify-center text-primary-foreground text-3xl">
            🌐
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Welcome to <span className="animated-gradient bg-clip-text text-transparent">Viioom</span>
          </h2>
        </div>
        
        {/* Content Box */}
        <div className="glassmorphism rounded-xl p-8 md:p-12 mt-8 border border-border/40">
          <div className="text-foreground text-lg md:text-xl leading-relaxed space-y-4">
            <p>
              At <span className="animated-gradient bg-clip-text text-transparent font-semibold">Viioom</span>, we make it easy for businesses and professionals to create a smart digital presence. With just one link, you can showcase everything — your contact details, social media, menu, catalogue, website, and more.
            </p>
            
            <p>
              Each profile comes with a custom QR code for instant sharing, and once you're on our platform, you become searchable by name or location. Whether you're a local business, freelancer, or creator, Viioom helps you stay professional, discoverable, and connected — all without any tech hassle.
            </p>
            
            <p>
              Just share your details, and we'll take care of the rest.
            </p>
          </div>
          
          {/* CTA Button */}
         
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
