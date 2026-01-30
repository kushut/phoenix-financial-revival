import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Clock, Heart } from "lucide-react";
import OfferButton from "./OfferButton";

const ArticlePage13 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Goldene Hochzeit</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          Goldene Hochzeit ohne Geldsorgen: Wie Horst und Ingeborg nach 50 Jahren endlich sorgenfrei leben
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Das Ehepaar aus Leipzig wollte ihre goldene Hochzeit eigentlich absagen – das Geld reichte kaum zum Leben. Dann kam ein Brief von ihrer Hausbank.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Von Andrea Kessler</span>
          <span>•</span>
          <span>29.01.2026, 09:30 Uhr</span>
          <span>•</span>
          <span>7 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Leipzig</strong> – In der kleinen Wohnung von Horst (78) und Ingeborg (76) Schreiber 
            hängt ein vergilbtes Hochzeitsfoto von 1975. „Wir hatten nichts, aber wir waren glücklich", 
            sagt Ingeborg und greift nach der Hand ihres Mannes. Fünf Jahrzehnte später sollte ihre 
            goldene Hochzeit ein Fest werden. Stattdessen wurde sie fast zur Katastrophe.
          </p>

          <p className="mb-6">
            Horst war 35 Jahre lang Schlosser bei den Leipziger Verkehrsbetrieben, Ingeborg arbeitete 
            als Verkäuferin. Zusammen bekommen sie heute 2.100 Euro Rente. „Davon gehen 850 Euro 
            für die Miete drauf", rechnet Horst vor. „Dann Strom, Versicherungen, Medikamente. Am 
            Ende des Monats haben wir manchmal nur noch 50 Euro für Essen."
          </p>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die goldene Hochzeit, die fast ausfiel
          </h2>

          <p className="mb-6">
            Als die Familie fragte, wo die Feier stattfinden sollte, mussten Horst und Ingeborg 
            gestehen: nirgendwo. „Wir können uns das nicht leisten", sagte Horst zu seinen Kindern. 
            Die wollten einspringen, doch das Ehepaar lehnte ab. „Wir wollten niemandem zur Last 
            fallen", erklärt Ingeborg.
          </p>

          <p className="mb-6">
            Dann kam der Brief. Ihre Hausbank – eine der größten in Deutschland – lud sie zu einem 
            „exklusiven Beratungsgespräch für langjährige Kunden" ein. „Ich dachte erst, die wollen 
            uns einen Kredit andrehen", gibt Horst zu.
          </p>

          {/* Quote Box */}
          <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-4 sm:p-6">
              <blockquote className="text-base sm:text-lg italic">
                „50 Jahre haben wir gespart, verzichtet, gehofft. Und jetzt, am Ende unseres Lebens, 
                dürfen wir endlich genießen. Das ist wie ein zweiter Frühling für uns beide."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Ingeborg Schreiber, 76 Jahre
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Was die Bank ihnen offenbarte
          </h2>

          <p className="mb-6">
            Der Bankberater erklärte: Aufgrund einer neuen EU-Richtlinie müsse die Bank bestimmte 
            Anlageprodukte, die bisher nur Großinvestoren zugänglich waren, nun auch Privatkunden 
            anbieten. „Er sagte, als treue Kunden seit 40 Jahren hätten wir Vorrang", erinnert 
            sich Ingeborg.
          </p>

          <p className="mb-6">
            Die Schreibers waren skeptisch – zu oft hatten sie von Betrug gelesen. Doch der Berater 
            ließ ihnen alle Zeit der Welt. Er zeigte ihnen die BaFin-Regulierung, die Einlagensicherung, 
            die historischen Renditen. „Wir haben uns zwei Wochen Bedenkzeit genommen", sagt Horst.
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Die Entwicklung der Schreibers
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Einmalzahlung:</strong> 35.000 Euro (gesamtes Erspartes)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monatliche Auszahlung:</strong> Zwischen 2.800 und 4.100 Euro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Die goldene Hochzeit:</strong> Im Fünf-Sterne-Hotel in Dresden gefeiert</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Unsere Kinder konnten es nicht glauben"
          </h2>

          <p className="mb-6">
            Als Horst und Ingeborg ihre drei Kinder zur goldenen Hochzeit in ein Fünf-Sterne-Hotel 
            in Dresden einluden, dachten diese an einen Scherz. „Mama, Papa, wo habt ihr das Geld 
            her?", fragte ihre Tochter Sabine. Die Wahrheit verschlug allen die Sprache.
          </p>

          <p className="mb-6">
            „Unser Sohn Michael ist Steuerberater", erzählt Horst stolz. „Er hat alle Unterlagen 
            geprüft und gesagt: Papa, das ist das Klügste, was ihr je gemacht habt."
          </p>

          {/* Trust Elements */}
          <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Sicherheit für Ehepaare</h4>
                  <p className="text-green-700 text-sm">
                    Bei gemeinsamer Anlage gilt die Einlagensicherung für jeden Partner separat – 
                    also bis zu 200.000 Euro pro Ehepaar. Die anbietende Bank gehört zu den 
                    systemrelevanten Instituten Deutschlands.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Ein neues Kapitel nach 50 Jahren
          </h2>

          <p className="mb-6">
            Die Schreibers haben inzwischen ihr Leben komplett umgekrempelt. Sie waren zum ersten 
            Mal in ihrem Leben im Urlaub im Ausland – auf Mallorca. Ingeborg hat sich ein neues 
            Kleid gekauft, das erste seit zehn Jahren. Und Horst erfüllt sich einen Lebenstraum: 
            Er nimmt Klavierunterricht.
          </p>

          <p className="mb-6">
            „Wissen Sie, was das Schönste ist?", fragt Ingeborg mit Tränen in den Augen. „Wir 
            können unseren Enkeln endlich etwas schenken. Zu Weihnachten haben sie zum ersten 
            Mal Geld von Oma und Opa bekommen."
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Für Ehepaare im Ruhestand</h4>
                  <p className="text-sm text-muted-foreground">
                    Das beschriebene Angebot ist besonders für Ehepaare interessant, da die 
                    Einlagensicherung pro Person gilt.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Angebot für Ehepaare prüfen
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Kostenlose Beratung · Keine Verpflichtung · Gemeinsam anlegen
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Horst und Ingeborg haben bereits ihre nächste Reise gebucht: eine Donaukreuzfahrt im 
            Sommer. „Das hätten wir uns vor zwei Jahren nicht mal träumen lassen", sagt Horst. 
            „Jetzt können wir endlich leben – nicht nur überleben."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (156)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>WG</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Wolfgang G.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Meine Frau und ich (beide 72) haben uns nach diesem Artikel zusammen angemeldet. 
                  Die Beratung war ausgezeichnet und wir fühlen uns gut aufgehoben.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>GR</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Gertrude R.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 3 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Wunderschöne Geschichte! Wir feiern nächstes Jahr unsere goldene Hochzeit und 
                  ich hoffe, wir können das auch so erleben. Habe mich gerade informiert.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>HM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Heinrich M.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 5 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Ich bin skeptisch geblieben, aber meine Frau hat mich überzeugt. Nach 3 Monaten 
                  muss ich zugeben: Es funktioniert wirklich. Schade, dass wir nicht früher 
                  davon erfahren haben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage13;
