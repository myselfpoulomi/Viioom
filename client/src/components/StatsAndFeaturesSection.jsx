import React from 'react';
import { Users, Star, Award, User2, Bolt, MessageSquare } from 'lucide-react';

const Stat = ({ icon: Icon, value, label, bg }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${bg}`}>
      <Icon className="text-white" size={28} />
    </div>
    <div className="text-4xl font-bold text-foreground mb-2">{value}</div>
    <div className="text-muted-foreground text-sm">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, bg }) => (
  <div className="glassmorphism rounded-2xl p-6 text-center border border-border/60">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${bg}`}>
      <Icon className="text-white" size={22} />
    </div>
    <h4 className="text-foreground font-semibold mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const StatsAndFeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <Stat icon={Users} value={"42+"} label="Active Users" bg="bg-emerald-500" />
          <Stat icon={Star} value={"3+"} label="Customer Reviews" bg="bg-orange-500" />
          <Stat icon={Award} value={"4.7/5"} label="Average Rating" bg="bg-purple-500" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <FeatureCard
            icon={User2}
            title="Business Profile"
            description="Complete business information and branding"
            bg="bg-purple-500"
          />
          <FeatureCard
            icon={Bolt}
            title="Social Integration"
            description="Connect all your social media platforms"
            bg="bg-emerald-500"
          />
          <FeatureCard
            icon={MessageSquare}
            title="Customer Reviews"
            description="Build trust with authentic customer feedback"
            bg="bg-orange-500"
          />
        </div>

        <div className="text-center">
          <a href="/create-profile" className="inline-flex items-center gap-2 magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold">
            <span>⚡</span>
            <span>Transform Your Business Presence</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsAndFeaturesSection;


