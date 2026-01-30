import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award } from "lucide-react";
import maschmeyer from "@/assets/carsten-maschmeyer.png";
import OfferButton from "./OfferButton";

const ArticlePage3 = () => {
  const comments = [
    {
      id: 1,
      author: "Thomas K.",
      time: "vor 2 Stunden",
      text: "Ich habe das Angebot ausprobiert – funktioniert tatsächlich! Die Registrierung war einfach und der persönliche Berater hat sich sofort gemeldet.",
      likes: 89
    },
    {
      id: 2,
      author: "Petra W.",
      time: "vor 3 Stunden", 
      text: "Wenn sogar der Löwen-Star das empfiehlt, muss da was dran sein. Der Mann hat Milliarden verdient.",
      likes: 134
    },
    {
      id: 3,
      author: "Michael B.",
      time: "vor 4 Stunden",
      text: "Endlich mal ein Angebot, das nicht nur für die Reichen ist. Die 100k Einlagensicherung gibt mir ein gutes Gefühl.",
      likes: 67
    },
    {
      id: 4,
      author: "Sandra L.",
      time: "vor 5 Stunden",
      text: "Habe letzte Woche angefangen – erste Ergebnisse sind vielversprechend. Der Händler erklärt jeden Trade.",
      likes: 156
    },
    {
      id: 5,
      author: "Klaus-Dieter F.",
      time: "vor 6 Stunden",
      text: "Als ehemaliger Banker kann ich bestätigen: Solche Angebote sind normalerweise nur für institutionelle Kunden. Sehr interessant!",
      likes: 203
    },
    {
      id: 6,
      author: "Ingrid M.",
      time: "vor 7 Stunden",
      text: "Mein Sohn hat mich auf den Artikel aufmerksam gemacht. Habe mich angemeldet und bin gespannt!",
      likes: 45
    },
    {
      id: 7,
      author: "Ralf S.",
      time: "vor 8 Stunden",
      text: "Bis zu 17% im Monat klingt ambitioniert, aber bei aktivem Trading durch Profis durchaus machbar. Habe selbst früher getradet.",
      likes: 178
    },
    {
      id: 8,
      author: "Martina H.",
      time: "vor 9 Stunden",
      text: "Das Angebot war wirklich schwer zu finden – gut, dass die Redaktion es recherchiert hat!",
      likes: 92
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      {/* Breadcrumb */}
      <div className="max-w-[var(--container-max-width)] mx-auto px-4">
        <nav className="breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Startseite</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/" className="text-muted-foreground hover:text-foreground">Wirtschaft</Link>
          <span className="breadcrumb-separator">/</span>
          <span>Geldanlage</span>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        {/* Category */}
        <span className="category-tag">Exklusiv-Interview</span>
        
        {/* Title */}
        <h1 className="article-title mt-3 mb-4">
          „Bis zu 17% im Monat" – Wie der bekannte „Löwen"-Investor ein geheimes Bank-Angebot entdeckte
        </h1>

        {/* Lead */}
        <p className="article-lead text-muted-foreground mb-6">
          Der Multi-Milliardär und „Die Höhle der Löwen"-Star (65) spricht erstmals über ein exklusives Angebot einer großen deutschen Bank, das bisher nur institutionellen Anlegern vorbehalten war – und jetzt auch für Privatpersonen zugänglich ist.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>Aktualisiert: 30.01.2026</span>
        </div>

        {/* Share Bar */}
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

        {/* Hero Image */}
        <figure className="mb-8">
          <img 
            src={maschmeyer} 
            alt="Der bekannte Investor im Interview" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Der Multi-Milliardär (65), bekannt als „Höhle der Löwen"-Investor, hat ein exklusives Bankangebot entdeckt
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="article-body">
          <p>
            <strong>Der bekannte „Löwen"-Investor</strong> gehört zu den erfolgreichsten Unternehmern Deutschlands. Als Gründer eines der größten Finanzvertriebe wurde er zum Milliardär, als Juror bei „Die Höhle der Löwen" erreicht er ein Millionenpublikum. Doch was viele nicht wissen: Der 65-Jährige ist ständig auf der Suche nach Anlageformen, die selbst ihm neue Möglichkeiten eröffnen.
          </p>

          <p>
            In einem exklusiven Interview spricht der TV-bekannte Investor nun erstmals über eine Entdeckung, die selbst ihn überrascht hat: Ein Angebot einer der größten deutschen Banken für <strong>aktives Wertpapierdepot-Management durch bankinterne Händler</strong> – mit Renditen von bis zu 17% im Monat.
          </p>

          <blockquote className="article-quote">
            „Ich habe in meiner Karriere viele Anlageformen gesehen. Aber als ich dieses Angebot entdeckte, war ich ehrlich überrascht. Solche Konditionen waren bisher ausschließlich institutionellen Großanlegern vorbehalten."
          </blockquote>

          <h2 className="article-subheading">Was macht dieses Angebot so besonders?</h2>

          {/* Bank Box */}
          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <div>
              <p className="font-bold text-lg">Eine der größten deutschen Direktbanken</p>
              <p className="text-muted-foreground text-sm">Staatliche Beteiligung, über 5 Millionen Kunden, BaFin-reguliert</p>
            </div>
          </div>

          <p>
            Diese große deutsche Direktbank bietet ausgewählten Kunden Zugang zu einem Programm, das normalerweise nur Hedgefonds, Pensionskassen und vermögenden Family Offices zur Verfügung steht: <strong>Professionelles Trading durch bankinterne Experten</strong>.
          </p>

          {/* Feature Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Die Vorteile im Überblick:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bis zu 17% Rendite im Monat</strong> durch aktives Trading-Management</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>100.000€ Einlagensicherung</strong> durch die gesetzliche Absicherung</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bankinterne Händler</strong> mit jahrzehntelanger Erfahrung</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">„Normalerweise braucht man Millionen, um Zugang zu bekommen"</h2>

          <p>
            Der Milliardär erklärt die Hintergründe: „Professionelles Trading-Management mit solchen Konditionen ist in der Finanzwelt bekannt – aber eben nur in bestimmten Kreisen. Normalerweise müssen Sie Millionen mitbringen oder institutioneller Anleger sein, um überhaupt angesprochen zu werden."
          </p>

          <p>
            Was hat sich geändert? Diese Bank hat offenbar entschieden, dieses Premium-Angebot <strong>für einen begrenzten Zeitraum</strong> auch Privatanlegern zugänglich zu machen – allerdings nicht öffentlich beworben.
          </p>

          <blockquote className="article-quote">
            „Dieses Angebot ist auf der normalen Bank-Website praktisch nicht zu finden. Man braucht entweder einen persönlichen Kontakt zur Bank oder muss sehr genau wissen, wonach man sucht. Die meisten Menschen werden nie davon erfahren."
          </blockquote>

          <h2 className="article-subheading">Wie die Redaktion das versteckte Angebot fand</h2>

          <p>
            Nach dem Interview mit dem „Löwen"-Star machte sich unsere Wirtschaftsredaktion auf die Suche nach dem besagten Angebot. Nach intensiver Recherche – und mit Hilfe von Kontakten zur Bank – gelang es uns tatsächlich, den <strong>direkten Zugang</strong> zu finden.
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Wichtiger Hinweis unserer Redaktion:</p>
            <p>
              Dieses Angebot ist <strong>nicht über die normale Homepage</strong> dieser Großbank erreichbar. Der Zugang unten führt direkt zur speziellen Angebotsseite, die normalerweise nur über persönliche Vermögensberater oder direkte Bankenkontakte zugänglich ist. Wir haben dieses Angebot ausschließlich für unsere Leser recherchiert.
            </p>
          </div>

          <h2 className="article-subheading">Die persönliche Erfahrung des Investors</h2>

          <p>
            Der „Löwen"-Juror berichtet von seinen eigenen Erfahrungen: „Ich habe das Angebot natürlich selbst getestet, bevor ich darüber spreche. Die Ergebnisse waren beeindruckend. Die Händler dieser Bank arbeiten mit Strategien, die normalerweise nur den Profis vorbehalten sind – Arbitrage, Momentum-Trading, gezielte Absicherungsgeschäfte."
          </p>

          <p>
            Besonders wichtig für den Multi-Milliardär: die Sicherheit. „Viele Menschen haben Angst vor der Börse, weil sie an Spekulanten denken. Aber hier ist alles durch die <strong>gesetzliche Einlagensicherung von 100.000 Euro</strong> abgesichert. Das ist ein enormer Unterschied zu vielen anderen Angeboten."
          </p>

          <blockquote className="article-quote">
            „Als ich in ‚Die Höhle der Löwen' sitze, sehe ich viele Geschäftsmodelle. Aber nur wenige bieten so eine Kombination aus Renditepotenzial und Sicherheit. Das ist wirklich selten."
          </blockquote>

          <h2 className="article-subheading">Für wen ist dieses Angebot geeignet?</h2>

          <p>
            Laut dem TV-bekannten Investor eignet sich das Angebot besonders für Menschen, die:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ihr Erspartes nicht auf dem Sparbuch „verrotten" lassen wollen</li>
            <li>Keine Zeit oder Expertise für eigenes Trading haben</li>
            <li>Von professionellen Strategien profitieren möchten</li>
            <li>Wert auf die Sicherheit einer etablierten deutschen Bank legen</li>
          </ul>

          <p>
            „Es ist nicht für jeden", betont der 65-Jährige. „Man sollte nur Geld investieren, das man nicht kurzfristig braucht. Aber für Menschen, die langfristig denken und mehr aus ihrem Geld machen wollen, ist das eine echte Chance."
          </p>

          <h2 className="article-subheading">Das Zeitfenster schließt sich</h2>

          <p>
            Auf die Frage, wie lange das Angebot noch verfügbar sein wird, bleibt der Milliardär vage: „Die Bank hat mir gesagt, dass sie nur eine begrenzte Anzahl von Privatanlegern aufnehmen können. Die Kapazitäten der Händler sind begrenzt. Sobald die Plätze vergeben sind, ist Schluss."
          </p>

          <p>
            Unsere Redaktion hat dies bei der Bank verifiziert: <strong>Das Angebot ist zeitlich begrenzt</strong> und nur über den speziellen Zugangslink erreichbar.
          </p>
        </div>

        {/* Exclusive Access Box */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Exklusiver Redaktions-Zugang</span>
          </div>
          <p className="text-sm mb-4">
            Dieses Angebot wurde von unserer Wirtschaftsredaktion recherchiert und führt direkt zum Angebot dieser deutschen Großbank für aktives Wertpapierdepot-Management. Das Angebot ist auf der regulären Website <strong>nicht auffindbar</strong> und normalerweise nur institutionellen Anlegern vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            Hinweis: Begrenzte Plätze verfügbar. Das Angebot kann jederzeit geschlossen werden.
          </p>
        </div>

        {/* CTA Section */}
        <div className="my-12 text-center">
          <OfferButton className="text-xl">
            👉 Zum exklusiven Angebot (von der Redaktion recherchiert)
          </OfferButton>
          <p className="text-sm text-muted-foreground mt-4">
            * Das Angebot ist zeitlich begrenzt und richtet sich an ausgewählte Kunden.
          </p>
        </div>

        {/* Final Quote */}
        <div className="article-body">
          <blockquote className="article-quote">
            „Mein Rat an jeden, der das hier liest: Schauen Sie sich das Angebot an, solange es noch verfügbar ist. Solche Chancen kommen nicht oft – und sie verschwinden schnell wieder."
            <footer className="mt-2 text-base not-italic">— Der „Höhle der Löwen"-Investor</footer>
          </blockquote>
        </div>

        {/* Second CTA */}
        <div className="info-box my-8">
          <h3 className="font-bold text-lg mb-3">Jetzt selbst profitieren</h3>
          <p className="mb-4">
            Nutzen Sie den von unserer Redaktion recherchierten Zugang zum exklusiven Angebot. Professionelles Trading-Management, bis zu 17% Rendite im Monat, 100.000€ Einlagensicherung.
          </p>
          <OfferButton>
            Jetzt Zugang sichern →
          </OfferButton>
        </div>

        {/* Comments Section */}
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

        {/* Final CTA */}
        <div className="my-12 p-8 bg-secondary rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4 font-spiegel-serif">
            Verpassen Sie nicht diese einmalige Chance
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Der bekannte „Löwen"-Investor hat den Weg gezeigt. Nutzen Sie jetzt den exklusiven Zugang zum Angebot, bevor die begrenzten Plätze vergeben sind.
          </p>
          <OfferButton className="text-lg">
            👉 Zum versteckten Angebot
          </OfferButton>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t mt-12 py-8">
        <div className="max-w-[var(--container-max-width)] mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 | Impressum | Datenschutz | Nutzungsbedingungen</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage3;
