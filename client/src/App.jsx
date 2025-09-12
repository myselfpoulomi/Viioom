import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParticleSystem from "./components/ParticleSystem";
import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Profiles from "./pages/Profiles";
import Ratings from "./pages/Ratings";
import NotFound from "./pages/NotFound";
import CreateProfile from "./pages/CreateProfile";
import LayoutSelection from "./pages/LayoutSelection";
import Login from "./pages/Login";
import Layout1 from "./components/layouts/Layout1";
import User from "./pages/User";
import WriteReview from "./pages/WriteReview";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ParticleSystem />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/layout-selection" element={<LayoutSelection />} />
            <Route path="/layout1" element={<Layout1 />} />
            <Route path="/user" element={<User />} />
            <Route path="/profile" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/write-review" element={<WriteReview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
