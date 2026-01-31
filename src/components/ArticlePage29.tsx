import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, CheckCircle } from "lucide-react";
import loewinInvestorin from "@/assets/loewin-investorin-1.png";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage29 = () => {
  const comments = [
    {
      id: 1,
      author: "Renate K.",
      time: "vor 1 Stunde",
      text: "Als Rentnerin war ich zuerst skeptisch. Aber wenn eine erfolgreiche Unternehmerin mit so viel Erfahrung das empfiehlt, kann das nicht falsch sein. Habe mich angemeldet!",
      likes: 156
    },
    {
      id: 2,
      author: "Helmut W.",
      time: "vor 2 Stunden", 
      text: "Die Dame hat recht – wir Rentner werden von den normalen Banken wirklich ignoriert. Endlich mal jemand, der an uns denkt.",
      likes: 203
    },
    {
      id: 3,
      author: "Gerda M.",
      time: "vor 3 Stunden",
      text: "Meine Rente reicht hinten und vorne nicht. Vielleicht ist das endlich die Lösung. Die 100.000€ Absicherung gibt mir Sicherheit.",
      likes: 89
    },
    {
      id: 4,
      author: "Wolfgang B.",
      time: "vor 4 Stunden",
      text: "Die Löwin hat schon vielen Start-ups geholfen. Dass sie sich jetzt für Rentner einsetzt, zeigt ihren Charakter!",
      likes: 134
    },
    {
      id: 5,
      author: "Irmgard S.",
      time: "vor 5 Stunden",
      text: "Habe das meinem Mann gezeigt. Er war erst dagegen, aber nach dem Lesen hat er sich selbst angemeldet 😊",
      likes: 178
    },
    {
      id: 6,
      author: "Dieter F.",
      time: "vor 6 Stunden",
      text: "Endlich mal ein Artikel, der nicht von komplizierten Aktienstrategien redet. Das hier ist für normale Leute gemacht.",
      likes: 67
    },
    {
      id: 7,
      author: "Hannelore P.",
      time: "vor 7 Stunden",
      text: "Bin seit 8 Monaten dabei und bekomme regelmäßig meine Auszahlungen. Super Service, sehr zufrieden!",
      likes: 312
    },
    {
      id: 8,
      author: "Kurt E.",
      time: "vor 8 Stunden",
      text: "Schöner Artikel! Habe den Link an meine Schwester weitergeleitet, die auch Rentnerin ist.",
      likes: 54
    },
    {
      id: 9,
      author: "Elfriede N.",
      time: "vor 9 Stunden",
      text: "Nutze das Angebot jetzt seit einem halben Jahr. Konnte mir davon sogar einen kleinen Urlaub leisten 🌴",
      likes: 245
    },
    {
      id: 10,
      author: "Hans-Jürgen T.",
      time: "vor 10 Stunden",
      text: "Meine Enkelin studiert Wirtschaft und hat mir bestätigt, dass solche Angebote wirklich existieren. Bin dabei!",
      likes: 123
    },
    {
      id: 11,
      author: "Ursula B.",
      time: "vor 11 Stunden",
      text: "Toller Beitrag! Endlich versteht jemand unsere Generation.",
      likes: 87
    },
    {
      id: 12,
      author: "Rudi S.",
      time: "vor 1 Tag",
      text: "Bin schon seit 14 Monaten Kunde. Die Renditen schwanken zwar, aber im Durchschnitt stimmt es. Kann ich empfehlen.",
      likes: 398
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
          <span>Altersvorsorge</span>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        {/* Category */}
        <span className="category-tag">Exklusiv-Interview</span>
        
        {/* Title */}
        <h1 className="article-title mt-3 mb-4">
          „Unsere Rentner werden systematisch benachteiligt" – Bekannte TV-Löwin fordert faire Geldanlagen für Senioren
        </h1>

        {/* Lead */}
        <p className="article-lead text-muted-foreground mb-6">
          Die erfolgreiche Unternehmerin und „Höhle der Löwen"-Investorin (70) spricht erstmals über ein verstecktes Bankangebot, das deutschen Rentnern durchschnittlich 13% Rendite im Monat ermöglicht – und warum die meisten davon nie erfahren.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>9 Min. Lesezeit</span>
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
            src={loewinInvestorin} 
            alt="Die TV-Löwin im Interview" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Die bekannte Unternehmerin (70) setzt sich für bessere Anlageoptionen für Rentner ein
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="article-body">
          <p>
            <strong>Die elegante Unternehmerin</strong> ist eine der erfolgreichsten Geschäftsfrauen Deutschlands. Als ehemalige Politikerin, Miss Germany und millionenschwere Investorin kennt sie die Welt der Finanzen aus allen Perspektiven. In ihrer Zeit bei „Die Höhle der Löwen" hat sie Hunderte von Geschäftsmodellen analysiert – doch was sie kürzlich entdeckte, hat selbst sie überrascht.
          </p>

          <p>
            In einem emotionalen Interview spricht die 70-Jährige nun erstmals über ein Thema, das ihr persönlich am Herzen liegt: <strong>Die finanzielle Benachteiligung deutscher Rentner</strong> – und ein verstecktes Angebot, das alles ändern könnte.
          </p>

          <blockquote className="article-quote">
            „Ich sehe in meinem Umfeld so viele Rentner, die jeden Cent umdrehen müssen. Gleichzeitig wissen die wenigsten, dass es Angebote gibt, die ihnen helfen könnten. Die Banken bewerben sie einfach nicht – weil es sich für sie nicht lohnt."
          </blockquote>

          <h2 className="article-subheading">Warum Rentner von den Banken ignoriert werden</h2>

          <p>
            Die erfahrene Investorin erklärt die Hintergründe: „Banken verdienen ihr Geld mit Produkten, die hohe Gebühren haben – Investmentfonds, Versicherungen, komplizierte Finanzprodukte. Für diese Produkte brauchen sie junge Kunden, die noch Jahrzehnte einzahlen."
          </p>

          <p>
            Das Problem: Rentner mit überschaubaren Ersparnissen sind für die klassischen Produkte nicht interessant genug. <strong>Sie werden systematisch übersehen.</strong>
          </p>

          {/* Bank Box */}
          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <div>
              <p className="font-bold text-lg">Eine der größten deutschen Direktbanken</p>
              <p className="text-muted-foreground text-sm">Staatliche Beteiligung, über 5 Millionen Kunden, BaFin-reguliert</p>
            </div>
          </div>

          <p>
            Doch es gibt eine Ausnahme: Eine der größten deutschen Direktbanken bietet ein spezielles Programm an, das ursprünglich nur für institutionelle Anleger gedacht war – <strong>aktives Wertpapierdepot-Management durch bankinterne Händler</strong>.
          </p>

          <h2 className="article-subheading">„7 bis 17 Prozent im Monat – und das mit voller Absicherung"</h2>

          <p>
            Die TV-Investorin hat das Angebot selbst geprüft und ist begeistert: „Die Renditen liegen zwischen 7 und 17 Prozent im Monat, im Durchschnitt etwa 13 Prozent. Und das Beste: Die Einlagen sind bis 100.000 Euro gesetzlich abgesichert."
          </p>

          {/* Feature Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Warum dieses Angebot perfekt für Rentner ist:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>7-17% Rendite im Monat</strong> – im Schnitt ca. 13% durch professionelles Trading</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>100.000€ Einlagensicherung</strong> – keine Verlustangst</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Kein eigenes Trading nötig</strong> – Experten übernehmen alles</span>
              </li>
            </ul>
          </div>

          <blockquote className="article-quote">
            „Ich habe in meiner Karriere gelernt, auf mein Bauchgefühl zu hören. Und als ich dieses Angebot sah, wusste ich: Das muss ich teilen. Nicht für mich – ich brauche das Geld nicht. Aber für die vielen Rentner, die jeden Monat kämpfen."
          </blockquote>

          <h2 className="article-subheading">Die persönliche Geschichte der Unternehmerin</h2>

          <p>
            Die gebürtige Bayerin, die einst als Miss Germany bekannt wurde, hatte nicht immer ein einfaches Leben. Nach dem tragischen Verlust ihres Sohnes im Jahr 2010 zog sie sich zeitweise aus der Öffentlichkeit zurück. Doch sie kämpfte sich zurück – stärker als zuvor.
          </p>

          <p>
            „Diese Erfahrung hat mich gelehrt, was wirklich wichtig ist im Leben. Es geht nicht um Status oder Prestige. Es geht darum, anderen zu helfen. Und wenn ich mit meiner Bekanntheit dazu beitragen kann, dass Rentner von besseren Anlageoptionen erfahren, dann tue ich das gerne."
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Wichtiger Hinweis unserer Redaktion:</p>
            <p>
              Dieses Angebot ist <strong>nicht über die normale Homepage</strong> dieser Großbank erreichbar. Der Zugang unten führt direkt zur speziellen Angebotsseite, die normalerweise nur über persönliche Vermögensberater zugänglich ist.
            </p>
          </div>

          <h2 className="article-subheading">Ihr Aufruf an alle Rentner</h2>

          <p>
            Am Ende des Interviews wird die erfolgreiche Unternehmerin emotional: „Ich möchte, dass jeder Rentner in Deutschland von dieser Möglichkeit erfährt. Die Banken werden es nicht bewerben – sie verdienen mehr an anderen Produkten. Aber Sie verdienen es, diese Chance zu bekommen."
          </p>

          <p>
            Ihre klare Botschaft: <strong>„Informieren Sie sich, solange das Angebot noch verfügbar ist. Die Plätze sind begrenzt."</strong>
          </p>
        </div>

        {/* Security Checklist */}
        <div className="info-box">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Sicherheits-Checkliste der TV-Löwin (für Rentner):
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Ist es eine deutsche Bank? <strong>Ja ✓</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>BaFin-reguliert? <strong>Ja ✓</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Einlagensicherung bis 100.000€? <strong>Ja ✓</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Jederzeit kündbar? <strong>Ja ✓</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Für Rentner geeignet? <strong>Ja – von der TV-Löwin empfohlen ✓</strong></span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Anmerkung der Redaktion:</strong> Die bekannte TV-Investorin hat uns gebeten, diesen Zugang speziell mit Rentnern zu teilen. Er ist nicht öffentlich auf der Bank-Website verfügbar.
          </p>
          <OfferButton className="w-full">
            Zugang der TV-Löwin jetzt nutzen →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Einlagensicherung bis 100.000€ · Jederzeit kündbar
          </p>
        </div>

        {/* Final Quote */}
        <div className="article-body">
          <blockquote className="article-quote">
            „Unsere Generation hat dieses Land aufgebaut. Wir verdienen es, im Alter gut versorgt zu sein. Und wenn die Banken uns nicht helfen, dann müssen wir uns selbst helfen."
            <footer className="mt-2 text-base not-italic">— Die bekannte TV-Investorin</footer>
          </blockquote>
        </div>

        {/* Second CTA */}
        <div className="info-box my-8">
          <h3 className="font-bold text-lg mb-3">Jetzt als Rentner profitieren</h3>
          <p className="mb-4">
            Nutzen Sie das von der TV-Löwin empfohlene Angebot. Professionelles Trading-Management, 7-17% Rendite im Monat, 100.000€ Einlagensicherung.
          </p>
          <OfferButton>
            Jetzt Zugang sichern →
          </OfferButton>
        </div>

        {/* Comments Section */}
        <CommentSection initialComments={comments} />

        {/* Final CTA */}
        <div className="my-12 p-8 bg-secondary rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4 font-spiegel-serif">
            Die TV-Löwin hat den Weg gezeigt
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Nutzen Sie jetzt den exklusiven Zugang zum versteckten Angebot, bevor die begrenzten Plätze vergeben sind.
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

export default ArticlePage29;
