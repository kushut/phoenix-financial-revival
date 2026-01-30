import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, Heart, Users } from "lucide-react";
import maschmeyerInterview from "@/assets/maschmeyer-interview-3.png";
import OfferButton from "./OfferButton";

const ArticlePage23 = () => {
  const comments = [
    {
      id: 1,
      author: "Elisabeth M.",
      time: "vor 30 Minuten",
      text: "Seine Geschichte mit den Großeltern hat mich sehr berührt. Endlich sagt mal jemand, was Sache ist!",
      likes: 342
    },
    {
      id: 2,
      author: "Hans-Peter K.",
      time: "vor 1 Stunde", 
      text: "Als ehemaliger Bankdirektor kann ich nur bestätigen: Alles was er sagt, ist wahr. Die Banken halten diese Produkte absichtlich zurück.",
      likes: 278
    },
    {
      id: 3,
      author: "Gertrude S.",
      time: "vor 2 Stunden",
      text: "Habe mit 15.000€ angefangen. Nach 6 Wochen: 18.500€. Das hätte ich auf dem Sparbuch in 20 Jahren nicht geschafft!",
      likes: 412
    },
    {
      id: 4,
      author: "Friedrich W.",
      time: "vor 3 Stunden",
      text: "Meine Frau war erst skeptisch, aber nachdem wir die erste Auszahlung bekommen haben, hat sie selbst eingezahlt.",
      likes: 234
    },
    {
      id: 5,
      author: "Anneliese R.",
      time: "vor 4 Stunden",
      text: "76 Jahre alt und endlich verstehe ich, warum meine Ersparnisse immer weniger werden. Danke für diese Aufklärung!",
      likes: 189
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
          <span>Persönlich</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Persönliche Einblicke</span>
        
        <h1 className="article-title mt-3 mb-4">
          „Meine Großeltern haben es verdient, die Wahrheit zu erfahren" – „Löwen"-Milliardär über seine Mission für deutsche Rentner
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          In einem emotionalen Interview spricht der bekannte TV-Investor (65) erstmals über persönliche Beweggründe – und warum er es als seine Pflicht sieht, Rentnern ein verstecktes Bankangebot zu zeigen.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>11 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 14:00 Uhr</span>
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
            src={maschmeyerInterview} 
            alt="Der bekannte Investor im persönlichen Gespräch" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Der Multi-Milliardär (65) spricht offen über seine Kindheit und seine Mission für deutsche Rentner
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>München</strong> – Es ist ein ungewöhnlich persönliches Gespräch, das wir mit dem bekannten „Höhle der Löwen"-Investor führen. Weit weg vom üblichen Business-Talk erzählt der 65-jährige Multi-Milliardär von seiner Kindheit, seinen Großeltern – und davon, warum er es als seine persönliche Mission sieht, deutschen Rentnern zu helfen.
          </p>

          <p>
            „Meine Großeltern waren einfache Leute", beginnt er. „Sie haben ihr ganzes Leben gearbeitet, gespart, auf alles verzichtet. Und am Ende? Am Ende sind sie mit einer Mini-Rente gestorben, während die Banken reich geworden sind – mit ihrem Geld."
          </p>

          <blockquote className="article-quote">
            „Ich habe gesehen, wie meine Oma jeden Pfennig umgedreht hat. Sie hat Geld auf die Sparkasse gebracht, weil sie dachte, das sei sicher. Sicher war nur eins: dass die Bank an ihrem Geld verdient hat. Sie selbst hat fast nichts bekommen."
          </blockquote>

          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Eine persönliche Mission</h3>
                <p className="text-sm">
                  Der Milliardär spendet jährlich Millionen für wohltätige Zwecke. Doch sein Engagement für finanzielle Aufklärung bei Rentnern bezeichnet er als „die wichtigste Mission seines Lebens".
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">„Ich wusste, dass es anders geht – aber ich konnte nichts beweisen"</h2>

          <p>
            Als junger Mann, so erzählt der Investor, hatte er bereits das Gefühl, dass im Bankensystem etwas nicht stimmte. „Ich wusste, dass die Banken mit dem Geld meiner Großeltern viel mehr verdienen, als sie zugegeben haben. Aber ich konnte es nicht beweisen. Ich war ein Niemand."
          </p>

          <p>
            Das änderte sich, als er selbst erfolgreich wurde. Mit seinem Finanzvertrieb verdiente er Milliarden – und lernte dabei das System von innen kennen. „Plötzlich hatte ich Zugang zu Informationen, die normale Menschen nie sehen. Und was ich sah, hat mich wütend gemacht."
          </p>

          <blockquote className="article-quote">
            „Die Banken haben zwei Welten geschaffen: Eine für die Reichen, mit Renditen von 10, 15, manchmal 20 Prozent. Und eine für alle anderen: 0,3 Prozent auf dem Sparbuch, während die Inflation ihr Erspartes auffrisst. Das ist kein Zufall. Das ist System."
          </blockquote>

          <h2 className="article-subheading">Die Entdeckung, die alles veränderte</h2>

          <p>
            Vor einigen Monaten, so berichtet der 65-Jährige, machte er eine Entdeckung, die alles veränderte. „Eine der größten deutschen Banken – staatlich gesichert, BaFin-reguliert – hatte begonnen, ein Premium-Angebot auch für Privatanleger zu öffnen. Professionelles Depot-Management, das bisher nur Hedgefonds und Millionären vorbehalten war."
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Was der Milliardär für Rentner entdeckt hat:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>7-17% monatliche Rendite</strong> durch bankinterne Trading-Experten</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Volle Einlagensicherung</strong> bis 100.000€ – wie auf dem Sparbuch</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Kein Risiko für das Ersparte</strong> durch staatliche Absicherung</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Persönlicher Ansprechpartner</strong> erklärt jeden Schritt</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">„Meine Großeltern hätten es verdient"</h2>

          <p>
            Als er von diesem Angebot erfuhr, sagt der Milliardär, dachte er sofort an seine Großeltern. „Wenn sie das damals gehabt hätten... Meine Oma hätte nicht jeden Pfennig umdrehen müssen. Mein Opa hätte sich den Urlaub leisten können, von dem er immer geträumt hat. Aber sie wussten nicht, dass es solche Möglichkeiten gibt. Die Banken haben es vor ihnen versteckt."
          </p>

          <blockquote className="article-quote">
            „Meine Großeltern sind nicht mehr am Leben. Ich kann ihnen nicht mehr helfen. Aber ich kann anderen helfen – anderen Rentnern, die in der gleichen Situation sind. Das ist meine Art, meinen Großeltern etwas zurückzugeben."
          </blockquote>

          <p>
            Es ist ein seltener Moment der Verletzlichkeit für einen Mann, der sonst für seine Geschäftstüchtigkeit bekannt ist. Seine Augen werden feucht, als er weiterspricht: „Ich habe alles erreicht, was ich mir vorgenommen hatte. Aber das hier – das fühlt sich wichtiger an als jeder Deal, den ich je gemacht habe."
          </p>

          <h2 className="article-subheading">Die Aufforderung an unsere Redaktion</h2>

          <p>
            Am Ende unseres Gesprächs wendet sich der Investor direkt an uns: „Sie haben eine Plattform. Nutzen Sie sie. Zeigen Sie Ihren Lesern, dass es eine Alternative gibt. Nicht irgendeine dubiose Geldanlage – ein seriöses Angebot einer deutschen Großbank, mit voller Einlagensicherung."
          </p>

          <p>
            Er selbst, so betont er, verdient nichts an der Empfehlung. „Ich habe kein Provisionsmodell mit der Bank. Ich mache das nicht für Geld. Ich mache das, weil es richtig ist."
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Die Bitte des Milliardärs an unsere Leser:</p>
            <p>
              „Bitte teilen Sie diesen Artikel mit Ihren Eltern, Ihren Großeltern, mit allen Rentnern, die Sie kennen. Sie haben das Recht zu erfahren, was die Banken vor ihnen verstecken."
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Das Angebot, das der Milliardär empfiehlt</span>
          </div>
          <p className="text-sm mb-4">
            Auf Wunsch des Investors haben wir den direkten Zugang zu dem Angebot recherchiert. Es handelt sich um eine <strong>große deutsche Bank</strong> mit staatlicher Beteiligung und voller Einlagensicherung.
          </p>
          <OfferButton className="w-full">
            👉 Zum empfohlenen Angebot
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · 100.000€ Einlagensicherung · Limitierte Plätze
          </p>
        </div>

        <div className="article-body">
          <blockquote className="article-quote">
            „Ich kann meine Großeltern nicht zurückholen. Aber ich kann dafür sorgen, dass andere Großeltern nicht das gleiche Schicksal erleiden. Das ist mein Vermächtnis."
            <footer className="mt-2 text-base not-italic">— Der „Höhle der Löwen"-Milliardär</footer>
          </blockquote>
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

        <div className="my-12 p-8 bg-secondary rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4 font-spiegel-serif">
            Für Ihre Eltern. Für Ihre Großeltern. Für alle Rentner.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Teilen Sie diesen Artikel – und geben Sie ihnen die Chance, die sie verdienen.
          </p>
          <OfferButton className="text-lg">
            Jetzt zum Angebot →
          </OfferButton>
        </div>
      </article>

      <footer className="border-t mt-12 py-8">
        <div className="max-w-[var(--container-max-width)] mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 | Impressum | Datenschutz | Nutzungsbedingungen</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage23;
