import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, Lock, Award, CheckCircle } from "lucide-react";
import maschmeyerInterview from "@/assets/maschmeyer-interview-2.png";
import OfferButton from "./OfferButton";

const ArticlePage22 = () => {
  const comments = [
    {
      id: 1,
      author: "Günther P.",
      time: "vor 45 Minuten",
      text: "Das mit der EU-Richtlinie wusste ich nicht. Endlich wird mal transparent, was die Banken uns vorenthalten!",
      likes: 287
    },
    {
      id: 2,
      author: "Helga W.",
      time: "vor 1 Stunde", 
      text: "Bin 68 und habe mich sofort angemeldet. Der persönliche Berater hat alles erklärt. Sehr professionell!",
      likes: 198
    },
    {
      id: 3,
      author: "Manfred K.",
      time: "vor 2 Stunden",
      text: "Als Steuerberater im Ruhestand sage ich: Völlig legal, staatlich gesichert. Warum erfährt man das nicht früher?",
      likes: 256
    },
    {
      id: 4,
      author: "Ursula F.",
      time: "vor 3 Stunden",
      text: "Erste Rendite nach 3 Wochen erhalten. Kann es selbst kaum glauben. Danke an den Investor für seine Offenheit!",
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
          <span>Finanzen</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Exklusiv-Interview</span>
        
        <h1 className="article-title mt-3 mb-4">
          „Die EU hat die Banken gezwungen, ihre Karten aufzudecken" – TV-Milliardär erklärt neue Anlage-Chance für Rentner
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          Der berühmte „Höhle der Löwen"-Investor (65) enthüllt, wie eine neue EU-Richtlinie die Finanzwelt verändert – und warum deutsche Rentner jetzt erstmals Zugang zu exklusiven Bank-Produkten bekommen.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>9 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 11:30 Uhr</span>
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
            alt="Der Milliardär bei der Pressekonferenz" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Der bekannte TV-Investor (65) erklärt die Auswirkungen der neuen EU-Bankenrichtlinie auf einer Pressekonferenz in Frankfurt
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Frankfurt am Main</strong> – Es war eine Pressekonferenz, die es in sich hatte. Der Multi-Milliardär und bekannte „Höhle der Löwen"-Investor, trat vor die Kameras mit einer Botschaft, die für Millionen deutsche Rentner von Bedeutung sein könnte.
          </p>

          <p>
            Der Anlass: Eine neue EU-Richtlinie – die sogenannte „Fair Access Clause" innerhalb der CRD VI – die deutsche Banken dazu verpflichtet, bestimmte Premium-Anlageprodukte auch Privatanlegern anzubieten. Was bisher Pensionsfonds und Milliardären vorbehalten war, soll nun für jedermann zugänglich werden.
          </p>

          <blockquote className="article-quote">
            „Die EU hat etwas geschafft, was Verbraucherschützer seit Jahren fordern: Transparenz. Die Banken müssen jetzt ihre Karten aufdecken. Und was darunter zum Vorschein kommt, ist für viele Deutsche eine echte Überraschung."
          </blockquote>

          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Was die CRD VI für Sie bedeutet
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Banken müssen Premium-Produkte nun auch Privatanlegern anbieten</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gleichbehandlung von institutionellen und privaten Investoren</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Volle Transparenz über Renditen und Konditionen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Keine Mindestanlagesummen mehr für bestimmte Produkte</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">„Eine der größten deutschen Banken geht voran"</h2>

          <p>
            Während viele Banken die neue Richtlinie noch ignorieren oder verzögern, hat laut dem Investor mindestens eine große deutsche Bank bereits reagiert. „Es ist eine der systemrelevanten Banken – staatlich gesichert, mit Millionen Kunden. Sie hat ein Programm aufgelegt, das genau das umsetzt, was die EU fordert."
          </p>

          <p>
            Das Angebot: Professionelles Depot-Management durch erfahrene Händler, mit Renditen zwischen 7 und 17 Prozent monatlich. „Das sind Zahlen, die Sie auf keinem Sparbuch finden werden", so der 65-Jährige. „Aber sie sind real. Und sie sind jetzt für jeden zugänglich."
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Das neue Angebot im Überblick:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>7-17% monatliche Rendite</strong> durch aktives Trading-Management</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Volle Einlagensicherung</strong> bis 100.000€ pro Person</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span><strong>Persönlicher Ansprechpartner</strong> für jeden Kunden</span>
              </li>
            </ul>
          </div>

          <h2 className="article-subheading">„Besonders wichtig für Rentner"</h2>

          <p>
            Der Milliardär betonte bei der Pressekonferenz besonders die Bedeutung für ältere Anleger: „Rentner wurden vom System am meisten benachteiligt. Sie haben ihr Leben lang gespart, und jetzt bekommen sie 0,3 Prozent Zinsen – während die Inflation ihr Erspartes auffrisst. Das ist nicht nur unfair, es ist ein Skandal."
          </p>

          <blockquote className="article-quote">
            „Ich habe selbst ältere Verwandte, die jahrzehntelang brav gespart haben. Als ich ihnen gezeigt habe, was ihre Bank eigentlich mit ihrem Geld verdient, waren sie schockiert. Diese Zeiten sind jetzt vorbei – wenn man weiß, wo man suchen muss."
          </blockquote>

          <h2 className="article-subheading">Das Problem: Das Angebot ist versteckt</h2>

          <p>
            Trotz der EU-Richtlinie bleibt ein Problem: Die Banken bewerben diese Produkte nicht aktiv. „Sie erfüllen die Vorschriften auf dem Papier, aber sie machen keine Werbung dafür", erklärt der Investor. „Wenn Sie nicht gezielt danach suchen, werden Sie es nie finden."
          </p>

          <p>
            Genau hier setzt unsere Redaktion an. Nach der Pressekonferenz haben wir intensiv recherchiert und den direkten Zugang zum besagten Angebot gefunden – mit Unterstützung des Milliardärs selbst.
          </p>

          <div className="highlight-box">
            <p className="font-bold mb-2">Unsere Recherche:</p>
            <p>
              Der nachfolgende Zugang wurde gemeinsam mit dem Team des TV-Investors verifiziert. Er führt direkt zum Angebot, das auf der normalen Bank-Website <strong>nicht auffindbar</strong> ist.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">Direkter Zugang zum EU-konformen Angebot</span>
          </div>
          <p className="text-sm mb-4">
            Dieses Angebot erfüllt die Anforderungen der CRD VI „Fair Access Clause" und ist erstmals für Privatanleger verfügbar. Der Zugang ist <strong>nicht öffentlich beworben</strong>.
          </p>
          <OfferButton className="w-full">
            👉 Jetzt Zugang sichern
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Staatlich gesichert · EU-reguliert
          </p>
        </div>

        <div className="article-body">
          <h2 className="article-subheading">Die Botschaft des Milliardärs</h2>

          <blockquote className="article-quote">
            „Die EU hat die Tür geöffnet. Jetzt liegt es an jedem Einzelnen, durchzugehen. Wer weiterhin 0,3 Prozent auf dem Sparbuch akzeptiert, hat selbst schuld. Die Alternative ist da – man muss sie nur nutzen."
            <footer className="mt-2 text-base not-italic">— Der bekannte „Höhle der Löwen"-Investor</footer>
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
            Die EU hat die Tür geöffnet. Gehen Sie durch.
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Nutzen Sie jetzt den exklusiven Zugang zum versteckten Bankangebot.
          </p>
          <OfferButton className="text-lg">
            Jetzt profitieren →
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

export default ArticlePage22;
