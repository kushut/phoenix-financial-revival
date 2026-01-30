import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Users, Landmark } from "lucide-react";
import OfferButton from "./OfferButton";
import politikerinPortrait from "@/assets/politikerin-portrait.png";

const ArticlePage19 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Politik & Finanzen</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          „Deutsche Rentner werden systematisch benachteiligt" – Oppositionsführerin fordert Zugang zu exklusiven Bankkonditionen
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Die stellvertretende Bundessprecherin einer großen Oppositionspartei überrascht mit einer ungewöhnlichen Forderung: Banken sollen Privatanlegern dieselben Renditen ermöglichen wie Großinvestoren.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Von Marcus Lehmann</span>
          <span>•</span>
          <span>30.01.2026, 11:45 Uhr</span>
          <span>•</span>
          <span>8 Min. Lesezeit</span>
        </div>

        {/* Hero Image */}
        <div className="mb-6 sm:mb-8">
          <img 
            src={politikerinPortrait} 
            alt="Bekannte Oppositionspolitikerin bei einer Pressekonferenz" 
            className="w-full h-auto rounded-lg"
          />
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 italic">
            Die promovierte Volkswirtin (45) überraschte diese Woche mit einer finanzpolitischen Initiative für Rentner.
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Berlin</strong> – Es ist ein ungewöhnlicher Vorstoß aus dem konservativen Lager: Die 
            stellvertretende Bundessprecherin einer der größten Oppositionsparteien – promovierte Volkswirtin, 
            ehemalige Goldman-Sachs-Managerin und bekannt für ihre wirtschaftsliberalen Positionen – fordert 
            eine fundamentale Änderung im deutschen Bankenwesen.
          </p>

          <p className="mb-6">
            „Es kann nicht sein, dass deutsche Rentner mit 0,5 Prozent Zinsen abgespeist werden, während 
            Großinvestoren und institutionelle Anleger Renditen von 10 bis 17 Prozent erzielen", sagte die 
            45-Jährige in einem Interview mit der Wirtschaftswoche. „Das ist eine systematische Benachteiligung 
            der kleinen Sparer, die dieses Land aufgebaut haben."
          </p>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die Goldman-Sachs-Erfahrung als Augenöffner
          </h2>

          <p className="mb-6">
            Die Politikerin, die vor ihrer Karriere als Unternehmensberaterin bei Goldman Sachs in London 
            arbeitete, kennt die Finanzwelt von innen. „Ich habe gesehen, wie das System funktioniert", 
            erklärt sie. „Die lukrativsten Anlageprodukte werden systematisch vor der breiten Öffentlichkeit 
            versteckt. Das muss sich ändern."
          </p>

          <p className="mb-6">
            Ihre Forderung: Die bereits existierende EU-Richtlinie zur Gleichbehandlung von Anlegern (CRD VI) 
            müsse konsequent umgesetzt werden. „Die Regierung hat diese Richtlinie wissentlich verzögert, 
            weil sie den Großbanken in die Hände spielt", kritisiert die promovierte Ökonomin.
          </p>

          {/* Quote Box */}
          <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-4 sm:p-6">
              <blockquote className="text-base sm:text-lg italic">
                „Unsere Rentner haben jahrzehntelang in dieses System eingezahlt. Sie haben ein Recht 
                darauf, von den gleichen Konditionen zu profitieren wie die Großinvestoren. Das ist 
                keine linke Umverteilung – das ist faire Marktwirtschaft."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Stellvertretende Bundessprecherin, promovierte Volkswirtin (45)
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Überraschende Unterstützung aus der Bankenwelt
          </h2>

          <p className="mb-6">
            Noch überraschender als der Vorstoß selbst ist die Reaktion aus der Finanzbranche. Mehrere 
            deutsche Großbanken haben bereits reagiert – und zwar positiv. Eine der größten systemrelevanten 
            Banken Deutschlands hat im Vorgriff auf eine mögliche Gesetzesänderung bereits begonnen, 
            ausgewählten Privatkunden Zugang zu bisher exklusiven Anlageprodukten zu gewähren.
          </p>

          <p className="mb-6">
            „Wir begrüßen die Initiative", teilte ein Sprecher des Instituts mit. „Die Fair-Access-Klausel 
            der CRD VI ist geltendes EU-Recht. Wir haben uns entschieden, diese proaktiv umzusetzen, 
            bevor der Gesetzgeber uns dazu zwingt."
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Was die Politikerin konkret fordert
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Transparenzpflicht:</strong> Banken müssen alle Anlageprodukte öffentlich zugänglich machen</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Gleichbehandlung:</strong> Privatanleger erhalten dieselben Konditionen wie institutionelle Investoren</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Rentner-Priorität:</strong> Menschen über 60 sollen bevorzugten Zugang erhalten</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Einlagensicherung:</strong> Alle Produkte müssen unter die gesetzliche Sicherung fallen</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Das Geld bleibt in Deutschland"
          </h2>

          <p className="mb-6">
            Besonders betont die Politikerin den patriotischen Aspekt ihrer Forderung: „Es geht nicht 
            darum, irgendwelchen ausländischen Hedgefonds zu helfen. Es geht darum, dass deutsche 
            Sparer von deutschen Banken fair behandelt werden. Das Geld bleibt in Deutschland, 
            stärkt unsere Wirtschaft und sichert unsere Renten."
          </p>

          <p className="mb-6">
            Diese Argumentation findet Anklang bei der älteren Generation. In einer aktuellen 
            Forsa-Umfrage unterstützen 78 Prozent der über 60-Jährigen die Forderung nach 
            gleichen Anlagekonditionen für alle.
          </p>

          {/* Trust Elements */}
          <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Bereits jetzt verfügbar</h4>
                  <p className="text-green-700 text-sm">
                    Während die Politik noch debattiert, haben einzelne deutsche Großbanken 
                    bereits reagiert. Über spezielle Zugangswege können Privatanleger heute 
                    schon von den gleichen Konditionen profitieren wie institutionelle Investoren. 
                    Die Einlagensicherung bis 100.000 Euro pro Person gilt selbstverständlich.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Kritik an der Bundesregierung
          </h2>

          <p className="mb-6">
            Die Opposition wirft der aktuellen Regierung vor, die Interessen der Großbanken über 
            die der Bürger zu stellen. „Seit zwei Jahren liegt die EU-Richtlinie auf dem Tisch. 
            Warum wurde sie nicht umgesetzt?", fragt die ehemalige Investmentbankerin. „Weil die 
            Lobbyisten der Finanzindustrie in Berlin gut vernetzt sind."
          </p>

          <p className="mb-6">
            Die promovierte Volkswirtin kündigte an, das Thema in den kommenden Wahlkampf zu 
            tragen. „Die Rentner in diesem Land verdienen Respekt – und faire Konditionen. 
            Das ist für mich keine Verhandlungsmasse."
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Landmark className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Bereits jetzt profitieren</h4>
                  <p className="text-sm text-muted-foreground">
                    Einige deutsche Großbanken bieten das diskutierte Anlageprodukt bereits 
                    heute an. Der Zugang ist unkompliziert und die Einlagensicherung garantiert.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Zum deutschen Bankangebot
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Deutsche Bank · Volle Einlagensicherung · Für Bürger ab 18 Jahren
              </p>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Reaktionen aus dem Rentner-Verband
          </h2>

          <p className="mb-6">
            Der Sozialverband VdK begrüßte den Vorstoß. „Endlich spricht jemand aus, was Millionen 
            Rentner denken", sagte eine Sprecherin. „Die aktuelle Zinspolitik ist eine 
            Enteignung der Sparer in Zeitlupe."
          </p>

          <p className="mb-6">
            Auch der Bund der Steuerzahler unterstützt die Forderung. „Es ist volkswirtschaftlich 
            sinnvoll, wenn Rentner mehr Rendite erzielen", so Präsident Reiner Holznagel. 
            „Das entlastet langfristig auch die Sozialkassen."
          </p>

          {/* Statistics Box */}
          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Fakten zur Rentner-Finanzierung
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">21,4 Mio.</div>
                <div className="text-xs text-muted-foreground">Rentner in Deutschland</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">0,4%</div>
                <div className="text-xs text-muted-foreground">Durchschnittlicher Sparzins</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">12-17%</div>
                <div className="text-xs text-muted-foreground">Institutionelle Renditen</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">78%</div>
                <div className="text-xs text-muted-foreground">Unterstützen die Forderung</div>
              </div>
            </div>
          </div>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (892)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>KB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Klaus B.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 45 Minuten</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Endlich sagt mal jemand die Wahrheit! Ich bin seit 40 Jahren Sparkassen-Kunde 
                  und bekomme 0,25% Zinsen. Das ist eine Frechheit. Habe mir das erwähnte Angebot 
                  angesehen - völlig andere Liga.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Monika H.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Ich bin normalerweise kein Fan dieser Partei, aber hier hat sie völlig recht. 
                  Mein Mann (74) und ich haben das Angebot geprüft - es ist seriös und wir sind 
                  seit 2 Monaten dabei. Läuft super!
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
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 2 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Als ehemaliger Bankdirektor kann ich bestätigen: Diese Produkte existieren und 
                  waren immer nur für Großkunden. Dass sie jetzt für alle verfügbar sind, ist 
                  eine echte Chance für Rentner.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>IR</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Ingrid R.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 3 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Meine Schwester hat mich auf diesen Artikel aufmerksam gemacht. Wir haben uns 
                  beide angemeldet. Erste Auszahlung kam pünktlich. Das gibt Hoffnung!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage19;
