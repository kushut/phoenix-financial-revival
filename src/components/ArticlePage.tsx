import { Bookmark, Play, Share2 } from "lucide-react";
import heroImage from "@/assets/sparkasse-polizei.jpg";
import lochImage from "@/assets/sparkasse-loch.jpg";
import protesteImage from "@/assets/sparkasse-proteste.jpg";
import taeterImage from "@/assets/sparkasse-taeter.png";

const ArticlePage = () => {
  return (
    <main className="bg-white">
      <article className="max-w-[1020px] mx-auto">
        {/* Article Header */}
        <header className="px-4 md:px-6 lg:px-24 pt-8 md:pt-12">
          <div className="max-w-[680px] mx-auto">
            {/* Category Tag */}
            <span className="category-tag">
              Exklusiv: Sparkassen-Einbruch Gelsenkirchen
            </span>

            {/* Title */}
            <h1 className="article-title mt-3 mb-6">
              42.000 Euro verloren – wie eine Frau nach dem Sparkassen-Einbruch von Gelsenkirchen ihr finanzielles Leben zurückgewann
            </h1>

            {/* Lead */}
            <p className="article-lead text-muted-foreground">
              Beim spektakulären Einbruch in die Sparkasse Gelsenkirchen-Buer wurden rund 3.200 Schließfächer aufgebrochen – 
              einer der größten Coups in der bundesdeutschen Kriminalgeschichte. Eine 71-jährige Betroffene erzählt, wie sie 
              sich von dem Schock erholte.
            </p>

            {/* Meta */}
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
              <button className="p-2 hover:bg-secondary rounded" title="E-Mail">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.5 5.5H20.5M3.5 5.5V18.5M3.5 5.5L10 12M20.5 5.5V18.5M20.5 5.5L14 12M20.5 18.5H3.5M20.5 18.5L14 12M3.5 18.5L10 12M10 12L12 14L14 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-secondary rounded" title="Teilen">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <figure className="mt-6 px-4 md:px-6 lg:px-24">
          <div className="relative rounded overflow-hidden">
            <img 
              src={heroImage} 
              alt="Polizeieinsatz vor der Sparkasse Gelsenkirchen-Buer" 
              className="w-full h-auto object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded text-white">
              <svg className="w-6 h-6" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 4.5h6m0 0v6m0-6l-8 8M10.5 23.5h-6m0 0v-6m0 6l8-8"/>
              </svg>
            </button>
          </div>
          <figcaption className="image-caption px-0 md:px-0 lg:px-0">
            <p>Polizeieinsatz vor der Sparkassen-Filiale in Gelsenkirchen-Buer: Einer der größten Coups in der bundesdeutschen Kriminalgeschichte</p>
            <span className="text-xs text-muted-foreground ml-1">Foto: WDR</span>
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="px-4 md:px-6 lg:px-24 mt-10">
          <div className="max-w-[680px] mx-auto article-body">
            
            <p className="text-muted-foreground italic mb-8 text-lg">
              <strong>Gelsenkirchen.</strong> Es sind oft nur Sekunden, die ein ganzes Leben verändern – 
              oder in diesem Fall: eine Nacht zwischen den Weihnachtsfeiertagen.
            </p>

            <p>
              Für eine 71-jährige Seniorin aus Nordrhein-Westfalen begann das neue Jahr mit einem Schock: 
              Beim spektakulären <strong>Einbruch in die Sparkasse Gelsenkirchen-Buer</strong> wurden rund 
              3.200 Schließfächer aufgebrochen. Die Täter erbeuteten eine Millionensumme – Ermittler halten 
              inzwischen eine <strong>Beute von mehr als 100 Millionen Euro</strong> für möglich.
            </p>

            <p>
              Die Rentnerin war eine der Betroffenen. In ihrem Schließfach: <strong>42.000 Euro</strong> – 
              ihr gesamtes Erspartes, zusammengetragen über Jahrzehnte. Geld, das für Sicherheit im Alter, 
              für Notfälle und für ein ruhiges Gefühl gedacht war.
            </p>

            <blockquote className="article-quote">
              „Als ich davon erfuhr, stand ich einfach nur da und habe gezittert. Es fühlte sich an, 
              als hätte mir jemand den Boden unter den Füßen weggezogen."
            </blockquote>

            <h2 className="article-subheading">Der Coup: Wie die Täter vorgingen</h2>

            <figure className="my-8">
              <img 
                src={lochImage}
                alt="Das Loch in der Wand des Tresorraums"
                className="w-full rounded"
              />
              <figcaption className="image-caption">
                Das riesige Loch in der Stahlbetonwand: Die Täter bohrten sich vom Archivraum in den Tresor
                <span className="text-xs text-muted-foreground ml-1">Foto: WDR</span>
              </figcaption>
            </figure>

            <p>
              Der Tatzeitpunkt liegt vermutlich zwischen den <strong>Weihnachtsfeiertagen und dem darauffolgenden 
              Wochenende</strong>. Am 29. Dezember 2025 wurde der Einbruch schließlich entdeckt, als um 03:58 Uhr 
              ein Brandmeldealarm einging.
            </p>

            <p>
              Die Täter verschafften sich von einer <strong>benachbarten Tiefgarage</strong> aus Zugang zu einem 
              Archivraum der Bank. Von dort aus arbeiteten sie sich mit einem Spezialbohrer in den Tresorraum vor – 
              dafür rissen sie ein riesiges Loch in die Stahlbetonwand. Für die Kühlung des Bohrers verlegten sie 
              sogar einen Schlauch vom Wasserhahn der benachbarten Damentoilette.
            </p>

            <figure className="my-8">
              <img 
                src={taeterImage}
                alt="Fahndungsfoto der maskierten Täter"
                className="w-full rounded"
              />
              <figcaption className="image-caption">
                Fahndungsbild: Die Polizei sucht nach den maskierten Einbrechern
                <span className="text-xs text-muted-foreground ml-1">Foto: Polizei Gelsenkirchen</span>
              </figcaption>
            </figure>

            <h2 className="article-subheading">Tumultartige Szenen vor der Filiale</h2>

            <figure className="my-8">
              <img 
                src={protesteImage}
                alt="Kunden protestieren vor der Sparkasse"
                className="w-full rounded"
              />
              <figcaption className="image-caption">
                Wütende Kunden vor der Filiale: Die Lage drohte zu eskalieren
                <span className="text-xs text-muted-foreground ml-1">Foto: WDR</span>
              </figcaption>
            </figure>

            <p>
              Nach Bekanntwerden des Einbruchs versammelten sich am 29. und 30. Dezember <strong>bis zu 200 
              betroffene Kunden</strong> vor der Filiale. Die Lage drohte zu eskalieren – es kam zu tumultartigen 
              Szenen. Mehrere Menschen stürmten in den Vorraum der Sparkasse. Polizeikräfte mussten anrücken und 
              den Eingang sichern.
            </p>

            <blockquote className="article-quote">
              „Man fühlt sich hilflos. Man macht sich Vorwürfe, zweifelt an sich selbst und hat Angst vor der Zukunft."
            </blockquote>

            <p>
              Die Sparkasse selbst informierte: <em>„Die Wahrscheinlichkeit, dass auch Ihr Fach betroffen ist, 
              ist sehr hoch."</em> Einzelne Kunden gaben an, jeweils mehr als 500.000 Euro in ihren Schließfächern 
              gehabt zu haben. Inzwischen haben <strong>mehr als 200 Kunden angekündigt, rechtliche Schritte 
              gegen die Sparkasse einzuleiten</strong>.
            </p>

            <h2 className="article-subheading">Der Verlust traf sie härter als erwartet</h2>

            <p>
              Das Geld war kein Luxus. Es war Rücklage. Notgroschen. <em>Zukunft.</em> Gedacht für unvorhergesehene 
              Situationen – ironischerweise genau für einen Moment wie diesen.
            </p>

            <p>
              Nach dem ersten Schock kam die Realität: Rechnungen, Miete, laufende Kosten. Die Gewissheit, dass 
              das Geld vermutlich nie wieder auftauchen würde. Schlaflose Nächte folgten, begleitet von der immer 
              gleichen Frage: <em>„Wie soll ich das wieder aufholen?"</em>
            </p>

            <h2 className="article-subheading">Ein Zufallsfund, der alles veränderte</h2>

            <p>
              Was sie in dieser Zeit rettete, war etwas, womit sie selbst nicht gerechnet hatte: 
              <strong> Neugier</strong>. Und der Wille, nicht aufzugeben.
            </p>

            <p>
              Abends, oft bis spät in die Nacht, begann sie zu recherchieren. Banken, Sparmodelle, 
              Angebote. Vieles wirkte kompliziert oder wenig überzeugend – bis sie auf ein aktuelles, 
              zeitlich begrenztes <strong>Angebot der Consorsbank</strong> stieß.
            </p>

            <blockquote className="article-quote">
              „Normalerweise hätte ich weitergescrollt. Aber irgendetwas hat mich innehalten lassen."
            </blockquote>

            <p>
              Das Angebot versprach keine Wunder, sondern einen klaren, strukturierten Weg, Kapital wieder 
              aufzubauen – mit transparenten Konditionen und einem Produkt, das speziell für sicherheitsbewusste 
              Anleger konzipiert ist.
            </p>

            <h2 className="article-subheading">Ein Monat später: Hoffnung kehrt zurück</h2>

            <p>
              Was dann passierte, beschreibt sie heute selbst als <strong>Wendepunkt</strong>. 
              Innerhalb weniger Wochen konnte sie – durch das Angebot der Consorsbank – einen Großteil 
              ihres finanziellen Verlustes kompensieren. Nicht über Nacht, nicht risikoreich, sondern 
              Schritt für Schritt.
            </p>

            <blockquote className="article-quote">
              „Zum ersten Mal seit dem Einbruch hatte ich wieder das Gefühl, die Kontrolle zurückzugewinnen."
            </blockquote>

            <p>
              Noch überraschender: Durch das Angebot erhielt sie Zugang zu einem besonders attraktiven 
              Bankprodukt, das nur für einen begrenzten Zeitraum verfügbar war und normalerweise nicht 
              offen beworben wird.
            </p>

            <h2 className="article-subheading">Glück im Unglück – und eine Lektion fürs Leben</h2>

            <p>
              Heute blickt sie anders auf das Geschehene zurück. Der Verlust schmerzt noch immer, doch 
              er brachte auch etwas mit sich: einen neuen Umgang mit Geld, mehr Wissen – und eine 
              <strong> bessere finanzielle Struktur als zuvor</strong>.
            </p>

            <blockquote className="article-quote">
              „Ich hätte nie gedacht, dass ich das einmal sagen würde, aber: Dieser Schock hat mich 
              langfristig stärker gemacht."
            </blockquote>

            <p>
              Ihr Fazit ist klar: Gerade nach schweren Rückschlägen lohnt es sich, genau hinzuschauen, 
              Angebote zu vergleichen und Chancen zu nutzen, wenn sie sich bieten.
            </p>

            {/* CTA Section */}
            <div className="info-box mt-12 mb-8">
              <h3 className="font-bold text-xl mb-4 font-spiegel-serif">
                🔗 Das aktuelle Angebot der Consorsbank im Überblick
              </h3>
              <p className="mb-6 text-base">
                Wer sich selbst informieren möchte, kann das zeitlich begrenzte Angebot hier einsehen:
              </p>
              <a 
                href="#" 
                className="cta-button"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Link zum Consorsbank-Angebot');
                }}
              >
                👉 Zum Angebot der Consorsbank
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Hinweis:</strong> Das Angebot ist zeitlich begrenzt und richtet sich an ausgewählte Kunden.
              </p>
            </div>

            {/* Related Articles */}
            <div className="related-box">
              <h4 className="related-title">Mehr zum Thema</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 py-3 border-b">
                  <span className="flex-1">
                    <a href="#" className="font-bold hover:opacity-70 font-spiegel-serif">
                      Sparkassen-Einbruch: Der Jahrhundert-Diebstahl von Gelsenkirchen
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-3 border-b">
                  <span className="flex-1">
                    <a href="#" className="font-bold hover:opacity-70 font-spiegel-serif">
                      200 Kunden wollen Sparkasse nach Einbruch verklagen
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <span className="flex-1">
                    <a href="#" className="font-bold hover:opacity-70 font-spiegel-serif">
                      Experten warnen: Sind Schließfächer wirklich sicher?
                    </a>
                  </span>
                </li>
              </ul>
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

export default ArticlePage;
