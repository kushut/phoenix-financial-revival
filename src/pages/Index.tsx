import { Link } from "react-router-dom";
import SpiegelHeader from "@/components/SpiegelHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      <div className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold font-spiegel-serif">Artikel-Übersicht</h1>
          <Link 
            to="/admin"
            className="text-sm bg-primary text-white px-3 py-1.5 rounded hover:bg-primary/90 transition-colors"
          >
            Admin
          </Link>
        </div>
        
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
            <span className="category-tag text-xs sm:text-sm">Exklusiv-Interview</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Bis zu 17% im Monat" – Bekannter „Löwen"-Investor enthüllt geheimes Bank-Angebot
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Der Multi-Milliardär (65) spricht über ein exklusives Angebot einer deutschen Großbank.
            </p>
          </Link>

          <Link 
            to="/frank-thelen-cheat-code" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Exklusiv-Interview</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Das ist wie ein Cheat-Code" – Bekannter Tech-Investor über sein neues Lieblings-Investment
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Der erfolgreiche „Löwen"-Investor (49) erklärt, warum er auf ein exklusives Angebot einer Großbank setzt.
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

          <Link 
            to="/witwe-entdeckt-letzten-brief" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Schicksalswende</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Nach dem Tod ihres Mannes: Wie Elfriede (73) durch seinen letzten Brief finanziell unabhängig wurde
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Im Nachlass ihres verstorbenen Mannes fand die Witwe einen Umschlag mit einer Notiz.
            </p>
          </Link>

          <Link 
            to="/lehrerin-verdient-mehr-als-im-beruf" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Bildung & Finanzen</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              40 Jahre Lehrerin, 1.600 Euro Rente: Wie Gisela Hoffmann jetzt monatlich mehr verdient als früher im Beruf
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Die pensionierte Grundschullehrerin aus Bremen entdeckte durch eine ehemalige Kollegin ein Angebot.
            </p>
          </Link>

          <Link 
            to="/goldene-hochzeit-ohne-geldsorgen" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Goldene Hochzeit</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Goldene Hochzeit ohne Geldsorgen: Wie Horst und Ingeborg nach 50 Jahren endlich sorgenfrei leben
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Das Ehepaar aus Leipzig wollte ihre goldene Hochzeit eigentlich absagen.
            </p>
          </Link>

          <Link 
            to="/arzt-ueberzeugt-sich-selbst" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Medizin & Finanzen</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Als Arzt war ich der größte Skeptiker" – Wie Dr. Helmut Weber seine Meinung änderte
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Der pensionierte Internist prüfte das Angebot wie eine Diagnose – mit wissenschaftlicher Genauigkeit.
            </p>
          </Link>

          <Link 
            to="/oma-wird-lieblingsoma" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Familie & Finanzen</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Oma, du bist reich!" – Wie Renate Fischer (74) zur Lieblingsgroßmutter wurde
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Die Rentnerin aus Nürnberg konnte ihren Enkeln jahrelang nicht mal ein Eis kaufen.
            </p>
          </Link>

          <Link 
            to="/chefarzt-verdoppelt-50000" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Exklusiv-Recherche</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Bankgeheimnis gelüftet: So verdoppelte ein Chefarzt seine 50.000 Euro Ersparnisse in nur 8 Monaten
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Dr. Friedrich Lange wollte sein Erspartes schützen. Was sein Private-Banking-Berater ihm zeigte, hätte nie öffentlich werden sollen.
            </p>
          </Link>

          <Link 
            to="/bankgeheimnis-insider-dokument" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Investigativ</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              Internes Dokument enthüllt: Diese Anlageform nutzen Bankvorstände für ihr eigenes Vermögen
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Ein geleakter Report zeigt, wie Top-Manager ihr Privatvermögen anlegen – und warum Kunden davon nichts erfahren.
            </p>
          </Link>

          <Link 
            to="/siemens-manager-beste-entscheidung" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Ruhestand & Vermögen</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Mit 50.000 Euro gestartet, heute unabhängig": Ex-Siemens-Manager über seine beste Entscheidung
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Wolfgang Brenner plante, von seinen Ersparnissen zu leben. Dann erfuhr er von einer Anlagemöglichkeit, die alles änderte.
            </p>
          </Link>

          <Link 
            to="/oppositionsfuehrerin-fordert-fair-access" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Politik & Finanzen</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Deutsche Rentner werden systematisch benachteiligt" – Oppositionsführerin fordert Zugang zu exklusiven Bankkonditionen
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Die promovierte Volkswirtin und ehemalige Goldman-Sachs-Managerin überrascht mit einer finanzpolitischen Initiative für Rentner.
            </p>
          </Link>

          <Link 
            to="/wirtschaftspolitikerin-exklusiv-interview" 
            className="block p-4 sm:p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <span className="category-tag text-xs sm:text-sm">Exklusiv-Interview</span>
            <h2 className="text-lg sm:text-xl font-bold mt-2 font-spiegel-serif leading-snug">
              „Unsere Rentner werden betrogen" – Bekannte Wirtschaftspolitikerin fordert Gerechtigkeit für Senioren
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Die promovierte Ökonomin fordert: Rentner sollen endlich von den gleichen Renditen profitieren wie Großinvestoren.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
