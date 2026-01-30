import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, Rocket } from "lucide-react";
import dkbLogo from "@/assets/dkb-logo.png";
import frankThelen from "@/assets/frank-thelen.png";

const ArticlePage4 = () => {
  const comments = [
    {
      id: 1,
      author: "Markus T.",
      time: "vor 1 Stunde",
      text: "Frank Thelen ist für mich der glaubwürdigste Investor in Deutschland. Wenn er das empfiehlt, probiere ich es aus.",
      likes: 156
    },
    {
      id: 2,
      author: "Julia K.",
      time: "vor 2 Stunden", 
      text: "Habe das Angebot getestet – die Anmeldung war super einfach. Bin gespannt auf die ersten Ergebnisse!",
      likes: 98
    },
    {
      id: 3,
      author: "Stefan R.",
      time: "vor 3 Stunden",
      text: "Als Tech-Enthusiast vertraue ich Thelens Einschätzungen. Der Mann hat ein Gespür für gute Investments.",
      likes: 134
    },
    {
      id: 4,
      author: "Andrea B.",
      time: "vor 4 Stunden",
      text: "Endlich mal jemand, der komplexe Finanzthemen verständlich erklärt. Danke für den Artikel!",
      likes: 67
    },
    {
      id: 5,
      author: "Christoph M.",
      time: "vor 5 Stunden",
      text: "Die 100k Einlagensicherung hat mich überzeugt. Das Risiko ist überschaubar.",
      likes: 189
    },
    {
      id: 6,
      author: "Sabine L.",
      time: "vor 6 Stunden",
      text: "Mein Mann und ich haben uns beide angemeldet. Die Beratung war sehr professionell.",
      likes: 78
    },
    {
      id: 7,
      author: "Patrick W.",
      time: "vor 7 Stunden",
      text: "Als Softwareentwickler schätze ich Thelens analytischen Ansatz. Solide recherchiert!",
      likes: 145
    },
    {
      id: 8,
      author: "Monika F.",
      time: "vor 8 Stunden",
      text: "Das versteckte Angebot war wirklich schwer zu finden. Gut, dass die Redaktion es ausgegraben hat!",
      likes: 112
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      
      {/* Breadcrumb */}
      <div className="max-w-[var(--container-max-width)] mx-auto px-4">
        <nav className="breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Startseite</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/" className="text-muted-foreground hover:text-foreground">Wirtschaft</Link>
          <span className="breadcrumb-separator">/</span>
          <span>Technologie & Finanzen</span>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        {/* Category */}
        <span className="category-tag">Exklusiv-Interview</span>
        
        {/* Title */}
        <h1 className="article-title mt-3 mb-4">
          „Das ist wie ein Cheat-Code für Privatanleger" – Frank Thelen über sein neues Lieblings-Investment
        </h1>

        {/* Lead */}
        <p className="article-lead text-muted-foreground mb-6">
          Der Tech-Investor und ehemalige „Die Höhle der Löwen"-Juror erklärt, warum er auf ein exklusives DKB-Angebot setzt – und warum es bisher kaum jemand kennt.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>7 Min. Lesezeit</span>
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
            src={frankThelen} 
            alt="Frank Thelen im Interview" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Frank Thelen (49), Tech-Investor und Gründer von Freigeist Capital, hat ein verstecktes Bankangebot entdeckt
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="article-body">
          <p>
            <strong>Frank Thelen</strong> ist einer der bekanntesten Tech-Investoren Deutschlands. Als Gründer von Freigeist Capital investiert er in Zukunftstechnologien wie Flugtaxis, Kernfusion und künstliche Intelligenz. Durch „Die Höhle der Löwen" wurde er einem Millionenpublikum bekannt – als der Investor, der keine halben Sachen macht.
          </p>

          <p>
            Doch jetzt spricht Thelen über etwas, das selbst in seinen Kreisen kaum bekannt ist: Ein <strong>exklusives Angebot der DKB Bank</strong> für aktives Wertpapierdepot-Management – mit Renditen, die selbst ihn überrascht haben.
          </p>

          <blockquote className="article-quote">
            „Ich analysiere jeden Tag Investments. Aber als ich dieses DKB-Angebot gefunden habe, dachte ich zuerst: Das kann nicht sein. Solche Konditionen gibt es normalerweise nur für die ganz Großen."
          </blockquote>

          <h2 className="article-subheading">Der Tech-Investor wird zum Bank-Enthusiasten</h2>

          {/* DKB Bank Box */}
          <div className="bg-white border-2 border-[#00A3E0] rounded-lg p-6 my-6 flex items-center gap-6">
            <img src={dkbLogo} alt="DKB Deutsche Kreditbank AG Logo" className="h-16 w-auto" />
            <div>
              <p className="font-bold text-lg">Deutsche Kreditbank AG (DKB)</p>
              <p className="text-muted-foreground text-sm">Eine der größten Direktbanken Deutschlands mit über 5 Millionen Kunden</p>
            </div>
          </div>

          <p>
            Thelen, der normalerweise in Startups und Zukunftstechnologien investiert, hat eine neue Leidenschaft entdeckt: <strong>Professionelles Trading durch bankinterne Experten</strong>. Die <strong>DKB – Deutsche Kreditbank AG</strong> bietet ausgewählten Kunden Zugang zu einem Programm, das sonst nur Hedgefonds und institutionellen Großanlegern zur Verfügung steht.
          </p>

          <p>
            „Als Technologie-Investor bin ich es gewohnt, Dinge zu hinterfragen", erklärt Thelen. „Aber hier stimmt einfach alles: Die Strategie, die Sicherheit, die Rendite. Das ist wie ein Cheat-Code für Privatanleger."
          </p>

          {/* Feature Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              Was Frank Thelen überzeugt hat:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bis zu 17% Rendite im Monat</strong> durch professionelles Trading-Management</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>100.000€ Einlagensicherung</strong> – volle gesetzliche Absicherung</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bankinterne Händler</strong> mit jahrzehntelanger Erfahrung</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">„Normalerweise investiere ich in die Zukunft – aber das hier ist die Gegenwart"</h2>

          <p>
            Thelen erklärt seinen ungewöhnlichen Schritt: „Meine Investments in Lilium, 10xDNA oder Kernfusion sind langfristig angelegt. Aber dieses DKB-Angebot liefert Ergebnisse <strong>jetzt</strong>. Das ist eine perfekte Ergänzung zu meinem Portfolio."
          </p>

          <p>
            Der entscheidende Punkt für Thelen: Das Angebot ist nicht öffentlich zugänglich. „Die DKB bewirbt das nicht. Man muss wissen, dass es existiert – und den richtigen Zugang haben. Normalerweise braucht man einen persönlichen Vermögensberater oder muss institutioneller Anleger sein."
          </p>

          <blockquote className="article-quote">
            „Ich habe in meiner Karriere viele ‚geheime' Angebote gesehen, die sich als Mogelpackung herausstellten. Aber hier ist alles transparent, reguliert und durch eine deutsche Bank abgesichert. Das ist selten."
          </blockquote>

          <h2 className="article-subheading">Wie unsere Redaktion das versteckte Angebot fand</h2>

          <p>
            Nach dem Gespräch mit Thelen machte sich unser Wirtschaftsteam auf die Suche. Das Ergebnis: Der Zugang zum DKB-Angebot ist auf der normalen Website <strong>praktisch unsichtbar</strong>. Nur durch intensive Recherche und Kontakte zur Bank konnten wir den direkten Zugang ausfindig machen.
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Exklusiver Hinweis unserer Redaktion:</p>
            <p>
              Das DKB-Angebot für aktives Wertpapierdepot-Management ist <strong>nicht über die Hauptseite</strong> erreichbar. Der Zugang unten führt direkt zur speziellen Angebotsseite, die normalerweise nur über persönliche Bankberater oder institutionelle Kanäle zugänglich ist.
            </p>
          </div>

          <h2 className="article-subheading">Thelens Erfahrungsbericht</h2>

          <p>
            „Ich habe mit einem überschaubaren Betrag angefangen – das empfehle ich jedem", berichtet Thelen. „Die ersten Wochen waren beeindruckend. Die Händler der DKB arbeiten mit Strategien, die ich so noch nicht gesehen habe. Algorithmus-gestütztes Trading kombiniert mit menschlicher Expertise."
          </p>

          <p>
            Besonders wichtig für den risikobewussten Investor: „Als jemand, der in volatile Tech-Startups investiert, weiß ich, was Risiko bedeutet. Aber hier ist das Risiko durch die <strong>gesetzliche Einlagensicherung von 100.000 Euro</strong> begrenzt. Das gibt es bei meinen anderen Investments nicht."
          </p>

          <blockquote className="article-quote">
            „In ‚Die Höhle der Löwen' habe ich Hunderte Pitches gehört. Wenn mir jemand so ein Angebot präsentiert hätte, hätte ich sofort investiert. Die Kombination aus Rendite und Sicherheit ist außergewöhnlich."
          </blockquote>

          <h2 className="article-subheading">Für wen eignet sich das Angebot?</h2>

          <p>
            Thelen ist direkt: „Das ist nichts für Zocker. Es ist für Menschen, die:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ihr Geld nicht auf dem Sparbuch verrotten lassen wollen</li>
            <li>Keine Zeit haben, selbst zu traden</li>
            <li>Von Profi-Strategien profitieren möchten</li>
            <li>Wert auf deutsche Banksicherheit legen</li>
          </ul>

          <p>
            „Man sollte nur Geld investieren, das man mittelfristig nicht braucht", betont er. „Aber wer langfristig denkt und mehr aus seinem Vermögen machen will, sollte sich das ansehen – solange es noch verfügbar ist."
          </p>

          <h2 className="article-subheading">Die Zeit läuft</h2>

          <p>
            Auf die Frage, wie lange das Angebot noch besteht, wird Thelen nachdenklich: „Die Bank hat mir gesagt, dass die Kapazitäten der Händler begrenzt sind. Es können nicht unbegrenzt viele Privatanleger aufgenommen werden. Wenn die Plätze weg sind, ist das Angebot geschlossen."
          </p>

          <p>
            Unsere Recherche bestätigt: <strong>Das Angebot ist zeitlich limitiert</strong> und nur über den speziellen Zugang erreichbar.
          </p>
        </div>

        {/* Exclusive Access Box */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Exklusiver Redaktions-Zugang</span>
          </div>
          <p className="text-sm mb-4">
            Dieses Angebot wurde von unserer Wirtschaftsredaktion recherchiert und führt direkt zum DKB-Angebot für aktives Wertpapierdepot-Management. Das Angebot ist auf der regulären DKB-Website <strong>nicht auffindbar</strong> und normalerweise nur institutionellen Anlegern vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            Hinweis: Begrenzte Plätze verfügbar. Das Angebot kann jederzeit geschlossen werden.
          </p>
        </div>

        {/* CTA Section */}
        <div className="my-12 text-center">
          <a 
            href="#" 
            className="cta-button text-xl"
          >
            👉 Zum exklusiven DKB-Angebot (von der Redaktion recherchiert)
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            * Das Angebot ist zeitlich begrenzt und richtet sich an ausgewählte Kunden.
          </p>
        </div>

        {/* Final Quote */}
        <div className="article-body">
          <blockquote className="article-quote">
            „Mein Tipp: Nicht zu lange überlegen. Solche Chancen kommen selten – und verschwinden schnell. Ich selbst bin froh, dass ich rechtzeitig eingestiegen bin."
            <footer className="mt-2 text-base not-italic">— Frank Thelen</footer>
          </blockquote>
        </div>

        {/* Second CTA */}
        <div className="info-box my-8">
          <h3 className="font-bold text-lg mb-3">Jetzt selbst profitieren</h3>
          <p className="mb-4">
            Nutzen Sie den von unserer Redaktion recherchierten Zugang zum exklusiven DKB-Angebot. Professionelles Trading-Management, bis zu 17% Rendite im Monat, 100.000€ Einlagensicherung.
          </p>
          <a 
            href="#" 
            className="cta-button inline-block"
          >
            Jetzt Zugang sichern →
          </a>
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
            Frank Thelen hat den Weg gezeigt. Nutzen Sie jetzt den exklusiven Zugang zum DKB-Angebot, bevor die begrenzten Plätze vergeben sind.
          </p>
          <a 
            href="#" 
            className="cta-button text-lg"
          >
            👉 Zum versteckten DKB-Angebot
          </a>
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

export default ArticlePage4;
