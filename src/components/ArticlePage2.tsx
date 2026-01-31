import { Bookmark, Play, Share2, CheckCircle } from "lucide-react";
import heroImage from "@/assets/sparkasse-polizei.jpg";
import seniorinImage from "@/assets/seniorin-portrait.png";
import SpiegelHeader from "./SpiegelHeader";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage2 = () => {
  const comments = [
    { id: 1, author: "Petra H.", time: "vor 1 Stunde", text: "Ich bin selbst 68 und diese Geschichte macht mir Mut. Habe mir das Angebot bei meiner Bank auch angeschaut – 100.000€ Einlagensicherung, das beruhigt!", likes: 52 },
    { id: 2, author: "Manfred K.", time: "vor 2 Stunden", text: "Stark, wie die Dame das gemeistert hat! Das Angebot mit dem aktiven Depot-Management klingt sehr interessant. Werde es mir heute noch anschauen.", likes: 78 },
    { id: 3, author: "Elisabeth M.", time: "vor 3 Stunden", text: "Genau so ist es mir auch ergangen. Nach dem Schock habe ich ebenfalls zu einer großen deutschen Bank gewechselt und bin sehr zufrieden!", likes: 63 },
    { id: 4, author: "Rolf B.", time: "vor 4 Stunden", text: "Unglaublich, dass die Sparkasse nur 10.000 Euro absichert. Das ist ein Skandal! Gut, dass es seriöse Alternativen mit voller EU-Einlagensicherung gibt.", likes: 124 },
    { id: 5, author: "Christa W.", time: "vor 5 Stunden", text: "Meine Freundin hat das Angebot letzte Woche genutzt und ist begeistert. Der Service bei den großen Banken ist wirklich erstklassig!", likes: 45 },
    { id: 6, author: "Herbert S.", time: "vor 6 Stunden", text: "Als Rentner ist Sicherheit das Wichtigste. Die großen deutschen Banken bieten genau das – transparente Konditionen und BaFin-Regulierung.", likes: 91 },
    { id: 7, author: "Gerda F.", time: "vor 7 Stunden", text: "Habe gestern mit meinem Sohn das Angebot durchgesehen. Er war auch überzeugt – vor allem wegen der 100.000€ Einlagensicherung. Sehr einfach!", likes: 37 },
    { id: 8, author: "Kurt L.", time: "vor 8 Stunden", text: "Die Täter müssen gefasst werden! Hoffentlich bekommen alle Betroffenen ihr Geld zurück. Schande für die Sparkasse!", likes: 189 },
    { id: 9, author: "Irmgard T.", time: "vor 9 Stunden", text: "Bin seit 3 Wochen bei einer großen deutschen Bank und habe schon erste positive Entwicklungen gesehen. Kann es nur empfehlen!", likes: 56 },
    { id: 10, author: "Wolfgang H.", time: "vor 10 Stunden", text: "Diese Geschichte zeigt: Man darf sich nicht unterkriegen lassen! Respekt an die Dame. Das Angebot werde ich mir auch ansehen.", likes: 72 },
    { id: 11, author: "Hannelore P.", time: "vor 11 Stunden", text: "Endlich mal ein Artikel der zeigt, dass es Lösungen gibt! Die BaFin-regulierten Großbanken sind wirklich seriös.", likes: 48 },
    { id: 12, author: "Siegfried R.", time: "vor 12 Stunden", text: "Meine Frau und ich haben uns ebenfalls für das Angebot entschieden. Der Wechsel war problemlos und wir fühlen uns sicher.", likes: 83 }
  ];

  return (
    <main className="bg-white">
      <SpiegelHeader showMenu={false} />
      <article className="max-w-[1020px] mx-auto">
        {/* Article Header */}
        <header className="px-4 md:px-6 lg:px-24 pt-8 md:pt-12">
          <div className="max-w-[680px] mx-auto">
            <span className="category-tag">
              Exklusiv: Sparkassen-Einbruch Gelsenkirchen
            </span>

            <h1 className="article-title mt-3 mb-6">
              42.000 Euro verloren – und wie Hildegard Krause (69) ihr Vermögen wieder stabilisierte
            </h1>

            <p className="article-lead text-muted-foreground">
              Für Hildegard Krause aus Nordrhein-Westfalen wurde der Sparkassen-Einbruch zum Albtraum. 
              Doch die 69-Jährige gab nicht auf – und fand einen Weg zurück zur finanziellen Sicherheit.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-6">
              <time>30.01.2026, 08:15 Uhr</time>
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
                <span className="text-sm">5 Min</span>
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

            {/* Senior Woman Image */}
            <figure className="rounded overflow-hidden">
              <img 
                src={seniorinImage} 
                alt="Hildegard Krause" 
                className="w-full h-auto object-cover"
              />
              <figcaption className="image-caption">
                <p>Hildegard Krause (69) hat ihr Vermögen stabilisiert</p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Article Body */}
        <div className="px-4 md:px-6 lg:px-24 mt-10">
          <div className="max-w-[680px] mx-auto article-body">
            
            <p>
              Für <strong>Hildegard Krause (69)</strong> aus Nordrhein-Westfalen begann der Tag wie jeder andere. 
              Sie kümmerte sich um alltägliche Angelegenheiten, plante Einkäufe, prüfte ihre Finanzen – doch wenige 
              Tage später erreichte sie eine Nachricht, die ihr Herz schwer machte: Beim Bankeinbruch in Gelsenkirchen 
              war ein erheblicher Teil ihres Goldvermögens betroffen – <strong>42.000 Euro</strong>.
            </p>

            <blockquote className="article-quote">
              „Es war ein großer Schock. Ich wusste sofort, dass ich schnell handeln musste, 
              um den Schaden nicht noch größer werden zu lassen."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Hildegard Krause (69)</footer>
            </blockquote>

            <p>
              Glücklicherweise war dies nicht ihr gesamtes Vermögen, doch der Verlust traf sie dennoch hart. 
              Die Bank konnte lediglich einen Teil des Goldes absichern – <strong>maximal 10.000 Euro</strong>. 
              Enttäuscht und vorsichtig entschied sie sich, alle Konten und Depots bei der betroffenen Sparkasse 
              zu kündigen, um ihr verbleibendes Geld zu schützen.
            </p>

            <h2 className="article-subheading">Angst, Unsicherheit – und der Wille, die Kontrolle zurückzugewinnen</h2>

            <p>
              In den ersten Tagen nach der Nachricht fühlte sie sich überfordert. Sie machte sich Sorgen über 
              laufende Kosten, geplante Anschaffungen und die Zukunft. Doch schnell wurde ihr klar: 
              <strong>Aufgeben war keine Option</strong>. Sie begann, sich aktiv über sichere Finanzlösungen 
              zu informieren und nach Möglichkeiten zu suchen, den Verlust auszugleichen.
            </p>

            <p>
              Bei ihren Recherchen stieß sie auf ein <strong>exklusives Angebot einer der größten deutschen Banken</strong> – 
              einer Bank mit staatlicher Beteiligung und über 5 Millionen Kunden. Dieses spezielle Depot-Management 
              war bisher nur institutionellen Anlegern vorbehalten. Großinvestoren, Fondsmanager, 
              Vermögensverwalter – sie alle nutzen seit Jahren diese besonderen Konditionen. 
              <strong>Doch durch neue EU-Regulierungen ist genau dieses Angebot jetzt auch für Privatpersonen zugänglich.</strong>
            </p>

            <p>
              Anders als andere Produkte versprach es keinen leeren Gewinn, sondern einen klaren, strukturierten Weg, 
              Schritt für Schritt ihr Vermögen wieder aufzubauen – mit den <strong>gleichen Konditionen, 
              die sonst nur professionelle Anleger erhalten</strong>. Dazu kam die volle <strong>EU-Einlagensicherung 
              von 100.000 Euro</strong> und vollständige BaFin-Regulierung. Der Link zu genau diesem Angebot 
              befindet sich am Ende dieses Artikels.
            </p>

            <blockquote className="article-quote">
              „Als ich verstanden habe, dass dieses Programm normalerweise nur für Profi-Anleger 
              gedacht ist, wusste ich: Das ist eine einmalige Chance. Ich konnte wieder aktiv werden, 
              anstatt mich machtlos zu fühlen."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Hildegard Krause</footer>
            </blockquote>

            <h2 className="article-subheading">Innerhalb weniger Wochen: ein Großteil des Verlustes wiederhergestellt</h2>

            <p>
              Mit Hilfe des Angebots und durch geschicktes Umstrukturieren ihres Vermögens konnte sie bereits 
              nach <strong>wenigen Wochen einen Großteil des verlorenen Goldes wiederherstellen</strong>. 
              Das restliche Vermögen blieb geschützt, während sie gleichzeitig Vertrauen in ihre finanzielle 
              Zukunft zurückgewann.
            </p>

            <blockquote className="article-quote">
              „Es ist ein unglaubliches Gefühl, wieder Kontrolle über mein Geld zu haben. 
              Ich konnte nicht nur einen großen Teil des Verlustes ausgleichen, sondern auch meine finanzielle Sicherheit stärken."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Hildegard Krause</footer>
            </blockquote>

            <div className="highlight-box my-8">
              <h3 className="font-bold text-lg mb-4 font-spiegel-serif">Was Hildegard Krause erreicht hat:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Großteil der 42.000 Euro</strong> in wenigen Wochen zurückgewonnen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Restliches Vermögen <strong>sicher angelegt</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Kontrolle und Vertrauen</strong> zurückgewonnen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Langfristige <strong>finanzielle Sicherheit</strong> geschaffen</span>
                </li>
              </ul>
            </div>

            <h2 className="article-subheading">Glück im Unglück – eine neue Perspektive auf Finanzen</h2>

            <p>
              Hildegard Krause blickt heute anders auf die Situation zurück. Der Einbruch war ein Schock, aber er hat 
              ihr auch gezeigt, wie wichtig schnelles Handeln, Übersicht und die Nutzung passender Finanzangebote 
              sein kann. Sie hat nicht nur ihr Geld stabilisiert, sondern auch ein Finanzprodukt kennengelernt, 
              das ihr langfristig Sicherheit und Flexibilität bietet.
            </p>

            <blockquote className="article-quote">
              „Ich hätte nie gedacht, dass ich das einmal sagen würde, aber dieser Rückschlag hat mich langfristig 
              stärker gemacht und mir gezeigt, wie wichtig es ist, Chancen aktiv zu nutzen."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Hildegard Krause</footer>
            </blockquote>

            {/* CTA Section */}
            <div className="info-box mt-12 mb-8">
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-primary">
                      🔒 Das ist die Bank, die Hildegard Krause geholfen hat – über den Link unten gelangen Sie direkt zum Angebot
                    </p>
                  </div>
                  <h3 className="font-bold text-xl mb-4 font-spiegel-serif">
                    Das exklusive Angebot dieser deutschen Großbank
                  </h3>
                  <p className="mb-4 text-base">
                    Unsere Redaktion hat den <strong>direkten Zugang zum Angebot</strong> recherchiert. 
                    Es handelt sich um dieselbe Bank, die der Seniorin geholfen hat – eine der größten 
                    und sichersten Banken Deutschlands:
                  </p>

                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Staatliche Beteiligung</strong> – maximale Sicherheit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>100.000€ EU-Einlagensicherung</strong> garantiert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Vollständig <strong>BaFin-reguliert</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Über 5 Millionen Kunden</strong> vertrauen dieser Bank</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Jederzeit kündbar – <strong>keine Mindestlaufzeit</strong></span>
                    </li>
                  </ul>

                  <OfferButton>
                    👉 Direkt zum Angebot dieser Bank
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </OfferButton>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Hinweis:</strong> Dieses Angebot wird nicht aktiv beworben. Der Link führt Sie direkt zur Anmeldung.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Comments Section */}
        <div className="px-4 md:px-6 lg:px-24 mt-12">
          <div className="max-w-[680px] mx-auto">
            <CommentSection initialComments={comments} />
            
            {/* Second CTA after comments */}
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20 text-center">
              <p className="font-semibold mb-3">
                Viele Leser haben das Angebot bereits genutzt!
              </p>
              <OfferButton>
                👉 Jetzt selbst informieren
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </OfferButton>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 py-8 bg-secondary">
          <div className="max-w-[1020px] mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
            <p>© SPIEGEL 2026 – Alle Rechte vorbehalten</p>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default ArticlePage2;
