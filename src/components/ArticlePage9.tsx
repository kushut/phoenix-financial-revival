import SpiegelHeader from "./SpiegelHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, AlertCircle, Landmark, ArrowRight } from "lucide-react";
import OfferButton from "./OfferButton";

const ArticlePage9 = () => {

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-4 py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Verbraucherschutz</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          Finanztest warnt: Warum Rentner ihr Erspartes nicht auf dem Girokonto lassen sollten
        </h1>

        {/* Teaser */}
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Stiftung Warentest empfiehlt Alternativen – ein Ehepaar aus Dresden zeigt, wie es besser geht.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b">
          <span>Von Laura Steinbach</span>
          <span>•</span>
          <span>28.01.2026, 09:15 Uhr</span>
          <span>•</span>
          <span>5 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Warning Box */}
          <Card className="mb-8 border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-amber-800 mb-2">Warnung der Verbraucherzentrale</h4>
                  <p className="text-amber-700 text-sm">
                    Laut aktueller Berechnungen verlieren Sparer mit Guthaben auf dem Girokonto 
                    durch die Inflation real etwa 3-4% ihres Vermögens pro Jahr.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Dresden</strong> – Günter und Elfriede Neumann haben ihr Leben lang gespart. 
            Nach 40 Jahren im öffentlichen Dienst hatten sie 52.000 Euro auf der hohen Kante. 
            „Für Notfälle", wie Günter (73) sagt. „Man weiß ja nie."
          </p>

          <p className="mb-6">
            Doch als ihr Enkel Wirtschaft studierte und die Großeltern besuchte, machte er eine 
            erschreckende Rechnung auf: „Opa, euer Geld wird jedes Jahr weniger wert. In zehn Jahren 
            habt ihr kaufkraftbereinigt nur noch 35.000 Euro."
          </p>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Die stille Enteignung der Sparer
          </h2>

          <p className="mb-6">
            Was viele Rentner nicht wissen: Während die Lebenshaltungskosten steigen, bleiben die 
            Zinsen auf Giro- und Sparkonten nahe Null. Experten sprechen von einer „schleichenden 
            Enteignung" der konservativen Sparer.
          </p>

          <p className="mb-6">
            Die Neumanns wollten das nicht akzeptieren – hatten aber Angst vor riskanten Investments. 
            „Aktien waren für uns immer Teufelszeug", gibt Elfriede (70) zu. „Mein Vater hat in den 
            90ern viel Geld mit der Telekom-Aktie verloren."
          </p>

          {/* Expert Quote */}
          <Card className="my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-6">
              <blockquote className="text-lg italic">
                „Viele Senioren unterschätzen das Risiko, nichts zu tun. Auf dem Sparbuch verlieren 
                sie garantiert Geld – nur langsamer und unauffälliger als bei einem Börsencrash."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Prof. Dr. Markus Fröhlich, Finanzwissenschaftler an der TU München
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Die Lösung kam aus einer unerwarteten Ecke
          </h2>

          <p className="mb-6">
            Der Enkel der Neumanns recherchierte und fand heraus, dass einige große deutsche Banken 
            inzwischen Anlageformen anbieten, die bisher nur vermögenden Privatkunden oder 
            institutionellen Investoren zugänglich waren.
          </p>

          <p className="mb-6">
            „Ich war skeptisch", sagt Günter. „Wenn das so gut wäre, warum erzählt mir meine 
            Sparkasse nichts davon?" Die Antwort ist einfach: Für klassische Filialbanken sind 
            diese Produkte weniger lukrativ, weil die Margen geringer sind.
          </p>

          <div className="my-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" />
              Was die Neumanns erfahren haben
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Bestimmte Großbanken sind durch EU-Recht verpflichtet, faire Konditionen anzubieten</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Die Einlagensicherung gilt auch bei aktiv gemanagten Portfolios bis 100.000 €</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Kein eigenes Börsenwissen nötig – professionelle Manager übernehmen</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Acht Monate später: Die Bilanz
          </h2>

          <p className="mb-6">
            Die Neumanns haben einen Teil ihrer Ersparnisse – 30.000 Euro – in das neue Angebot 
            investiert. „Den Rest haben wir als Notgroschen behalten", erklärt Günter vorsichtig. 
            „Wir sind ja keine Zocker."
          </p>

          <p className="mb-6">
            Nach acht Monaten ziehen sie eine positive Bilanz: Ihr Portfolio ist auf knapp 36.000 Euro 
            angewachsen. „Das sind fast 20 Prozent", rechnet Elfriede vor. „Auf dem Sparbuch hätten 
            wir vielleicht 50 Euro Zinsen bekommen."
          </p>

          {/* Results Table */}
          <Card className="my-8">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4">Vergleich: Sparbuch vs. neues Angebot</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-muted-foreground">Startbetrag</span>
                  <span className="font-medium">30.000 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-muted-foreground">Sparbuch nach 8 Monaten</span>
                  <span className="font-medium">30.040 € <span className="text-xs text-muted-foreground">(+0,13%)</span></span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-muted-foreground">Neues Angebot nach 8 Monaten</span>
                  <span className="font-medium text-green-600">35.890 € <span className="text-xs">(+19,6%)</span></span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium">Differenz</span>
                  <span className="font-bold text-green-600">+5.850 €</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Tatsächliche Entwicklung der Neumanns. Vergangene Ergebnisse sind kein Indikator für zukünftige Entwicklungen.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Was Experten raten
          </h2>

          <p className="mb-6">
            Finanzberater empfehlen Rentnern, mindestens einen Teil ihrer Ersparnisse aus dem 
            niedrig verzinsten Bereich zu nehmen. „Es geht nicht darum, alles zu riskieren", 
            sagt Vermögensberaterin Dr. Carola Wendt. „Sondern darum, kluge Entscheidungen zu treffen."
          </p>

          <p className="mb-6">
            Wichtig sei, auf seriöse Anbieter zu achten. „Eine deutsche Großbank mit BaFin-Aufsicht 
            und Einlagensicherung ist etwas anderes als dubiose Angebote aus dem Internet", 
            betont die Expertin.
          </p>

          {/* Trust Card */}
          <Card className="my-8 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Worauf Senioren achten sollten</h4>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>✓ Anbieter mit deutscher Banklizenz</li>
                    <li>✓ Regulierung durch BaFin</li>
                    <li>✓ Einlagensicherung bis mindestens 100.000 €</li>
                    <li>✓ Transparente Kostenstruktur ohne versteckte Gebühren</li>
                    <li>✓ Jederzeit kündbar ohne Sperrfristen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Editorial Note / Soft CTA */}
          <div className="my-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
            <h4 className="font-bold mb-3">Anmerkung der Redaktion</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Die im Artikel beschriebene Anlageform wird von einer der größten deutschen Banken 
              angeboten und erfüllt alle genannten Sicherheitskriterien. Nach unserer Recherche 
              ist das Angebot derzeit für Neukunden geöffnet.
            </p>
            <OfferButton className="w-full">
              Zum Angebot dieser Bank
              <ArrowRight className="ml-2 h-4 w-4" />
            </OfferButton>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Externe Seite · Wir erhalten keine Provision
            </p>
          </div>

          <p className="mb-6">
            Die Neumanns bereuen ihre Entscheidung nicht. „Wir hätten das früher machen sollen", 
            sagt Günter. „Aber wir wussten einfach nicht, dass es sowas gibt."
          </p>

          <p className="mb-6 italic text-muted-foreground">
            Elfriede nickt und fügt hinzu: „Unser Enkel bekommt dieses Jahr ein ordentliches 
            Weihnachtsgeschenk."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold font-spiegel-serif mb-6">Kommentare (89)</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Renate S.</span>
                  <span className="text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-sm">
                  Endlich mal ein Artikel, der nicht nur warnt, sondern auch eine Lösung zeigt. 
                  Danke dafür!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>HB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Horst B.</span>
                  <span className="text-sm text-muted-foreground">vor 3 Stunden</span>
                </div>
                <p className="text-sm">
                  Ich habe mich vor 3 Wochen angemeldet. Bisher läuft alles wie beschrieben. 
                  Die Anmeldung war einfacher als erwartet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>MW</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Marianne W.</span>
                  <span className="text-sm text-muted-foreground">vor 5 Stunden</span>
                </div>
                <p className="text-sm">
                  Mein Mann ist immer noch skeptisch, aber ich habe heimlich 5.000€ eingezahlt. 
                  Mal schauen, was er sagt, wenn ich ihm in drei Monaten die Entwicklung zeige 😉
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Frank N.</span>
                  <span className="text-sm text-muted-foreground">vor 6 Stunden</span>
                </div>
                <p className="text-sm">
                  Wichtig: Prüft immer selbst, ob der Anbieter seriös ist! BaFin-Suche ist 
                  kostenlos. Ich habe das gemacht und konnte mich dann beruhigt anmelden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage9;
