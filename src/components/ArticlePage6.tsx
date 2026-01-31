import SpiegelHeader from "./SpiegelHeader";
import { Button } from "@/components/ui/button";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage6 = () => {
  const comments = [
    { id: 1, author: "Thomas_K_Stuttgart", time: "vor 2 Stunden", text: "Ich war auch lange skeptisch, aber nach dem was meiner Schwester passiert ist, habe ich es einfach ausprobiert. Bereue es keine Sekunde.", likes: 234 },
    { id: 2, author: "FinanzExpertin_MUC", time: "vor 3 Stunden", text: "Als Finanzberaterin kann ich bestätigen: Diese Bank gehört zu den seriösesten in Deutschland. Das hier ist kein Scam, sondern ein legitimes Angebot.", likes: 189 },
    { id: 3, author: "SkeptischerLeser2024", time: "vor 4 Stunden", text: "Habe den Artikel zuerst für Werbung gehalten. Dann habe ich recherchiert – es ist tatsächlich eine der größten Direktbanken Deutschlands mit staatlicher Einlagensicherung.", likes: 156 },
    { id: 4, author: "RentnerHans_67", time: "vor 5 Stunden", text: "Meine Frau hat mich überredet es zu probieren. Nach 6 Wochen: Wir haben unser Urlaubsgeld verdreifacht. Fahren jetzt 3 Wochen statt 1 Woche nach Mallorca.", likes: 298 },
    { id: 5, author: "JuliaMueller_Berlin", time: "vor 6 Stunden", text: "Ich arbeite selbst bei einer Bank (nicht diese). Diese Art von aktivem Management wird normalerweise erst ab 500k angeboten. Dass sie das für Kleinanleger öffnen, ist wirklich ungewöhnlich.", likes: 345 },
    { id: 6, author: "VorsichtigerSparer", time: "vor 7 Stunden", text: "Wichtig: Man kann jederzeit aussteigen und sein Geld zurückholen. Das war für mich der entscheidende Punkt. Kein Lock-in, keine versteckten Gebühren.", likes: 178 },
    { id: 7, author: "MarkusW_Hamburg", time: "vor 8 Stunden", text: "Kollege hat mir davon erzählt. Dachte erst er spinnt. Jetzt mache ich seit 4 Monaten mit und verstehe, warum er so begeistert war.", likes: 267 },
    { id: 8, author: "KritischerGeist", time: "vor 9 Stunden", text: "Habe extra bei der BaFin nachgefragt – diese Bank ist vollständig reguliert und das Angebot ist legal. Die 100.000€ Einlagensicherung gilt auch hier.", likes: 412 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-4 py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Schicksalswende</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-spiegel-serif">
          Nach Jobverlust mit 54: Wie ein ehemaliger VW-Ingenieur durch Zufall ein „vergessenes" Bank-Angebot entdeckte – und heute mehr verdient als je zuvor
        </h1>

        {/* Teaser */}
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Rainer Hoffmann stand vor dem Nichts: Gekündigt nach 28 Jahren, zu alt für den Arbeitsmarkt, zu jung für die Rente. Ein Gespräch mit seinem Bankberater veränderte alles.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
          <span>Von Michael Brenner</span>
          <span>•</span>
          <span>30.01.2026, 08:15 Uhr</span>
          <span>•</span>
          <span>9 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Wolfsburg, Januar 2025.</strong> Als Rainer Hoffmann den braunen Umschlag öffnete, wusste er sofort, was drin war. Nach 28 Jahren bei Volkswagen, davon 15 als leitender Ingenieur in der Motorenentwicklung, hielt er seine Kündigung in den Händen. „Restrukturierung", stand da. Ein Wort, das sein ganzes Leben auf den Kopf stellte.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            „Mit 54 bist du auf dem Arbeitsmarkt praktisch unsichtbar", erzählt Hoffmann, als wir ihn in seinem Haus in Gifhorn besuchen. Ein gepflegtes Einfamilienhaus, der Garten akkurat, der Mercedes in der Einfahrt frisch gewaschen. Nichts deutet auf die Krise hin, die er vor einem Jahr durchlebte. „Ich habe 147 Bewerbungen geschrieben. Weißt du, wie viele Einladungen ich bekommen habe? Drei. Und alle haben abgesagt, sobald sie mein Alter gesehen haben."
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">„Ich habe nachts nicht mehr geschlafen"</h2>

          <p className="text-lg leading-relaxed mb-6">
            Die Abfindung war großzügig – 180.000 Euro. Aber Hoffmann wusste: Das Geld würde nicht ewig reichen. Die Hypothek lief noch 12 Jahre. Seine Frau Sabine, Lehrerin, verdiente gut, aber allein hätten sie den Lebensstandard nicht halten können. „Ich habe angefangen, unsere Ausgaben zu analysieren. Jeder Euro, den wir ausgaben, fühlte sich wie ein Schritt Richtung Abgrund an."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Der Wendepunkt kam durch einen Zufall. Hoffmann hatte einen Termin bei seiner Bank, um über die Anlage seiner Abfindung zu sprechen. „Ich wollte eigentlich nur Festgeld machen. Sicher, langweilig, 2% vielleicht. Aber der Berater fragte mich, ob ich von ihrem aktiven Depot-Management gehört hätte."
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-8 border-l-4 border-primary">
            <p className="text-lg italic mb-4">
              „Er zeigte mir die Performance-Daten der letzten 18 Monate. Ich dachte zuerst, er versucht mich übers Ohr zu hauen. Diese Zahlen machten keinen Sinn. Dann erklärte er mir, wie das Ganze funktioniert."
            </p>
            <p className="text-sm text-muted-foreground">– Rainer Hoffmann, 55, ehemaliger VW-Ingenieur</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">Das „versteckte" Angebot dieser Großbank</h2>

          <p className="text-lg leading-relaxed mb-6">
            Was Hoffmann an diesem Tag erfuhr, ist vielen Deutschen nicht bekannt: Eine der größten Direktbanken des Landes – mit staatlicher Beteiligung und über 5 Millionen Kunden – bietet seit einiger Zeit ein aktives Wertpapierdepot-Management an, das ursprünglich nur für institutionelle Kunden gedacht war. Durch regulatorische Änderungen – insbesondere die neue EU-Bankenrichtlinie CRD VI – müssen Banken solche Angebote nun auch Privatkunden zugänglich machen.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            „Der Berater sagte mir ganz offen: Die meisten Kunden wissen davon nichts, weil wir es nicht aktiv bewerben. Es ist nicht so profitabel für uns wie andere Produkte. Aber für die Kunden ist es oft die bessere Wahl", erinnert sich Hoffmann.
          </p>

          <div className="bg-card p-6 rounded-lg my-8 border shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg">Aktives Depot-Management dieser Großbank</h3>
              <p className="text-sm text-muted-foreground">Jetzt auch für Privatanleger verfügbar</p>
            </div>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Professionelles Portfolio-Management</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Historische Renditen von 7-17% monatlich</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>100.000€ gesetzliche Einlagensicherung</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Keine Mindestlaufzeit – jederzeit kündbar</span>
              </li>
            </ul>
            <OfferButton className="w-full">
              Zum versteckten Angebot →
            </OfferButton>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">„Ich habe mit 50.000 Euro angefangen"</h2>

          <p className="text-lg leading-relaxed mb-6">
            Hoffmann war skeptisch. Als Ingenieur war er es gewohnt, Dinge zu hinterfragen. Er verbrachte zwei Wochen damit, das Angebot zu recherchieren. Er las Testberichte, sprach mit anderen Kunden, überprüfte die BaFin-Registrierung. „Alles war sauber. Diese Bank ist quasi staatlich, gehört zu den größten Direktbanken Deutschlands. Das Risiko erschien mir überschaubar."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Er startete mit 50.000 Euro – weniger als einem Drittel seiner Abfindung. „Ich wollte erstmal sehen, wie es läuft. Die ersten zwei Monate war ich nervös. Ich habe jeden Tag die App gecheckt." Die Ergebnisse übertrafen seine Erwartungen: Im ersten Monat 11%, im zweiten 14%.
          </p>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Hoffmanns Entwicklung nach 12 Monaten:</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700">50.000€</p>
                <p className="text-sm text-muted-foreground">Startkapital</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700">127.400€</p>
                <p className="text-sm text-muted-foreground">Aktueller Stand</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              *Individuelle Ergebnisse können variieren. Kapitalanlage birgt Risiken.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">„Ich verdiene jetzt mehr als bei VW"</h2>

          <p className="text-lg leading-relaxed mb-6">
            Heute, ein Jahr später, hat Hoffmann seine gesamte Abfindung investiert. Die monatlichen Erträge übersteigen sein früheres Netto-Gehalt als Ingenieur. „Das Absurde ist: Ich arbeite nicht mehr, aber ich verdiene mehr. Meine Frau sagt immer, die Kündigung war das Beste, was uns passieren konnte."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Er hat aufgehört, nach Jobs zu suchen. Stattdessen verbringt er seine Zeit im Garten, macht lange Radtouren, kümmert sich um seine Enkel. „Ich hätte noch 11 Jahre bis zur Rente arbeiten müssen. Jetzt genieße ich mein Leben."
          </p>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Wichtiger Hinweis zur Seriosität:</h3>
            <p className="text-amber-700">
              Die Bank, die Rainer Hoffmann nutzt, ist eine der größten Direktbanken Deutschlands mit staatlicher Beteiligung. Sie unterliegt der vollständigen Aufsicht durch die BaFin. Alle Einlagen sind bis 100.000€ gesetzlich geschützt.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">Warum erzählt er seine Geschichte?</h2>

          <p className="text-lg leading-relaxed mb-6">
            Hoffmann zögerte lange, öffentlich über seine Erfahrungen zu sprechen. „Geld ist in Deutschland ein Tabuthema. Wenn du sagst, dass du gut verdienst, ohne zu arbeiten, denken die Leute, du bist ein Betrüger." Aber dann hörte er von einem alten Kollegen, der ebenfalls gekündigt wurde. „Er hat seine Abfindung auf ein Sparkonto gelegt. Bei 1% Zinsen. Während die Inflation sein Geld auffrisst."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            „Ich habe ihm von dieser Bank erzählt. Erst wollte er nicht glauben. Aber ich habe ihm meine App gezeigt, meine Kontoauszüge. Jetzt macht er auch mit. Und er ist mir unendlich dankbar." Das, sagt Hoffmann, sei der Grund, warum er sich entschieden habe, seine Geschichte zu teilen.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-8 border-l-4 border-primary">
            <p className="text-lg italic">
              „Ich wünschte, mir hätte das jemand früher erzählt. Nicht erst, als ich verzweifelt war. Sondern vor 20 Jahren. Dann wäre ich heute Millionär."
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] text-white p-8 rounded-lg my-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Bereit für Ihre eigene Erfolgsgeschichte?</h3>
            <p className="mb-6 opacity-90">
              Entdecken Sie das Angebot, das Rainer Hoffmanns Leben verändert hat. Kostenlos und unverbindlich.
            </p>
            <OfferButton className="bg-white text-[#1e3a5f] hover:bg-gray-100 text-lg px-8 py-6">
              Jetzt zum versteckten Angebot →
            </OfferButton>
            <p className="text-sm mt-4 opacity-75">
              100.000€ Einlagensicherung • BaFin-reguliert • Jederzeit kündbar
            </p>
          </div>
        </article>

        {/* Comments Section */}
        <CommentSection initialComments={comments} />
      </main>
    </div>
  );
};

export default ArticlePage6;
