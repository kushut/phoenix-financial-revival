import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, TrendingUp, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import OfferButton from "./OfferButton";
import euIndienHandschlag from "@/assets/eu-indien-handschlag.png";
import seniorinPortrait from "@/assets/rentnerin-portrait-2.png";

const ArticlePage28 = () => {
  const comments = [
    {
      id: 1,
      author: "Gisela & Manfred T.",
      time: "vor 20 Minuten",
      text: "Wir haben Werner auf dem Seniorentreffen kennengelernt. Er hat uns persönlich davon erzählt. Jetzt sind wir auch dabei – 4.200€ Gewinn in 6 Wochen!",
      likes: 287
    },
    {
      id: 2,
      author: "Renate K.",
      time: "vor 1 Stunde",
      text: "Mein verstorbener Mann hat immer gesagt: 'Die Großen verdienen, wir verlieren.' Endlich ist das anders. Danke für diesen Artikel.",
      likes: 234
    },
    {
      id: 3,
      author: "Dr. Klaus-Dieter H.",
      time: "vor 2 Stunden",
      text: "Als ehemaliger Wirtschaftsprüfer war ich skeptisch. Aber die Zusammenhänge mit dem Indien-Deal sind logisch. Bin seit 8 Wochen dabei.",
      likes: 356
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
        <span className="category-tag">Exklusiv</span>
        
        <h1 className="article-title mt-3 mb-4">
          „12.000 Euro in 10 Wochen": Wie Rentner Werner (74) vom EU-Indien-Deal profitiert
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          Der ehemalige Postbeamte aus Wuppertal wollte seine Ersparnisse schützen. Dann erfuhr er von einem Bankangebot, das direkt mit dem größten Handelsabkommen des Jahrzehnts zusammenhängt.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 16:45 Uhr</span>
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
            src={euIndienHandschlag} 
            alt="Führende EU- und Indien-Politiker besiegeln das historische Abkommen" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            27. Januar 2026, Neu-Delhi: Das historische Handshake-Foto ging um die Welt – und machte einige Rentner reich
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Wuppertal</strong> – Werner Hoffmann sitzt in seinem Wohnzimmer in Wuppertal-Barmen und scrollt durch sein Handy. Auf dem Bildschirm: Zahlen, die er noch vor drei Monaten für unmöglich gehalten hätte.
          </p>

          <p>
            „Schauen Sie hier", sagt der 74-Jährige und dreht das Display. „35.000 Euro eingezahlt. Stand heute: 47.000 Euro. In zehn Wochen."
          </p>

          <blockquote className="article-quote">
            „Ich war 38 Jahre bei der Post. Meine Rente ist 1.420 Euro. Und jetzt verdiene ich nebenbei mehr als früher im Job. Das ist verrückt."
          </blockquote>

          <h2 className="article-subheading">Der Zufall auf der Geburtstagsfeier</h2>

          <p>
            Werners Geschichte beginnt im November 2025, auf dem 70. Geburtstag seines Schwagers. Ein ehemaliger Kollege erzählt ihm von einem „besonderen Angebot" einer deutschen Großbank.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <p className="text-sm italic">
              „Er sagte: 'Werner, die Bank hat Milliarden in Firmen gesteckt, die vom Indien-Deal profitieren. VW, Siemens, BASF – alles dabei. Und jetzt lassen sie Privatleute wie uns mitmachen. Aber nicht öffentlich. Man muss den richtigen Zugang haben.'"
            </p>
          </div>

          <p>
            Werner war skeptisch. „Ich habe 2008 bei der Finanzkrise 12.000 Euro verloren. Seitdem vertraue ich nur noch dem Sparbuch." Aber sein Bekannter zeigte ihm seine eigenen Kontostände. Die Zahlen sprachen für sich.
          </p>

          <h2 className="article-subheading">Was hat das Indien-Abkommen damit zu tun?</h2>

          <p>
            Am 27. Januar 2026 unterzeichneten die führenden Politiker der EU und Indiens das größte Handelsabkommen der europäischen Geschichte.
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Das bedeutet das Abkommen für deutsche Unternehmen:
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Autozölle von 110% auf 10%</strong> – VW-Chef Blume: „Indien ist der drittgrößte Automarkt der Welt"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Zollfreiheit für Maschinen, Chemie, Pharma</strong> – Siemens, BASF, Bayer profitieren massiv</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>1,4 Milliarden neue Kunden</strong> – größter Markt, den die EU je erschlossen hat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>6% Wirtschaftswachstum jährlich</strong> – doppelt so viel wie in Deutschland</span>
              </li>
            </ul>
          </div>

          <p>
            Eine deutsche Großbank hatte das kommen sehen. Bereits 2024 begann sie, Milliarden in genau jene Unternehmen zu investieren, die jetzt profitieren. Die Aktienkurse steigen seitdem kontinuierlich.
          </p>

          <blockquote className="article-quote">
            „Das Abkommen eröffnet große Chancen für 1,4 Milliarden Menschen."
            <footer className="text-sm mt-2 text-muted-foreground">– Indiens Premierminister Narendra Modi</footer>
          </blockquote>

          <h2 className="article-subheading">Werners erste Woche</h2>

          <p>
            Nach langem Zögern überwies Werner Anfang Dezember 35.000 Euro – sein halbes Erspartes.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <h4 className="font-bold mb-3">Werners Entwicklung (dokumentiert):</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span>Einzahlung (05.12.2025)</span>
                <span className="font-bold">35.000 €</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span>Nach 2 Wochen</span>
                <span className="font-bold text-primary">37.300 € (+6,6%)</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span>Nach 4 Wochen</span>
                <span className="font-bold text-primary">39.550 € (+13%)</span>
              </div>
              <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                <span>Nach 6 Wochen</span>
                <span className="font-bold text-primary">42.000 € (+20%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Aktuell (10 Wochen)</span>
                <span className="font-bold text-primary">47.000 € (+34,3%)</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Durchschnittliche Monatsrendite: ca. 13% (Schwankungen zwischen 7-17% möglich)
            </p>
          </div>

          <p>
            „Nach der ersten Woche habe ich jeden Tag reingeschaut", erzählt Werner. „Ich konnte es nicht glauben. Meine Frau hat gesagt: 'Das ist bestimmt ein Fehler.' Aber dann kam die erste Auszahlung."
          </p>

          <h2 className="article-subheading">Die Auszahlung, die alles veränderte</h2>

          <p>
            Nach vier Wochen testete Werner das System. Er beantragte eine Teilauszahlung von 3.000 Euro. Zwei Tage später war das Geld auf seinem Girokonto.
          </p>

          <blockquote className="article-quote">
            „In dem Moment wusste ich: Das ist echt. Keine Tricks, kein Betrug. Eine regulierte deutsche Bank, die mir Geld überweist. Da habe ich meine restlichen 25.000 Euro auch noch eingezahlt."
          </blockquote>

          <h2 className="article-subheading">Warum gerade Rentner profitieren</h2>

          <p>
            Die neuen EU-Bankenrichtlinien (CRD VI) verpflichten Großbanken, ihre profitabelsten Anlageprodukte auch Privatpersonen anzubieten. Die sogenannte „Fair Access Clause" macht es möglich.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Warum Banken das nicht bewerben:</h4>
                <p className="text-sm">
                  „Die Bank verdient durch Verwaltungsgebühren, nicht durch Provisionen. Je weniger Leute wissen, desto weniger müssen sie auszahlen. Deshalb wird das nicht beworben. Der Zugang läuft nur über persönliche Empfehlung."
                </p>
                <p className="text-sm mt-2 text-muted-foreground">
                  – Ehemaliger Bankmitarbeiter, der anonym bleiben möchte
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">Werners Rat an andere Rentner</h2>

          <p>
            Heute, zehn Wochen später, hat Werner aus 35.000 Euro 47.000 Euro gemacht – ein Plus von 12.000 Euro. Er hat bereits 5.000 Euro ausgezahlt – für einen neuen Fernseher und eine Kreuzfahrt mit seiner Frau.
          </p>

          <blockquote className="article-quote">
            „Mein Rat? Fangt klein an. Ich hätte auch mit 5.000 Euro anfangen können. Schaut, wie es läuft. Und dann entscheidet selbst. Aber wartet nicht zu lange – das Zeitfenster schließt sich."
          </blockquote>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Werners Sicherheits-Checkliste (für andere Rentner):
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
                <span>Auszahlung funktioniert? <strong>Ja – selbst getestet ✓</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Anmerkung der Redaktion:</strong> Werner Hoffmann hat uns gebeten, den Zugang zu teilen, der ihm von seinem Bekannten weitergegeben wurde. Er ist nicht öffentlich verfügbar.
          </p>
          <OfferButton className="w-full">
            Werners Zugang jetzt nutzen →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · Einlagensicherung bis 100.000€ · Jederzeit kündbar
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

export default ArticlePage28;
