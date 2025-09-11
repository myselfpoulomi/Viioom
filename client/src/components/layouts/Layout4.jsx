import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Star, Globe, ExternalLink, Download, QrCode, Copy, X, Facebook, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const profile = {
  name: 'Alex Johnson',
  title: 'Digital Creator & Entrepreneur',
  about:
    'Passionate digital creator with 8+ years of experience in web development, design, and entrepreneurship. I help businesses transform their digital presence through innovative solutions and creative strategies.',
  phone: '+1 (555) 123-4567',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  hours: 'Mon–Fri 9AM–6PM',
  rating: 4.9,
  ratingLabel: 'Google Rating',
  socialLinks: [
    { label: 'Facebook', url: 'https://facebook.com/', icon: Facebook },
    { label: 'Instagram', url: 'https://instagram.com/', icon: Instagram },
    { label: 'LinkedIn', url: 'https://linkedin.com/', icon: Linkedin },
    { label: 'YouTube', url: 'https://youtube.com/', icon: Youtube },
  ],
  websites: [
    { label: 'Website', url: 'https://example.com', icon: Globe },
    { label: 'Play Store', url: 'https://play.google.com/store', icon: ExternalLink },
  ],
  avatar:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  cover: '/profile-bg.jpg',
  gallery: [
    'https://images.unsplash.com/photo-1520975922215-2308c0f02487?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975730476-21f1bbf1a6bd?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop',
  ],
  videos: [
    'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
  ],
};

const Layout4 = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const coverSrc = params.get('bg') || profile.cover;
  const [modalContent, setModalContent] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [customButtons, setCustomButtons] = useState([]);
  
  useEffect(() => {
    const container = document.getElementById('profile-particles');
    if (!container) return;
    let mounted = true;
    const createParticle = () => {
      if (!mounted) return;
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 5 + 8}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.background = `hsl(${Math.random() * 60 + 240}, 90%, 70%)`;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 13000);
    };
    const interval = setInterval(createParticle, 600);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  const openModal = (content, type) => {
    setModalContent(content);
    setModalType(type);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalType(null);
  };

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('customButtons');
      if (stored) setCustomButtons(JSON.parse(stored));
    } catch {}
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
      <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      {/* Background Banner + Color Overlay */}
      <img
        src={coverSrc}
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/60 via-indigo-700/50 to-fuchsia-600/50"></div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      {/* Small particles like other animations */}
      <div id="profile-particles" className="absolute inset-0 pointer-events-none z-[1]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 glassmorphism rounded-full floating opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 glassmorphism rounded-full floating floating-delay-1 opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 pt-28">
        {/* Header with Profile Info and Social Icons */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <img src={profile.avatar} alt={profile.name} className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-xl" />
          </div>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-foreground">{profile.name}</h1>
          <p className="text-muted-foreground text-lg">{profile.title}</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6">
            {profile.socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glassmorphism w-12 h-12 rounded-full border border-border/60 flex items-center justify-center hover:scale-110 transition-transform hover:border-primary/50"
                >
                  <IconComponent className="h-5 w-5 text-foreground" />
                </a>
              );
            })}
          </div>

          {/* Custom Buttons under header */}
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {customButtons.map((btn, i) => (
              <div key={i} className="relative group">
                <button className="glassmorphism px-4 py-2 rounded-xl border border-border/60 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{btn.name}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
                {btn.links?.length > 0 && (
                  <div className="absolute left-0 mt-2 min-w-[220px] z-20 hidden group-hover:block">
                    <div className="glassmorphism rounded-xl border border-border/60 p-2 space-y-1">
                      {btn.links.map((l, li) => (
                        <a key={li} href={l.url} target="_blank" rel="noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-foreground/5">
                          <span className="text-sm">{l.label}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Business Information Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d" style={{animation: 'gentleFloat 6s ease-in-out infinite'}}>
          <h2 className="text-2xl font-semibold mb-6">About</h2>
          <p className="text-muted-foreground leading-relaxed">{profile.about}</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="glassmorphism rounded-2xl p-5 border border-border/60">
              <div className="flex items-center gap-3 text-muted-foreground"><Phone className="h-4 w-4" /><span>Phone</span></div>
              <div className="mt-1 font-medium text-foreground">{profile.phone}</div>
            </div>
            <div className="glassmorphism rounded-2xl p-5 border border-border/60">
              <div className="flex items-center gap-3 text-muted-foreground"><Mail className="h-4 w-4" /><span>Email</span></div>
              <div className="mt-1 font-medium text-foreground">{profile.email}</div>
            </div>
            <div className="glassmorphism rounded-2xl p-5 border border-border/60">
              <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-4 w-4" /><span>Location</span></div>
              <div className="mt-1 font-medium text-foreground">{profile.location}</div>
            </div>
            <div className="glassmorphism rounded-2xl p-5 border border-border/60">
              <div className="flex items-center gap-3 text-muted-foreground"><Clock className="h-4 w-4" /><span>Hours</span></div>
              <div className="mt-1 font-medium text-foreground">{profile.hours}</div>
            </div>
          </div>
          <div className="mt-6 glassmorphism rounded-2xl p-5 border border-border/60 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground"><Star className="h-4 w-4" /><span>{profile.ratingLabel}</span></div>
            <div className="mt-1 text-2xl font-bold">{profile.rating}</div>
          </div>
        </div>

        {/* Photo Gallery custom mosaic: Row1 (rect + square), Row2 (3 square), Row3 (rectangle) */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d" style={{animation: 'gentleFloat 6s ease-in-out infinite', animationDelay: '2s'}}>
          <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-6 gap-4 md:gap-6">
            {/* Row 1: rectangle (col-span-4) + square (col-span-2) */}
            {profile.gallery[0] && (
              <div className="col-span-4 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(profile.gallery[0], 'image')}>
                <div className="h-48 md:h-56 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img src={profile.gallery[0]} alt="Gallery 1" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
            {profile.gallery[1] && (
              <div className="col-span-2 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(profile.gallery[1], 'image')}>
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img src={profile.gallery[1]} alt="Gallery 2" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* Row 2: 3 squares (2-2-2) */}
            {profile.gallery.slice(2, 5).map((src, idx) => (
              <div key={`r2-${idx}`} className="col-span-2 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(src, 'image')}>
                <div className="h-40 md:h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img src={src} alt={`Gallery ${idx + 3}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}

            {/* Row 3: 1 rectangle full width */}
            {profile.gallery[5] && (
              <div className="col-span-6 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(profile.gallery[5], 'image')}>
                <div className="h-48 md:h-56 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img src={profile.gallery[5]} alt="Gallery 6" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Gallery - One per row */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d" style={{animation: 'gentleFloat 6s ease-in-out infinite', animationDelay: '4s'}}>
          <h2 className="text-2xl font-semibold mb-6">Video Gallery</h2>
          <div className="grid grid-cols-1 gap-6">
            {profile.videos.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden glassmorphism border border-border/60 cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(src, 'video')}>
                <div className="relative pt-[56.25%]">
                  <video
                    src={src}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d border border-border/60" style={{animation: 'gentleFloat 6s ease-in-out infinite', animationDelay: '5s'}}>
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-xl p-5 border border-border/60 hover:translate-y-[-3px] transition-transform">
              <p className="text-muted-foreground mb-4">Download your digital business card instantly.</p>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-background/70 border border-border/60 text-foreground hover:bg-foreground/5 transition-colors">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
            <div className="glassmorphism rounded-xl p-5 border border-border/60 hover:translate-y-[-3px] transition-transform">
              <p className="text-muted-foreground mb-4">Create a custom QR of your landing page in minutes.</p>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-background/70 border border-border/60 text-foreground hover:bg-foreground/5 transition-colors">
                <QrCode className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
            <div className="glassmorphism rounded-xl p-5 border border-border/60 hover:translate-y-[-3px] transition-transform">
              <p className="text-muted-foreground mb-3">Your profile shortlink for easy sharing.</p>
              <div className="flex items-center gap-2 glassmorphism border border-border/60 rounded-lg px-3 py-2 justify-between">
                <a href="https://viioom.in/johndoe" target="_blank" rel="noreferrer" className="text-sm text-foreground/90 hover:underline">viioom.in/johndoe</a>
                <button
                  aria-label="Copy link"
                  className="p-2 rounded-md hover:bg-muted/40"
                  onClick={() => navigator.clipboard && navigator.clipboard.writeText('https://viioom.in/johndoe')}
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-105 transition-transform z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {modalType === 'image' ? (
              <img src={modalContent} alt="Full size" className="max-w-full max-h-full object-contain rounded-xl" />
            ) : (
              <video
                src={modalContent}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-xl"
              />
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Layout4;
