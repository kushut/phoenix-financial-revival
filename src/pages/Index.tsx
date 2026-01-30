import { Link } from "react-router-dom";
import SpiegelHeader from "@/components/SpiegelHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      <div className="max-w-[680px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 font-spiegel-serif">Artikel-Übersicht</h1>
        
        <div className="space-y-6">
          <Link 
            to="/gelsenkirchener-sparkassen-fiasko" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Sparkassen-Fiasko</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              65.000 Euro im Gelsenkirchener Sparkassen-Fiasko verloren – wie Heinz und Maria ihr Vermögen zurückgewannen
            </h2>
            <p className="text-muted-foreground mt-2">
              Beim Einbruch in die Sparkasse Gelsenkirchen-Buer wurden rund 3.200 Schließfächer aufgebrochen.
            </p>
          </Link>

          <Link 
            to="/42000-euro-verloren" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Seniorin-Geschichte</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              42.000 Euro verloren – und wie Hildegard Krause ihr Vermögen wieder stabilisierte
            </h2>
            <p className="text-muted-foreground mt-2">
              Hildegard Krause (69) fand nach dem Schock einen Weg zurück zur finanziellen Sicherheit.
            </p>
          </Link>

          <Link 
            to="/maschmeyer-investment-geheimnis" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Maschmeyer-Interview</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              „Bis zu 17% im Monat" – Carsten Maschmeyer enthüllt geheimes Bank-Angebot
            </h2>
            <p className="text-muted-foreground mt-2">
              Der „Höhle der Löwen"-Investor spricht über ein exklusives DKB-Angebot für aktives Depot-Management.
            </p>
          </Link>

          <Link 
            to="/frank-thelen-cheat-code" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Thelen-Interview</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              „Das ist wie ein Cheat-Code" – Frank Thelen über sein neues Lieblings-Investment
            </h2>
            <p className="text-muted-foreground mt-2">
              Der Tech-Investor erklärt, warum er auf ein exklusives DKB-Angebot setzt.
            </p>
          </Link>

          <Link 
            to="/eu-bankenregeln-fair-access" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">EU-Regulierung</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              EU-Gesetz zwingt Banken zur Fairness: Institutionelle Renditen jetzt für alle
            </h2>
            <p className="text-muted-foreground mt-2">
              Die neue CRD VI-Richtlinie revolutioniert den Finanzmarkt – so profitieren Privatanleger.
            </p>
          </Link>

          <Link 
            to="/vw-ingenieur-finanzielle-freiheit" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Schicksalswende</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              Nach Jobverlust mit 54: Wie ein VW-Ingenieur durch Zufall finanzielle Freiheit fand
            </h2>
            <p className="text-muted-foreground mt-2">
              Rainer Hoffmann wurde nach 28 Jahren gekündigt. Ein Gespräch mit seinem Bankberater veränderte alles.
            </p>
          </Link>

          <Link 
            to="/krankenschwester-entdeckt-bank-geheimnis" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Exklusiv-Bericht</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              Nach 30 Jahren Schichtdienst: Krankenschwester entdeckt „geheimes" Bank-Angebot
            </h2>
            <p className="text-muted-foreground mt-2">
              Petra Schneider wollte nur ihr Erspartes sicher anlegen. Was sie fand, veränderte ihr Leben.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
