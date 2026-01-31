import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, CheckCircle, Building2 } from "lucide-react";
import OfferButton from "./OfferButton";
import euIndienAbkommen from "@/assets/eu-indien-abkommen.png";

const ArticlePage27 = () => {
  const comments = [
    {
      id: 1,
      author: "Dr. Thomas K.",
      time: "vor 45 Minuten",
      text: "Endlich erklärt jemand, WARUM die Renditen so hoch sind. Das mit den Indien-Investments macht absolut Sinn. Die Bank sitzt auf einer Goldmine.",
      likes: 312
    },
    {
      id: 2,
      author: "Margarete W.",
      time: "vor 1 Stunde",
      text: "Mein Bankberater hat mir das nie so erklärt. Jetzt verstehe ich, warum normale Sparkonten nichts bringen – die investieren ja gar nicht!",
      likes: 245
    },
    {
      id: 3,
      author: "Prof. Heinrich M.",
      time: "vor 2 Stunden",
      text: "Als Wirtschaftsprofessor kann ich bestätigen: First-Mover-Advantage bei Schwellenländern ist enorm. Wer früh investiert, erntet später.",
      likes: 389
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <div className="max-w-[var(--container-max-width)] mx-auto px-4">
        <nav className="breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Startseite</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/" className="text-muted-foreground hover:text-foreground">Wirtschaft</Link>
          <span className="breadcrumb-separator">/</span>
          <span>Analyse</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Exklusiv</span>
        
        <h1 className="article-title mt-3 mb-4">
          EU-Indien-Abkommen: Warum eine deutsche Großbank jetzt Traumrenditen bieten kann
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          Das historische Handelsabkommen öffnet einen Markt mit 1,4 Milliarden Menschen. Eine Bank hat früh investiert – und gibt die Gewinne an Kunden weiter.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>9 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 14:30 Uhr</span>
        </div>

        <div className="share-bar mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Teilen</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bookmark className="w-5 h-5" />
              <span className="text-sm">Merken</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">{comments.length} Kommentare</span>
          </div>
        </div>

        <figure className="mb-8">
          <img 
            src={euIndienAbkommen} 
            alt="Führende Politiker der EU und Indiens feiern das Handelsabkommen in Neu-Delhi" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Historischer Moment in Neu-Delhi: Die führenden Vertreter der EU und Indiens nach Unterzeichnung des Abkommens
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Frankfurt am Main</strong> – Als am 27. Januar 2026 in Neu-Delhi die Unterschriften unter das EU-Indien-Freihandelsabkommen gesetzt wurden, feierten die Medien einen diplomatischen Triumph. Was kaum jemand bemerkte: Eine der größten deutschen Banken hatte bereits Milliarden in genau jene Unternehmen investiert, die von diesem Abkommen am meisten profitieren würden.
          </p>

          <p>
            Jetzt wird klar, warum.
          </p>

          <blockquote className="article-quote">
            „Diese Bank hat nicht gewartet, bis das Abkommen unterschrieben wurde. Sie hat investiert, als andere noch gezögert haben. Das ist der Grund für die außergewöhnlichen Renditen."
            <footer className="text-sm mt-2 text-muted-foreground">– Interner Vermögensverwalter, anonym</footer>
          </blockquote>

          <h2 className="article-subheading">Das größte Handelsabkommen des Jahrzehnts</h2>

          <p>
            Die Dimensionen sind gewaltig: Das EU-Indien-Abkommen öffnet einen Markt mit <strong>1,4 Milliarden Konsumenten</strong> für europäische Unternehmen. Die EU-Kommission erwartet eine <strong>Verdoppelung der EU-Exporte nach Indien bis 2032</strong>. Das jährliche Wirtschaftswachstum Indiens liegt bei stabilen <strong>6 Prozent</strong>.
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Die wichtigsten Zahlen des Abkommens:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>90%</strong> aller EU-Exportzölle nach Indien werden gesenkt oder abgeschafft</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>30%</strong> der gehandelten Waren sinken auf 0% Zoll</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Autozölle sinken von <strong>110% auf 10%</strong> (VW, BMW, Mercedes profitieren enorm)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Maschinen, Chemie, Pharma: <strong>Vollständige Zollfreiheit</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>140+ Dienstleistungssektoren</strong> werden für EU-Unternehmen geöffnet</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">Warum diese Bank früher wusste, was kommt</h2>

          <p>
            Die Verhandlungen zwischen der EU und Indien liefen seit 2022. Während andere Banken abwarteten, analysierte das Investment-Team dieser Großbank die Signale aus Brüssel und Neu-Delhi – und handelte.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Die strategischen Investments (geschätztes Volumen: 4,2 Mrd. €)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-background rounded p-3">
                <p className="font-semibold text-primary">Maschinenbau</p>
                <p className="text-muted-foreground">Siemens, ThyssenKrupp, KION – Zölle sinken auf 0%</p>
              </div>
              <div className="bg-background rounded p-3">
                <p className="font-semibold text-primary">Automobilzulieferer</p>
                <p className="text-muted-foreground">Continental, Bosch, ZF – profitieren vom VW/BMW-Boom in Indien</p>
              </div>
              <div className="bg-background rounded p-3">
                <p className="font-semibold text-primary">Pharmaindustrie</p>
                <p className="text-muted-foreground">Bayer, Merck, Fresenius – neuer Zugang zu 1,4 Mrd. Patienten</p>
              </div>
              <div className="bg-background rounded p-3">
                <p className="font-semibold text-primary">Chemiekonzerne</p>
                <p className="text-muted-foreground">BASF, Evonik, Lanxess – zollfreier Export nach Indien</p>
              </div>
            </div>
          </div>

          <blockquote className="article-quote">
            „Die EU und Indien schreiben heute Geschichte."
            <footer className="text-sm mt-2 text-muted-foreground">– EU-Kommissionspräsidentin, 27. Januar 2026</footer>
          </blockquote>

          <h2 className="article-subheading">Warum Privatanleger jetzt profitieren können</h2>

          <p>
            Normalerweise bleiben solche strategischen Investments institutionellen Anlegern vorbehalten – Pensionsfonds, Versicherungen, Family Offices. Doch die neuen EU-Bankenrichtlinien (CRD VI) haben das geändert.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Die „Fair Access Clause" macht es möglich:</h3>
                <p className="text-sm mb-3">
                  Seit 2025 sind Großbanken verpflichtet, ihre profitabelsten Anlageprodukte auch Privatpersonen anzubieten – zu den gleichen Konditionen wie institutionellen Investoren.
                </p>
                <p className="text-sm">
                  Diese Bank hat sich entschieden, den Zugang aktiv zu ermöglichen. Die Renditen aus den Indien-Investments werden direkt an die Kunden weitergegeben.
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Was Experten sagen</h2>

          <p>
            VW-Chef Oliver Blume nannte Indien „den drittgrößten Automobilmarkt der Welt mit enormen Chancen". Der Leiter des Indien-Büros der Konrad-Adenauer-Stiftung sprach von einem „riesigen Absatzmarkt mit viel Potenzial" und Wachstumsprognosen von 6 Prozent jährlich.
          </p>

          <blockquote className="article-quote">
            „Das Abkommen eröffnet große Chancen für 1,4 Milliarden Menschen in Indien und die Bevölkerung Europas."
            <footer className="text-sm mt-2 text-muted-foreground">– Indiens Premierminister Narendra Modi</footer>
          </blockquote>

          <h2 className="article-subheading">Sicherheit trotz hoher Renditen</h2>

          <p>
            Die Frage, die sich viele stellen: Wie können Renditen von 7-17% monatlich sicher sein?
          </p>

          <p>
            Die Antwort liegt im Geschäftsmodell: Die Bank investiert in etablierte DAX-Konzerne und Blue-Chip-Unternehmen, deren Aktienkurse durch das Indien-Abkommen steigen werden. Das Risiko einzelner Aktien wird durch breite Streuung minimiert. Der Gewinn entsteht nicht durch Spekulation, sondern durch strategische Positionierung vor einem vorhersehbaren Marktereignis.
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4">Ihre Sicherheiten auf einen Blick:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>BaFin-Regulierung:</strong> Volle Aufsicht durch die Bundesanstalt für Finanzdienstleistungsaufsicht</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Einlagensicherung:</strong> Gesetzlicher Schutz bis 100.000 Euro pro Kunde</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Systemrelevante Bank:</strong> „Too big to fail" – staatliche Absicherung im Krisenfall</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Flexibilität:</strong> Jederzeit kündbar, keine Mindestlaufzeit</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">Das Zeitfenster schließt sich</h2>

          <p>
            Das Abkommen ist unterschrieben, aber noch nicht in Kraft. Die rechtliche Prüfung und parlamentarische Billigung werden noch einige Monate dauern. In dieser Phase steigen die Kurse der profitierenden Unternehmen bereits – aber noch nicht auf volle Kapazität.
          </p>

          <p>
            Wer jetzt einsteigt, partizipiert noch an der Aufbauphase. Sobald das Abkommen vollständig ratifiziert ist, werden die Kurse ihr Maximum erreicht haben.
          </p>

          <blockquote className="article-quote">
            „Es wird erwartet, dass das Abkommen bis 2032 zu einer Verdoppelung der EU-Exporte nach Indien führen wird."
            <footer className="text-sm mt-2 text-muted-foreground">– Offizielle EU-Mitteilung</footer>
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Hinweis:</strong> Der Zugang zu diesem Angebot ist nicht öffentlich beworben. Er wurde uns von einem Insider zur Verfügung gestellt und ist ausschließlich über diesen Artikel erreichbar.
          </p>
          <OfferButton className="w-full">
            Jetzt vom EU-Indien-Abkommen profitieren →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Volle Einlagensicherung · BaFin-reguliert
          </p>
        </div>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-6 font-spiegel-serif flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            {comments.length} Kommentare
          </h3>
          
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-secondary text-sm">
                      {comment.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{comment.text}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                        👍 {comment.likes}
                      </button>
                      <button className="text-xs text-muted-foreground hover:text-foreground">
                        Antworten
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t mt-12 py-8">
        <div className="max-w-[var(--container-max-width)] mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 | Impressum | Datenschutz | Nutzungsbedingungen</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage27;
