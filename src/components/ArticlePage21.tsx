import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, AlertTriangle } from "lucide-react";
import maschmeyerInterview from "@/assets/maschmeyer-interview-1.png";
import OfferButton from "./OfferButton";

const ArticlePage21 = () => {
  const comments = [
    {
      id: 1,
      author: "Herbert K.",
      time: "vor 1 Stunde",
      text: "Habe als Rentner 35.000€ angelegt. Nach 4 Monaten: 52.000€. Ich kann es selbst kaum glauben. Danke für diesen Artikel!",
      likes: 234
    },
    {
      id: 2,
      author: "Renate S.",
      time: "vor 2 Stunden", 
      text: "Mein Bankberater wollte mir das nicht zeigen. Erst durch diesen Artikel habe ich erfahren, dass es so etwas gibt.",
      likes: 189
    },
    {
      id: 3,
      author: "Wolfgang M.",
      time: "vor 3 Stunden",
      text: "Als ehemaliger Vorstand einer Sparkasse kann ich sagen: Diese Produkte gibt es wirklich, aber sie werden aktiv versteckt.",
      likes: 312
    },
    {
      id: 4,
      author: "Irmgard B.",
      time: "vor 4 Stunden",
      text: "Meine Schwiegertochter hat mich angemeldet. Bin 73 und habe endlich was von meinen Ersparnissen!",
      likes: 167
    },
    {
      id: 5,
      author: "Dieter H.",
      time: "vor 5 Stunden",
      text: "Die Einlagensicherung war für mich entscheidend. Deutsche Bank, deutsches Recht, deutsche Sicherheit.",
      likes: 145
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
          <span>Exklusiv</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Enthüllung</span>
        
        <h1 className="article-title mt-3 mb-4">
          Bekannter „Löwen"-Milliardär warnt: „Die Banken betrügen Rentner seit Jahrzehnten – jetzt gibt es einen Ausweg"
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          In einem brisanten Interview rechnet der TV-Investor (65) mit dem deutschen Bankensystem ab – und verrät, wie er selbst sein Vermögen vor dem „legalen Diebstahl" der Niedrigzinsen schützt.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>10 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 09:15 Uhr</span>
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
            alt="Der bekannte Investor im exklusiven Interview" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Der Multi-Milliardär spricht erstmals offen über die „systematische Benachteiligung" deutscher Sparer
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Hamburg</strong> – Es sind ungewöhnlich deutliche Worte, die der bekannte „Höhle der Löwen"-Investor bei unserem Treffen in seinem Hamburger Büro wählt. Der 65-jährige Multi-Milliardär, der mit seinem Finanzvertrieb ein Vermögen aufbaute, übt scharfe Kritik am deutschen Bankensystem.
          </p>

          <blockquote className="article-quote">
            „Was die Banken mit deutschen Sparern machen, ist legaler Diebstahl. Sie nehmen Ihr Geld, legen es mit 8, 10, manchmal 15 Prozent an – und geben Ihnen 0,3 Prozent zurück. Die Differenz behalten sie. Das machen sie seit Jahrzehnten."
          </blockquote>

          <p>
            Der Milliardär, der selbst jahrelang in der Finanzbranche tätig war, kennt das System von innen. Und er weiß, warum es so lange funktioniert hat: „Die meisten Menschen glauben, es gäbe keine Alternative. Das ist falsch. Es gibt Alternativen – aber die Banken verstecken sie vor Ihnen."
          </p>

          <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-destructive mb-2">Die bittere Wahrheit für Rentner</h3>
                <p className="text-sm">
                  Laut einer Studie der Bundesbank verlieren deutsche Sparer durch Niedrigzinsen jährlich rund <strong>40 Milliarden Euro</strong> an Kaufkraft. Besonders betroffen: Rentner, die auf sichere Anlagen setzen.
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">„Ich habe einen Ausweg gefunden"</h2>

          <p>
            Doch der Investor hat nicht nur Kritik mitgebracht – er hat auch eine Lösung. Eine, die er selbst seit Monaten nutzt und die nun, erstmals, auch für normale Anleger zugänglich ist.
          </p>

          <p>
            „Eine der größten deutschen Banken – staatlich gesichert, BaFin-reguliert – bietet seit kurzem ein Programm an, das vorher nur für Großanleger gedacht war. Professionelles Trading durch bankinterne Experten, mit Renditen, die Sie auf keinem Sparbuch finden werden."
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Das verbirgt die Bank vor Ihnen:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>7-17% monatliche Rendite</strong> durch professionelles Depot-Management</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>100.000€ staatliche Einlagensicherung</strong> – Ihr Geld ist geschützt</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Kein Mindestbetrag</strong> – auch kleine Beträge sind willkommen</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">Warum verschweigen Banken dieses Angebot?</h2>

          <p>
            Die Antwort des Milliardärs ist ernüchternd: „Wirtschaftlichkeit. Wenn jeder Zugang zu diesen Renditen hätte, würden die Banken weniger verdienen. Deshalb halten sie es unter Verschluss. Sie zeigen es nur den Großkunden – oder denen, die wissen, wo sie suchen müssen."
          </p>

          <blockquote className="article-quote">
            „Ich sage Ihnen etwas: Ihr Bankberater kennt dieses Angebot wahrscheinlich nicht einmal. Es ist so gut versteckt, dass selbst viele Bankmitarbeiter nichts davon wissen. Das ist Absicht."
          </blockquote>

          <p>
            Unsere Redaktion hat nachgeforscht – und der Investor hat Recht. Das Angebot ist auf der normalen Website der Bank nicht zu finden. Es gibt keinen Link im Hauptmenü, keine Werbung, keine Erwähnung in den üblichen Produktbroschüren.
          </p>

          <h2 className="article-subheading">So funktioniert der Zugang</h2>

          <p>
            Nach wochenlanger Recherche ist es unserer Wirtschaftsredaktion gelungen, den direkten Zugang zu diesem versteckten Angebot zu finden. Der Investor hat uns dabei geholfen – unter einer Bedingung:
          </p>

          <blockquote className="article-quote">
            „Teilen Sie es mit Ihren Lesern. Besonders mit den Rentnern. Die wurden am meisten betrogen. Sie verdienen es, endlich die Wahrheit zu erfahren."
          </blockquote>

          <div className="highlight-box">
            <p className="font-bold mb-2">Hinweis unserer Redaktion:</p>
            <p>
              Der nachfolgende Zugang führt direkt zum versteckten Angebot. Er ist auf der regulären Bank-Homepage nicht auffindbar und normalerweise nur über persönliche Vermögensberater zugänglich.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Exklusiver Redaktionszugang</span>
          </div>
          <p className="text-sm mb-4">
            Dieses Angebot wurde vom „Löwen"-Investor persönlich empfohlen und von unserer Redaktion verifiziert. Es ist <strong>nicht öffentlich beworben</strong> und nur über diesen speziellen Zugang erreichbar.
          </p>
          <OfferButton className="w-full">
            👉 Zum versteckten Bankangebot
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Volle Einlagensicherung · Limitierte Plätze
          </p>
        </div>

        <div className="article-body">
          <h2 className="article-subheading">„Meine Botschaft an alle Rentner"</h2>

          <p>
            Zum Abschluss unseres Gesprächs richtet der Milliardär einen persönlichen Appell an die ältere Generation:
          </p>

          <blockquote className="article-quote">
            „Sie haben Ihr ganzes Leben gearbeitet. Sie haben gespart, Sie haben vorgesorgt. Und jetzt nehmen Ihnen die Banken jeden Tag ein Stück davon weg – durch Zinsen, die unter der Inflation liegen. Das ist nicht fair. Und Sie müssen das nicht akzeptieren. Es gibt einen Ausweg. Nutzen Sie ihn."
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
            Der Milliardär hat gesprochen. Jetzt sind Sie dran.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Nutzen Sie den exklusiven Zugang, bevor die begrenzten Plätze vergeben sind.
          </p>
          <OfferButton className="text-lg">
            Jetzt Zugang sichern →
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

export default ArticlePage21;
