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
import Site6 from "./pages/Site6";
import Site7 from "./pages/Site7";
import Site8 from "./pages/Site8";
import Site9 from "./pages/Site9";
import Site10 from "./pages/Site10";
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
          <Route path="/gelsenkirchener-sparkassen-fiasko" element={<Site1 />} />
          <Route path="/42000-euro-verloren" element={<Site2 />} />
          <Route path="/maschmeyer-investment-geheimnis" element={<Site3 />} />
          <Route path="/frank-thelen-cheat-code" element={<Site4 />} />
          <Route path="/eu-bankenregeln-fair-access" element={<Site5 />} />
          <Route path="/vw-ingenieur-finanzielle-freiheit" element={<Site6 />} />
          <Route path="/krankenschwester-entdeckt-bank-geheimnis" element={<Site7 />} />
          <Route path="/rentner-verdoppelt-alterseinkommen" element={<Site8 />} />
          <Route path="/finanztest-warnung-rentner" element={<Site9 />} />
          <Route path="/stiftung-warentest-warnung-sparer" element={<Site10 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
