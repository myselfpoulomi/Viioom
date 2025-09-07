import { useEffect, useState } from "react";

const PreviewSection = () => {
  const [activeLink, setActiveLink] = useState(null);

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

  const links = [
    { emoji: "🎨", text: "My Portfolio" },
    { emoji: "📝", text: "Latest Blog Post" },
    { emoji: "🛍", text: "Shop My Designs" },
    { emoji: "📧", text: "Contact Me" },
  ];

  const socialIcons = ["📷", "🐦", "💼", "🎮"];

  return (
    <section
      id="preview"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-gradient opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See it in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's how your beautiful profile will look to visitors
          </p>
        </div>

        <div className="flex justify-center scroll-reveal">
          <div className="relative w-80 md:w-96 p-6 transform hover:scale-105 transition-transform duration-500">
            {/* Phone Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl glassmorphism p-1">
              {/* Phone Screen */}
              <div className="animated-gradient rounded-[2.2rem] p-6 min-h-[600px] text-primary-foreground relative overflow-hidden">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 glassmorphism rounded-full mx-auto mb-3 flex items-center justify-center breathing">
                    <span className="text-3xl">👋</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Digital Creator & Designer
                  </p>
                </div>

                {/* Interactive Links */}
                <div className="space-y-3 mb-6">
                  {links.map((link, index) => (
                    <div
                      key={index}
                      className="glassmorphism p-3 rounded-xl text-center cursor-pointer hover:scale-105 transition-transform"
                      onMouseEnter={() => setActiveLink(index)}
                      onMouseLeave={() => setActiveLink(null)}
                      style={{
                        transform: activeLink === index ? "scale(1.05)" : "scale(1)",
                        boxShadow:
                          activeLink === index
                            ? "0 10px 30px rgba(0,0,0,0.2)"
                            : "",
                      }}
                    >
                      <span className="font-medium">
                        {link.emoji} {link.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4 mb-6">
                  {socialIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-lg">{icon}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Gallery */}
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="aspect-square glassmorphism rounded-lg overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 animated-gradient rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 animated-gradient rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
