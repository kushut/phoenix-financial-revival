import SpiegelHeader from "./SpiegelHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AlertTriangle, CheckCircle, Shield, TrendingUp, Lock, BadgeCheck } from "lucide-react";

const ArticlePage10 = () => {
  const affiliateLink = "https://example.com/affiliate";

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
          Stiftung Warentest warnt: „Diese Anlageformen kosten Rentner jährlich Milliarden" – doch eine Ausnahme überrascht
        </h1>

        {/* Teaser */}
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Die Verbraucherschützer kritisieren teure Bankprodukte scharf. Gleichzeitig entdecken sie ein institutionelles Angebot, das jetzt auch Privatpersonen offensteht.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b">
          <span>Von Dr. Sandra Völker</span>
          <span>•</span>
          <span>30.01.2026, 08:15 Uhr</span>
          <span>•</span>
          <span>7 Min. Lesezeit</span>
        </div>

        {/* Warning Box */}
        <Card className="mb-8 border-l-4 border-l-orange-500 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-orange-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-orange-800 mb-2">Kernaussage der Untersuchung</h4>
                <p className="text-orange-700 text-sm">
                  Deutsche Sparer verlieren durch ineffiziente Anlageprodukte jährlich bis zu 
                  34 Milliarden Euro. Besonders betroffen: Rentner mit klassischen Sparprodukten.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Berlin</strong> – Die Stiftung Warentest schlägt Alarm: In ihrer aktuellen Sonderuntersuchung 
            zum Thema „Altersvorsorge und Rendite" kommen die Experten zu einem vernichtenden Urteil über 
            klassische Bankprodukte für Senioren.
          </p>

          <p className="mb-6">
            „Was viele Banken ihren älteren Kunden als sichere Geldanlage verkaufen, ist in Wahrheit ein 
            schleichender Wertverlust", erklärt Finanztest-Chefredakteur Hermann-Josef Tenhagen. Die 
            durchschnittliche Realrendite klassischer Sparprodukte liegt aktuell bei minus 3,2 Prozent – 
            nach Abzug der Inflation.
          </p>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Das Milliardengeschäft auf Kosten der Rentner
          </h2>

          <p className="mb-6">
            Die Zahlen sind erschreckend: Rund 847 Milliarden Euro haben deutsche Senioren auf 
            Tagesgeldkonten, Sparbüchern und in Festgeldern geparkt. Bei einer durchschnittlichen 
            Negativrendite von 3,2 Prozent bedeutet das einen realen Wertverlust von über 27 Milliarden 
            Euro – jedes Jahr.
          </p>

          <p className="mb-6">
            „Die Banken verdienen prächtig an der Trägheit ihrer Kunden", so Tenhagen weiter. „Während 
            institutionelle Anleger Zugang zu hochrentablen Produkten haben, werden Privatpersonen 
            systematisch ausgeschlossen."
          </p>

          {/* Contrast Box */}
          <div className="my-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Renditevergleich: Was Banken intern nutzen</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Klassisches Sparbuch</p>
                <p className="text-2xl font-bold text-red-600">-3,2%</p>
                <p className="text-xs text-muted-foreground">Realrendite p.a.</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Institutionelles Angebot</p>
                <p className="text-2xl font-bold text-green-600">+7-17%</p>
                <p className="text-xs text-muted-foreground">Monatsrendite</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Die überraschende Entdeckung der Tester
          </h2>

          <p className="mb-6">
            Doch inmitten der Kritik entdeckten die Warentester etwas Unerwartetes: Eine der größten 
            deutschen Banken hat ein Angebot, das bisher ausschließlich institutionellen Anlegern – 
            also Pensionsfonds, Versicherungen und vermögenden Privatstiftungen – vorbehalten war, 
            für Privatpersonen geöffnet.
          </p>

          <p className="mb-6">
            „Wir waren selbst überrascht", gibt Tenhagen zu. „Diese Bank ist durch neue EU-Regularien 
            verpflichtet worden, bestimmte Anlageformen auch Kleinanlegern anzubieten. Das Ergebnis 
            ist bemerkenswert."
          </p>

          {/* Quote Box */}
          <Card className="my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-6">
              <blockquote className="text-lg italic">
                „Normalerweise warnen wir vor hohen Renditeversprechen. Aber hier handelt es sich um 
                ein reguliertes Produkt einer systemrelevanten deutschen Großbank. Die Einlagensicherung 
                greift vollständig."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Hermann-Josef Tenhagen, Chefredakteur Finanztest
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Wie Rentner Herbert K. die Empfehlung umsetzte
          </h2>

          <p className="mb-6">
            Herbert Krause (73) aus Düsseldorf war einer der ersten, der nach der Veröffentlichung 
            handelte. Der ehemalige Elektromeister hatte 42.000 Euro auf verschiedenen Sparkonten 
            liegen. „Mein Bankberater hat mir jahrelang erzählt, das sei sicher. Sicher war nur, 
            dass mein Geld weniger wurde."
          </p>

          <p className="mb-6">
            Nach der Lektüre des Finanztest-Artikels informierte sich Herbert online über das 
            beschriebene Angebot. „Die Anmeldung war einfacher als erwartet. Keine Papierformulare, 
            alles digital."
          </p>

          {/* Results Box */}
          <div className="my-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-700" />
              Herberts Entwicklung nach 4 Monaten
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span className="font-medium">Startkapital</span>
                <span className="font-bold">42.000 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span>Monat 1 (Rendite 8,3%)</span>
                <span className="text-green-700">+3.486 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span>Monat 2 (Rendite 11,7%)</span>
                <span className="text-green-700">+5.327 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span>Monat 3 (Rendite 9,4%)</span>
                <span className="text-green-700">+4.772 €</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-green-200">
                <span>Monat 4 (Rendite 14,2%)</span>
                <span className="text-green-700">+7.813 €</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-green-100 rounded px-2">
                <span className="font-bold">Aktueller Stand</span>
                <span className="font-bold text-green-700">63.398 €</span>
              </div>
            </div>
            <p className="text-sm text-green-700 mt-4">
              Durchschnittliche Monatsrendite: 10,9% · Gesamtzuwachs: +50,9%
            </p>
          </div>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Warum die Großbank jetzt öffnen muss
          </h2>

          <p className="mb-6">
            Hintergrund ist die EU-Richtlinie 2024/1619 zur Kapitalmarktunion, die Banken verpflichtet, 
            bestimmte institutionelle Produkte auch Privatanlegern zugänglich zu machen. Die betreffende 
            Bank – eine der zehn größten in Deutschland – hat sich entschieden, die Regelung proaktiv 
            umzusetzen.
          </p>

          <p className="mb-6">
            „Andere Banken werden nachziehen müssen", prognostiziert Finanzexperte Prof. Dr. Klaus 
            Wiedemann von der Frankfurt School of Finance. „Aber im Moment ist dieses Institut der 
            einzige Anbieter mit einem wirklich niedrigschwelligen Zugang."
          </p>

          {/* Trust Elements */}
          <Card className="my-8 bg-secondary/50">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Sicherheitsmerkmale des Angebots
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>BaFin-reguliert:</strong> Vollständige Aufsicht durch die Bundesanstalt für Finanzdienstleistungsaufsicht</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Einlagensicherung:</strong> Bis zu 100.000 Euro pro Kunde gesetzlich abgesichert</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Systemrelevant:</strong> Die Bank gehört zu den als systemrelevant eingestuften Instituten</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            „Meine Frau dachte, ich spinne"
          </h2>

          <p className="mb-6">
            Herbert Krause erinnert sich an die Reaktion seiner Frau Marianne: „Sie hat gesagt, wenn 
            das so einfach wäre, würde es ja jeder machen. Aber genau das ist der Punkt – die meisten 
            wissen gar nicht, dass dieses Angebot existiert."
          </p>

          <p className="mb-6">
            Heute verwalten Herbert und Marianne ihre Finanzen gemeinsam. „Wir schauen einmal pro 
            Woche rein, mehr nicht. Das System macht den Rest." Der nächste große Schritt? Ein 
            Kreuzfahrturlaub in die Karibik – etwas, das sich das Paar jahrelang nicht leisten konnte.
          </p>

          {/* Social Proof */}
          <div className="my-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Was andere Leser berichten</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>WS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Wolfgang S., 68, Rentner aus Frankfurt</p>
                  <p className="text-sm text-muted-foreground">
                    „Habe mich nach diesem Artikel angemeldet. Erster Monat: 12,4% Rendite. Unfassbar."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>EB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Elisabeth B., 71, ehemalige Lehrerin aus Stuttgart</p>
                  <p className="text-sm text-muted-foreground">
                    „Mein Bankberater hat mir das verschwiegen. Jetzt weiß ich warum – er verdient nichts daran."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft CTA */}
          <Card className="my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Das von Finanztest identifizierte Angebot</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Nach unserer Recherche ist der Zugang zu diesem speziellen Angebot derzeit noch möglich. 
                Die Bank hat jedoch angekündigt, die Kapazitäten für Neukunden zu begrenzen, sobald 
                die EU-Übergangsfristen auslaufen.
              </p>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => window.open(affiliateLink, '_blank')}
              >
                Zugang zum Angebot prüfen
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Unverbindlich · Keine Verpflichtung · Kostenlose Prüfung
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Die Stiftung Warentest empfiehlt Rentnern, ihre aktuelle Vermögenssituation kritisch zu 
            überprüfen. „Wer sein Geld auf dem Sparbuch liegen lässt, schenkt der Bank Geld", fasst 
            Tenhagen zusammen. „Die Alternative ist da – man muss sie nur nutzen."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold font-spiegel-serif mb-6">Kommentare (89)</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>RH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Rainer H.</span>
                  <span className="text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-sm">
                  Endlich sagt mal jemand die Wahrheit. Mein Bankberater hat mir jahrelang 
                  Produkte verkauft, an denen nur die Bank verdient hat.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>UM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Ursula M.</span>
                  <span className="text-sm text-muted-foreground">vor 3 Stunden</span>
                </div>
                <p className="text-sm">
                  Habe den Zugang geprüft – bei mir funktioniert es. Anmeldung war in 10 Minuten erledigt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>KP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Karl-Peter W.</span>
                  <span className="text-sm text-muted-foreground">vor 5 Stunden</span>
                </div>
                <p className="text-sm">
                  Wenn selbst Finanztest das empfiehlt, kann es kein Betrug sein. Die sind 
                  normalerweise sehr kritisch. Werde mich heute noch anmelden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage10;
