import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParticleSystem from "./components/ParticleSystem";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Profiles from "./pages/Profiles";
import Ratings from "./pages/Ratings";
import NotFound from "./pages/NotFound";
import CreateProfile from "./pages/CreateProfile";
import LayoutSelection from "./pages/LayoutSelection";
import Login from "./pages/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
