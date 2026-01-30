import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, Users, Shield, Star, Heart } from "lucide-react";
import ehepaarPortrait from "@/assets/ehepaar-heinz-maria.png";
import OfferButton from "./OfferButton";

const ArticlePage26 = () => {
  const comments = [
    {
      id: 1,
      author: "Renate & Friedrich K.",
      time: "vor 20 Minuten",
      text: "53 Jahre verheiratet. Haben es unseren Kindern verschwiegen, bis wir ihnen zu Weihnachten je 5.000€ schenken konnten.",
      likes: 312
    },
    {
      id: 2,
      author: "Inge W.",
      time: "vor 1 Stunde",
      text: "Mein Mann war Lokführer, ich Krankenschwester. Zusammen 2.400€ Rente. Jetzt haben wir ein Zusatzeinkommen von 800€ im Monat.",
      likes: 245
    },
    {
      id: 3,
      author: "Wolfgang & Margit H.",
      time: "vor 2 Stunden",
      text: "Die Enkel sind begeistert – Oma und Opa können jetzt wieder richtige Geburtstagsgeschenke machen!",
      likes: 198
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
          <span>Rente</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Rente & Vorsorge</span>
        
        <h1 className="article-title mt-3 mb-4">
          „Endlich können wir unseren Enkeln etwas geben": Wie Rentner-Ehepaare die versteckte Alternative zum Sparbuch entdecken
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          Immer mehr ältere Paare berichten von einem Bankprogramm, das ihre finanzielle Situation grundlegend verändert hat – und das offiziell für jeden zugänglich ist.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>9 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 08:45 Uhr</span>
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
            src={ehepaarPortrait} 
            alt="Ein Rentner-Ehepaar beim Frühstück" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Symbolbild: Immer mehr Rentner-Ehepaare entdecken Alternativen zum klassischen Sparbuch
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Berlin</strong> – Die Nachrichten aus der Rentner-Community häufen sich. In Seniorentreffs, Kirchengemeinden und Familien-WhatsApp-Gruppen kursiert ein Thema: Ein Bankprogramm, das deutlich mehr Rendite verspricht als jedes Sparbuch – und das angeblich genauso sicher ist.
          </p>

          <p>
            Unsere Redaktion hat mit mehreren Ehepaaren gesprochen, die das Angebot nutzen. Ihre Geschichten sind bemerkenswert ähnlich.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Das Muster, das sich wiederholt:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Jahrzehntelang gespart, aber Angst vor der Zukunft</li>
                  <li>• Tipp von Bekannten oder Familienmitgliedern</li>
                  <li>• Erst skeptisch, dann mit kleinem Betrag ausprobiert</li>
                  <li>• Nach ersten Erfolgen: deutliche Erhöhung</li>
                  <li>• Heute: finanzielle Sicherheit und neue Möglichkeiten</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">„Wir dachten, so etwas gibt es nur für Reiche"</h2>

          <p>
            Hildegard (69) und Manfred (73) aus Essen hatten ihr Leben lang 10% ihres Einkommens gespart. 127.000 Euro auf dem Sparkonto, 0,2% Zinsen pro Jahr. „Das sind 254 Euro im Jahr", rechnet Manfred vor. „Davon kann man einmal essen gehen."
          </p>

          <p>
            Ihre Nichte, Anlageberaterin bei einer Großbank in Frankfurt, gab ihnen den entscheidenden Hinweis.
          </p>

          <blockquote className="article-quote">
            „Sie sagte: Onkel Manfred, das, was ich meinen Kunden mit 500.000 Euro anbiete, gibt es jetzt auch für normale Menschen. Die Bank macht es nicht öffentlich, aber seit der neuen EU-Richtlinie müssen sie es anbieten. Du musst nur wissen, wo du schauen musst."
          </blockquote>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Was Hildegard und Manfred erlebten:
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Dezember 2025: Erste Einlage</span>
                <span className="font-bold">30.000 €</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Nach 6 Wochen</span>
                <span className="font-bold text-primary">37.200 € (+24%)</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Erhöhung auf</span>
                <span className="font-bold">70.000 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Heute</span>
                <span className="font-bold text-primary">89.600 €</span>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Die gemeinsame Sorge: „Reicht das Geld?"</h2>

          <p>
            Was alle befragten Ehepaare eint: Die Angst, dass das Ersparte nicht reicht. Pflege, Medikamente, steigende Lebenshaltungskosten – die Ungewissheit belastet.
          </p>

          <blockquote className="article-quote">
            „Wir haben uns nicht getraut, in den Urlaub zu fahren. Nicht wegen der Kosten – sondern weil wir dachten: Was, wenn wir das Geld später brauchen? Jetzt fahren wir im Frühjahr nach Mallorca. Zum ersten Mal seit 2019."
          </blockquote>

          <p>
            Besonders bewegend: Die Möglichkeit, den Enkeln etwas zu geben. Mehrere Paare berichten, dass sie zum ersten Mal seit Jahren richtige Geburtstags- und Weihnachtsgeschenke machen können.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Hildegards Weihnachtsüberraschung:</h3>
                <p className="text-sm">
                  „Wir haben jedem unserer vier Enkel 1.000 Euro geschenkt. Die Gesichter! Die Eltern wussten von nichts. Es war der schönste Moment seit Jahren. Und das Beste: Es hat uns nicht weh getan. Das Geld war ja gewachsen."
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Warum kennt das kaum jemand?</h2>

          <p>
            Die Antwort ist ernüchternd: Banken verdienen an Sparbuch-Kunden mehr. Wenn Ihr Geld mit 0,2% verzinst wird, die Bank es aber mit 8-12% anlegt, bleibt die Differenz bei der Bank.
          </p>

          <p>
            „Meine Nichte hat es mir erklärt", sagt Manfred. „Die Bank ist nicht verpflichtet, uns das anzubieten. Sie muss es nur zugänglich machen, wenn wir danach fragen. Aber wer fragt schon danach, wenn man nicht weiß, dass es existiert?"
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Was unsere Recherche ergab:</h3>
                <ul className="text-sm space-y-1">
                  <li>✓ Das Angebot ist real und von einer deutschen Großbank</li>
                  <li>✓ Volle staatliche Einlagensicherung bis 100.000€</li>
                  <li>✓ BaFin-reguliert, deutsches Recht</li>
                  <li>✓ Kein Mindestbetrag, keine Mindestlaufzeit</li>
                  <li>✓ Auf der normalen Bank-Website nicht zu finden</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Der Rat der Befragten</h2>

          <p>
            Auf die Frage, was sie anderen Rentner-Ehepaaren raten würden, antworten Hildegard und Manfred:
          </p>

          <blockquote className="article-quote">
            „Probiert es aus. Nicht mit allem – fangt klein an. 5.000, 10.000 Euro. Schaut vier Wochen zu. Wenn es funktioniert, wisst ihr Bescheid. Wir haben es so gemacht. Und wir bereuen nur eines: dass wir nicht schon vor zehn Jahren angefangen haben."
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Hinweis:</strong> Auf vielfachen Leserwunsch haben wir den direkten Zugang recherchiert. Er ist nicht öffentlich beworben und nur über diesen speziellen Link erreichbar.
          </p>
          <OfferButton className="w-full">
            Zum versteckten Angebot für Rentner-Ehepaare →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · 100.000€ Einlagensicherung · Für Ehepaare geeignet
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

export default ArticlePage26;
