import { Bookmark, Play, Share2 } from "lucide-react";
import heroImage from "@/assets/hero-bank-victim.jpg";
import moneySavingsImage from "@/assets/money-savings.jpg";
import womanLaptopImage from "@/assets/woman-laptop-hope.jpg";

const ArticlePage = () => {
  return (
    <main className="bg-white">
      <article className="max-w-[1020px] mx-auto">
        {/* Article Header */}
        <header className="px-4 md:px-6 lg:px-24 pt-8 md:pt-12">
          <div className="max-w-[680px] mx-auto">
            {/* Category Tag */}
            <span className="category-tag">
              Exklusiv: Bankraub-Opfer berichtet
            </span>

            {/* Title */}
            <h1 className="article-title mt-3 mb-6">
              42.000 Euro verloren – wie eine Frau nach dem Bankraub von Gelsenkirchen ihr finanzielles Leben zurückgewann
            </h1>

            {/* Lead */}
            <p className="article-lead text-muted-foreground">
              Eine 71-jährige Rentnerin verliert beim dramatischen Banküberfall ihr gesamtes Erspartes. 
              Was dann geschah, hätte sie selbst nicht erwartet – und könnte auch anderen helfen.
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
              alt="Die Betroffene vor der Bank in Gelsenkirchen" 
              className="w-full h-auto object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded text-white">
              <svg className="w-6 h-6" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 4.5h6m0 0v6m0-6l-8 8M10.5 23.5h-6m0 0v-6m0 6l8-8"/>
              </svg>
            </button>
          </div>
          <figcaption className="image-caption px-0 md:px-0 lg:px-0">
            <p>Die Betroffene vor dem Bankgebäude in Gelsenkirchen: „Es fühlte sich an, als hätte mir jemand den Boden unter den Füßen weggezogen"</p>
            <span className="text-xs text-muted-foreground ml-1">Foto: dpa</span>
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="px-4 md:px-6 lg:px-24 mt-10">
          <div className="max-w-[680px] mx-auto article-body">
            
            <p className="text-muted-foreground italic mb-8 text-lg">
              <strong>Gelsenkirchen.</strong> Es sind oft nur Sekunden, die ein ganzes Leben verändern.
            </p>

            <p>
              Für eine 71-jährige Seniorin aus Nordrhein-Westfalen begann dieser Tag wie jeder andere: 
              ein kurzer Termin bei der Bank, ein paar Überweisungen, dann zurück nach Hause. 
              Doch was folgte, war ein Ereignis, das sie noch Monate später nicht losließ.
            </p>

            <p>
              Während sie sich im Gebäude aufhielt, kam es zum Bankraub von Gelsenkirchen. 
              Chaos, Sirenen, Angst. Inmitten der Unruhe verlor sie das, was sie sich über 
              viele Jahre mühsam aufgebaut hatte: <strong>42.000 Euro Erspartes</strong> – Geld, das für 
              Sicherheit, Zukunft und ein ruhiges Gefühl im Alter gedacht war.
            </p>

            <blockquote className="article-quote">
              „Ich stand einfach nur da und habe gezittert. Es fühlte sich an, als hätte mir 
              jemand den Boden unter den Füßen weggezogen."
            </blockquote>

            <h2 className="article-subheading">Der Verlust traf sie härter als erwartet</h2>

            <p>
              Das Geld war kein Luxus. Es war Rücklage. Notgroschen. <em>Zukunft.</em> Gedacht für 
              unvorhergesehene Situationen – ironischerweise genau für einen Moment wie diesen.
            </p>

            <figure className="my-8">
              <img 
                src={moneySavingsImage}
                alt="Symbolbild: Ersparnisse zählen"
                className="w-full rounded"
              />
              <figcaption className="image-caption">
                Jahrelange Ersparnisse – innerhalb von Minuten verloren
                <span className="text-xs text-muted-foreground ml-1">Foto: Illustration</span>
              </figcaption>
            </figure>

            <p>
              Nach dem ersten Schock kam die Realität: Rechnungen, Miete, laufende Kosten. 
              Die Gewissheit, dass ein Großteil des Geldes vermutlich nie wieder auftauchen würde. 
              Schlaflose Nächte folgten, begleitet von der immer gleichen Frage: 
              <em>„Wie soll ich das wieder aufholen?"</em>
            </p>

            <blockquote className="article-quote">
              „Man fühlt sich hilflos. Man macht sich Vorwürfe, zweifelt an sich selbst 
              und hat Angst vor der Zukunft."
            </blockquote>

            <h2 className="article-subheading">Ein Zufallsfund, der alles veränderte</h2>

            <p>
              Was sie in dieser Zeit rettete, war etwas, womit sie selbst nicht gerechnet hatte: 
              <strong>Neugier</strong>. Und der Wille, nicht aufzugeben.
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
              Das Angebot versprach keine Wunder, sondern einen klaren, strukturierten Weg, 
              Kapital wieder aufzubauen – mit transparenten Konditionen und einem Produkt, 
              das speziell für sicherheitsbewusste Anleger konzipiert ist.
            </p>

            <h2 className="article-subheading">Ein Monat später: Hoffnung kehrt zurück</h2>

            <figure className="my-8">
              <img 
                src={womanLaptopImage}
                alt="Rentnerin am Laptop recherchiert Finanzangebote"
                className="w-full rounded"
              />
              <figcaption className="image-caption">
                Hoffnung kehrt zurück: Die Betroffene entdeckte online eine unerwartete Lösung
                <span className="text-xs text-muted-foreground ml-1">Foto: Illustration</span>
              </figcaption>
            </figure>

            <p>
              Was dann passierte, beschreibt sie heute selbst als <strong>Wendepunkt</strong>. 
              Innerhalb weniger Wochen konnte sie – durch das Angebot der Consorsbank – 
              einen Großteil ihres finanziellen Verlustes kompensieren. 
              Nicht über Nacht, nicht risikoreich, sondern Schritt für Schritt.
            </p>

            <blockquote className="article-quote">
              „Zum ersten Mal seit dem Überfall hatte ich wieder das Gefühl, 
              die Kontrolle zurückzugewinnen."
            </blockquote>

            <p>
              Noch überraschender: Durch das Angebot erhielt sie Zugang zu einem besonders 
              attraktiven Bankprodukt, das nur für einen begrenzten Zeitraum verfügbar war 
              und normalerweise nicht offen beworben wird.
            </p>

            <h2 className="article-subheading">Glück im Unglück – und eine Lektion fürs Leben</h2>

            <p>
              Heute blickt sie anders auf das Geschehene zurück. Der Verlust schmerzt noch immer, 
              doch er brachte auch etwas mit sich: einen neuen Umgang mit Geld, mehr Wissen – 
              und eine <strong>bessere finanzielle Struktur als zuvor</strong>.
            </p>

            <blockquote className="article-quote">
              „Ich hätte nie gedacht, dass ich das einmal sagen würde, aber: 
              Dieser Schock hat mich langfristig stärker gemacht."
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
                      Experten warnen: Diese Fehler sollten Sparer jetzt unbedingt vermeiden
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-3 border-b">
                  <span className="flex-1">
                    <a href="#" className="font-bold hover:opacity-70 font-spiegel-serif">
                      Geldanlage 2026: Welche Optionen sich jetzt besonders lohnen
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4 py-3">
                  <span className="flex-1">
                    <a href="#" className="font-bold hover:opacity-70 font-spiegel-serif">
                      Bankraub in Gelsenkirchen: Polizei sucht weiter nach Tätern
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
