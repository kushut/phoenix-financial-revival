import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Clock, Baby } from "lucide-react";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage15 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Familie & Finanzen</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          „Oma, du bist reich!" – Wie Renate Fischer (74) zur Lieblingsgroßmutter wurde
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Die Rentnerin aus Nürnberg konnte ihren Enkeln jahrelang nicht mal ein Eis kaufen. Heute finanziert sie Klassenfahrten, Musikunterricht und den ersten Urlaub der Familie.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Von Julia Hartmann</span>
          <span>•</span>
          <span>29.01.2026, 15:45 Uhr</span>
          <span>•</span>
          <span>6 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Nürnberg</strong> – Als Renate Fischer ihre Enkelkinder Max (10) und Lena (8) 
            vom Spielplatz abholt, strahlen die beiden. „Oma hat uns versprochen, dass wir diesen 
            Sommer nach Disneyland fahren", erzählt Max aufgeregt. Vor zwei Jahren wäre das 
            undenkbar gewesen.
          </p>

          <p className="mb-6">
            Renate arbeitete 38 Jahre als Friseurin, davon 25 im eigenen kleinen Salon. Mit 
            1.280 Euro Rente kam sie gerade so über die Runden. „Für die Enkel hatte ich nie 
            etwas übrig", sagt sie traurig. „Nicht mal für einen Ausflug in den Zoo."
          </p>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die Kundin, die alles veränderte
          </h2>

          <p className="mb-6">
            Obwohl Renate seit fünf Jahren in Rente ist, schneidet sie noch immer einigen 
            Stammkundinnen zu Hause die Haare – für ein kleines Zubrot. Eine davon ist 
            Margarethe, eine 82-jährige Witwe, die seit Kurzem plötzlich großzügige Trinkgelder gab.
          </p>

          <p className="mb-6">
            „Ich habe sie gefragt, ob sie im Lotto gewonnen hat", erinnert sich Renate. 
            Margarethes Antwort überraschte sie: „Nein, aber ich habe etwas Besseres gefunden. 
            Und du kannst das auch." Sie erzählte von einem Angebot einer großen deutschen Bank, 
            das ihr Sohn – ein Banker – ihr empfohlen hatte.
          </p>

          {/* Quote Box */}
          <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-4 sm:p-6">
              <blockquote className="text-base sm:text-lg italic">
                „Meine Enkel haben mich früher nie gefragt, ob ich ihnen etwas kaufen kann. 
                Sie wussten, dass ich es nicht konnte. Jetzt fragen sie mich jeden Tag – 
                und ich kann endlich ja sagen."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Renate Fischer, Großmutter aus Nürnberg
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Meine Tochter hat geweint"
          </h2>

          <p className="mb-6">
            Renates Tochter Sandra (42) ist alleinerziehend und arbeitet als Kassiererin. 
            Als Renate ihr zum ersten Mal Geld für die Klassenfahrt von Max gab, brach Sandra 
            in Tränen aus. „Mama, woher hast du das?", fragte sie ungläubig.
          </p>

          <p className="mb-6">
            „Ich habe ihr alles erzählt", sagt Renate. „Am Anfang wollte sie es nicht glauben. 
            Aber als ich ihr die Kontoauszüge gezeigt habe, hat sie nur noch geweint – vor Freude."
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Was Renate für ihre Familie tun konnte
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Eingezahlt:</strong> 22.000 Euro (Ersparnisse + Erbschaft)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monatliche Auszahlung:</strong> Durchschnittlich 1.900 Euro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Finanziert:</strong> Klavierunterricht für Lena, Fußballcamp für Max</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Geplant:</strong> Erster Familienurlaub nach Disneyland Paris</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die Lieblingsoma der ganzen Schule
          </h2>

          <p className="mb-6">
            Max und Lena erzählen in der Schule von ihrer Oma. „Die anderen Kinder sagen immer, 
            dass ich eine coole Oma habe", berichtet Max stolz. Renate lächelt bescheiden: 
            „Ich bin nur froh, dass ich endlich etwas für sie tun kann."
          </p>

          <p className="mb-6">
            Inzwischen hat Renate auch begonnen, für die Ausbildung ihrer Enkel zu sparen. 
            „Ich habe ein Konto für jeden eröffnet", erzählt sie. „Wenn sie 18 werden, sollen 
            sie einen guten Start ins Leben haben. Das konnte ich meiner Tochter nicht geben."
          </p>

          {/* Trust Elements */}
          <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Sicherheit für Familien</h4>
                  <p className="text-green-700 text-sm">
                    Das beschriebene Angebot ermöglicht flexible Auszahlungen, sodass Großeltern 
                    ihre Familie unterstützen können, ohne ihr Kapital aufzubrauchen. Die 
                    Einlagensicherung schützt bis zu 100.000 Euro.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Ich wünschte, ich hätte das früher gewusst"
          </h2>

          <p className="mb-6">
            Renate hat nur einen Wunsch: dass andere Großeltern von ihrer Geschichte erfahren. 
            „Ich kenne so viele Omas und Opas, die ihren Enkeln nichts geben können", sagt sie. 
            „Das ist das Schlimmste Gefühl der Welt. Ich möchte, dass sie wissen: Es gibt 
            einen Weg."
          </p>

          <p className="mb-6">
            Ihre alte Kundin Margarethe ist stolz auf sie. „Ich habe Renate gesagt, sie soll 
            weitermachen", erzählt die 82-Jährige. „Denn das Schönste im Alter ist, wenn man 
            der Familie helfen kann."
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Baby className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Für Großeltern, die helfen wollen</h4>
                  <p className="text-sm text-muted-foreground">
                    Renate empfiehlt das Angebot besonders Großeltern, die ihre Enkel 
                    unterstützen möchten, ohne ihr Erspartes aufzubrauchen.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Jetzt für meine Familie informieren
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Kostenlos · Unverbindlich · Flexible Auszahlung möglich
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Am Ende des Gesprächs ruft Max aus dem Nebenzimmer: „Oma, kommst du? Wir müssen 
            noch Disneyland planen!" Renate steht auf und lächelt. „Das", sagt sie, „ist das 
            beste Gefühl der Welt."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (178)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>EB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Erika B.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Diese Geschichte hat mich zu Tränen gerührt. Ich bin auch Oma und weiß genau, 
                  wie sich das anfühlt, wenn man den Enkeln nichts geben kann. Habe mich 
                  sofort angemeldet.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>WS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Werner S.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 3 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Meine Frau und ich sind seit 6 Monaten dabei. Wir konnten unserer Enkelin 
                  endlich das Fahrrad kaufen, das sie sich so gewünscht hat. Unbezahlbar!
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>HG</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Hildegard G.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 5 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Danke für diesen Artikel! Ich habe vier Enkel und konnte ihnen nie etwas 
                  schenken. Jetzt wird sich das ändern. Renate ist ein Vorbild!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage15;
