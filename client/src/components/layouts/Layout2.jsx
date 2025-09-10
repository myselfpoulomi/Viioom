import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Star, Globe, ExternalLink, Download, QrCode, Copy, X } from 'lucide-react';
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
  storeType: 'Service',
  openTime: '09:00',
  closeTime: '18:00',
  socialLinks: [
    { label: 'Twitter', url: 'https://twitter.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'Instagram', url: 'https://instagram.com/' },
  ],
  websites: [
    { label: 'Website', url: 'https://example.com' },
    { label: 'Play Store', url: 'https://play.google.com/store' },
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

const Layout2 = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const coverSrc = params.get('bg') || profile.cover;
  const [modalContent, setModalContent] = useState(null);
  const [modalType, setModalType] = useState(null);
  
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

  return (
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <img src={profile.avatar} alt={profile.name} className="w-28 h-28 rounded-full object-cover border-4 border-background shadow-xl" />
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">{profile.name}</h1>
          <p className="text-muted-foreground">{profile.title}</p>
        </div>

        {/* Business Information Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d">
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

        {/* Social Media Links Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d">
          <h2 className="text-2xl font-semibold mb-6">Social Media</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="glassmorphism p-4 rounded-xl border border-border/60 flex items-center justify-between hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{s.label}</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Website & App Links Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d">
          <h2 className="text-2xl font-semibold mb-6">Website & Apps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.websites.map((w) => (
              <a key={w.label} href={w.url} target="_blank" rel="noreferrer" className="glassmorphism p-4 rounded-xl border border-border/60 flex items-center justify-between hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{w.label}</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Media Section - Vertical Layout */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d">
          <h2 className="text-2xl font-semibold mb-6">Media</h2>
          <div className="space-y-4">
            {profile.gallery.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden glassmorphism border border-border/60 cursor-pointer hover:scale-105 transition-transform" onClick={() => openModal(src, 'image')}>
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery - Vertical Layout */}
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d">
          <h2 className="text-2xl font-semibold mb-6">Video Gallery</h2>
          <div className="space-y-6">
            {profile.videos.slice(0, 2).map((src, i) => (
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
        <div className="glassmorphism p-8 rounded-2xl mb-8 card-3d border border-border/60">
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
  );
};

export default Layout2;
