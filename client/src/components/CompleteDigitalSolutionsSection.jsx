import React from 'react';
import { Users, QrCode, Star, Search, Headphones } from 'lucide-react';

const CompleteDigitalSolutionsSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Digital Business Profile Creation",
      description: "One smart page with all your important business info. Includes social links, contact numbers, website, menus, catalogues, and more. Clean, mobile-friendly design for easy access, branded to match your business identity.",
      iconBg: "bg-blue-500"
    },
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Custom QR Code Generation",
      description: "Unique QR code linked directly to your digital profile. Works across devices — scan to view instantly. Can be used online or offline to drive traffic.",
      iconBg: "bg-pink-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Printed QR Business Cards",
      description: "High-quality cards with your custom QR. Minimal design + your brand identity. Perfect for events, in-store displays, or client meetings.",
      iconBg: "bg-green-500"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Searchable Business Directory",
      description: "Your profile is listed publicly. Customers can search you by name, category, or location. Helps improve visibility and discovery.",
      iconBg: "bg-orange-500"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "End-to-End Setup Support",
      description: "No design or technical skills required. Easy onboarding — just fill in your details. We'll build and activate your profile for you.",
      iconBg: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold animated-gradient bg-clip-text text-transparent mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to build, manage, and grow your digital business presence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-6 border border-border/40"
            >
              {/* Icon */}
              <div className={`${feature.iconBg} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompleteDigitalSolutionsSection;
