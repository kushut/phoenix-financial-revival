import SpiegelHeader from "./SpiegelHeader";
import OfferButton from "./OfferButton";
import rentnerPortrait from "@/assets/rentner-portrait-1.png";

const ArticlePage17 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <article className="prose prose-lg max-w-none">
          <span className="category-tag">Investigativ</span>
          
          <h1 className="article-title">
            Internes Dokument enthüllt: Diese Anlageform nutzen Bankvorstände für ihr eigenes Vermögen
          </h1>
          
          <p className="article-subtitle">
            Ein geleakter Report zeigt, wie Top-Manager deutscher Großbanken ihr Privatvermögen anlegen – und warum Kunden davon nichts erfahren sollen.
          </p>

          <figure className="my-6 sm:my-8">
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <div className="text-center p-4 sm:p-8">
                <p className="text-lg sm:text-2xl font-bold text-primary mb-2">„Streng vertraulich – nur für interne Verwendung"</p>
                <p className="text-sm text-muted-foreground">Auszug aus dem geleakten Dokument</p>
              </div>
            </div>
            <figcaption className="text-xs sm:text-sm text-muted-foreground mt-2">
              Das interne Memo wurde uns von einem ehemaligen Mitarbeiter zugespielt
            </figcaption>
          </figure>

          <p className="first-paragraph">
            Was machen eigentlich die Menschen, die das Finanzsystem von innen kennen, mit ihrem eigenen Geld? Ein uns zugespieltes internes Dokument einer der größten deutschen Banken gibt erstmals Einblick in die private Vermögensanlage von Vorständen und Führungskräften – und offenbart ein <strong>nicht öffentlich beworbenes Angebot</strong>, das normalerweise nur Insidern vorbehalten ist.
          </p>

          {/* Bank Box */}
          <div className="bg-secondary/50 border-2 border-primary/20 rounded-lg p-6 my-6">
            <div>
              <p className="font-bold text-lg">Eine der größten deutschen Direktbanken</p>
              <p className="text-muted-foreground text-sm">Staatliche Beteiligung, über 5 Millionen Kunden, BaFin-reguliert</p>
            </div>
          </div>

          <p>
            Das Ergebnis ist erschütternd – aber nicht überraschend: Während sie Kunden klassische Fonds und teure Versicherungsprodukte verkaufen, nutzen sie selbst völlig andere Instrumente dieser spezifischen deutschen Großbank.
          </p>

          <h2>Der Mann, der das Dokument weitergab</h2>

          <p>
            Klaus-Peter W. (Name geändert) war 31 Jahre lang im Bereich Private Banking einer deutschen Top-10-Bank tätig. Nach seiner Pensionierung im Jahr 2024 wandte er sich an uns: „Ich habe mein ganzes Berufsleben lang Produkte verkauft, von denen ich wusste, dass es bessere Alternativen gibt. Jetzt, wo ich nichts mehr zu verlieren habe, will ich reinen Tisch machen."
          </p>

          <div className="bg-secondary/50 border-l-4 border-primary p-4 sm:p-6 my-6 sm:my-8">
            <p className="font-semibold text-base sm:text-lg mb-2">Aus dem internen Dokument:</p>
            <p className="text-sm sm:text-base text-muted-foreground italic">
              „Alle Mitglieder des Vorstands nutzen das IAP (Institutional Asset Program) für mindestens 60% ihrer privaten Geldanlagen. Die durchschnittliche Jahresrendite lag in den letzten 5 Jahren bei 127%."
            </p>
          </div>

          <h2>Die Zwei-Klassen-Gesellschaft im Banking</h2>

          <p>
            Das Dokument beschreibt detailliert, wie das System funktioniert: Es gibt Anlageprodukte für Kunden – und Anlageprodukte für Insider. Letztere wurden ursprünglich für institutionelle Investoren entwickelt und bieten deutlich höhere Renditen bei geringerem Risiko.
          </p>

          <div className="bg-muted/30 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Vergleich: Kundenprodukte vs. Insider-Produkte</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-2">Kriterium</th>
                    <th className="text-left py-2">Für Kunden</th>
                    <th className="text-left py-2">Für Insider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted">
                    <td className="py-2">Jahresrendite (Ø)</td>
                    <td className="py-2">3-5%</td>
                    <td className="py-2 font-semibold text-primary">85-130%</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-2">Gebühren</td>
                    <td className="py-2">1,5-2,5%</td>
                    <td className="py-2">0,3%</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-2">Mindestanlage</td>
                    <td className="py-2">500 €</td>
                    <td className="py-2">25.000 €</td>
                  </tr>
                  <tr>
                    <td className="py-2">Aktive Bewerbung</td>
                    <td className="py-2">Ja</td>
                    <td className="py-2">Nein</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2>Ein Unternehmer testet das System</h2>

          <figure className="my-6">
            <img 
              src={rentnerPortrait} 
              alt="Bernd Schäfer, ehemaliger Unternehmer" 
              className="w-full rounded-lg"
            />
            <figcaption className="text-xs text-muted-foreground mt-2">
              Bernd Schäfer (64) aus Stuttgart: „Mein Ansatz war rein wissenschaftlich"
            </figcaption>
          </figure>

          <p>
            Nach Veröffentlichung unserer ersten Recherchen meldete sich Bernd Schäfer (64), ehemaliger Geschäftsführer eines mittelständischen Maschinenbauunternehmens aus Stuttgart. Er wollte selbst testen, ob die Produkte auch für „normale" vermögende Privatpersonen zugänglich sind.
          </p>

          <p>
            „Ich bin mit 50.000 Euro eingestiegen – Geld, das ich problemlos verlieren könnte", erzählt Schäfer. „Mein Ansatz war rein wissenschaftlich: Hypothese testen, Ergebnis dokumentieren."
          </p>

          <div className="bg-muted/30 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Schäfers Experiment – Die Ergebnisse</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Investiert am 15.01.2025:</span>
                <span className="font-semibold">50.000 €</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Stand 15.04.2025 (3 Monate):</span>
                <span className="font-semibold">67.800 €</span>
              </div>
              <div className="flex justify-between border-b border-muted pb-2">
                <span>Stand 15.07.2025 (6 Monate):</span>
                <span className="font-semibold">89.200 €</span>
              </div>
              <div className="flex justify-between">
                <span>Stand 15.10.2025 (9 Monate):</span>
                <span className="font-bold text-primary">112.400 €</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Rendite nach 9 Monaten: +124,8% | Monatliche Durchschnittsrendite: ~9,4%
            </p>
          </div>

          <h2>Warum das System geheim bleiben soll</h2>

          <p>
            Klaus-Peter W. erklärt die Logik: „Wenn alle Kunden diese Produkte nutzen würden, bräche das Geschäftsmodell der Banken zusammen. Die leben von den Gebühren der klassischen Produkte. Die Insider-Produkte sind quasi Selbstbedienung – da verdient die Bank fast nichts."
          </p>

          <div className="bg-secondary/50 border-l-4 border-primary p-4 sm:p-6 my-6 sm:my-8">
            <p className="font-semibold text-base sm:text-lg mb-2">Schäfers Fazit:</p>
            <p className="text-sm sm:text-base text-muted-foreground">
              „Ich habe 40 Jahre lang ein Unternehmen geführt und dachte, ich verstehe Finanzen. Aber dieses System – dass es parallele Welten gibt, eine für Kunden und eine für Insider – das hätte ich nie geglaubt, wenn ich es nicht selbst erlebt hätte."
            </p>
          </div>

          <h2>Wie unsere Redaktion den Zugang fand</h2>

          <p>
            Nach intensiver Recherche – und mit Hilfe von Kontakten zur Bank – gelang es uns, den <strong>direkten Zugang</strong> zu diesem nicht öffentlich beworbenen Programm zu finden.
          </p>

          <div className="highlight-box my-6">
            <p className="font-bold mb-2">Wichtiger Hinweis unserer Redaktion:</p>
            <p>
              Dieses Angebot ist <strong>nicht über die normale Homepage</strong> dieser Großbank erreichbar. Der Zugang unten führt direkt zur speziellen Angebotsseite für aktives Wertpapierdepot-Management, die normalerweise nur über persönliche Vermögensberater oder direkte Bankenkontakte zugänglich ist.
            </p>
          </div>

          {/* Soft CTA Box */}
          <div className="bg-secondary/30 border border-border rounded-lg p-6 my-8">
            <p className="text-sm sm:text-base mb-4">
              <strong>Anmerkung der Redaktion:</strong> Seit Veröffentlichung unserer Recherche haben uns hunderte Leser kontaktiert. Viele wollten wissen, ob auch sie Zugang zu diesem Programm erhalten können. Wir haben bei der Bank nachgefragt – und einen Weg gefunden.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Wichtig: Das Programm wird bewusst nicht öffentlich beworben. Die Bank akzeptiert nur eine begrenzte Anzahl von Privatanlegern pro Quartal.
            </p>
            <div className="border-t border-border pt-4 mt-4">
              <p className="text-xs text-muted-foreground mb-3">
                Für Leser, die sich selbst überzeugen möchten:
              </p>
              <OfferButton className="text-sm sm:text-base px-5 py-2.5">
                Unverbindlich informieren →
              </OfferButton>
            </div>
          </div>

          <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong>Hinweis der Redaktion:</strong> Wir haben das interne Dokument von unabhängigen Experten 
              prüfen lassen. Die Echtheit wurde bestätigt. Aus rechtlichen Gründen können wir das Originaldokument 
              nicht veröffentlichen. Alle Investments sind mit Risiken verbunden.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default ArticlePage17;
