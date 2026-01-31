import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, CheckCircle } from "lucide-react";
import loewinInvestorin from "@/assets/loewin-investorin-2.png";
import OfferButton from "./OfferButton";

const ArticlePage30 = () => {
  const comments = [
    {
      id: 1,
      author: "Stefan M.",
      time: "vor 2 Stunden",
      text: "Die Löwin war schon immer meine Favoritin in der Sendung. Kein Wunder, dass sie auch hier wieder den richtigen Riecher hat!",
      likes: 234
    },
    {
      id: 2,
      author: "Claudia R.",
      time: "vor 3 Stunden", 
      text: "Habe mich angemeldet. Der Berater hat sich innerhalb von einer Stunde gemeldet – super Service!",
      likes: 189
    },
    {
      id: 3,
      author: "Jürgen K.",
      time: "vor 4 Stunden",
      text: "Als ehemaliger Banker kann ich bestätigen: Diese Art von Angeboten gibt es wirklich. Nur kennt sie kaum jemand.",
      likes: 156
    },
    {
      id: 4,
      author: "Monika H.",
      time: "vor 5 Stunden",
      text: "Mein Mann war erst skeptisch, aber die Einlagensicherung hat ihn überzeugt. Danke für den Tipp!",
      likes: 98
    },
    {
      id: 5,
      author: "Andreas W.",
      time: "vor 6 Stunden",
      text: "Das Interview war wirklich aufschlussreich. Die Dame weiß, wovon sie spricht.",
      likes: 145
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
        <span className="category-tag">Exklusiv</span>
        
        {/* Title */}
        <h1 className="article-title mt-3 mb-4">
          TV-Investorin verrät: „Dieses Angebot nutze ich selbst – und empfehle es jedem"
        </h1>

        {/* Lead */}
        <p className="article-lead text-muted-foreground mb-6">
          Die millionenschwere Unternehmerin und „Höhle der Löwen"-Jurorin spricht erstmals offen über ihre persönliche Anlagestrategie – und warum sie ein verstecktes Bankangebot mit 7-17% Monatsrendite für die beste Entdeckung ihrer Karriere hält.
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
            src={loewinInvestorin} 
            alt="Die TV-Investorin erklärt ihre Strategie" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Die bekannte Investorin (70) im Studio – mit dem Notizbuch, in dem sie ihre besten Investments dokumentiert
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="article-body">
          <p>
            <strong>Sie ist eine der bekanntesten Investorinnen Deutschlands.</strong> Die ehemalige Miss Germany, erfolgreiche Unternehmerin und TV-Jurorin hat in ihrem Leben Dutzende Millionen verdient – und dabei gelernt, welche Investments sich wirklich lohnen. Jetzt spricht sie erstmals über eine Entdeckung, die selbst sie überrascht hat.
          </p>

          <p>
            „In all meinen Jahren als Investorin habe ich viele Angebote gesehen", erklärt die elegante 70-Jährige. „Aber dieses hier ist anders. Es kombiniert etwas, das in der Finanzwelt eigentlich als unmöglich gilt: <strong>Hohe Rendite bei maximaler Sicherheit.</strong>"
          </p>

          <blockquote className="article-quote">
            „Als ich das erste Mal von diesem Angebot hörte, dachte ich: Das kann nicht stimmen. 7 bis 17 Prozent im Monat? Mit Einlagensicherung? Ich habe alles geprüft – und es stimmt. Deshalb nutze ich es selbst."
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
            Die erfahrene Investorin erklärt: „Diese deutsche Großbank bietet ein Programm an, das ursprünglich nur für Hedgefonds und Großanleger gedacht war. <strong>Aktives Wertpapierdepot-Management durch bankinterne Händler</strong> – Profis, die mit Milliardenbeträgen arbeiten."
          </p>

          <p>
            Das Besondere: Seit Kurzem ist dieses Programm auch für Privatanleger zugänglich – allerdings nicht öffentlich beworben.
          </p>

          {/* Feature Box */}
          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Die Vorteile laut der TV-Investorin:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>7-17% Rendite im Monat</strong> – im Durchschnitt etwa 13%</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Volle Einlagensicherung</strong> bis 100.000 Euro</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bankinterne Experten</strong> handeln für Sie</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>BaFin-reguliert</strong> und transparent</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">„Warum bewerben Banken das nicht?"</h2>

          <p>
            Die kritische Frage, die sich viele stellen, beantwortet die erfahrene Geschäftsfrau direkt: „Ganz einfach: Die Bank verdient an klassischen Produkten mehr. Investmentfonds, Versicherungen, Bausparverträge – überall sind hohe Provisionen eingebaut. Bei diesem Angebot sind die Margen für die Bank niedriger."
          </p>

          <blockquote className="article-quote">
            „Das ist der Grund, warum Sie dieses Angebot nicht auf der normalen Bank-Website finden. Es wird nicht aktiv beworben. Sie müssen explizit danach fragen – oder jemanden kennen, der es kennt."
          </blockquote>

          <h2 className="article-subheading">Ihre persönliche Erfahrung</h2>

          <p>
            Die TV-Jurorin, die bei „Die Höhle der Löwen" schon Hunderte von Geschäftsideen bewertet hat, beschreibt ihre eigenen Erfahrungen: „Ich habe mit einem überschaubaren Betrag angefangen – um zu testen. Nach drei Monaten hatte ich mein Kapital um über 40% gesteigert. Da wusste ich: Das ist echt."
          </p>

          <div className="bg-muted/30 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Ihre dokumentierte Entwicklung:</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Startkapital:</span>
                <span className="font-semibold">25.000 €</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Nach 1 Monat:</span>
                <span className="font-semibold">28.200 € (+12,8%)</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Nach 2 Monaten:</span>
                <span className="font-semibold">31.500 € (+26%)</span>
              </div>
              <div className="flex justify-between">
                <span>Nach 3 Monaten:</span>
                <span className="font-bold text-primary">35.200 € (+40,8%)</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Durchschnittliche Monatsrendite: ca. 13% (Schwankungen zwischen 7-17% möglich)
            </p>
          </div>

          <div className="highlight-box">
            <p className="font-bold mb-2">Wichtiger Hinweis unserer Redaktion:</p>
            <p>
              Dieses Angebot ist <strong>nicht über die normale Homepage</strong> dieser Großbank erreichbar. Der Zugang unten führt direkt zur speziellen Angebotsseite.
            </p>
          </div>

          <h2 className="article-subheading">Ihr Rat an Privatanleger</h2>

          <p>
            „Mein Rat ist einfach", sagt die erfolgreiche Unternehmerin zum Abschluss. „Prüfen Sie alles selbst. Aber ignorieren Sie nicht etwas, nur weil es zu gut klingt. Manchmal sind die besten Möglichkeiten die, die niemand kennt."
          </p>

          <p>
            Ihre Warnung: <strong>„Die Plätze sind begrenzt. Die Bank kann nur eine bestimmte Anzahl von Privatanlegern aufnehmen, weil die Kapazitäten der Händler begrenzt sind."</strong>
          </p>
        </div>

        {/* Exclusive Access Box */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Exklusiver Redaktions-Zugang</span>
          </div>
          <p className="text-sm mb-4">
            Unsere Wirtschaftsredaktion hat den direkten Zugang zu diesem versteckten Bankangebot recherchiert. Es ist auf der regulären Website nicht auffindbar.
          </p>
          <p className="text-xs text-muted-foreground">
            Hinweis: Begrenzte Plätze verfügbar. Das Angebot kann jederzeit geschlossen werden.
          </p>
        </div>

        {/* CTA Section */}
        <div className="my-12 text-center">
          <OfferButton className="text-xl">
            👉 Zum Angebot der TV-Investorin
          </OfferButton>
          <p className="text-sm text-muted-foreground mt-4">
            * Das Angebot ist zeitlich begrenzt und richtet sich an ausgewählte Kunden.
          </p>
        </div>

        {/* Final Quote */}
        <div className="article-body">
          <blockquote className="article-quote">
            „In der ‚Höhle der Löwen' investiere ich in Ideen. Bei diesem Angebot investiere ich in Sicherheit. Und genau das empfehle ich jedem, der sein Geld vermehren will."
            <footer className="mt-2 text-base not-italic">— Die bekannte TV-Investorin</footer>
          </blockquote>
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
            Nutzen Sie den Geheimtipp der TV-Investorin
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Die erfolgreiche Unternehmerin hat den Weg gezeigt. Nutzen Sie jetzt den exklusiven Zugang.
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

export default ArticlePage30;
