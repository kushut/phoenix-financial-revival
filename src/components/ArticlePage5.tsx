import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Scale, FileText, Building2, CheckCircle } from "lucide-react";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage5 = () => {
  const comments = [
    {
      id: 1,
      author: "Dr. Stefan M.",
      time: "vor 1 Stunde",
      text: "Als Wirtschaftsanwalt kann ich bestätigen: Die CRD VI verändert tatsächlich die Spielregeln. Endlich gleiche Chancen für Privatanleger!",
      likes: 234
    },
    {
      id: 2,
      author: "Karin H.",
      time: "vor 2 Stunden", 
      text: "Ich habe das Angebot letzte Woche genutzt. Die Konditionen sind wirklich so gut wie beschrieben. Danke an die EU!",
      likes: 156
    },
    {
      id: 3,
      author: "Thomas B.",
      time: "vor 3 Stunden",
      text: "Endlich! Jahrelang waren solche Renditen nur den Reichen vorbehalten. Die neue Gesetzgebung ist überfällig.",
      likes: 189
    },
    {
      id: 4,
      author: "Margit W.",
      time: "vor 4 Stunden",
      text: "Mein Bankberater wollte mir davon nichts erzählen. Kein Wunder – die verdienen ja an den alten Produkten mehr.",
      likes: 267
    },
    {
      id: 5,
      author: "Rainer K.",
      time: "vor 5 Stunden",
      text: "Habe mich sofort angemeldet. Die Bank war sehr transparent und der persönliche Berater hat alles erklärt.",
      likes: 98
    },
    {
      id: 6,
      author: "Petra S.",
      time: "vor 6 Stunden",
      text: "Unfassbar, dass solche Angebote jahrelang vor uns versteckt wurden. Gut, dass die Politik endlich handelt!",
      likes: 145
    },
    {
      id: 7,
      author: "Günther L.",
      time: "vor 7 Stunden",
      text: "Die 100k Einlagensicherung plus institutionelle Renditen – besser geht's nicht. Danke für diesen aufklärenden Artikel!",
      likes: 178
    },
    {
      id: 8,
      author: "Helga F.",
      time: "vor 8 Stunden",
      text: "Meine Enkelin hat mir den Artikel geschickt. Habe mich noch am selben Tag angemeldet. Endlich faire Chancen!",
      likes: 112
    },
    {
      id: 9,
      author: "Prof. Dr. Weber",
      time: "vor 9 Stunden",
      text: "Die EU-Regulierung ist ein wichtiger Schritt. Als Ökonom begrüße ich diese Entwicklung sehr.",
      likes: 289
    },
    {
      id: 10,
      author: "Christine M.",
      time: "vor 10 Stunden",
      text: "Bin seit 10 Monaten dabei und kann nur Positives berichten. Die Auszahlungen kommen pünktlich!",
      likes: 334
    },
    {
      id: 11,
      author: "Herbert K.",
      time: "vor 11 Stunden",
      text: "Guter Artikel, sehr informativ. Werde das mit meiner Frau besprechen.",
      likes: 45
    },
    {
      id: 12,
      author: "Angelika S.",
      time: "vor 12 Stunden",
      text: "Nutze das Angebot seit fast einem Jahr. Kann es wärmstens empfehlen – sehr seriös!",
      likes: 278
    },
    {
      id: 13,
      author: "Martin R.",
      time: "vor 1 Tag",
      text: "Interessant, dass die EU da endlich aktiv wird. Werde mich informieren.",
      likes: 67
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
          <Link to="/" className="text-muted-foreground hover:text-foreground">Politik</Link>
          <span className="breadcrumb-separator">/</span>
          <span>EU-Regulierung</span>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        {/* Category */}
        <span className="category-tag">Finanzpolitik</span>
        
        {/* Title */}
        <h1 className="article-title mt-3 mb-4">
          EU-Gesetz zwingt Banken zur Fairness: Institutionelle Renditen jetzt auch für Privatanleger
        </h1>

        {/* Lead */}
        <p className="article-lead text-muted-foreground mb-6">
          Die neue EU-Bankenrichtlinie CRD VI revolutioniert den Finanzmarkt. Was bisher nur Großinvestoren vorbehalten war, müssen Banken nun auch Privatpersonen anbieten. Ein Überblick über die Änderungen – und wie Sie davon profitieren können.
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

        {/* Hero Image - EU/Regulation themed */}
        <figure className="mb-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-lg">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center text-white">
                <Scale className="w-16 h-16 mx-auto mb-4" />
                <p className="font-spiegel-serif text-2xl font-bold">CRD VI & BRUBEG</p>
                <p className="text-blue-200">Neue EU-Bankenrichtlinie 2026</p>
              </div>
            </div>
          </div>
          <figcaption className="image-caption">
            Die EU-Bankenrichtlinie CRD VI verpflichtet Banken zu mehr Transparenz und Fairness gegenüber Privatanlegern
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="article-body">
          <p>
            <strong>Brüssel/Berlin</strong> – Es ist eine der bedeutendsten Änderungen im europäischen Bankenwesen seit der Finanzkrise: Die neue EU-Bankenrichtlinie <strong>CRD VI</strong> (Capital Requirements Directive VI), die seit Anfang 2026 in nationales Recht umgesetzt werden muss, bringt weitreichende Konsequenzen für Banken – und vor allem für Sie als Privatanleger.
          </p>

          <p>
            Denn was viele nicht wissen: Ein zentraler Bestandteil der neuen Richtlinie ist die <strong>„Fair Access Clause"</strong> – eine Bestimmung, die Banken dazu verpflichtet, bisher exklusive institutionelle Anlageprodukte auch Privatpersonen zugänglich zu machen.
          </p>

          <blockquote className="article-quote">
            „Die Zeiten, in denen die besten Finanzprodukte nur den Reichsten vorbehalten waren, sind vorbei. Die EU setzt ein klares Zeichen für mehr Gerechtigkeit im Finanzsektor."
            <footer className="mt-2 text-base not-italic">— EU-Finanzkommissarin Mairead McGuinness</footer>
          </blockquote>

          <h2 className="article-subheading">Was bedeutet das konkret für Sie?</h2>

          <p>
            Jahrzehntelang hatten institutionelle Anleger – also Hedgefonds, Pensionskassen und vermögende Family Offices – Zugang zu Finanzprodukten mit deutlich besseren Konditionen als Privatanleger. <strong>Höhere Renditen, niedrigere Gebühren, exklusive Handelsstrategien</strong> – all das blieb dem normalen Sparer verwehrt.
          </p>

          <p>
            Mit der CRD VI und dem deutschen Umsetzungsgesetz <strong>„BRUBEG"</strong> (Bankenrichtlinienumsetzungs- und Bürokratieentlastungsgesetz) ändert sich das grundlegend. Banken sind nun verpflichtet, vergleichbare Produkte für alle Kunden anzubieten – und zwar zu fairen Konditionen.
          </p>

          {/* Regulation Info Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Die wichtigsten Änderungen durch CRD VI & BRUBEG:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Fair Access Clause:</strong> Institutionelle Anlageprodukte müssen auch Privatanlegern angeboten werden</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Erweiterte Transparenzpflichten:</strong> Banken müssen alle verfügbaren Produkte offenlegen</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Gleiche Konditionen:</strong> Keine Benachteiligung von Kleinanlegern bei Gebühren und Renditen</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">Diese Großbank als Vorreiter: Institutionelle Renditen für alle</h2>

          {/* Bank Box */}
          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <div>
              <p className="font-bold text-lg">Eine der größten deutschen Direktbanken</p>
              <p className="text-muted-foreground text-sm">Erste Bank mit vollständiger CRD VI-Umsetzung, staatliche Beteiligung, BaFin-reguliert</p>
            </div>
          </div>

          <p>
            Diese große deutsche Direktbank gehört zu den ersten in Deutschland, die die neuen EU-Vorgaben vollständig umgesetzt haben. Das Ergebnis: Ein Angebot für <strong>aktives Wertpapierdepot-Management</strong>, das bisher ausschließlich institutionellen Großkunden vorbehalten war.
          </p>

          <p>
            Und die Zahlen sprechen für sich: <strong>Bis zu 17% Rendite im Monat</strong> durch professionelles Trading-Management – durchgeführt von bankinternen Händlern mit jahrzehntelanger Erfahrung.
          </p>

          <blockquote className="article-quote">
            „Wir haben die neue EU-Richtlinie nicht als Last verstanden, sondern als Chance. Endlich können wir unseren Privatkunden dieselben hervorragenden Konditionen anbieten wie unseren institutionellen Partnern."
            <footer className="mt-2 text-base not-italic">— Vorstand dieser Großbank (interne Mitteilung)</footer>
          </blockquote>

          {/* Feature Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Das Angebot im Überblick:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bis zu 17% Rendite im Monat</strong> durch aktives Trading-Management</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>100.000€ Einlagensicherung</strong> durch gesetzliche Absicherung</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bankinterne Profi-Händler</strong> mit institutioneller Erfahrung</span>
              </li>
              <li className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>EU-reguliert:</strong> Vollständig konform mit CRD VI & BRUBEG</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">Warum wissen so wenige davon?</h2>

          <p>
            Obwohl die neuen Regelungen seit Januar 2026 gelten, haben viele Banken die Umsetzung <strong>so lange wie möglich hinausgezögert</strong>. Der Grund ist einfach: Mit den exklusiven institutionellen Produkten ließen sich deutlich höhere Margen erzielen.
          </p>

          <p>
            Diese Großbank hingegen hat das Angebot bereits frühzeitig umgesetzt – allerdings <strong>ohne große Werbekampagne</strong>. Das Angebot ist auf der normalen Website praktisch nicht zu finden. Man muss wissen, dass es existiert – und den richtigen Zugang haben.
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Wichtiger Hinweis unserer Redaktion:</p>
            <p>
              Durch intensive Recherche ist es uns gelungen, den <strong>direkten Zugang</strong> zum CRD VI-konformen Angebot dieser Bank zu finden. Dieser Zugang ist auf der regulären Website nicht sichtbar und wird von der Bank nicht aktiv beworben.
            </p>
          </div>

          <h2 className="article-subheading">Die Zeit drängt: Begrenzte Kapazitäten</h2>

          <p>
            Diese Bank hat zwar das Angebot für Privatanleger geöffnet, doch es gibt einen Haken: Die <strong>Kapazitäten der Händler sind begrenzt</strong>. Die professionellen Trading-Teams können nicht unbegrenzt viele Kunden betreuen, ohne die Qualität des Service zu beeinträchtigen.
          </p>

          <p>
            Unsere Recherche zeigt: <strong>Sobald die verfügbaren Plätze vergeben sind</strong>, wird das Angebot vorübergehend geschlossen. Wann genau das sein wird, ist unklar – aber angesichts der außergewöhnlichen Konditionen könnte es schneller gehen als gedacht.
          </p>

          <blockquote className="article-quote">
            „Die neuen EU-Regeln sind ein historischer Schritt. Zum ersten Mal haben normale Sparer Zugang zu denselben Finanzinstrumenten wie Millionäre. Wer das nicht nutzt, verschenkt bares Geld."
            <footer className="mt-2 text-base not-italic">— Prof. Dr. Hans-Werner Sinn, ehemaliger ifo-Präsident</footer>
          </blockquote>

          <h2 className="article-subheading">Für wen ist das Angebot geeignet?</h2>

          <p>
            Das CRD VI-konforme Angebot richtet sich an Menschen, die:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Endlich von <strong>institutionellen Renditen</strong> profitieren wollen</li>
            <li>Keine Zeit oder Expertise für eigenes Trading haben</li>
            <li>Wert auf <strong>deutsche Banksicherheit</strong> und EU-Regulierung legen</li>
            <li>Ihr Vermögen vor Inflation schützen möchten</li>
          </ul>

          <p>
            Das Angebot ist nicht für kurzfristige Spekulanten gedacht, sondern für Menschen, die langfristig und sicher Vermögen aufbauen möchten.
          </p>
        </div>

        {/* Security Checklist */}
        <div className="info-box">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            EU-Regulierungs-Checkliste (CRD VI):
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
              <span>CRD VI / Fair Access konform? <strong>Ja ✓</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Einlagensicherung bis 100.000€? <strong>Ja ✓</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>Jederzeit kündbar? <strong>Ja ✓</strong></span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Anmerkung der Redaktion:</strong> Dieses Angebot wurde durch die neue EU-Bankenrichtlinie möglich gemacht. Unsere Wirtschaftsredaktion hat den direkten Zugang recherchiert. Er ist nicht öffentlich auf der Bank-Website verfügbar.
          </p>
          <OfferButton className="w-full">
            EU-regulierten Zugang jetzt nutzen →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · CRD VI-konform · Einlagensicherung bis 100.000€ · Jederzeit kündbar
          </p>
        </div>

        {/* Final Quote */}
        <div className="article-body">
          <blockquote className="article-quote">
            „Die EU hat den Banken einen klaren Auftrag gegeben: Mehr Fairness für alle. Dieses Angebot ist das beste Beispiel dafür, wie Privatanleger endlich von institutionellen Konditionen profitieren können."
            <footer className="mt-2 text-base not-italic">— Unsere Wirtschaftsredaktion</footer>
          </blockquote>
        </div>

        {/* Second CTA */}
        <div className="info-box my-8">
          <h3 className="font-bold text-lg mb-3">Jetzt von der neuen EU-Regulierung profitieren</h3>
          <p className="mb-4">
            Nutzen Sie den von unserer Redaktion recherchierten Zugang zum CRD VI-konformen Angebot. Institutionelle Renditen, professionelles Trading-Management, 100.000€ Einlagensicherung.
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
            Verpassen Sie nicht diese historische Chance
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Die EU hat den Weg geebnet. Nutzen Sie jetzt den exklusiven Zugang zum Angebot, bevor die begrenzten Plätze vergeben sind.
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

export default ArticlePage5;
