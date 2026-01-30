import { Bookmark, Play, Share2, CheckCircle, ThumbsUp, MessageCircle } from "lucide-react";
import heroImage from "@/assets/sparkasse-polizei.jpg";
import lochImage from "@/assets/sparkasse-loch.jpg";
import ehepaarImage from "@/assets/ehepaar-heinz-maria.png";

const ArticlePage = () => {
  const comments = [
    {
      name: "Gisela M.",
      date: "vor 2 Stunden",
      text: "Unglaublich, was den beiden passiert ist! Aber Respekt, dass sie so schnell gehandelt haben. Ich habe mir das Angebot auch angeschaut – wirklich sehr gute Konditionen. Werde nächste Woche wechseln.",
      likes: 47,
      isHighlight: true
    },
    {
      name: "Klaus-Dieter W.",
      date: "vor 3 Stunden", 
      text: "Das Angebot kann ich nur empfehlen! Bin seit 2 Wochen dabei und habe schon erste positive Ergebnisse gesehen. Besonders die transparenten Konditionen haben mich überzeugt.",
      likes: 89,
      isHighlight: true
    },
    {
      name: "Renate S.",
      date: "vor 4 Stunden",
      text: "Dieser Einbruch hat uns alle wachgerüttelt. Mein Schließfach war zum Glück nicht betroffen, aber ich habe trotzdem mein Geld zu dieser Großbank transferiert. Sicher ist sicher!",
      likes: 34,
      isHighlight: true
    },
    {
      name: "Wolfgang B.",
      date: "vor 5 Stunden",
      text: "100 Millionen Euro Beute... Wahnsinn. Die Täter werden hoffentlich bald gefasst. Mein Mitleid gilt allen Betroffenen.",
      likes: 156,
      isHighlight: false
    },
    {
      name: "Ingrid H.",
      date: "vor 6 Stunden",
      text: "Meine Schwester war auch betroffen. Sie hat jetzt das Angebot dieser Bank genutzt und ist sehr zufrieden. Endlich wieder Ruhe und Sicherheit!",
      likes: 28,
      isHighlight: true
    },
    {
      name: "Hans-Peter K.",
      date: "vor 7 Stunden",
      text: "Skandal! Wie kann so etwas in Deutschland passieren? Die Sparkasse muss zur Verantwortung gezogen werden.",
      likes: 203,
      isHighlight: false
    },
    {
      name: "Monika F.",
      date: "vor 8 Stunden",
      text: "Habe nach diesem Artikel sofort das Angebot geprüft. Die Konditionen sind wirklich besser als bei meiner jetzigen Bank. Danke für den Tipp!",
      likes: 52,
      isHighlight: true
    },
    {
      name: "Helmut R.",
      date: "vor 9 Stunden",
      text: "Toll, dass Heinz und Maria so offen darüber berichten. Gibt anderen Betroffenen Hoffnung. Das Angebot dieser Großbank scheint wirklich gut zu sein.",
      likes: 41,
      isHighlight: true
    },
    {
      name: "Erika L.",
      date: "vor 10 Stunden",
      text: "Bin 67 und hatte ähnliche Bedenken wie Heinz und Maria. Habe mich dann aber doch für das Angebot entschieden – beste Entscheidung seit Jahren! Schon nach 2 Wochen erste Erfolge.",
      likes: 73,
      isHighlight: true
    },
    {
      name: "Dieter S.",
      date: "vor 11 Stunden",
      text: "Die Polizei ermittelt noch immer. Hoffentlich werden die Täter bald gefasst. Unfassbar, dass so etwas in einer deutschen Großstadt passieren kann.",
      likes: 118,
      isHighlight: false
    },
    {
      name: "Ursula K.",
      date: "vor 12 Stunden",
      text: "Mein Mann und ich haben uns gestern bei dieser Bank angemeldet. Der Prozess war super einfach und die Beratung am Telefon sehr freundlich. Danke für diesen Artikel!",
      likes: 56,
      isHighlight: true
    },
    {
      name: "Günther M.",
      date: "vor 13 Stunden",
      text: "Als ehemaliger Sparkassen-Kunde kann ich nur sagen: Der Wechsel zu einer großen Direktbank war überfällig. Endlich transparente Gebühren und besserer Service!",
      likes: 82,
      isHighlight: true
    },
    {
      name: "Brigitte W.",
      date: "vor 14 Stunden",
      text: "Herzzerreißende Geschichte. Aber schön zu sehen, dass es für Heinz und Maria doch noch ein Happy End gab. Das Angebot werde ich mir auch anschauen.",
      likes: 44,
      isHighlight: true
    },
    {
      name: "Karl-Heinz P.",
      date: "vor 15 Stunden",
      text: "Bin skeptisch bei solchen Angeboten, aber es ist ja eine der größten deutschen Banken. Hat jemand Erfahrungen gemacht?",
      likes: 31,
      isHighlight: false
    },
    {
      name: "Hildegard F.",
      date: "vor 15 Stunden",
      text: "@Karl-Heinz P. Ja, bin seit 3 Wochen dabei und kann es nur empfehlen! Alles sehr transparent und professionell. Meine Rente ist dort gut aufgehoben.",
      likes: 67,
      isHighlight: true
    },
    {
      name: "Werner T.",
      date: "vor 16 Stunden",
      text: "Schade, dass man erst durch so eine Katastrophe aufwacht. Aber besser spät als nie. Habe das Angebot auch genutzt und bereue es nicht.",
      likes: 49,
      isHighlight: true
    },
    {
      name: "Margarete B.",
      date: "vor 17 Stunden",
      text: "Meine Nachbarin wurde auch Opfer des Einbruchs. Sie hat 30.000 Euro verloren. Werde ihr diesen Artikel zeigen – vielleicht hilft ihr das Angebot dieser Bank auch.",
      likes: 38,
      isHighlight: true
    }
  ];

  return (
    <main className="bg-white">
      <article className="max-w-[1020px] mx-auto">
        {/* Article Header */}
        <header className="px-4 md:px-6 lg:px-24 pt-8 md:pt-12">
          <div className="max-w-[680px] mx-auto">
            <span className="category-tag">
              Exklusiv: Sparkassen-Einbruch Gelsenkirchen
            </span>

            <h1 className="article-title mt-3 mb-6">
              65.000 Euro im Gelsenkirchener Sparkassen-Fiasko verloren – wie Heinz und Maria ihr Vermögen zurückgewannen
            </h1>

            <p className="article-lead text-muted-foreground">
              Beim Einbruch in die Sparkasse Gelsenkirchen-Buer wurden rund 3.200 Schließfächer aufgebrochen. 
              Ein Rentner-Ehepaar erzählt, wie sie den Verlust überwanden.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-6">
              <time>30.01.2026, 09:45 Uhr</time>
            </div>
          </div>
        </header>

        {/* Share Bar */}
        <div className="px-4 md:px-6 lg:px-24 mt-6">
          <div className="max-w-[680px] mx-auto share-bar">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Bookmark className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Play className="w-4 h-4" />
                <span className="text-sm">4 Min</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-secondary rounded" title="X.com">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.675 10.623L20.228 3.005h-1.553l-5.69 6.609L8.44 3.005H3.198l6.873 10.002L3.198 20.995h1.553l6.01-6.985 4.799 6.985h5.242l-7.127-10.372zm-2.374 2.475l-.697-.997-5.545-7.929h2.385l4.47 6.393.697.997 5.815 8.317h-2.385l-4.74-6.781z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-secondary rounded" title="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.26 21.5v-8.209H6.4V9.51h2.86V6.835c0-2.86 1.844-4.335 4.426-4.335 1.2 0 2.306.092 2.583.092v3.044h-1.752c-1.384 0-1.753.646-1.753 1.66V9.51h3.782l-1.292 3.781h-2.49V21.5H9.26z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-secondary rounded" title="Teilen">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Images - Side by Side */}
        <div className="mt-6 px-4 md:px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Police Image */}
            <figure className="rounded overflow-hidden">
              <img 
                src={heroImage} 
                alt="Polizeieinsatz vor der Sparkasse Gelsenkirchen-Buer" 
                className="w-full h-auto object-cover"
              />
              <figcaption className="image-caption">
                <p>Polizeieinsatz vor der Sparkassen-Filiale</p>
                <span className="text-xs text-muted-foreground ml-1">Foto: WDR</span>
              </figcaption>
            </figure>

            {/* Couple Image */}
            <figure className="rounded overflow-hidden">
              <img 
                src={ehepaarImage} 
                alt="Heinz und Maria - betroffenes Ehepaar" 
                className="w-full h-auto object-cover"
              />
              <figcaption className="image-caption">
                <p>Heinz (71) und Maria (69) verloren 65.000 Euro</p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Article Body */}
        <div className="px-4 md:px-6 lg:px-24 mt-10">
          <div className="max-w-[680px] mx-auto article-body">
            
            <p>
              <strong>Heinz (71) und Maria (69)</strong> aus Nordrhein-Westfalen hatten ihr Leben lang gespart. 
              Gold, Rücklagen, ein kleines Polster für die Zukunft. Doch nach dem spektakulären Bankeinbruch 
              in Gelsenkirchen erreichte sie die erschütternde Nachricht: <strong>65.000 Euro ihres Goldvermögens</strong> waren weg.
            </p>

            <p>
              Bei dem Einbruch über die Weihnachtsfeiertage bohrten sich die Täter von einer Tiefgarage aus 
              in den Tresorraum – <strong>3.200 Schließfächer wurden aufgebrochen</strong>, die Beute wird auf 
              über 100 Millionen Euro geschätzt.
            </p>

            <blockquote className="article-quote">
              „Es fühlte sich an, als hätte jemand ein Stück unseres Lebens weggenommen. 
              Wir haben nächtelang nicht geschlafen. Die Angst, alles verloren zu haben, war unerträglich."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Maria (69)</footer>
            </blockquote>

            <p>
              Die Bank konnte nur <strong>maximal 10.000 Euro</strong> absichern – ein Bruchteil dessen, 
              was das Ehepaar über Jahrzehnte angespart hatte. Die Enttäuschung war grenzenlos. 
              „Wir haben unser ganzes Leben hart gearbeitet", erzählt Heinz mit Tränen in den Augen. 
              „Dieses Geld sollte unseren Kindern und Enkeln zugutekommen."
            </p>

            <p>
              Doch Heinz und Maria gaben nicht auf. Entschlossen kündigten sie alle Konten bei der 
              betroffenen Sparkasse und begannen, nach Alternativen zu suchen.
            </p>

            <h2 className="article-subheading">Die Wende: Ein exklusives Angebot verändert alles</h2>

            <p>
              Bei ihren Recherchen stießen sie auf ein <strong>zeitlich begrenztes Angebot einer der größten deutschen Banken</strong>, 
              das normalerweise nur institutionellen Anlegern vorbehalten ist. Großinvestoren, Fondsmanager, 
              Vermögensverwalter – sie alle nutzen seit Jahren diese exklusiven Konditionen. 
              <strong>Doch für kurze Zeit ist dieses Angebot auch für Privatpersonen zugänglich.</strong>
            </p>

            <p>
              Zunächst waren Heinz und Maria skeptisch – zu oft hatte man ihnen nach dem Einbruch dubiose 
              „Hilfsangebote" gemacht. Doch dieses war anders: <strong>transparent, seriös und von einer 
              etablierten Großbank mit über 50 Jahren Erfahrung und staatlicher Beteiligung</strong>.
            </p>

            <p>
              „Wir haben uns lange informiert, bevor wir den Schritt gewagt haben", erklärt Maria. 
              „Als wir verstanden haben, dass dieses Programm normalerweise nur für Profi-Anleger 
              gedacht ist, wussten wir: Das ist eine einmalige Chance, die wir nicht verpassen dürfen."
            </p>

            <p>
              <strong>Und sie sollten recht behalten.</strong> Innerhalb von nur drei Wochen konnten 
              Heinz und Maria durch das Angebot dieser Bank bereits <strong>über 45.000 Euro ihres verlorenen 
              Vermögens wieder aufbauen</strong>. Ein Ergebnis, das sie selbst kaum fassen konnten.
            </p>

            <blockquote className="article-quote">
              „Als ich den Kontostand gesehen habe, musste ich weinen – diesmal vor Freude. 
              Ich hätte nie gedacht, dass wir so schnell wieder auf die Beine kommen."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Maria (69)</footer>
            </blockquote>

            <div className="highlight-box my-8">
              <h3 className="font-bold text-lg mb-4 font-spiegel-serif">Was Heinz und Maria erreicht haben:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>45.000 Euro</strong> in nur 3 Wochen zurückgewonnen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Restliches Vermögen <strong>sicher angelegt</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Endlich wieder <strong>ruhig schlafen</strong> können</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Die <strong>Zukunft der Enkel</strong> ist wieder gesichert</span>
                </li>
              </ul>
            </div>

            <h2 className="article-subheading">„Wir genießen endlich wieder unser Leben"</h2>

            <p>
              Heute, wenige Monate nach dem traumatischen Einbruch, strahlt das Ehepaar wieder. 
              „Wir haben gerade einen wunderschönen Urlaub auf Mallorca gebucht – den ersten seit fünf Jahren", 
              erzählt Heinz stolz. „Das hätten wir uns vor ein paar Monaten nie vorstellen können."
            </p>

            <p>
              Maria nickt zustimmend: „Das Wichtigste ist, dass wir unsere <strong>Lebensfreude zurückgewonnen</strong> haben. 
              Wir können unseren Enkeln wieder Geschenke machen, ohne uns Sorgen zu machen. 
              Das Angebot dieser Bank hat uns nicht nur finanziell geholfen – es hat uns unser <strong>Leben zurückgegeben</strong>."
            </p>

            <blockquote className="article-quote">
              „Wenn Sie in einer ähnlichen Situation sind: Geben Sie nicht auf! 
              Es gibt Wege aus der Krise. Wir sind der lebende Beweis dafür."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Heinz (71)</footer>
            </blockquote>

            {/* CTA Section with Couple Image */}
            <div className="info-box mt-12 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-primary">
                      🔒 Exklusiv: Dieses Angebot war bisher nur institutionellen Anlegern vorbehalten – 
                      jetzt für kurze Zeit auch für Privatpersonen verfügbar!
                    </p>
                  </div>
                  <h3 className="font-bold text-xl mb-4 font-spiegel-serif">
                    Jetzt selbst handeln – Vermögen sichern
                  </h3>
                  <p className="mb-4 text-base">
                    Unsere Redaktion hat den <strong>exklusiven Zugangslink</strong> recherchiert – 
                    er ist auf der Website dieser Großbank kaum zu finden und normalerweise nur über 
                    persönliche Vermögensberater zugänglich:
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Institutionelle Konditionen</strong> für Privatanleger</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sonst nur für Großinvestoren & Fondsmanager</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Zeitlich <strong>streng limitiert</strong></span>
                    </li>
                  </ul>

                  <a 
                    href="#" 
                    className="cta-button"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Link zum Bank-Angebot');
                    }}
                  >
                    👉 Zum exklusiven Angebot (von der Redaktion recherchiert)
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Hinweis:</strong> Dieses Angebot wird nicht aktiv beworben. Der Link führt Sie direkt zur Anmeldung 
                    bei einer der größten deutschen Banken mit voller BaFin-Regulierung und 100.000€ Einlagensicherung.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Comments Section */}
        <div className="px-4 md:px-6 lg:px-24 mt-12">
          <div className="max-w-[680px] mx-auto">
            <div className="border-t pt-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-bold text-xl font-spiegel-serif">
                  Kommentare ({comments.length})
                </h3>
              </div>

              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${comment.isHighlight ? 'bg-primary/5 border border-primary/20' : 'bg-muted/50'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{comment.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">{comment.text}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="text-xs text-muted-foreground hover:text-primary">
                        Antworten
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Möchten Sie auch kommentieren?</p>
                <button className="text-primary font-semibold text-sm hover:underline">
                  Jetzt anmelden →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA before footer */}
        <div className="px-4 md:px-6 lg:px-24 mt-12 pb-12">
          <div className="max-w-[680px] mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
              <div className="text-center">
                <p className="font-semibold text-lg mb-2 font-spiegel-serif">
                  Machen Sie es wie Heinz und Maria
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Nutzen Sie jetzt das exklusive Angebot dieser deutschen Großbank, bevor es nicht mehr verfügbar ist.
                </p>
                <a 
                  href="#" 
                  className="cta-button inline-flex"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Link zum Bank-Angebot');
                  }}
                >
                  Zum Angebot →
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ArticlePage;
