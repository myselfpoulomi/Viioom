import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RatingsSection = () => {
  const navigate = useNavigate();

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

  const stats = [
    {
      icon: "⭐",
      value: "4.7",
      label: "Average Rating",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "👍",
      value: "3",
      label: "Happy Customers",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: "💬",
      value: "3",
      label: "Reviews",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "📈",
      value: "100%",
      label: "Success Rate",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const testimonials = [
    {
      name: "Poulomi Routh",
      role: "Web Developer",
      avatar: "P",
      rating: 5,
      date: "23 Aug 2023, 03:34 pm",
      review:
        "Viioom is super easy to use and I love the personalized QR feature. It feels like having my own mini portfolio. I can just share my QR, and people instantly get to see my work in a clean and professional way without me having to explain too much. It makes networking so much easier and honestly gives a really good first impression.",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Soutrik Ghosh",
      role: "Content Writer",
      avatar: "S",
      rating: 5,
      date: "21 Aug 2023, 06:52 am",
      review:
        "This is a very good website where I can make my own profile's QR CODE and Business, and the best part is, it is absolutely FREE! ❤️",
      color: "from-blue-400 to-purple-500",
    },
    {
      name: "Malay Ghosh",
      role: "Malay's Backlinks",
      avatar: "M",
      rating: 5,
      date: "05 Sept 2023, 06:45 am",
      review:
        "Faces great expressions of viioom.in Fabulous platform to establish local brands and own skills of a hardworking freelancer. Viioom.in is the only good stuff I get from IG",
      color: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <section
      id="ratings"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-gradient opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold animated-gradient bg-clip-text text-transparent mb-4">
            Why people choose us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to
            say about their experience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-2xl text-center scroll-reveal group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-2xl scroll-reveal hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center scroll-reveal">
          <button 
            onClick={() => navigate("/write-review")}
            className="magnetic-btn animated-gradient text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-transform"
          >
            Write Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
