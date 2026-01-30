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
            to="/site1" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Site 1</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              65.000 Euro verloren – wie Heinz und Maria ihr Vermögen zurückgewannen
            </h2>
            <p className="text-muted-foreground mt-2">
              Beim Einbruch in die Sparkasse Gelsenkirchen-Buer wurden rund 3.200 Schließfächer aufgebrochen.
            </p>
          </Link>

          <Link 
            to="/site2" 
            className="block p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-sm">Site 2</span>
            <h2 className="text-xl font-bold mt-2 font-spiegel-serif">
              42.000 Euro verloren – und wie eine Seniorin ihr Vermögen wieder stabilisierte
            </h2>
            <p className="text-muted-foreground mt-2">
              Eine 69-jährige Seniorin fand nach dem Schock einen Weg zurück zur finanziellen Sicherheit.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
