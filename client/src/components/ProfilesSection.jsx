import { useEffect } from "react";

const ProfilesSection = () => {
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

  const profiles = [
    {
      name: "Manasa Ghee",
      category: "Food Manufacturing",
      location: "South 24 Parganas",
      avatar: "🧈",
      bgColor: "from-orange-400 to-yellow-500",
      verified: true,
    },
    {
      name: "Pieus Singha Roy",
      category: "Social Media Manager, Editor",
      location: "Kolkata",
      avatar: "👩‍💼",
      bgColor: "from-pink-400 to-purple-500",
      verified: true,
    },
    {
      name: "Utsotspyd",
      category: "Clothing",
      status: "online",
      avatar: "👕",
      bgColor: "from-blue-400 to-indigo-500",
      online: true,
    },
    {
      name: "Cghj",
      category: "Service Provider",
      avatar: "💼",
      bgColor: "from-purple-400 to-indigo-500",
    },
    {
      name: "Eashwaree Sanpui",
      category: "Service Provider",
      avatar: "👤",
      bgColor: "from-gray-400 to-gray-600",
    },
    {
      name: "Debraj Nandan",
      category: "Service Provider",
      avatar: "👨‍💼",
      bgColor: "from-teal-400 to-cyan-500",
    },
    {
      name: "Malay's Backlinks",
      category: "Guest Posting, Advertisement, Digital Marketing",
      status: "online",
      location: "Asansol, West Bengal",
      avatar: "🔗",
      bgColor: "from-yellow-400 to-orange-500",
      online: true,
    },
    {
      name: "Sadeka khatun",
      category: "Service Provider",
      avatar: "👩",
      bgColor: "from-rose-400 to-pink-500",
    },
    {
      name: "Rajdeep Palit",
      category: "Service Provider",
      avatar: "👨",
      bgColor: "from-green-400 to-emerald-500",
    },
    {
      name: "SHOUVIK DEBNATH",
      category: "Service Provider",
      avatar: "🧑‍💻",
      bgColor: "from-indigo-400 to-purple-500",
    },
    {
      name: "Sujay Adhikary",
      category: "Service Provider",
      avatar: "👨‍🏫",
      bgColor: "from-cyan-400 to-blue-500",
    },
    {
      name: "Nitesh Bag",
      category: "Service Provider",
      avatar: "💻",
      bgColor: "from-amber-400 to-orange-500",
    },
    {
      name: "Shreyasee Das",
      category: "Service Provider",
      avatar: "👩‍💻",
      bgColor: "from-purple-400 to-pink-500",
    },
    {
      name: "Viioom.in",
      category: "Your Digital Daddy",
      status: "online",
      location: "West Bengal",
      avatar: "🚀",
      bgColor: "animated-gradient",
      verified: true,
      online: true,
    },
    {
      name: "Rishit Chakraborty",
      category: "Editor",
      status: "online",
      avatar: "🎬",
      bgColor: "from-red-400 to-rose-500",
      verified: true,
      online: true,
    },
    {
      name: "Pkook07_",
      category: "Content Creator",
      location: "Kolkata",
      avatar: "📸",
      bgColor: "from-purple-400 to-indigo-500",
    },
    {
      name: "Ruupayan Halder",
      category: "Digital Marketer",
      location: "Kolkata, India",
      avatar: "📊",
      bgColor: "from-blue-400 to-cyan-500",
    },
    {
      name: "Poulomi Routh",
      category: "Freelancer",
      location: "Kolkata, India",
      avatar: "✨",
      bgColor: "from-green-400 to-teal-500",
      verified: true,
    },
  ];

  return (
    <section
      id="profiles"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 animated-gradient opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold animated-gradient bg-clip-text text-transparent mb-4">
            Featured Profiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover amazing businesses and service providers in your area
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="glassmorphism p-4 rounded-xl scroll-reveal group cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${profile.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-2xl">{profile.avatar}</span>
                </div>
                {profile.online && (
                  <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
                )}
                {profile.verified && (
                  <div className="absolute top-0 right-1/3 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <h4 className="font-semibold text-sm text-foreground text-center mb-1 line-clamp-1">
                {profile.name}
              </h4>

              <p className="text-xs text-muted-foreground text-center line-clamp-2 mb-1">
                {profile.category}
              </p>

              {profile.location && (
                <p className="text-xs text-muted-foreground/70 text-center flex items-center justify-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="line-clamp-1">{profile.location}</span>
                </p>
              )}

              {profile.status && (
                <div className="mt-2 text-xs text-green-500 text-center">
                  {profile.status}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
