import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Clock, Stethoscope } from "lucide-react";
import OfferButton from "./OfferButton";

const ArticlePage14 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Medizin & Finanzen</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          „Als Arzt war ich der größte Skeptiker" – Wie Dr. Helmut Weber seine Meinung über Bankangebote änderte
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Der pensionierte Internist aus Frankfurt prüfte das Angebot wie eine Diagnose – mit wissenschaftlicher Genauigkeit. Sein Fazit überraschte ihn selbst.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Von Dr. Martin Schulze</span>
          <span>•</span>
          <span>29.01.2026, 12:15 Uhr</span>
          <span>•</span>
          <span>8 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Frankfurt am Main</strong> – Dr. Helmut Weber (72) hat in seiner 40-jährigen 
            Karriere als Internist Tausende von Diagnosen gestellt. „Ich habe gelernt, nichts zu 
            glauben, ohne es zu überprüfen", sagt er. Genau diese Haltung bewahrte ihn jahrelang 
            davor, auf „dubiose Finanzangebote" hereinzufallen. Bis er eines fand, das seiner 
            Prüfung standhielt.
          </p>

          <p className="mb-6">
            Nach seiner Pensionierung 2020 hatte Weber ein komfortables Polster: 180.000 Euro 
            Ersparnisse aus Jahrzehnten als niedergelassener Arzt. Doch das Geld lag auf einem 
            Tagesgeldkonto und verlor durch die Inflation stetig an Wert. „Jedes Jahr waren es 
            real 5.000 Euro weniger", rechnet der Mediziner vor.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die Empfehlung vom Golfplatz
          </h2>

          <p className="mb-6">
            Auf dem Golfplatz traf Weber seinen alten Freund Heinrich, einen pensionierten 
            Wirtschaftsprüfer. „Heinrich erzählte mir von einem Angebot, das er gefunden hatte", 
            erinnert sich Weber. „Ich habe sofort abgewunken – das klang nach klassischem Betrug."
          </p>

          <p className="mb-6">
            Doch Heinrich ließ nicht locker. Er schickte Weber alle Unterlagen: Prospekte, 
            Regulierungsnachweise, historische Renditen. „Als Arzt bin ich es gewohnt, Daten 
            zu analysieren", sagt Weber. „Also habe ich mir alles genau angeschaut – wie bei 
            einer schwierigen Diagnose."
          </p>

          {/* Quote Box */}
          <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-4 sm:p-6">
              <blockquote className="text-base sm:text-lg italic">
                „Ich habe das Angebot behandelt wie einen Patienten mit unklaren Symptomen: 
                Anamnese, Untersuchung, Labor, Bildgebung. Am Ende stand eine eindeutige 
                Diagnose: Das ist seriös."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Dr. Helmut Weber, pensionierter Internist
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Die wissenschaftliche Prüfung
          </h2>

          <p className="mb-6">
            Weber ging systematisch vor. Er prüfte die BaFin-Registrierung der Bank, recherchierte 
            die Geschäftsberichte der letzten zehn Jahre, sprach mit einem befreundeten 
            Finanzprofessor an der Goethe-Universität und konsultierte sogar einen Anwalt 
            für Bankrecht.
          </p>

          <p className="mb-6">
            „Mein Anwalt war überrascht", erzählt Weber. „Er sagte, er hätte von diesem Angebot 
            noch nie gehört – aber es sei wasserdicht. Die Bank nutzte eine Gesetzeslücke aus 
            einer neuen EU-Richtlinie, die sie verpflichtete, institutionelle Konditionen 
            auch Privatanlegern anzubieten."
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Dr. Webers Ergebnisse nach 18 Monaten
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Investiert:</strong> 100.000 Euro (der sichere Teil seines Vermögens)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monatliche Auszahlung:</strong> Durchschnittlich 9.200 Euro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Prüfzeit vor Entscheidung:</strong> 6 Wochen intensive Recherche</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            „Meine Kollegen dachten, ich sei verrückt geworden"
          </h2>

          <p className="mb-6">
            Als Weber seinen ehemaligen Kollegen von der Entscheidung erzählte, reagierten diese 
            skeptisch. „Ein Kardiologe sagte mir, ich hätte wohl zu lange Narkosegase eingeatmet", 
            lacht Weber. Doch als er nach sechs Monaten die Auszüge zeigte, änderte sich die Meinung.
          </p>

          <p className="mb-6">
            „Inzwischen haben sich vier Kollegen aus meinem alten Krankenhaus ebenfalls angemeldet", 
            berichtet Weber. „Ärzte sind von Natur aus skeptisch – aber wir erkennen auch gute 
            Daten, wenn wir sie sehen."
          </p>

          {/* Trust Elements */}
          <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Verifizierte Sicherheit</h4>
                  <p className="text-green-700 text-sm">
                    Die anbietende Bank ist ein systemrelevantes deutsches Finanzinstitut mit 
                    über 200 Jahren Geschichte. Die Einlagensicherung gilt bis 100.000 Euro pro 
                    Kunde, die Regulierung erfolgt durch die BaFin.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl sm:text-2xl font-bold font-spiegel-serif mt-6 sm:mt-8 mb-4">
            Der Arzt als Berater
          </h2>

          <p className="mb-6">
            Weber hat mittlerweile ein ungewöhnliches Hobby: Er berät andere Senioren, die 
            unsicher sind, ob sie dem Angebot trauen können. „Ich gehe mit ihnen alle Unterlagen 
            durch, wie ich es selbst getan habe", erklärt er. „Die meisten sind danach überzeugt."
          </p>

          <p className="mb-6">
            Seine Frau Margarethe (69) war anfangs dagegen. „Sie hat mich für naiv gehalten", 
            gibt Weber zu. „Jetzt plant sie unsere dritte Kreuzfahrt dieses Jahr. Sie hat ihre 
            Meinung geändert."
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Stethoscope className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Empfehlung von Dr. Weber</h4>
                  <p className="text-sm text-muted-foreground">
                    „Prüfen Sie selbst – aber lassen Sie sich nicht von Skepsis lähmen. Die 
                    Daten sprechen eine eindeutige Sprache."
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Selbst prüfen und informieren
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Alle Unterlagen einsehbar · BaFin-reguliert · Kostenlose Beratung
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Dr. Weber hat noch einen Rat für seine Altersgenossen: „Als Ärzte haben wir gelernt, 
            Evidenz zu bewerten. Dieses Angebot hat die Evidenz auf seiner Seite. Ich bin froh, 
            dass ich meine anfängliche Skepsis überwunden habe."
          </p>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (203)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Prof. Dr. K.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 2 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Als emeritierter Professor für Finanzwirtschaft kann ich die Analyse von 
                  Dr. Weber nur bestätigen. Das Angebot ist seriös und die Renditen sind 
                  nachvollziehbar. Habe mich selbst angemeldet.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Dr. S. Müller</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 4 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Kollegiale Grüße an Dr. Weber! Ich bin Radiologe im Ruhestand und habe 
                  mich nach diesem Artikel auch angemeldet. Die wissenschaftliche Herangehensweise 
                  hat mich überzeugt.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Anneliese H.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 6 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Wenn sogar Ärzte das prüfen und für gut befinden, dann muss es seriös sein. 
                  Ich vertraue Dr. Weber und habe mich angemeldet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage14;
