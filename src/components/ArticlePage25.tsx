import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { MessageSquare, Share2, Bookmark, Clock, Gift, Shield, CheckCircle } from "lucide-react";
import seniorinPortrait from "@/assets/seniorin-portrait.png";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage25 = () => {
  const comments = [
    {
      id: 1,
      author: "Erika & Günter S.",
      time: "vor 30 Minuten",
      text: "Goldene Hochzeit nächstes Jahr – und wir können uns endlich die Feier leisten, die wir uns immer gewünscht haben!",
      likes: 234
    },
    {
      id: 2,
      author: "Marianne L.",
      time: "vor 1 Stunde",
      text: "Nach 40 Jahren im Einzelhandel dachte ich, mehr ist nicht drin. Danke für diesen Artikel!",
      likes: 189
    },
    {
      id: 3,
      author: "Helmut & Ursula P.",
      time: "vor 2 Stunden",
      text: "Wir haben zusammen 50.000€ angelegt. Der Zuwachs in 8 Wochen: 9.200€. Unfassbar.",
      likes: 267
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <div className="max-w-[var(--container-max-width)] mx-auto px-4">
        <nav className="breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Startseite</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/" className="text-muted-foreground hover:text-foreground">Panorama</Link>
          <span className="breadcrumb-separator">/</span>
          <span>Gesellschaft</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Gesellschaft</span>
        
        <h1 className="article-title mt-3 mb-4">
          Goldene Hochzeit ohne Geldsorgen: Wie ein Ehepaar aus Düsseldorf seinen Ruhestand rettete
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          Nach 50 Jahren Ehe stand das Fest auf der Kippe – die Ersparnisse schmolzen. Dann entdeckte Christa (72) etwas, das alles veränderte.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>7 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 10:00 Uhr</span>
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
            src={seniorinPortrait} 
            alt="Christa und Herbert aus Düsseldorf" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Christa W. zeigt stolz die Einladungskarten für ihre Goldene Hochzeit: „Das hätten wir uns nie leisten können"
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Düsseldorf</strong> – Die Einladungskarten sind schon gedruckt. 80 Gäste werden kommen, das Restaurant am Rhein ist gebucht, die Musikkapelle engagiert. Eine Feier, wie Christa und Herbert W. sie sich seit 50 Jahren erträumt haben.
          </p>

          <p>
            Noch vor einem Jahr war das undenkbar.
          </p>

          <blockquote className="article-quote">
            „Wir hatten 95.000 Euro auf dem Konto. Klingt viel, oder? Aber wenn man rechnet – Pflege, Medikamente, steigende Nebenkosten – dann wird einem schlecht. Wir haben ernsthaft überlegt, die Goldene Hochzeit abzusagen."
          </blockquote>

          <p>
            Herbert, 75, ehemaliger Elektrikermeister, nickt stumm. „Ich konnte nachts nicht schlafen. Nach 50 Jahren Ehe wollte ich meiner Frau eine Feier schenken, die sie verdient. Aber das Geld..."
          </p>

          <h2 className="article-subheading">Der Tipp kam von einer Bekannten</h2>

          <p>
            Es war beim Seniorentreff in der Kirchengemeinde. Christa sprach mit einer Bekannten über ihre Sorgen. Die Antwort überraschte sie.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <p className="text-sm italic">
              „Sie sagte mir: ‚Christa, dein Geld muss nicht auf dem Sparkonto verrotten. Es gibt etwas Besseres. Etwas, das die Banken nicht an die große Glocke hängen. Schau dir das mal an.'"
            </p>
          </div>

          <p>
            Christa war skeptisch. Mit 72 Jahren hatte sie genug Betrüger erlebt. Aber die Bekannte war keine Fremde – sie war die pensionierte Direktorin einer Sparkasse in Köln.
          </p>

          <h2 className="article-subheading">„Ich habe es erst alleine ausprobiert"</h2>

          <p>
            Ohne ihrem Mann davon zu erzählen, überwies Christa 15.000 Euro. „Ich wollte Herbert nicht beunruhigen. Falls es schiefgeht, wäre es mein Fehler gewesen."
          </p>

          <p>
            Es ging nicht schief.
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              Christas Überraschung für Herbert:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Nach 4 Wochen: 15.000 € → 17.400 € (+16%)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Nach 8 Wochen: 17.400 € → 21.200 € (+41% seit Start)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Herbert eingeweiht, gemeinsam auf 60.000 € erhöht</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Aktueller Stand: 78.600 € – Tendenz steigend</span>
              </li>
            </ul>
          </div>

          <blockquote className="article-quote">
            „Als ich Herbert die Zahlen gezeigt habe, hat er erst gedacht, ich mache einen Witz. Dann hat er geweint. Zum ersten Mal seit unserer Hochzeit vor 50 Jahren."
          </blockquote>

          <h2 className="article-subheading">Die Goldene Hochzeit wird grandios</h2>

          <p>
            Heute, fünf Monate später, ist die Angst verschwunden. Die Feier im Mai wird größer als geplant. Ein Teil der Gewinne fließt in ein Geschenk für die Enkel.
          </p>

          <p>
            „Wir haben drei Enkeltöchter", sagt Herbert, „für jede legen wir jetzt 5.000 Euro an. Wenn sie 18 werden, bekommen sie das Geld. So wie es wächst, wird das ein schöner Start ins Leben."
          </p>

          <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Warum Christa keine Angst hatte:</h3>
                <p className="text-sm">
                  „Eine der größten deutschen Banken, staatliche Einlagensicherung bis 100.000 Euro, BaFin-Aufsicht. Das sind keine windigen Anbieter aus dem Internet. Das ist solide wie ein Sparbuch – nur dass es wächst."
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Ihr Rat an andere Ehepaare</h2>

          <blockquote className="article-quote">
            „Redet miteinander. Wir haben jahrelang geschwiegen, weil wir uns gegenseitig nicht beunruhigen wollten. Hätten wir früher über Geld gesprochen, hätten wir das hier früher entdeckt. Fangt klein an, schaut wie es läuft – und dann genießt euren Ruhestand. So wie wir es jetzt tun."
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Anmerkung:</strong> Auf Bitten unserer Leser hat Familie W. uns den Zugang geteilt, den sie von ihrer Bekannten erhalten hat. Er ist nicht öffentlich beworben.
          </p>
          <OfferButton className="w-full">
            Zum exklusiven Zugang für Rentner-Ehepaare →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Volle Einlagensicherung · Gemeinsame Konten möglich
          </p>
        </div>

        <CommentSection initialComments={comments} />
      </article>

      <footer className="border-t mt-12 py-8">
        <div className="max-w-[var(--container-max-width)] mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 | Impressum | Datenschutz | Nutzungsbedingungen</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage25;
