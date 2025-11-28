import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnterpriseIntelligence from "./pages/EnterpriseIntelligence";
import RealtimeIntelligence from "./pages/RealtimeIntelligence";
import PredictivePower from "./pages/PredictivePower";
import Vision2040 from "./pages/Vision2040";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
