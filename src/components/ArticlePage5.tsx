import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Scale, FileText, Building2 } from "lucide-react";
import OfferButton from "./OfferButton";

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

        {/* Exclusive Access Box */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">CRD VI-konformes Angebot – Exklusiver Zugang</span>
          </div>
          <p className="text-sm mb-4">
            Dieses Angebot wurde durch die neue EU-Bankenrichtlinie möglich gemacht. Es wurde von unserer Redaktion recherchiert und ist auf der regulären Website dieser Großbank <strong>nicht auffindbar</strong>. Nutzen Sie den direkten Zugang, solange noch Plätze verfügbar sind.
          </p>
          <p className="text-xs text-muted-foreground">
            Hinweis: Begrenzte Plätze verfügbar. Das Angebot wird geschlossen, sobald die Kapazitäten erreicht sind.
          </p>
        </div>

        {/* CTA Section */}
        <div className="my-12 text-center">
          <OfferButton className="text-xl">
            👉 Zum EU-regulierten Angebot (von der Redaktion recherchiert)
          </OfferButton>
          <p className="text-sm text-muted-foreground mt-4">
            * Das Angebot ist CRD VI-konform und unterliegt der deutschen Einlagensicherung.
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
