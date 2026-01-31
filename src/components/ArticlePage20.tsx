import SpiegelHeader from "./SpiegelHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Users, Landmark, Quote } from "lucide-react";
import OfferButton from "./OfferButton";
import politikerinInterview from "@/assets/politikerin-interview.png";

const ArticlePage20 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Exklusiv-Interview</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          „Unsere Rentner werden betrogen" – Bekannte Parteichefin fordert Gerechtigkeit für deutsche Senioren
        </h1>

        {/* Teaser */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
          Die promovierte Ökonomin und ehemalige Finanzexpertin einer großen deutschen Partei fordert: Rentner sollen endlich von den gleichen Renditen profitieren wie Großinvestoren. Ein Gespräch über Fairness, deutsche Banken und die Zukunft der Altersvorsorge.
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 pb-4 sm:pb-6 border-b">
          <span>Interview: Christina Meier</span>
          <span>•</span>
          <span>30.01.2026, 14:30 Uhr</span>
          <span>•</span>
          <span>12 Min. Lesezeit</span>
        </div>

        {/* Hero Image */}
        <div className="mb-6 sm:mb-8">
          <img 
            src={politikerinInterview} 
            alt="Bekannte Wirtschaftspolitikerin bei einer Pressekonferenz" 
            className="w-full h-auto rounded-lg"
          />
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 italic">
            Die 45-jährige Wirtschaftsexpertin mit Erfahrung bei einer internationalen Investmentbank setzt sich für deutsche Rentner ein.
          </p>
        </div>

        {/* Article Content - Interview Style */}
        <article className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            <strong>Berlin</strong> – Sie gilt als eine der einflussreichsten Stimmen der Opposition: Die promovierte 
            Volkswirtin, die jahrelang bei einer der größten Investmentbanken der Welt arbeitete, 
            bevor sie in die Politik wechselte. Im Exklusiv-Interview spricht sie über ein Thema, 
            das Millionen Deutsche betrifft: Die systematische Benachteiligung von Sparern und Rentnern.
          </p>

          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-secondary/30 rounded-lg border-l-4 border-l-primary">
            <p className="text-sm text-muted-foreground mb-2 font-medium">Zur Person</p>
            <p className="text-sm">
              Die Interviewpartnerin (45) ist promovierte Volkswirtin und war vor ihrer politischen 
              Karriere mehrere Jahre bei einer internationalen Investmentbank in London tätig. 
              Sie gilt als eine der profiliertesten Finanzexpertinnen im Deutschen Bundestag.
            </p>
          </div>

          {/* Interview Q&A */}
          <div className="space-y-6">
            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Sie haben kürzlich gefordert, dass deutsche Rentner Zugang zu den gleichen 
                  Anlagekonditionen bekommen sollen wie institutionelle Großinvestoren. Woher kommt 
                  diese Forderung?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Ich habe jahrelang in der Finanzbranche gearbeitet, in London, bei einer der 
                größten Investmentbanken der Welt. Was ich dort gesehen habe, hat mich geprägt: 
                Es gibt zwei Welten. Die eine ist für Großinvestoren – Pensionsfonds, 
                Versicherungen, reiche Ausländer. Dort gibt es Renditen von 12 bis 17 Prozent. 
                Die andere Welt ist für den normalen deutschen Sparer: 0,3 Prozent auf dem 
                Sparbuch, wenn überhaupt. Das ist nicht fair. Das ist nicht deutsch.
              </p>
            </div>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Sie sagen „nicht deutsch". Was meinen Sie damit genau?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Deutsche Banken – unsere Banken, mit deutschem Kapital, deutschen Mitarbeitern, 
                deutschen Sparern – verdienen Milliarden mit Anlageprodukten, die sie normalen 
                Bürgern vorenthalten. Stattdessen öffnen sie die Türen für internationale Hedgefonds 
                und arabische Staatsfonds. Das Geld, das deutsche Rentner über Jahrzehnte eingezahlt 
                haben, wird verwendet, um Ausländern Renditen zu erwirtschaften. Und unsere eigenen 
                Leute bekommen Almosen.
              </p>
            </div>

            {/* Quote Box */}
            <Card className="my-6 sm:my-8 border-l-4 border-l-primary bg-secondary/30">
              <CardContent className="p-4 sm:p-6">
                <blockquote className="text-base sm:text-lg italic">
                  „Es kann nicht sein, dass deutsche Rentner mit 0,5 Prozent Zinsen abgespeist werden, 
                  während internationale Großinvestoren 12 bis 17 Prozent bekommen. Das Geld bleibt 
                  jetzt in Deutschland – und bei den Deutschen."
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-2 block">
                  – Promovierte Volkswirtin und Wirtschaftspolitikerin
                </cite>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Die Bundesregierung argumentiert, dass solche Produkte zu riskant für Privatanleger sind.
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Das ist die gleiche Regierung, die unsere Rentner zwingt, in Aktien-ETFs zu 
                investieren? Die gleiche Regierung, die Milliarden an internationalen Spekulanten 
                verschenkt hat? Heuchelei! Die Wahrheit ist: Diese Produkte sind nicht „riskant" – 
                sie sind profitabel. Und genau deshalb will man sie den normalen Bürgern vorenthalten. 
                Übrigens: Die Einlagensicherung greift bei deutschen Banken bis 100.000 Euro pro Person. 
                Das sagt die Regierung den Menschen nicht.
              </p>
            </div>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Sie sprechen von einer EU-Richtlinie, die das ändern soll?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Die sogenannte „Fair Access Clause" in der CRD VI. Die verpflichtet Banken, 
                Privatanlegern dieselben Konditionen anzubieten wie institutionellen Investoren. 
                Das ist geltendes EU-Recht! Aber die Regierung verzögert die Umsetzung, weil 
                die Bankenlobby in Berlin stark ist. Ich sage: Genug! Deutsche Rentner haben 
                ein Recht auf diese Produkte.
              </p>
            </div>

            <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Die Kernforderungen im Überblick
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Deutsche Banken für Deutsche:</strong> Inländische Anleger sollen Vorrang vor ausländischen Fonds haben</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Gleiche Renditen:</strong> 12-17% statt 0,5% – was für Großinvestoren gilt, muss für Rentner gelten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Einlagensicherung:</strong> Volle Absicherung bis 100.000 Euro pro Person bleibt erhalten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Sofortige Umsetzung:</strong> Die EU-Richtlinie muss jetzt angewandt werden</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Einige Banken haben bereits reagiert und bieten diese Produkte jetzt auch 
                  Privatkunden an. Was sagen Sie dazu?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Das zeigt, dass der Druck wirkt. Mindestens eine der großen deutschen Banken 
                – systemrelevant, traditionell, mit voller Einlagensicherung – bietet das 
                jetzt an. Ohne Lobby. Ohne Politiker. Direkt für den Bürger. Das ist genau 
                das, was ich fordere. Ich hoffe, dass viele Deutsche davon Gebrauch machen. 
                Es ist ihr Geld. Es ist ihr Recht.
              </p>
            </div>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Haben Sie selbst in solche Produkte investiert?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                (lacht) Ich investiere nur in Deutschland. Mein Vermögen bleibt hier, bei 
                deutschen Banken, nach deutschen Regeln. Was ich für mich selbst als vernünftig 
                ansehe, sollte jedem Rentner in diesem Land zur Verfügung stehen. Das ist 
                keine Frage von links oder rechts – das ist eine Frage von Gerechtigkeit.
              </p>
            </div>

            {/* Trust Elements */}
            <Card className="my-6 sm:my-8 bg-green-50 border-green-200">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">Bereits verfügbar für Deutsche</h4>
                    <p className="text-green-700 text-sm">
                      Die im Interview erwähnten Anlageprodukte sind bereits jetzt bei 
                      ausgewählten deutschen Großbanken verfügbar. Die gesetzliche 
                      Einlagensicherung bis 100.000 Euro pro Person gilt. Der Zugang 
                      ist unkompliziert und ohne Mindestanlage möglich.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Was würden Sie einem Rentner sagen, der skeptisch ist?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Ich verstehe die Skepsis. Wir Deutschen sind vorsichtig – das ist eine Tugend. 
                Aber ich sage auch: Vorsicht darf nicht bedeuten, dass man sich sein Leben lang 
                von Banken ausnutzen lässt. Die Generation unserer Eltern und Großeltern hat 
                dieses Land aufgebaut. Sie haben Anspruch auf faire Behandlung. Nicht auf 
                Almosen. Nicht auf 0,5 Prozent Zinsen, während andere Milliarden mit ihrem 
                Geld verdienen. Prüfen Sie es selbst. Informieren Sie sich. Und dann entscheiden Sie.
              </p>
            </div>

            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-primary mb-2">Interviewer:</p>
                <p className="mb-4">
                  Eine letzte Frage: Was ist Ihre Vision für deutsche Rentner in zehn Jahren?
                </p>
              </div>
            </div>

            <div className="pl-8 mb-6">
              <p className="font-bold mb-2">Wirtschaftspolitikerin:</p>
              <p className="mb-4">
                Dass kein deutscher Rentner mehr in Armut lebt. Dass das Geld, das in Deutschland 
                erwirtschaftet wird, auch in Deutschland bleibt. Dass unsere Banken endlich 
                wieder für die Deutschen arbeiten – und nicht für internationale Spekulanten. 
                Das ist keine Utopie. Das ist machbar. Wir müssen es nur wollen.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic mt-8 mb-6">
            Das Interview führte Christina Meier in Berlin.
          </p>

          {/* Soft CTA */}
          <Card className="my-6 sm:my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Landmark className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Das im Interview erwähnte Angebot</h4>
                  <p className="text-sm text-muted-foreground">
                    Die Politikerin bezieht sich auf ein konkretes Anlageprodukt einer 
                    deutschen Großbank. Der Zugang ist bereits für Privatpersonen möglich.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Zum deutschen Bankangebot
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Deutsche Großbank · Volle Einlagensicherung · Für Bürger ab 18 Jahren
              </p>
            </CardContent>
          </Card>

          {/* Statistics Box */}
          <div className="my-6 sm:my-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Fakten: So werden deutsche Rentner benachteiligt
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
                <div className="text-xs text-muted-foreground">Renditen für Großinvestoren</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100.000€</div>
                <div className="text-xs text-muted-foreground">Gesetzliche Einlagensicherung</div>
              </div>
            </div>
          </div>
        </article>

        {/* Comment Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <h3 className="text-lg sm:text-xl font-bold font-spiegel-serif mb-4 sm:mb-6">Kommentare (1.247)</h3>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>HM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Heinrich M.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 38 Minuten</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Endlich sagt mal jemand die Wahrheit! Ich bin seit 45 Jahren deutscher Sparer und 
                  habe mich immer gefragt, warum die „großen Tiere" soviel mehr verdienen. 
                  Habe mir das erwähnte Angebot angesehen – völlig seriös, deutsche Bank, alles abgesichert.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Gertrud B.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 52 Minuten</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Ich bin politisch neutral, aber hier hat sie absolut Recht. Mein Mann (72) 
                  und ich haben das Angebot getestet – erste Auszahlung kam nach 3 Wochen. 
                  Hätten wir nur früher davon gewusst!
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>KW</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Karl W.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 1 Stunde</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Als ehemaliger Bankangestellter kann ich das nur bestätigen: Diese Produkte 
                  gab es immer schon, aber sie wurden nie den „kleinen Leuten" angeboten. 
                  Gut, dass sich das endlich ändert. Deutschland zuerst!
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Avatar>
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm sm:text-base">Elisabeth R.</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">vor 2 Stunden</span>
                </div>
                <p className="text-xs sm:text-sm">
                  Meine Schwägerin hat mich auf dieses Interview aufmerksam gemacht. 
                  Wir haben uns beide angemeldet. Endlich macht jemand Politik für uns 
                  Deutsche und nicht für ausländische Investoren!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage20;
