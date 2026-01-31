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
import Site11 from "./pages/Site11";
import Site12 from "./pages/Site12";
import Site13 from "./pages/Site13";
import Site14 from "./pages/Site14";
import Site15 from "./pages/Site15";
import Site16 from "./pages/Site16";
import Site17 from "./pages/Site17";
import Site18 from "./pages/Site18";
import Site19 from "./pages/Site19";
import Site20 from "./pages/Site20";
import Site21 from "./pages/Site21";
import Site22 from "./pages/Site22";
import Site23 from "./pages/Site23";
import Site24 from "./pages/Site24";
import Site25 from "./pages/Site25";
import Site26 from "./pages/Site26";
import Site27 from "./pages/Site27";
import Site28 from "./pages/Site28";
import Site29 from "./pages/Site29";
import Site30 from "./pages/Site30";
import Site31 from "./pages/Site31";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
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
          <Route path="/witwe-entdeckt-letzten-brief" element={<Site11 />} />
          <Route path="/lehrerin-verdient-mehr-als-im-beruf" element={<Site12 />} />
          <Route path="/goldene-hochzeit-ohne-geldsorgen" element={<Site13 />} />
          <Route path="/arzt-ueberzeugt-sich-selbst" element={<Site14 />} />
          <Route path="/oma-wird-lieblingsoma" element={<Site15 />} />
          <Route path="/chefarzt-verdoppelt-50000" element={<Site16 />} />
          <Route path="/bankgeheimnis-insider-dokument" element={<Site17 />} />
          <Route path="/siemens-manager-beste-entscheidung" element={<Site18 />} />
          <Route path="/oppositionsfuehrerin-fordert-fair-access" element={<Site19 />} />
          <Route path="/wirtschaftspolitikerin-exklusiv-interview" element={<Site20 />} />
          <Route path="/loewen-milliardaer-warnt-rentner" element={<Site21 />} />
          <Route path="/eu-richtlinie-neue-anlage-chance" element={<Site22 />} />
          <Route path="/loewen-investor-mission-rentner" element={<Site23 />} />
          <Route path="/rentner-ehepaar-muenster-ruhestand" element={<Site24 />} />
          <Route path="/goldene-hochzeit-duesseldorf" element={<Site25 />} />
          <Route path="/rentner-ehepaare-versteckte-alternative" element={<Site26 />} />
          <Route path="/eu-indien-abkommen-bank-renditen" element={<Site27 />} />
          <Route path="/rentner-werner-indien-deal" element={<Site28 />} />
          <Route path="/loewin-investorin-rentner-angebot" element={<Site29 />} />
          <Route path="/loewin-investorin-geheimtipp" element={<Site30 />} />
          <Route path="/loewin-investorin-bank-enthuellung" element={<Site31 />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
