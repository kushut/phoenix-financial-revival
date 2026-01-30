import { Link } from "react-router-dom";
import SpiegelHeader from "@/components/SpiegelHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      <div className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-spiegel-serif">Artikel-Übersicht</h1>
        
        <div className="space-y-4 sm:space-y-6">
          <Link 
            to="/gelsenkirchener-sparkassen-fiasko" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Sparkassen-Fiasko</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              65.000 Euro im Gelsenkirchener Sparkassen-Fiasko verloren – wie Heinz und Maria ihr Vermögen zurückgewannen
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Beim Einbruch in die Sparkasse Gelsenkirchen-Buer wurden rund 3.200 Schließfächer aufgebrochen.
            </p>
          </Link>

          <Link 
            to="/42000-euro-verloren" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Seniorin-Geschichte</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              42.000 Euro verloren – und wie Hildegard Krause ihr Vermögen wieder stabilisierte
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Hildegard Krause (69) fand nach dem Schock einen Weg zurück zur finanziellen Sicherheit.
            </p>
          </Link>

          <Link 
            to="/maschmeyer-investment-geheimnis" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Maschmeyer-Interview</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Bis zu 17% im Monat" – Carsten Maschmeyer enthüllt geheimes Bank-Angebot
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Der „Höhle der Löwen"-Investor spricht über ein exklusives Angebot einer deutschen Großbank.
            </p>
          </Link>

          <Link 
            to="/frank-thelen-cheat-code" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Thelen-Interview</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Das ist wie ein Cheat-Code" – Frank Thelen über sein neues Lieblings-Investment
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Der Tech-Investor erklärt, warum er auf ein exklusives Angebot einer Großbank setzt.
            </p>
          </Link>

          <Link 
            to="/eu-bankenregeln-fair-access" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">EU-Regulierung</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              EU-Gesetz zwingt Banken zur Fairness: Institutionelle Renditen jetzt für alle
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Die neue CRD VI-Richtlinie revolutioniert den Finanzmarkt – so profitieren Privatanleger.
            </p>
          </Link>

          <Link 
            to="/vw-ingenieur-finanzielle-freiheit" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Schicksalswende</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Nach Jobverlust mit 54: Wie ein VW-Ingenieur durch Zufall finanzielle Freiheit fand
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Rainer Hoffmann wurde nach 28 Jahren gekündigt. Ein Gespräch mit seinem Bankberater veränderte alles.
            </p>
          </Link>

          <Link 
            to="/krankenschwester-entdeckt-bank-geheimnis" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Exklusiv-Bericht</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Nach 30 Jahren Schichtdienst: Krankenschwester entdeckt „geheimes" Bank-Angebot
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Petra Schneider wollte nur ihr Erspartes sicher anlegen. Was sie fand, veränderte ihr Leben.
            </p>
          </Link>

          <Link 
            to="/rentner-verdoppelt-alterseinkommen" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Ruhestand & Finanzen</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Meine Rente reicht jetzt locker" – Wie Werner Berger (71) sein Alterseinkommen verdoppelte
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Der ehemalige Postbeamte wollte nur seine Ersparnisse vor der Inflation schützen.
            </p>
          </Link>

          <Link 
            to="/finanztest-warnung-rentner" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Verbraucherschutz</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Finanztest warnt: Warum Rentner ihr Erspartes nicht auf dem Girokonto lassen sollten
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Stiftung Warentest empfiehlt Alternativen – ein Ehepaar aus Dresden zeigt, wie es besser geht.
            </p>
          </Link>

          <Link 
            to="/stiftung-warentest-warnung-sparer" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Verbraucherschutz</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Stiftung Warentest warnt: „Diese Anlageformen kosten Rentner jährlich Milliarden"
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Die Verbraucherschützer kritisieren teure Bankprodukte – und entdecken eine überraschende Ausnahme.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
