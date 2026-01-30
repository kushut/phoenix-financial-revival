import SpiegelHeader from "./SpiegelHeader";
import { Button } from "@/components/ui/button";

const ArticlePage7 = () => {
  const comments = [
    {
      author: "Krankenschwester_Köln",
      time: "vor 1 Stunde",
      text: "Ich habe auch 30 Jahre im Schichtdienst gearbeitet. Diese Geschichte hat mich zu Tränen gerührt. Endlich mal was, das auch für uns Normalverdiener funktioniert.",
      likes: 312
    },
    {
      author: "SkeptischerLeser_FFM",
      time: "vor 2 Stunden",
      text: "Habe erst gedacht: Zu schön um wahr zu sein. Aber die 100.000€ Einlagensicherung ist Fakt – das ist EU-Gesetz. Meine Frau hat mich überredet, es zu probieren.",
      likes: 245
    },
    {
      author: "RentnerPeter_Dresden",
      time: "vor 3 Stunden",
      text: "Meine Schwester ist auch Krankenschwester. Habe ihr diesen Artikel geschickt. Sie hat letzte Woche angefangen und ist begeistert.",
      likes: 189
    },
    {
      author: "FinanzProfi_Berlin",
      time: "vor 4 Stunden",
      text: "Als jemand der in der Branche arbeitet: Diese Bank ist absolut seriös. Staatlich abgesichert, BaFin-reguliert. Kein Vergleich zu irgendwelchen Krypto-Scams.",
      likes: 423
    },
    {
      author: "MutterZweierKinder",
      time: "vor 5 Stunden",
      text: "Danke für diesen Artikel! Habe als alleinerziehende Mutter nie gedacht, dass ich mir so etwas leisten kann. Mit 500€ gestartet, jetzt nach 4 Monaten bei 2.100€.",
      likes: 367
    },
    {
      author: "Handwerker_Hamburg",
      time: "vor 6 Stunden",
      text: "Mein Steuerberater hat mir das gleiche Angebot empfohlen. Er nutzt es selbst seit 8 Monaten. Wenn sogar der skeptisch ist und es trotzdem macht...",
      likes: 198
    },
    {
      author: "LehrerinSabine",
      time: "vor 7 Stunden",
      text: "Was mich überzeugt hat: Man kann jederzeit aussteigen. Kein Vertrag, keine Mindestlaufzeit. Habe mit 1.000€ angefangen, nur um es zu testen.",
      likes: 276
    },
    {
      author: "PensionärHelmut_71",
      time: "vor 8 Stunden",
      text: "Endlich verstehe ich, warum die Reichen immer reicher werden. Sie hatten Zugang zu solchen Angeboten. Jetzt haben wir ihn auch.",
      likes: 534
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader />
      
      <main className="max-w-[680px] mx-auto px-4 py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Exklusiv-Bericht</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-spiegel-serif">
          Nach 30 Jahren Schichtdienst: Krankenschwester entdeckt „geheimes" Bank-Angebot – und kündigt mit 58 ihren Job
        </h1>

        {/* Teaser */}
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Petra Schneider wollte nur ihr Erspartes sicher anlegen. Was sie bei einer großen deutschen Bank fand, veränderte ihr ganzes Leben.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
          <span>Von Laura Bergmann</span>
          <span>•</span>
          <span>30.01.2026, 07:30 Uhr</span>
          <span>•</span>
          <span>11 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Düsseldorf, Dezember 2024.</strong> Petra Schneider sitzt in ihrem kleinen Garten in Ratingen und nippt an ihrem Kaffee. Es ist 10 Uhr morgens, ein Dienstag. Vor einem Jahr wäre sie um diese Zeit mitten in der Frühschicht gewesen – Blutdruck messen, Medikamente verteilen, Patienten beruhigen. 30 Jahre lang, drei Schichten, 365 Tage im Jahr.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            „Ich habe meinen Beruf geliebt", sagt sie, „aber mein Körper hat irgendwann einfach nicht mehr mitgemacht. Die Knie, der Rücken, die Nächte." Sie dreht ihre Kaffeetasse in den Händen. „Ich dachte, ich müsste noch sieben Jahre durchhalten. Bis 65. Dann käme die Rente, und dann... ja, dann wäre ich wahrscheinlich kaputt gewesen."
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">„Ich hatte 67.000 Euro auf dem Sparbuch"</h2>

          <p className="text-lg leading-relaxed mb-6">
            Petra Schneider ist alleinstehend, kinderlos. Ihr ganzes Leben lang hat sie gespart – von jedem Gehalt ein bisschen, jeden Monat. „Als Krankenschwester verdient man nicht viel, aber ich habe auch nicht viel gebraucht." 67.000 Euro hatte sie angespart. Auf einem Sparbuch. Bei 0,5% Zinsen.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Der Anlass für ihren Bankbesuch war banal: Ein Überweisungsproblem. Etwas mit der IBAN, sie verstand es nicht genau. Also ging sie in die Filiale. „Ich wollte eigentlich nur schnell rein und wieder raus."
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-8 border-l-4 border-primary">
            <p className="text-lg italic mb-4">
              „Der Berater schaute auf mein Konto und fragte: Warum lassen Sie so viel Geld auf einem Sparbuch liegen? Kennen Sie unser aktives Depot-Management? Da dachte ich nur: Was für ein Depot?"
            </p>
            <p className="text-sm text-muted-foreground">– Petra Schneider, 59, ehemalige Krankenschwester</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">Das „versteckte" Angebot der großen Banken</h2>

          <p className="text-lg leading-relaxed mb-6">
            Was Petra Schneider an diesem Tag erfuhr, ist den meisten Deutschen nicht bekannt: Große deutsche Banken – darunter mehrere mit staatlicher Beteiligung – bieten seit der Umsetzung neuer EU-Richtlinien aktive Vermögensverwaltung an, die früher nur institutionellen Großanlegern vorbehalten war.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            „Der Berater erklärte mir, dass die Bank durch neue Regulierungen gezwungen ist, diese Angebote auch Privatpersonen zugänglich zu machen. Sie bewerben es nicht aktiv, weil es für die Bank weniger profitabel ist als andere Produkte. Aber für die Kunden ist es oft die bessere Wahl."
          </p>

          <div className="bg-card p-6 rounded-lg my-8 border shadow-sm">
            <div className="mb-4">
              <h3 className="font-bold text-lg">Aktives Depot-Management</h3>
              <p className="text-sm text-muted-foreground">Jetzt auch für Privatanleger bei ausgewählten deutschen Banken</p>
            </div>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Professionelles Portfolio-Management wie für Großinvestoren</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Historische Renditen von bis zu 17% monatlich möglich</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>100.000€ gesetzliche Einlagensicherung (EU-Recht)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Keine Mindestlaufzeit – jederzeit kündbar</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>BaFin-reguliert und staatlich überwacht</span>
              </li>
            </ul>
            <Button className="w-full bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white">
              Zum exklusiven Angebot →
            </Button>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">„Ich habe zwei Nächte nicht geschlafen"</h2>

          <p className="text-lg leading-relaxed mb-6">
            Petra Schneider war skeptisch. Natürlich war sie das. „Ich bin Krankenschwester, keine Finanzexpertin. Wenn mir jemand erzählt, ich kann mit meinem Geld 10% oder mehr im Monat machen, dann denke ich: Der will mich über den Tisch ziehen."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Aber dann tat sie etwas, das sie in ihrem Beruf gelernt hatte: Sie recherchierte. Gründlich. „Ich habe die Bank gegoogelt, die BaFin-Registrierung überprüft, Testberichte gelesen, mit meinem Neffen gesprochen, der BWL studiert hat." Alles war sauber. Die Bank existierte seit über 30 Jahren, war teilweise in staatlicher Hand, und die Einlagensicherung von 100.000 Euro ist EU-Gesetz.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            „Mein Neffe hat gesagt: Tante Petra, wenn du das Geld sowieso nur auf dem Sparbuch liegen lässt, wo es von der Inflation aufgefressen wird, dann probier es doch einfach aus. Du kannst ja mit einem kleinen Betrag anfangen."
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">Der Anfang: 10.000 Euro als Test</h2>

          <p className="text-lg leading-relaxed mb-6">
            Im Januar 2025 überwies Petra Schneider 10.000 Euro auf das aktive Depot. Etwa 15% ihrer Ersparnisse. „Ich dachte: Wenn ich die verliere, ist es schmerzhaft, aber nicht katastrophal. Dann weiß ich wenigstens Bescheid."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Die ersten Wochen schaute sie täglich auf ihr Handy. Die App zeigte die Entwicklung in Echtzeit. „Am Anfang ging es auf und ab, mal plus 3%, mal minus 1%. Ich war nervös." Aber nach dem ersten Monat stand sie bei 11.400 Euro. Nach dem zweiten bei 13.100 Euro.
          </p>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Petra Schneiders Entwicklung nach 11 Monaten:</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-green-700">10.000€</p>
                <p className="text-xs text-muted-foreground">Start (Jan 2025)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-green-700">67.000€</p>
                <p className="text-xs text-muted-foreground">Aufgestockt (März)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-green-700">156.800€</p>
                <p className="text-xs text-muted-foreground">Heute</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              *Individuelle Ergebnisse können variieren. Kapitalanlage birgt Risiken.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">Die Kündigung</h2>

          <p className="text-lg leading-relaxed mb-6">
            Im September 2025, acht Monate nach ihrem ersten Investment, kündigte Petra Schneider ihren Job im Krankenhaus. „Meine Kolleginnen dachten, ich bin verrückt geworden. Mit 58 kündigen? Ohne neue Stelle? Aber ich wusste, was ich tat."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Zu diesem Zeitpunkt hatte ihr Depot bereits die 120.000-Euro-Marke überschritten. Die monatlichen Erträge übertrafen ihr Nettogehalt als Krankenschwester – und sie musste dafür keine Nachtschichten mehr schieben.
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-8 border-l-4 border-primary">
            <p className="text-lg italic mb-4">
              „Ich wache jetzt auf, wann ich will. Ich gehe spazieren, wann ich will. Ich besuche meine Schwester in München, wann ich will. Ich habe mein Leben zurück."
            </p>
            <p className="text-sm text-muted-foreground">– Petra Schneider</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">Die große Frage: Ist das seriös?</h2>

          <p className="text-lg leading-relaxed mb-6">
            Wir haben mit unabhängigen Finanzexperten gesprochen. Dr. Martin Krause, Wirtschaftsprofessor an der Universität Mannheim, erklärt: „Die neuen EU-Regulierungen, insbesondere die CRD VI-Richtlinie und deren nationale Umsetzung durch das BRUBEG, haben tatsächlich dazu geführt, dass Banken bestimmte Angebote, die früher nur institutionellen Anlegern vorbehalten waren, nun auch Privatpersonen zugänglich machen müssen."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Er ergänzt: „Die 100.000-Euro-Einlagensicherung ist ein wichtiger Schutzfaktor. Sie gilt EU-weit und wird von den nationalen Sicherungsfonds garantiert. Das bedeutet: Selbst wenn die Bank in Schwierigkeiten geraten sollte, ist das Geld bis zu dieser Grenze geschützt."
          </p>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Wichtiger Hinweis:</h3>
            <p className="text-amber-700 mb-4">
              Nicht alle Banken bieten dieses aktive Depot-Management an. Es handelt sich um ausgewählte Institute, die unter vollständiger BaFin-Aufsicht stehen und die gesetzliche Einlagensicherung von 100.000€ garantieren.
            </p>
            <ul className="text-amber-700 space-y-1 text-sm">
              <li>• Vollständige BaFin-Regulierung</li>
              <li>• EU-Einlagensicherung bis 100.000€</li>
              <li>• Transparente Gebührenstruktur</li>
              <li>• Jederzeitige Kündigung möglich</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6 font-spiegel-serif">„Ich erzähle es jedem, der es hören will"</h2>

          <p className="text-lg leading-relaxed mb-6">
            Petra Schneider hat mittlerweile mehreren Kolleginnen von ihrer Entdeckung erzählt. „Anfangs waren sie skeptisch, genau wie ich. Aber wenn ich ihnen meine App zeige, meine Kontoauszüge, dann verstehen sie es."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Drei ihrer ehemaligen Kolleginnen haben inzwischen auch angefangen. Eine davon, eine 52-jährige OP-Schwester, hat bereits ihre Arbeitszeit auf 50% reduziert. „Sie sagt, sie will auch früher aufhören. Und dank diesem Angebot kann sie es sich jetzt leisten."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Als wir Petra fragen, was sie Menschen raten würde, die in einer ähnlichen Situation sind – erschöpft vom Beruf, besorgt um ihre finanzielle Zukunft – antwortet sie ohne zu zögern:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg my-8 border-l-4 border-primary">
            <p className="text-lg italic">
              „Geh zu deiner Bank und frag nach dem aktiven Depot-Management. Wenn sie es nicht anbieten, such dir eine Bank, die es tut. Das Schlimmste, was passieren kann, ist, dass du es nicht versuchst und dein Geld weiter auf einem Sparbuch verrottet."
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] text-white p-8 rounded-lg my-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Entdecken Sie das Angebot selbst</h3>
            <p className="mb-6 opacity-90">
              Finden Sie heraus, ob auch Ihre Bank dieses exklusive Angebot für aktives Depot-Management anbietet.
            </p>
            <Button className="bg-white text-[#1e3a5f] hover:bg-gray-100 text-lg px-8 py-6">
              Jetzt informieren →
            </Button>
            <p className="text-sm mt-4 opacity-75">
              100.000€ Einlagensicherung • BaFin-reguliert • Jederzeit kündbar
            </p>
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6 font-spiegel-serif">
            {comments.length} Kommentare
          </h2>
          
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-sm">{comment.author}</span>
                  <span className="text-muted-foreground text-sm">{comment.time}</span>
                </div>
                <p className="text-foreground mb-3">{comment.text}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="hover:text-primary transition-colors">
                    ▲ {comment.likes}
                  </button>
                  <button className="hover:text-primary transition-colors">Antworten</button>
                  <button className="hover:text-primary transition-colors">Melden</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArticlePage7;
