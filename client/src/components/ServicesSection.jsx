import { useEffect } from "react";

const ServicesSection = () => {
  useEffect(() => {
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

  const services = [
    {
      title: "Digital Profile Management",
      description:
        "Create and manage your comprehensive digital business profile with all your essential links and information in one place.",
      icon: "☁️",
      color: "from-blue-500 to-cyan-500",
      features: [
        { icon: "•", text: "Social Media Integration", color: "text-blue-400" },
        { icon: "•", text: "QR Code Generation", color: "text-blue-400" },
        { icon: "•", text: "Custom Branding", color: "text-blue-400" },
        { icon: "•", text: "Analytics Dashboard", color: "text-blue-400" },
      ],
    },
    {
      title: "Customer Connection Platform",
      description:
        "Connect with your customers through reviews, ratings, and direct communication channels.",
      icon: "👥",
      color: "from-purple-500 to-pink-500",
      features: [
        { icon: "•", text: "Review Management", color: "text-purple-400" },
        { icon: "•", text: "Customer Feedback", color: "text-purple-400" },
        { icon: "•", text: "Direct Messaging", color: "text-purple-400" },
        { icon: "•", text: "Appointment Booking", color: "text-purple-400" },
      ],
    },
    {
      title: "Business Growth Tools",
      description:
        "Boost your business visibility and growth with our comprehensive marketing and analytics tools.",
      icon: "📈",
      color: "from-green-500 to-emerald-500",
      features: [
        { icon: "•", text: "SEO Optimization", color: "text-green-400" },
        { icon: "•", text: "Performance Analytics", color: "text-green-400" },
        { icon: "•", text: "Marketing Insights", color: "text-green-400" },
        { icon: "•", text: "Growth Recommendations", color: "text-green-400" },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-gradient opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold animated-gradient bg-clip-text text-transparent mb-4">
            Services we provide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital
            world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-3d glassmorphism p-8 rounded-2xl scroll-reveal group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-3xl text-white">{service.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 text-center text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <span className={`${feature.color} text-lg`}>
                      {feature.icon}
                    </span>
                    <span className="text-foreground/80">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glassmorphism p-12 rounded-3xl scroll-reveal">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to grow
            their digital presence and connect with customers.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="magnetic-btn animated-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-110 transition-transform">
              Create Your Profile
            </button>
            <button className="glassmorphism px-8 py-3 rounded-full font-semibold text-foreground hover:scale-105 transition-transform">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
