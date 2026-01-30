import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Clock, Heart } from "lucide-react";
import OfferButton from "./OfferButton";

const ArticlePage11 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Schicksalswende</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          Nach dem Tod ihres Mannes: Wie Elfriede (73) durch seinen letzten Brief finanziell unabhängig wurde
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Im Nachlass ihres verstorbenen Mannes fand die Witwe aus Düsseldorf einen Umschlag mit einer Notiz: „Wenn mir etwas passiert, ruf diese Nummer an." Was dann geschah, veränderte ihr Leben.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Von Sandra Richter</span>
          <span>•</span>
          <span>29.01.2026, 14:18 Uhr</span>
          <span>•</span>
          <span>7 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Düsseldorf</strong> – Elfriede Hartmann sitzt in ihrem Wohnzimmer in Düsseldorf-Oberkassel 
            und blickt auf das gerahmte Foto ihres verstorbenen Mannes Heinrich. „Er hat immer gesagt, er 
            würde auch nach seinem Tod noch für mich sorgen", sagt die 73-Jährige mit einem wehmütigen Lächeln. 
            „Ich habe nie verstanden, was er damit meinte – bis ich den Brief fand."
          </p>

          <p className="mb-6">
            Heinrich Hartmann, ehemaliger Abteilungsleiter bei einer großen Versicherung, starb im März 2024 
            nach kurzer Krankheit. Seine Frau stand plötzlich allein da – mit einer kleinen Witwenrente von 
            1.340 Euro und einem Haus, dessen Nebenkosten sie kaum noch stemmen konnte.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Der mysteriöse Umschlag im Safe
          </h2>

          <p className="mb-6">
            Drei Wochen nach der Beerdigung öffnete Elfriede den Tresor ihres Mannes, um wichtige Dokumente 
            zu suchen. Zwischen Versicherungspolicen und alten Sparbüchern lag ein verschlossener Umschlag 
            mit der Aufschrift: „Für Elfriede – nur öffnen, wenn ich nicht mehr da bin."
          </p>

          <p className="mb-6">
            „Meine Hände haben gezittert", erinnert sich die Seniorin. Im Umschlag fand sie eine handgeschriebene 
            Notiz: Eine Telefonnummer und die Worte: „Ruf meinen alten Freund Wolfgang bei der Bank an. Er weiß 
            Bescheid. Vertrau ihm. Ich liebe dich. Dein Heinrich."
          </p>

          {/* Quote Box */}
          <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-4 sm:p-6">
              <blockquote className="text-base sm:text-lg italic">
                „Heinrich hat mir aus dem Jenseits geholfen. Er wusste, dass ich ohne ihn nicht klarkommen 
                würde, und hat vorgesorgt. Das ist sein letztes Geschenk an mich."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Elfriede Hartmann, Witwe aus Düsseldorf
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Was der Bankfreund ihr offenbarte
          </h2>

          <p className="mb-6">
            Wolfgang Brenner, pensionierter Vermögensberater einer deutschen Großbank, war ein Jugendfreund 
            von Heinrich. Als Elfriede ihn anrief, sagte er nur: „Heinrich hat mich vor Jahren eingeweiht. 
            Kommen Sie vorbei, ich erkläre Ihnen alles."
          </p>

          <p className="mb-6">
            Was Brenner ihr zeigte, verschlug der Witwe den Atem: Heinrich hatte bereits 2019 begonnen, 
            an einem exklusiven Anlageprogramm teilzunehmen, das normalerweise nur institutionellen 
            Investoren zugänglich war. „Ihr Mann war einer der ersten Privatpersonen, die Zugang bekamen", 
            erklärte Brenner. „Durch eine neue EU-Richtlinie mussten wir das Programm öffnen."
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Elfriedes Entwicklung seit der Aktivierung
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Heinrichs Rücklage:</strong> 52.000 Euro (im Programm seit 2019)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monatliche Auszahlung:</strong> Jetzt durchschnittlich 4.200 Euro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Erste Reaktion:</strong> „Ich dachte, das ist ein schlechter Scherz"</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Meine Kinder haben mir nicht geglaubt"
          </h2>

          <p className="mb-6">
            Als Elfriede ihren drei erwachsenen Kindern von der Entdeckung erzählte, reagierten diese 
            zunächst skeptisch. „Mama, das klingt wie Betrug", warnte ihre Tochter Sabine. Doch als 
            Elfriede die ersten Auszüge zeigte, verstummten die Bedenken.
          </p>

          <p className="mb-6">
            „Mein Sohn Thomas ist IT-Spezialist", erzählt Elfriede. „Er hat alles geprüft – die Bank, 
            die BaFin-Regulierung, die Verträge. Am Ende hat er nur gesagt: ‚Papa war schlauer als wir alle.'"
          </p>

          {/* Trust Elements */}
          <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Sicherheitshinweis</h4>
                  <p className="text-green-700 text-sm">
                    Das beschriebene Angebot unterliegt der deutschen Einlagensicherung und wird von 
                    der BaFin reguliert. Heinrich Hartmann hatte sich vor seiner Teilnahme ausführlich 
                    beraten lassen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Ein neues Leben mit 73
          </h2>

          <p className="mb-6">
            Heute, fast zwei Jahre nach Heinrichs Tod, führt Elfriede ein Leben, das sie sich nie 
            hätte träumen lassen. Sie hat das Haus renovieren lassen, war mit ihrer Enkelin in Italien 
            und unterstützt ihre Tochter bei der Ausbildung der Enkel.
          </p>

          <p className="mb-6">
            „Das Schönste ist", sagt sie und wischt sich eine Träne aus dem Auge, „dass Heinrich 
            auch jetzt noch für mich da ist. Jedes Mal, wenn die Auszahlung kommt, denke ich an ihn."
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">In Gedenken an Heinrich Hartmann</h4>
                  <p className="text-sm text-muted-foreground">
                    Auf Wunsch seiner Witwe teilen wir diese Geschichte, damit andere Senioren 
                    von dem Angebot erfahren, das Heinrich für sie entdeckt hatte.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Mehr über das Angebot erfahren
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Unverbindlich · Keine Verpflichtung · Kostenlose Information
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Wolfgang Brenner, der mittlerweile selbst 78 ist, hat versprochen, auch weiterhin 
            Interessierten zu helfen. „Heinrich hätte das so gewollt", sagt er. „Er war immer 
            großzügig – auch mit seinem Wissen."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (89)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Renate S.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Diese Geschichte hat mich zu Tränen gerührt. Mein Mann ist letztes Jahr gestorben 
                  und ich wünschte, er hätte mir auch so einen Brief hinterlassen.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>HK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Hans-Jürgen K.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 3 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Ich bin 71 und habe mich nach diesem Artikel informiert. Das Angebot ist tatsächlich 
                  real. Werde mich anmelden.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>MW</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Marianne W.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 5 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Wunderschöne Liebesgeschichte. Und gut zu wissen, dass es solche Angebote gibt. 
                  Mein Bankberater hat mir davon nie erzählt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage11;
