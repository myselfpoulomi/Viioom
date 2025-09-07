import { useEffect } from "react";
import { Link, Users, Image, Smartphone } from "lucide-react";

const features = [
  {
    icon: Link,
    title: "Organize All Links",
    description:
      "Share all your important links in one organized, beautiful profile that's easy to navigate.",
    highlight: "✨ Drag & Drop Interface",
  },
  {
    icon: Users,
    title: "Social Showcase",
    description:
      "Connect all your social media profiles and let visitors find you everywhere with one click.",
    highlight: "🔗 Auto-Connect 20+ Platforms",
  },
  {
    icon: Image,
    title: "Photo Gallery",
    description:
      "Display your best photos in a stunning gallery that showcases your personality and work.",
    highlight: "📱 Infinite Scroll Gallery",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Fast, responsive design that looks perfect on every device and loads instantly.",
    highlight: "⚡ 0.5s Load Time",
  },
];

const FeaturesSection = () => {
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

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need in one place
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, powerful features to help you share your digital presence
            beautifully
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-3d glassmorphism p-8 rounded-2xl text-center scroll-reveal group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 animated-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm text-primary font-medium">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
