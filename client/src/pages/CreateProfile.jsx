import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const StepIndicator = ({ currentStep }) => {
  const steps = useMemo(() => [1, 2, 3], []);
  return (
    <div className="w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-8">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base ${
              currentStep >= s ? "animated-gradient text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {currentStep > s ? "✓" : s}
          </div>
          {i < steps.length - 1 && (
            <div className={`h-1 w-8 sm:w-16 md:w-24 lg:w-32 xl:w-56 mx-2 sm:mx-4 rounded-full ${currentStep > s ? "bg-primary/60" : "bg-muted"}`} />
          )}
        </div>
      ))}
    </div>
  );
};

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-muted-foreground">{label}</label>
    {children}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-lg glassmorphism px-4 py-3 outline-none text-foreground placeholder:text-muted-foreground border border-border ${props.className || ""}`}
  />
);

const SectionCard = ({ title, children }) => (
  <div className="glassmorphism rounded-2xl p-6 md:p-8 card-3d border border-border/60">
    <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
      {title}
    </h3>
    {children}
  </div>
);

const CreateProfile = () => {
  const location = useLocation();
  const isEditMode = location.state?.isEditMode || false;
  const [step, setStep] = useState(isEditMode ? 3 : 1);
  const navigate = useNavigate();

  // File upload states
  const [profilePic, setProfilePic] = useState(null);
  const [galleryImages, setGalleryImages] = useState(Array(6).fill(null));
  const [videos, setVideos] = useState(Array(2).fill(null));
  // Social links
  const [socialLinks, setSocialLinks] = useState([]);
  const [showAddSocial, setShowAddSocial] = useState(false);
  const [newSocial, setNewSocial] = useState({ platform: 'Whatsapp', url: '' });

  const next = useCallback(() => setStep((s) => Math.min(3, s + 1)), []);
  const prev = useCallback(() => setStep((s) => Math.max(1, s - 1)), []);

  const handleFileUpload = (file, type, index = null) => {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (type === 'profilePic') {
        setProfilePic({ file, preview: e.target.result });
      } else if (type === 'gallery') {
        const newGallery = [...galleryImages];
        newGallery[index] = { file, preview: e.target.result };
        setGalleryImages(newGallery);
      } else if (type === 'video') {
        const newVideos = [...videos];
        newVideos[index] = { file, preview: URL.createObjectURL(file) };
        setVideos(newVideos);
      }
    };
    reader.readAsDataURL(file);
  };

  const addSocialLink = () => {
    if (!newSocial.url.trim()) return;
    setSocialLinks((prev) => [...prev, { ...newSocial }]);
    setNewSocial({ platform: newSocial.platform, url: '' });
    setShowAddSocial(false);
  };

  const removeSocialLink = (idx) => {
    setSocialLinks((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="max-w-5xl mx-auto pt-24 pb-16 px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold animated-gradient bg-clip-text text-transparent">
              {isEditMode ? "Edit Your Business Profile" : "Create Your Business Profile"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {step === 1 && "Let's start with your personal information"}
              {step === 2 && "Verify your email address"}
              {step === 3 && (isEditMode ? "Update your business profile" : "Complete your business profile")}
            </p>
          </div>

          <StepIndicator currentStep={step} />

          {step === 1 && (
            <SectionCard title={<><span>Personal Information</span></>}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name *">
                  <Input placeholder="Enter your full name" />
                </Field>
                <Field label="Email *">
                  <Input placeholder="Enter your email" type="email" />
                </Field>
                <Field label="Password *">
                  <Input placeholder="Enter your password" type="password" />
                </Field>
                <Field label="Confirm Password *">
                  <Input placeholder="Enter your confirm password" type="password" />
                </Field>
                <Field label="Phone Number">
                  <Input placeholder="Enter your phone number" />
                </Field>
              </div>

              <div className="mt-6 flex justify-end">
                <button onClick={next} className="magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                  Continue to Verification
                </button>
              </div>
            </SectionCard>
          )}

          {step === 2 && (
            <SectionCard title="Verify Your Email">
              <div className="max-w-md mx-auto">
                <Field label="Enter Verification Code">
                  <Input placeholder="Enter 6-digit code" />
                </Field>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={prev} className="glassmorphism px-5 py-3 rounded-lg font-semibold text-foreground">
                    Back
                  </button>
                  <button onClick={next} className="magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                    Verify OTP
                  </button>
                </div>
                <div className="text-center mt-4 text-sm text-muted-foreground">Resend OTP</div>
              </div>
            </SectionCard>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <SectionCard title="Business Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Business Name *">
                    <Input placeholder="Enter business name" />
                  </Field>
                  <Field label="Business Type *">
                    <Input placeholder="Enter business type" />
                  </Field>
                  <Field label="Business Phone">
                    <Input placeholder="Enter business phone" />
                  </Field>
                  <Field label="Business Email">
                    <Input placeholder="Enter business email" />
                  </Field>
                  <Field label="Google Rating (0-5)">
                    <Input placeholder="Enter Google rating" />
                  </Field>
                  <Field label="Store Type">
                    <Input placeholder="Select store type" />
                  </Field>
                  <Field label="Open Time">
                    <Input placeholder="--:--" />
                  </Field>
                  <Field label="Close Time">
                    <Input placeholder="--:--" />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="Business Description">
                    <textarea className="w-full min-h-28 rounded-lg glassmorphism px-4 py-3 outline-none text-foreground placeholder:text-muted-foreground border border-border" placeholder="Describe your business..." />
                  </Field>
                </div>
                <div className="mt-5">
                  <Field label="Business Address">
                    <textarea className="w-full min-h-24 rounded-lg glassmorphism px-4 py-3 outline-none text-foreground placeholder:text-muted-foreground border border-border" placeholder="Enter address" />
                  </Field>
                </div>
              </SectionCard>

              <SectionCard title="Social Media Links">
                <div className="space-y-4">
                  {socialLinks.length === 0 && (
                    <div className="text-sm text-muted-foreground">No social media links added yet. Click "+" to add.</div>
                  )}
                  {socialLinks.length > 0 && (
                    <div className="space-y-2">
                      {socialLinks.map((s, idx) => (
                        <div key={idx} className="glassmorphism border border-border/60 rounded-lg p-3 flex items-center justify-between">
                          <div className="text-sm text-foreground"><span className="font-medium">{s.platform}</span> — <a className="text-primary hover:underline" href={s.url} target="_blank" rel="noreferrer">{s.url}</a></div>
                          <button onClick={() => removeSocialLink(idx)} className="px-2 py-1 text-xs rounded hover:bg-foreground/5">Remove</button>
                        </div>
                      ))}
                    </div>
                  )}

                  {showAddSocial ? (
                    <div className="grid grid-cols-1 md:grid-cols-[200px,1fr,auto] gap-3 items-end">
                      <div>
                        <label className="text-xs text-muted-foreground">Platform</label>
                        <select
                          className="w-full rounded-lg glassmorphism px-4 py-3 border border-border outline-none"
                          value={newSocial.platform}
                          onChange={(e) => setNewSocial((v) => ({ ...v, platform: e.target.value }))}
                        >
                          {['Whatsapp','Spotify','Telegram','Upwork','Fiverr','Pinterest','Wishlink','Hyped Creators','Reddit','Discord','Twitch'].map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground">Profile/Channel URL</label>
                        <Input placeholder="https://..." value={newSocial.url} onChange={(e) => setNewSocial((v) => ({ ...v, url: e.target.value }))} />
                      </div>
                      <div className="flex gap-2">
                        <button onClick={addSocialLink} className="magnetic-btn animated-gradient text-primary-foreground px-4 py-3 rounded-lg font-semibold">Add</button>
                        <button onClick={() => setShowAddSocial(false)} className="glassmorphism px-4 py-3 rounded-lg">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <button onClick={() => setShowAddSocial(true)} className="glassmorphism px-4 py-2 rounded-lg">+ Add Social Link</button>
                    </div>
                  )}
                </div>
              </SectionCard>

              <SectionCard title="Website & App Links">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Website URL">
                    <Input placeholder="Enter website url" />
                  </Field>
                  <Field label="Play Store Link">
                    <Input placeholder="Enter play store link" />
                  </Field>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="glassmorphism px-4 py-2 rounded-lg">+ Add Link</button>
                </div>
              </SectionCard>

              <SectionCard title="Upload Documents">
                <div className="grid grid-cols-1 gap-5">
                  {/* Profile Picture */}
                  <div className="glassmorphism rounded-xl p-6 text-center border border-border/60">
                    <div className="mb-3 text-muted-foreground">Profile Pic</div>
                    {profilePic ? (
                      <div className="space-y-3">
                        <img src={profilePic.preview} alt="Profile preview" className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-border/60" />
                        <div className="flex gap-2 justify-center">
                          <label className="glassmorphism px-4 py-2 rounded-lg cursor-pointer hover:bg-foreground/5 transition-colors">
                            Change Pic
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e.target.files[0], 'profilePic')}
                            />
                          </label>
                          <button 
                            onClick={() => setProfilePic(null)}
                            className="glassmorphism px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="magnetic-btn animated-gradient text-primary-foreground px-5 py-2 rounded-lg cursor-pointer">
                        Choose Profile Pic
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e.target.files[0], 'profilePic')}
                        />
                      </label>
                    )}
                  </div>

                  {/* Gallery Images */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[0,1,2,3,4,5].map((i) => (
                      <div key={i} className="glassmorphism rounded-xl p-6 text-center border border-border/60">
                        <div className="mb-2 text-muted-foreground">Gallery Image {i + 1}</div>
                        {galleryImages[i] ? (
                          <div className="space-y-2">
                            <img src={galleryImages[i].preview} alt={`Gallery ${i + 1}`} className="w-full h-20 object-cover rounded-lg border border-border/60" />
                            <div className="flex gap-1 justify-center">
                              <label className="glassmorphism px-2 py-1 rounded text-xs cursor-pointer hover:bg-foreground/5 transition-colors">
                                Change
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => handleFileUpload(e.target.files[0], 'gallery', i)}
                                />
                              </label>
                              <button 
                                onClick={() => {
                                  const newGallery = [...galleryImages];
                                  newGallery[i] = null;
                                  setGalleryImages(newGallery);
                                }}
                                className="glassmorphism px-2 py-1 rounded text-xs text-red-600 hover:bg-red-50 transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ) : (
                          <label className="glassmorphism px-4 py-2 rounded-lg cursor-pointer hover:bg-foreground/5 transition-colors">
                            Choose Image
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e.target.files[0], 'gallery', i)}
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Video Upload */}
                  <div className="glassmorphism rounded-xl p-6 border border-border/60">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Video Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[0,1].map((i) => (
                        <div key={i} className="glassmorphism rounded-xl p-4 text-center border border-border/60">
                          <div className="mb-2 text-muted-foreground">Video {i + 1}</div>
                          {videos[i] ? (
                            <div className="space-y-2">
                              <video src={videos[i].preview} className="w-full h-32 object-cover rounded-lg border border-border/60" controls />
                              <div className="flex gap-1 justify-center">
                                <label className="glassmorphism px-2 py-1 rounded text-xs cursor-pointer hover:bg-foreground/5 transition-colors">
                                  Change
                                  <input
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    onChange={(e) => handleFileUpload(e.target.files[0], 'video', i)}
                                  />
                                </label>
                                <button 
                                  onClick={() => {
                                    const newVideos = [...videos];
                                    newVideos[i] = null;
                                    setVideos(newVideos);
                                  }}
                                  className="glassmorphism px-2 py-1 rounded text-xs text-red-600 hover:bg-red-50 transition-colors"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          ) : (
                            <label className="glassmorphism px-4 py-2 rounded-lg cursor-pointer hover:bg-foreground/5 transition-colors">
                              Choose Video
                              <input
                                type="file"
                                accept="video/*"
                                className="hidden"
                                onChange={(e) => handleFileUpload(e.target.files[0], 'video', i)}
                              />
                            </label>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={prev} className="glassmorphism px-5 py-3 rounded-lg font-semibold text-foreground">Back</button>
                  <button onClick={() => navigate(isEditMode ? '/layout-selection' : '/profile')} className="magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                    {isEditMode ? "Update Profile" : "Create Profile"}
                  </button>
                </div>
              </SectionCard>
            </div>
          )}
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default CreateProfile;


