import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Clock, GraduationCap } from "lucide-react";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage12 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Bildung & Finanzen</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          40 Jahre Lehrerin, 1.600 Euro Rente: Wie Gisela Hoffmann jetzt monatlich mehr verdient als früher im Beruf
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Die pensionierte Grundschullehrerin aus Bremen wollte eigentlich nur ihre Altersvorsorge aufbessern. Dann entdeckte sie durch eine ehemalige Kollegin ein Angebot, das ihr Leben veränderte.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Von Thomas Bergmann</span>
          <span>•</span>
          <span>29.01.2026, 16:05 Uhr</span>
          <span>•</span>
          <span>6 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Bremen</strong> – „Ich habe mein ganzes Leben lang anderen Menschen etwas beigebracht", 
            sagt Gisela Hoffmann und lacht. „Aber das Wichtigste habe ich selbst erst mit 68 gelernt." 
            Die pensionierte Grundschullehrerin sitzt in ihrem kleinen Reihenhäuschen in Bremen-Schwachhausen 
            und blättert durch alte Fotoalben.
          </p>

          <p className="mb-6">
            40 Jahre lang hat Gisela Erstklässlern das Lesen und Schreiben beigebracht. Als sie 2022 in 
            Pension ging, bekam sie 1.624 Euro monatlich. „Nach Miete, Versicherungen und Medikamenten 
            blieben mir vielleicht 300 Euro zum Leben", erinnert sie sich. „Ich habe jeden Einkauf dreimal 
            überlegt."
          </p>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die Kollegin, die plötzlich reich aussah
          </h2>

          <p className="mb-6">
            Beim jährlichen Pensionärstreffen ihrer alten Schule fiel Gisela etwas auf: Ihre ehemalige 
            Kollegin Martha, die immer bescheiden gelebt hatte, trug plötzlich teure Kleidung und 
            erzählte von einer Kreuzfahrt nach Norwegen.
          </p>

          <p className="mb-6">
            „Ich habe sie direkt gefragt: Martha, hast du im Lotto gewonnen?", erzählt Gisela. Die 
            Antwort überraschte sie: „Nein, aber fast. Ich habe etwas Besseres gefunden." Martha 
            erzählte von einem Angebot einer großen deutschen Bank, das sie durch ihren Neffen 
            entdeckt hatte – einen Wirtschaftsprüfer.
          </p>

          {/* Quote Box */}
          <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-4 sm:p-6">
              <blockquote className="text-base sm:text-lg italic">
                „Ich habe 40 Jahre lang Kindern beigebracht, an sich zu glauben. Mit 68 musste ich 
                lernen, dasselbe für mich zu tun. Martha hat mir den entscheidenden Anstoß gegeben."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Gisela Hoffmann, pensionierte Lehrerin
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Meine Tochter hielt mich für verrückt"
          </h2>

          <p className="mb-6">
            Als Gisela ihrer Tochter Carolin von der Idee erzählte, reagierte diese entsetzt. 
            „Mama, das sind Betrüger! Die wollen dein Erspartes!", warnte die 42-jährige Buchhalterin. 
            Doch Gisela blieb hartnäckig – und bat ihre Tochter, die Sache zu prüfen.
          </p>

          <p className="mb-6">
            „Carolin hat drei Tage recherchiert", sagt Gisela nicht ohne Stolz. „Am Ende hat sie 
            gesagt: Mama, ich verstehe nicht, warum mir das niemand gesagt hat. Das Angebot ist 
            echt, die Bank ist seriös, und die Renditen sind nachweisbar."
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Giselas Ergebnisse nach 14 Monaten
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Eingezahlt:</strong> 25.000 Euro (Ersparnisse aus 40 Berufsjahren)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monatliche Auszahlung:</strong> Durchschnittlich 2.100 Euro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Gesamteinkommen:</strong> Fast 3.800 Euro monatlich (inkl. Pension)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Mehr als mein Lehrergehalt"
          </h2>

          <p className="mb-6">
            „Wissen Sie, was das Verrückte ist?", fragt Gisela und schüttelt den Kopf. „Ich verdiene 
            jetzt mehr als in meinen besten Jahren als Lehrerin. Damals habe ich 3.200 Euro brutto 
            bekommen – und davon ging die Hälfte für Steuern und Abgaben drauf."
          </p>

          <p className="mb-6">
            Ihre Tochter Carolin hat sich mittlerweile selbst angemeldet. „Sie sagt, sie will später 
            mal nicht so kämpfen müssen wie ich am Anfang meiner Pension", erzählt Gisela.
          </p>

          {/* Trust Elements */}
          <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Warum Lehrer profitieren</h4>
                  <p className="text-green-700 text-sm">
                    Beamte und Pensionäre gelten als besonders vertrauenswürdige Kunden. Das 
                    beschriebene Angebot ist staatlich reguliert und unterliegt der deutschen 
                    Einlagensicherung bis 100.000 Euro.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Der Lehrerinnen-Stammtisch tagt jetzt anders
          </h2>

          <p className="mb-6">
            Gisela hat inzwischen vier weitere ehemalige Kolleginnen überzeugt. Beim monatlichen 
            Stammtisch sprechen sie nicht mehr nur über Enkelkinder und Arztbesuche. „Jetzt tauschen 
            wir uns über unsere Portfolios aus", lacht Gisela. „Martha nennt uns scherzhaft den 
            ‚Millionärs-Club'."
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Für Pensionäre und Rentner</h4>
                  <p className="text-sm text-muted-foreground">
                    Das im Artikel beschriebene Angebot richtet sich besonders an Menschen im 
                    Ruhestand, die ihre Ersparnisse sinnvoll anlegen möchten.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Jetzt unverbindlich informieren
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Kostenlose Beratung · Keine Verpflichtung · Für alle Altersgruppen
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Gisela hat einen Traum: Mit 70 will sie ihrer Enkelin Sophie die Welt zeigen – 
            angefangen mit einer Reise nach Japan. „Früher undenkbar", sagt sie. „Jetzt plane ich schon."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (124)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>BB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Brigitte B.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 2 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Ich bin auch pensionierte Lehrerin (Gymnasium) und habe mich nach diesem Artikel 
                  angemeldet. Die Anmeldung war einfach und der Kundenservice sehr freundlich.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>KL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Klaus L.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 4 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Meine Frau war Grundschullehrerin und bekommt 1.450 Euro Pension. Wir haben uns 
                  zusammen angemeldet – beste Entscheidung seit langem.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>EH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Elisabeth H.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 6 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Warum erzählen einem die Banken so etwas nicht? Ich bin seit 10 Jahren in Rente 
                  und höre jetzt zum ersten Mal davon. Danke für diesen Artikel!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage12;
