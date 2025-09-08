import React, { useMemo, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";

const StepIndicator = ({ currentStep }) => {
  const steps = useMemo(() => [1, 2, 3], []);
  return (
    <div className="w-full flex items-center justify-center gap-6 mb-8">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              currentStep >= s ? "animated-gradient text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {currentStep > s ? "✓" : s}
          </div>
          {i < steps.length - 1 && (
            <div className={`h-1 w-56 mx-4 rounded-full ${currentStep > s ? "bg-primary/60" : "bg-muted"}`} />
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
  const [step, setStep] = useState(1);

  const next = useCallback(() => setStep((s) => Math.min(3, s + 1)), []);
  const prev = useCallback(() => setStep((s) => Math.max(1, s - 1)), []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="max-w-5xl mx-auto pt-24 pb-16 px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold animated-gradient bg-clip-text text-transparent">
              Create Your Business Profile
            </h1>
            <p className="text-muted-foreground mt-2">
              {step === 1 && "Let's start with your personal information"}
              {step === 2 && "Verify your email address"}
              {step === 3 && "Complete your business profile"}
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
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">No social media links added yet. Click "Add Social Link" to get started.</div>
                  <button className="glassmorphism px-4 py-2 rounded-lg">+ Add Social Link</button>
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
                  <div className="glassmorphism rounded-xl p-6 text-center border border-border/60">
                    <div className="mb-3 text-muted-foreground">Profile Pic</div>
                    <button className="magnetic-btn animated-gradient text-primary-foreground px-5 py-2 rounded-lg">Choose Profile Pic</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="glassmorphism rounded-xl p-6 text-center border border-border/60">
                        <div className="mb-2 text-muted-foreground">Gallery Image {i}</div>
                        <button className="glassmorphism px-4 py-2 rounded-lg">Choose Image</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={prev} className="glassmorphism px-5 py-3 rounded-lg font-semibold text-foreground">Back</button>
                  <button className="magnetic-btn animated-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold">Create Profile</button>
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


