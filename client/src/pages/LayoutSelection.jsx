import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const LayoutCard = ({ title, description, gradient, selected, onSelect }) => {
  return (
    <div className="card-3d glassmorphism rounded-2xl p-6 border border-border/60 group cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <input type="radio" checked={selected} onChange={onSelect} className="accent-primary" />
          <span>{title}</span>
        </label>
        <button type="button" aria-label="Preview layout" className="glassmorphism size-8 rounded-xl grid place-items-center text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>
      <div className={`rounded-xl h-40 w-full bg-gradient-to-br ${gradient} grid place-items-center mb-4 group-hover:scale-[1.02] transition-transform`}>
        <span className="text-2xl text-white">▥</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const LayoutSelection = () => {
  const options = useMemo(() => [
    { id: "modern", title: "Modern Layout", gradient: "from-blue-500 to-cyan-500", description: "A sleek, optimized layout with modern aesthetics and balanced spacing for clarity." },
    { id: "classic", title: "Classic Layout", gradient: "from-teal-400 to-emerald-500", description: "A timeless, professional design emphasizing trust and stability." },
    { id: "vibrant", title: "Portfolio Layout", gradient: "from-purple-500 to-indigo-500", description: "A creative layout with floating social icons, portfolio gallery, and website links for showcasing work." },
    { id: "elegant", title: "Mosaic Portfolio Layout", gradient: "from-fuchsia-500 to-pink-500", description: "Like Portfolio Layout but with a mosaic gallery: 1 rect + 1 square, then 3 squares, then 1 rectangle." },
    { id: "structured", title: "Structured Layout", gradient: "from-yellow-400 to-green-500", description: "A structured layout for listing services with clear calls to action and highlights." },
    { id: "dynamic", title: "Dynamic Layout", gradient: "from-indigo-500 to-blue-600", description: "An optimized layout for online stores, focusing on products, promotions, and seamless shopping experiences." },
  ], []);

  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(options[0].id);
  const onSelect = useCallback((id) => setSelectedId(id), []);

  useEffect(() => {
    sessionStorage.setItem("selectedLayoutId", selectedId);
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="max-w-6xl mx-auto pt-24 pb-16 px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold animated-gradient bg-clip-text text-transparent">Choose a Professional Layout</h1>
            <p className="text-muted-foreground mt-2">Select from our collection of professionally designed layouts to make your profile stand out.</p>
          </div>

          <div className="glassmorphism rounded-2xl p-6 md:p-8 border border-border/60">
            <h3 className="text-lg font-semibold text-foreground mb-6">Available Layouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {options.map((opt) => (
                <LayoutCard
                  key={opt.id}
                  title={opt.title}
                  description={opt.description}
                  gradient={opt.gradient}
                  selected={selectedId === opt.id}
                  onSelect={() => onSelect(opt.id)}
                />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Link to="/create-profile" className="glassmorphism px-6 py-3 rounded-full font-semibold">Back to Profile Details</Link>
              <button
                onClick={() => navigate("/user", { state: { selectedLayoutId: selectedId } })}
                className="magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold"
              >
                Continue to Profile Preview
              </button>
            </div>
          </div>
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default LayoutSelection;


