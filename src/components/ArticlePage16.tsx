import SpiegelHeader from "./SpiegelHeader";
import OfferButton from "./OfferButton";

const ArticlePage16 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <article className="prose prose-lg max-w-none">
          <span className="category-tag">Exklusiv-Recherche</span>
          
          <h1 className="article-title">
            Bankgeheimnis gelüftet: So verdoppelte ein Chefarzt seine 50.000 Euro Ersparnisse in nur 8 Monaten
          </h1>
          
          <p className="article-subtitle">
            Dr. Friedrich Lange (67) wollte sein Erspartes vor der Inflation schützen. Was sein Private-Banking-Berater ihm dann zeigte, hätte eigentlich nie an die Öffentlichkeit gelangen sollen.
          </p>

          <figure className="my-6 sm:my-8">
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="text-center p-4 sm:p-8">
                <p className="text-3xl sm:text-5xl font-bold text-primary">50.000 € → 97.400 €</p>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">Dokumentierte Vermögensentwicklung in 8 Monaten</p>
              </div>
            </div>
            <figcaption className="text-xs sm:text-sm text-muted-foreground mt-2">
              Die Entwicklung des Portfolios von Dr. Lange – verifiziert durch Kontoauszüge
            </figcaption>
          </figure>

          <p className="first-paragraph">
            Als Dr. Friedrich Lange nach 38 Jahren als Chefarzt der Kardiologie am Universitätsklinikum Heidelberg in den Ruhestand ging, hatte er eine klare Vorstellung: Die 50.000 Euro auf seinem Tagesgeldkonto sollten „einfach nur sicher angelegt" werden.
          </p>

          <p>
            „Ich bin Mediziner, kein Finanzexperte", sagt der 67-Jährige. „Aktien waren mir zu riskant, Immobilien zu aufwendig. Ich wollte einfach meine Ruhe haben."
          </p>

          <h2>Das unerwartete Gespräch mit dem Private-Banking-Berater</h2>

          <p>
            Was dann geschah, begann mit einem routinemäßigen Termin bei seiner Hausbank. „Ich wollte eigentlich nur die Unterschrift für ein neues Festgeld leisten", erinnert sich Dr. Lange. „Aber mein Berater wirkte nervös. Er schloss die Tür und sagte: 'Herr Dr. Lange, darf ich Ihnen etwas zeigen, das eigentlich nicht für normale Kunden gedacht ist?'"
          </p>

          <div className="bg-secondary/50 border-l-4 border-primary p-4 sm:p-6 my-6 sm:my-8">
            <p className="font-semibold text-base sm:text-lg mb-2">„Ich dachte zuerst, er macht Witze"</p>
            <p className="text-sm sm:text-base text-muted-foreground">
              „Als er mir die Renditen zeigte – 11 bis 14 Prozent im Monat – lachte ich laut. In meinem gesamten Berufsleben hatte ich solche Zahlen nie gesehen. Ich war sicher, es war ein Betrug."
            </p>
          </div>

          <h2>Das geheime Programm einer deutschen Großbank</h2>

          {/* Bank Box - like Maschmeyer article */}
          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <div>
              <p className="font-bold text-lg">Eine der größten deutschen Direktbanken</p>
              <p className="text-muted-foreground text-sm">Staatliche Beteiligung, über 5 Millionen Kunden, BaFin-reguliert</p>
            </div>
          </div>

          <p>
            Der Berater erklärte ihm ein Programm dieser spezifischen deutschen Großbank: <strong>Aktives Wertpapierdepot-Management durch bankinterne Händler</strong> – ein Angebot, das auf der regulären Website der Bank <strong>nicht zu finden ist</strong> und bisher ausschließlich institutionellen Großanlegern vorbehalten war.
          </p>

          <p>
            „Dieses Programm wird nicht öffentlich beworben", erklärt ein Insider. „Die Bank verdient an klassischen Produkten mehr. Deshalb erfahren normale Kunden davon nur, wenn sie explizit danach fragen – oder einen Berater haben, der sie einweiht."
          </p>

          <div className="highlight-box my-6">
            <p className="font-bold mb-2">Wichtiger Hinweis unserer Redaktion:</p>
            <p>
              Dieses Angebot ist <strong>nicht über die normale Homepage</strong> dieser Großbank erreichbar. Der Zugang unten führt direkt zur speziellen Angebotsseite, die normalerweise nur über persönliche Vermögensberater zugänglich ist.
            </p>
          </div>

          <h2>Die wissenschaftliche Prüfung</h2>

          <p>
            Dr. Lange, geprägt von Jahrzehnten evidenzbasierter Medizin, ging skeptisch vor: „Ich habe drei Wochen lang recherchiert. Ich sprach mit einem befreundeten Wirtschaftsprofessor, ließ die Verträge von einem Anwalt prüfen und forderte historische Performance-Daten an."
          </p>

          <div className="bg-muted/30 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Dr. Langes Investmentprotokoll</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Startkapital (März 2025):</span>
                <span className="font-semibold">50.000 €</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Nach 2 Monaten:</span>
                <span className="font-semibold">61.200 €</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Nach 4 Monaten:</span>
                <span className="font-semibold">74.800 €</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Nach 6 Monaten:</span>
                <span className="font-semibold">86.300 €</span>
              </div>
              <div className="flex justify-between">
                <span>Nach 8 Monaten:</span>
                <span className="font-bold text-primary">97.400 €</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Durchschnittliche Monatsrendite: 8,7% | Alle Angaben durch Depotauszüge belegt
            </p>
          </div>

          <h2>Warum Banken diese Produkte verstecken</h2>

          <p>
            Ein ehemaliger Vorstand einer deutschen Großbank, der nicht namentlich genannt werden möchte, erklärt die Hintergründe: „Diese Anlagestrategien nutzen algorithmische Arbitrage-Modelle und haben minimale Ausfallrisiken. Aber die Margen für die Bank sind niedrig. Deshalb verkaufen wir lieber aktiv gemanagte Fonds mit 2-3% Ausgabeaufschlag."
          </p>

          <p>
            Die einzige Bedingung: Anleger müssen explizit danach fragen. „Die meisten wissen nicht einmal, dass es existiert", so der Ex-Banker.
          </p>

          <h2>„Ich hätte jahrelang Geld liegen lassen"</h2>

          <p>
            Für Dr. Lange war die Entscheidung richtig: „In 8 Monaten habe ich mehr verdient als in 10 Jahren mit meinem alten Festgeld. Und das bei voller Einlagensicherung bis 100.000 Euro."
          </p>

          <div className="bg-secondary/50 border-l-4 border-primary p-4 sm:p-6 my-6 sm:my-8">
            <p className="font-semibold text-base sm:text-lg mb-2">Sein Rat an andere Ärzte und Akademiker:</p>
            <p className="text-sm sm:text-base text-muted-foreground">
              „Prüfen Sie alles selbst. Aber ignorieren Sie nicht etwas, nur weil es zu gut klingt. Manchmal sind die besten Möglichkeiten die, die niemand kennt – weil es niemandem nützt, sie bekannt zu machen."
            </p>
          </div>

          {/* Soft CTA Box */}
          <div className="bg-secondary/30 border border-border rounded-lg p-6 my-8">
            <p className="text-sm sm:text-base mb-4">
              <strong>Anmerkung der Redaktion:</strong> Dr. Lange hat uns gebeten, interessierten Lesern den gleichen Zugang zu ermöglichen, den er über seinen Berater erhalten hat. Nach Rücksprache mit der Bank haben wir einen direkten Informationsweg eingerichtet.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Das Programm wird nicht aktiv beworben und ist auf der regulären Website nicht zu finden. Die Plätze sind aufgrund der Kapazitäten begrenzt.
            </p>
            <div className="border-t border-border pt-4 mt-4">
              <p className="text-xs text-muted-foreground mb-3">
                Wenn Sie sich selbst ein Bild machen möchten:
              </p>
              <OfferButton className="text-sm sm:text-base px-5 py-2.5">
                Unverbindlich informieren →
              </OfferButton>
            </div>
          </div>

          <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong>Hinweis:</strong> Dieser Artikel entstand auf Basis eines Interviews mit Dr. Friedrich Lange. 
              Die genannten Renditen entsprechen seinen persönlichen Erfahrungen und können variieren.
              Alle Investments sind mit Risiken verbunden.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default ArticlePage16;
