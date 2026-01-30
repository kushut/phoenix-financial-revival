import { Bookmark, Play, Share2, CheckCircle } from "lucide-react";
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
              65.000 Euro verloren – wie Heinz und Maria ihr Vermögen zurückgewannen
            </h1>

            {/* Lead */}
            <p className="article-lead text-muted-foreground">
              Beim spektakulären Einbruch in die Sparkasse Gelsenkirchen-Buer wurden rund 3.200 Schließfächer aufgebrochen – 
              einer der größten Coups in der bundesdeutschen Kriminalgeschichte. Ein Rentner-Ehepaar erzählt, wie sie 
              sich von dem Schock erholten und ihr Vermögen Schritt für Schritt wiederaufbauten.
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
            
            <p>
              <strong>Heinz (71) und Maria (69)</strong> aus Nordrhein-Westfalen hatten ihr Leben lang gespart. 
              Gold, Rücklagen, ein kleines Polster für die Zukunft – alles sollte Sicherheit geben. Doch wenige 
              Tage nach dem Bankeinbruch in Gelsenkirchen erreichte sie die erschütternde Nachricht: 
              <strong> 65.000 Euro ihres Goldvermögens</strong> waren betroffen.
            </p>

            <blockquote className="article-quote">
              „Es fühlte sich an, als hätte jemand ein Stück unseres Lebens weggenommen. 
              Wir wussten sofort: Wir müssen handeln."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Maria (69)</footer>
            </blockquote>

            <p>
              Glücklicherweise war dies nicht ihr gesamtes Vermögen, aber der Verlust traf das Paar hart. 
              Die Bank konnte nur einen Teil absichern – <strong>maximal 10.000 Euro</strong>. Enttäuscht und 
              vorsichtig kündigten Heinz und Maria alle Konten und Depots bei der betroffenen Sparkasse, 
              um ihr verbleibendes Geld zu schützen.
            </p>

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
              dafür rissen sie ein riesiges Loch in die Stahlbetonwand. Ermittler halten inzwischen eine 
              <strong> Beute von mehr als 100 Millionen Euro</strong> für möglich.
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

            <h2 className="article-subheading">Vom Schock zur Entschlossenheit</h2>

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
              Die ersten Tage waren geprägt von Unsicherheit: Rechnungen, geplante Ausgaben, die Frage nach 
              der Zukunft. Statt zu resignieren, suchten sie <strong>aktiv nach einer Lösung</strong>, die ihr 
              Vermögen schützt und wieder aufbaut.
            </p>

            <p>
              Bei ihren Recherchen stießen sie auf ein <strong>zeitlich begrenztes Angebot der Consorsbank</strong>. 
              Es versprach keinen schnellen, riskanten Gewinn, sondern einen klar strukturierten, sicheren Weg, 
              Schritt für Schritt Vermögen wieder aufzubauen – speziell für vorsichtige Anleger.
            </p>

            <blockquote className="article-quote">
              „Es war wie ein Lichtblick nach Wochen der Angst. Endlich hatten wir wieder das Gefühl, 
              selbst die Kontrolle zu übernehmen."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Heinz (71)</footer>
            </blockquote>

            <h2 className="article-subheading">Schnelle Ergebnisse – Schritt für Schritt</h2>

            <p>
              Dank des Angebots und gezielter Umstrukturierung ihres Vermögens konnten Heinz und Maria 
              innerhalb weniger Wochen <strong>einen Großteil des verlorenen Goldes wiederherstellen</strong>.
            </p>

            <div className="highlight-box my-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Restliches Vermögen blieb geschützt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Kontrolle und Vertrauen in die Zukunft kehrten zurück</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Sicherheit und innere Ruhe wurden wiederhergestellt</span>
                </li>
              </ul>
            </div>

            <blockquote className="article-quote">
              „Wir haben nicht nur Geld zurückgewonnen, sondern auch das Gefühl, wieder unser Leben 
              selbst zu gestalten."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Maria (69)</footer>
            </blockquote>

            <h2 className="article-subheading">Glück im Unglück – und eine wichtige Lektion</h2>

            <p>
              Der Einbruch war ein Schock, doch er zeigte: <strong>Schnelles Handeln und die richtigen 
              Finanzprodukte</strong> können selbst nach Rückschlägen Stabilität bringen.
            </p>

            <blockquote className="article-quote">
              „Dieser Rückschlag hat uns stärker gemacht und gezeigt, wie entscheidend es ist, 
              Chancen zu nutzen, wenn sie sich bieten."
              <footer className="text-base mt-2 not-italic text-muted-foreground">– Heinz & Maria</footer>
            </blockquote>

            {/* CTA Section */}
            <div className="info-box mt-12 mb-8">
              <h3 className="font-bold text-xl mb-4 font-spiegel-serif">
                Jetzt selbst handeln – Vermögen sichern und wieder aufbauen
              </h3>
              <p className="mb-6 text-base">
                Wer sein Geld clever schützen, Verluste ausgleichen und Schritt für Schritt wieder 
                Kontrolle gewinnen möchte, kann jetzt unverbindlich das exklusive Angebot der Consorsbank prüfen.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Sichere, strukturierte Vermögensaufbau-Möglichkeiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Transparente Konditionen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Schritt-für-Schritt-Plan, um Verluste auszugleichen</span>
                </li>
              </ul>

              <a 
                href="#" 
                className="cta-button"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Link zum Consorsbank-Angebot');
                }}
              >
                👉 Hier geht's zum Angebot der Consorsbank
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
