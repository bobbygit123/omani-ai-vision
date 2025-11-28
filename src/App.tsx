import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import EnterpriseIntelligence from "./pages/EnterpriseIntelligence";
import RealtimeIntelligence from "./pages/RealtimeIntelligence";
import PredictivePower from "./pages/PredictivePower";
import Vision2040 from "./pages/Vision2040";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/enterprise-intelligence" element={<EnterpriseIntelligence />} />
            <Route path="/realtime-intelligence" element={<RealtimeIntelligence />} />
            <Route path="/predictive-power" element={<PredictivePower />} />
            <Route path="/vision-2040" element={<Vision2040 />} />
            <Route path="/our-platform" element={<TechStack />} />
            <Route path="/contact-ai" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
