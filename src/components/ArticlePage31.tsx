import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, AlertTriangle, CheckCircle } from "lucide-react";
import loewinInvestorin from "@/assets/loewin-investorin-3.png";
import OfferButton from "./OfferButton";

const ArticlePage31 = () => {
  const comments = [
    {
      id: 1,
      author: "Michael S.",
      time: "vor 1 Stunde",
      text: "Endlich sagt mal jemand die Wahrheit! Die Banken haben uns jahrelang abgezockt. Danke für diesen Artikel!",
      likes: 287
    },
    {
      id: 2,
      author: "Susanne L.",
      time: "vor 2 Stunden", 
      text: "Ich habe das Angebot geprüft – die BaFin-Regulierung stimmt. Das gibt mir Vertrauen.",
      likes: 198
    },
    {
      id: 3,
      author: "Peter H.",
      time: "vor 3 Stunden",
      text: "Die Löwin war schon in der Sendung die Klügste. Wenn sie das empfiehlt, vertraue ich ihr.",
      likes: 156
    },
    {
      id: 4,
      author: "Brigitte W.",
      time: "vor 4 Stunden",
      text: "Habe mich gerade angemeldet. Der Prozess war überraschend einfach!",
      likes: 134
    },
    {
      id: 5,
      author: "Thomas K.",
      time: "vor 5 Stunden",
      text: "Die EU-Richtlinie hat wirklich alles verändert. Endlich haben normale Leute Zugang zu solchen Angeboten.",
      likes: 89
    },
    {
      id: 6,
      author: "Ingrid M.",
      time: "vor 6 Stunden",
      text: "Meine Freundin hat damit schon 3.000€ verdient. Jetzt bin ich auch dabei!",
      likes: 178
    },
    {
      id: 7,
      author: "Werner B.",
      time: "vor 7 Stunden",
      text: "Nutze das Angebot seit 13 Monaten. Kann nur Positives berichten – Auszahlungen kommen immer pünktlich!",
      likes: 389
    },
    {
      id: 8,
      author: "Erika T.",
      time: "vor 8 Stunden",
      text: "Super recherchierter Artikel! Habe ihn in meiner WhatsApp-Gruppe geteilt.",
      likes: 67
    },
    {
      id: 9,
      author: "Manfred G.",
      time: "vor 9 Stunden",
      text: "Mein Bruder ist seit fast 2 Jahren dabei und sehr zufrieden. Werde mich auch anmelden.",
      likes: 234
    },
    {
      id: 10,
      author: "Christa K.",
      time: "vor 10 Stunden",
      text: "Ich bin beeindruckt, wie offen die Löwin über diese Dinge spricht. Mutige Frau!",
      likes: 145
    },
    {
      id: 11,
      author: "Jörg S.",
      time: "vor 11 Stunden",
      text: "Die Banken sind wirklich dreist. Gut, dass sowas endlich ans Licht kommt.",
      likes: 167
    },
    {
      id: 12,
      author: "Elisabeth R.",
      time: "vor 1 Tag",
      text: "Bin seit 8 Monaten dabei. Die Renditen variieren, aber unterm Strich bin ich sehr zufrieden 👍",
      likes: 298
    },
    {
      id: 13,
      author: "Dieter H.",
      time: "vor 1 Tag",
      text: "Interessanter Beitrag. Werde mich mal schlau machen.",
      likes: 45
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
          <span>Banken</span>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        {/* Category */}
        <span className="category-tag">Enthüllung</span>
        
        {/* Title */}
        <h1 className="article-title mt-3 mb-4">
          „Die Banken haben uns belogen" – Löwin-Investorin deckt auf, was Finanzinstitute verschweigen
        </h1>

        {/* Lead */}
        <p className="article-lead text-muted-foreground mb-6">
          Die bekannte Unternehmerin und „Höhle der Löwen"-Jurorin erhebt schwere Vorwürfe gegen deutsche Banken: Sie würden lukrative Anlagemöglichkeiten absichtlich vor Privatkunden verbergen. Unsere Redaktion hat recherchiert.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>10 Min. Lesezeit</span>
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
            alt="Die TV-Investorin im Interview" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Die erfolgreiche Unternehmerin (70) erhebt schwere Vorwürfe gegen deutsche Finanzinstitute
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="article-body">
          <p>
            <strong>Es ist eine explosive Anschuldigung.</strong> Die millionenschwere Unternehmerin und TV-Investorin, bekannt aus „Die Höhle der Löwen", hat in einem exklusiven Interview schwere Vorwürfe gegen deutsche Banken erhoben. Ihr Kern: Finanzinstitute würden systematisch ihre besten Anlageprodukte vor normalen Kunden verstecken.
          </p>

          <p>
            „Ich war selbst schockiert, als ich es herausfand", sagt die 70-Jährige. „Da gibt es Angebote mit 7 bis 17 Prozent Rendite im Monat, vollständig abgesichert – und die Banken erzählen Ihnen nichts davon. Stattdessen verkaufen sie Ihnen Sparbücher mit 0,5 Prozent."
          </p>

          <div className="bg-destructive/10 border-l-4 border-destructive p-4 sm:p-6 my-6 sm:my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-base sm:text-lg mb-2">Die Anklage der TV-Investorin:</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  „Banken verdienen an unwissenden Kunden. Je weniger Sie über die wirklich guten Produkte wissen, desto mehr zahlen Sie für schlechte. Das ist ein systematischer Betrug am Verbraucher."
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Das versteckte Angebot, das alles verändert</h2>

          <p>
            Die ehemalige Miss Germany, Politikerin und erfolgreiche Geschäftsfrau spricht von einem konkreten Beispiel: Einem Angebot einer der größten deutschen Direktbanken, das auf der normalen Website <strong>nicht zu finden ist</strong>.
          </p>

          {/* Bank Box */}
          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <div>
              <p className="font-bold text-lg">Eine der größten deutschen Direktbanken</p>
              <p className="text-muted-foreground text-sm">Staatliche Beteiligung, über 5 Millionen Kunden, BaFin-reguliert</p>
            </div>
          </div>

          <p>
            „Diese Bank bietet <strong>aktives Wertpapierdepot-Management durch bankinterne Händler</strong>", erklärt die TV-Investorin. „Dieselben Strategien, die für Milliardenfonds verwendet werden. Aber Sie finden das Angebot nicht, wenn Sie danach suchen. Es wird nicht beworben."
          </p>

          <h2 className="article-subheading">Warum Banken ihre besten Produkte verstecken</h2>

          <p>
            Die erfahrene Investorin erklärt die Logik dahinter: „Banken sind Unternehmen. Sie wollen Gewinn machen. Bei Produkten wie Investmentfonds oder Versicherungen verdienen sie 2-3 Prozent Provision. Bei dem versteckten Angebot ist die Marge viel niedriger."
          </p>

          <blockquote className="article-quote">
            „Fragen Sie Ihren Bankberater beim nächsten Termin nach ‚aktivem Wertpapierdepot-Management mit bankinternen Händlern'. Beobachten Sie seine Reaktion. Wenn er weiß, wovon Sie reden, wird er nervös werden."
          </blockquote>

          <p>
            Unsere Redaktion hat die Aussagen überprüft und kann bestätigen: Das beschriebene Angebot existiert tatsächlich. Es bietet Renditen zwischen 7 und 17 Prozent im Monat – bei voller Einlagensicherung bis 100.000 Euro.
          </p>

          {/* Feature Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Was die Banken Ihnen verschweigen:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>7-17% Rendite im Monat</strong> (Durchschnitt ca. 13%) durch professionelles Trading</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>100.000€ Einlagensicherung</strong> – voller Schutz Ihres Kapitals</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Keine eigene Expertise nötig</strong> – bankinterne Experten handeln für Sie</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">Die EU-Richtlinie, die alles möglich macht</h2>

          <p>
            Ein wichtiger Hintergrund: Die neue EU-Bankenrichtlinie CRD VI enthält eine sogenannte „Fair Access Clause", die Banken dazu verpflichtet, institutionelle Anlageprodukte auch Privatkunden anzubieten – wenn diese explizit danach fragen.
          </p>

          <p>
            „Das ist der Trick", erklärt die TV-Investorin. „Die Banken müssen das Angebot haben. Aber sie müssen es nicht bewerben. Und sie tun es auch nicht."
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Was unsere Redaktion herausgefunden hat:</p>
            <p>
              Nach intensiver Recherche ist es uns gelungen, den <strong>direkten Zugang</strong> zu diesem versteckten Angebot zu finden. Es ist auf der normalen Bank-Website nicht sichtbar und wird nicht in Beratungsgesprächen angeboten – außer Sie fragen explizit danach.
            </p>
          </div>

          <h2 className="article-subheading">Der Aufruf der TV-Investorin</h2>

          <p>
            Am Ende des Interviews wird die erfolgreiche Unternehmerin deutlich: „Ich habe in meinem Leben viel Geld verdient. Ich brauche dieses Angebot nicht. Aber ich ärgere mich darüber, wie normale Menschen behandelt werden."
          </p>

          <p>
            Ihr Appell: <strong>„Lassen Sie sich nicht länger für dumm verkaufen. Informieren Sie sich. Fragen Sie nach. Und wenn Ihnen jemand sagt, so etwas gibt es nicht – glauben Sie ihm nicht."</strong>
          </p>

          <blockquote className="article-quote">
            „Jeder Mensch verdient die Chance, sein Geld vernünftig anzulegen. Die Banken haben uns jahrelang belogen. Es ist Zeit, dass wir die Wahrheit erfahren."
            <footer className="mt-2 text-base not-italic">— Die bekannte TV-Investorin</footer>
          </blockquote>
        </div>

        {/* Security Checklist */}
        <div className="info-box">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Sicherheits-Checkliste (was die Banken verschweigen):
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
              <span>Wird aktiv beworben? <strong>Nein – aber genau deshalb lohnenswert ✓</strong></span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Anmerkung der Redaktion:</strong> Die TV-Investorin hat uns aufgefordert, dieses versteckte Angebot öffentlich zu machen. Es wird von den Banken nicht beworben – aber es existiert.
          </p>
          <OfferButton className="w-full">
            Das versteckte Angebot jetzt nutzen →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Einlagensicherung bis 100.000€ · Jederzeit kündbar
          </p>
        </div>

        {/* Second CTA */}
        <div className="info-box my-8">
          <h3 className="font-bold text-lg mb-3">Entdecken Sie, was Ihnen verschwiegen wird</h3>
          <p className="mb-4">
            Nutzen Sie den von unserer Redaktion recherchierten Zugang. 7-17% Rendite im Monat, 100.000€ Einlagensicherung, professionelles Management.
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
            Lassen Sie sich nicht länger täuschen
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Die TV-Investorin hat die Wahrheit ans Licht gebracht. Nutzen Sie jetzt den exklusiven Zugang zum versteckten Angebot.
          </p>
          <OfferButton className="text-lg">
            👉 Zum geheimen Angebot
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

export default ArticlePage31;
