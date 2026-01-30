import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Site1 from "./pages/Site1";
import Site2 from "./pages/Site2";
import Site3 from "./pages/Site3";
import Site4 from "./pages/Site4";
import Site5 from "./pages/Site5";
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
          <Route path="/site1" element={<Site1 />} />
          <Route path="/site2" element={<Site2 />} />
          <Route path="/site3" element={<Site3 />} />
          <Route path="/site4" element={<Site4 />} />
          <Route path="/site5" element={<Site5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
