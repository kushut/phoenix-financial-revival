import SpiegelHeader from "./SpiegelHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, Shield, TrendingUp, Clock, Users } from "lucide-react";
import OfferButton from "./OfferButton";
import CommentSection from "./CommentSection";

const ArticlePage8 = () => {
  const comments = [
    { id: 1, author: "Klaus H.", time: "vor 2 Stunden", text: "Sehr interessanter Artikel. Bin selbst 67 und habe mich letzte Woche angemeldet. Die Anmeldung war unkompliziert, mal sehen wie es weitergeht.", likes: 45 },
    { id: 2, author: "Ingrid M.", time: "vor 4 Stunden", text: "Mein Mann war erst dagegen, aber nachdem ich ihm den Artikel gezeigt habe, hat er selbst recherchiert. Jetzt sind wir beide dabei.", likes: 78 },
    { id: 3, author: "Peter W.", time: "vor 5 Stunden", text: "Klingt fast zu gut. Aber wenn die BaFin das reguliert und es eine deutsche Großbank ist, kann es ja kein Betrug sein. Werde mich mal informieren.", likes: 32 },
    { id: 4, author: "Gisela T.", time: "vor 7 Stunden", text: "Bin seit 6 Monaten dabei und kann nur Gutes berichten. Meine Rente hat sich quasi verdoppelt!", likes: 124 },
    { id: 5, author: "Hans-Werner K.", time: "vor 9 Stunden", text: "Unser Skatclub hat sich gemeinsam angemeldet. Jetzt reden wir nicht mehr nur über Krankheiten 😄", likes: 89 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <main className="max-w-[680px] mx-auto px-4 py-8">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="category-tag">Ruhestand & Finanzen</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold font-spiegel-serif leading-tight mb-4">
          „Meine Rente reicht jetzt locker" – Wie Werner Berger (71) durch einen Zeitungsartikel sein Alterseinkommen verdoppelte
        </h1>

        {/* Teaser */}
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Der ehemalige Postbeamte wollte nur seine Ersparnisse vor der Inflation schützen. Was er dabei entdeckte, veränderte seinen Ruhestand komplett.
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b">
          <span>Von Michael Brenner</span>
          <span>•</span>
          <span>29.01.2026, 11:42 Uhr</span>
          <span>•</span>
          <span>6 Min. Lesezeit</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Köln</strong> – Werner Berger sitzt in seinem kleinen Garten in Köln-Porz und gießt seine Tomaten. 
            „Vor zwei Jahren hätte ich mir das hier nicht mehr leisten können", sagt der 71-Jährige und deutet auf 
            die gepflegte Anlage. „Die Nebenkosten haben uns aufgefressen."
          </p>

          <p className="mb-6">
            Nach 42 Jahren bei der Deutschen Post ging Berger 2019 in Rente. Mit seiner Frau Margot (68) lebte 
            er von knapp 1.800 Euro monatlich – nach Abzug der Fixkosten blieben oft nur wenige Hundert Euro 
            für alles andere. „Wir haben jeden Cent umgedreht", erinnert sich Margot.
          </p>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Der entscheidende Moment beim Arzt
          </h2>

          <p className="mb-6">
            Im Wartezimmer seines Hausarztes blätterte Werner durch eine Wirtschaftszeitung. Ein Artikel über 
            neue Anlageformen für Privatpersonen weckte seine Neugier. „Da stand, dass bestimmte Banken jetzt 
            verpflichtet sind, auch normalen Leuten die gleichen Konditionen anzubieten wie großen Investoren", 
            erzählt er.
          </p>

          <p className="mb-6">
            Skeptisch, wie er war, recherchierte Werner zunächst selbst. Er fand heraus, dass tatsächlich eine 
            EU-Richtlinie bestimmte Finanzinstitute dazu verpflichtet hatte, ihre bisher exklusiven Angebote 
            zu öffnen. „Ich dachte erst, das ist wieder so ein Trick", gibt er zu.
          </p>

          {/* Quote Box */}
          <Card className="my-8 border-l-4 border-l-primary bg-secondary/30">
            <CardContent className="p-6">
              <blockquote className="text-lg italic">
                „Ich habe mein Leben lang für andere geschuftet. Jetzt arbeitet endlich mein Geld für mich – 
                und das ohne Risiko, das ich mir in meinem Alter nicht mehr leisten könnte."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">
                – Werner Berger, Rentner aus Köln
              </cite>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            „Mein Sohn hat mich für verrückt erklärt"
          </h2>

          <p className="mb-6">
            Als Werner seinem Sohn Thomas von der Idee erzählte, reagierte dieser skeptisch. „Papa, lass die 
            Finger davon", warnte der 45-jährige IT-Berater. „Im Internet gibt es nur Betrüger." Doch Werner 
            ließ nicht locker und bat seinen Sohn, die Sache genauer zu prüfen.
          </p>

          <p className="mb-6">
            „Nach zwei Stunden Recherche musste ich zugeben, dass mein Vater recht hatte", sagt Thomas heute. 
            „Das Angebot kam von einer der größten deutschen Banken, staatlich reguliert, BaFin-geprüft. 
            Alles war seriös."
          </p>

          <div className="my-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Werners Entwicklung seit der Anmeldung
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Startkapital:</strong> 18.000 Euro (Ersparnisse von 15 Jahren)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Monatliche Auszahlung:</strong> Durchschnittlich 890 Euro zusätzlich zur Rente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Zeitaufwand:</strong> „Ich schaue einmal pro Woche rein, mehr nicht"</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            Was Werner anders macht als andere Rentner
          </h2>

          <p className="mb-6">
            Im Gegensatz zu vielen seiner Altersgenossen hat Werner sein Geld nicht auf dem Sparbuch 
            versauern lassen. „Die Zinsen dort sind ein Witz", sagt er. „Mein Bankberater wollte mir 
            jahrelang irgendwelche Fonds andrehen, aber die haben auch nur Gebühren gekostet."
          </p>

          <p className="mb-6">
            Das neue Angebot funktioniert anders: Die Bank übernimmt das aktive Management des Portfolios, 
            während Werner nur zusieht. „Ich verstehe nicht alles, was die da machen", gibt er ehrlich zu. 
            „Aber ich verstehe die Zahlen auf meinem Kontoauszug."
          </p>

          {/* Trust Elements */}
          <Card className="my-8 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">Sicherheit für Senioren</h4>
                  <p className="text-green-700 text-sm">
                    Das Angebot unterliegt der deutschen Einlagensicherung bis 100.000 Euro. 
                    Die anbietende Bank wird von der BaFin reguliert und gehört zu den zehn 
                    größten Finanzinstituten Deutschlands.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold font-spiegel-serif mt-8 mb-4">
            „Wir haben endlich wieder Lebensqualität"
          </h2>

          <p className="mb-6">
            Für Werner und Margot hat sich das Leben verändert. Sie können sich wieder Urlaub leisten, 
            haben die Heizung erneuert und unterstützen sogar ihre Enkelin bei der Führerscheinprüfung. 
            „Das Schönste ist, dass wir niemandem zur Last fallen", sagt Margot.
          </p>

          <p className="mb-6">
            Werner hat inzwischen auch seinen Skatclub überzeugt. Drei seiner Mitspieler haben sich 
            ebenfalls angemeldet. „Wir reden jetzt beim Spielen nicht mehr nur über Krankheiten", 
            lacht er. „Sondern auch über unsere Portfolios."
          </p>

          {/* Social Proof */}
          <div className="my-8 p-6 bg-secondary/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Was andere Rentner berichten
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>HM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Helmut M., 74, aus München</p>
                  <p className="text-sm text-muted-foreground">
                    „Meine Kinder haben sich gewundert, woher ich plötzlich das Geld für den neuen Fernseher hatte."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>GS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Gerda S., 69, aus Hamburg</p>
                  <p className="text-sm text-muted-foreground">
                    „Endlich kann ich meinen Enkeln auch mal was schenken, ohne schlechtes Gewissen."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft CTA */}
          <Card className="my-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-bold">Hinweis der Redaktion</h4>
                  <p className="text-sm text-muted-foreground">
                    Das im Artikel beschriebene Angebot ist nach unseren Recherchen aktuell noch verfügbar. 
                    Aufgrund der hohen Nachfrage kann die Verfügbarkeit jedoch regional begrenzt sein.
                  </p>
                </div>
              </div>
              <OfferButton className="w-full mt-4">
                Verfügbarkeit für meinen Wohnort prüfen
              </OfferButton>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Unverbindliche Prüfung · Keine Verpflichtung · Kostenlos
              </p>
            </CardContent>
          </Card>

          <p className="mb-6">
            Werner Berger will seine Geschichte erzählen, damit andere Rentner nicht die gleichen Fehler 
            machen wie er früher. „Ich habe zu lange gewartet", sagt er nachdenklich. „Aber besser spät 
            als nie."
          </p>
        </article>

        {/* Comment Section */}
        <CommentSection initialComments={comments} />
      </main>
    </div>
  );
};

export default ArticlePage8;
