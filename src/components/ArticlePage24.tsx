import { Link } from "react-router-dom";
import SpiegelHeader from "./SpiegelHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Share2, Bookmark, Clock, Heart, Shield, TrendingUp } from "lucide-react";
import ehepaarPortrait from "@/assets/ehepaar-heinz-maria.png";
import OfferButton from "./OfferButton";

const ArticlePage24 = () => {
  const comments = [
    {
      id: 1,
      author: "Gisela & Werner T.",
      time: "vor 45 Minuten",
      text: "Wir sind seit 52 Jahren verheiratet. Das hier war die beste gemeinsame Entscheidung seit dem Hauskauf 1978.",
      likes: 287
    },
    {
      id: 2,
      author: "Hannelore M.",
      time: "vor 1 Stunde",
      text: "Mein Mann war erst skeptisch. Nach dem ersten Monat hat er sich bei mir entschuldigt. 😊",
      likes: 198
    },
    {
      id: 3,
      author: "Klaus & Ingrid B.",
      time: "vor 2 Stunden",
      text: "Endlich können wir unseren Enkeln was zurückgeben. Die Einlagensicherung war für uns entscheidend.",
      likes: 156
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SpiegelHeader showMenu={false} />
      
      <div className="max-w-[var(--container-max-width)] mx-auto px-4">
        <nav className="breadcrumb">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Startseite</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/" className="text-muted-foreground hover:text-foreground">Wirtschaft</Link>
          <span className="breadcrumb-separator">/</span>
          <span>Finanzen</span>
        </nav>
      </div>

      <article className="max-w-[var(--article-max-width)] mx-auto px-4 py-6">
        <span className="category-tag">Leserbericht</span>
        
        <h1 className="article-title mt-3 mb-4">
          Nach 48 Jahren Ehe: Wie ein Rentner-Ehepaar aus Münster endlich sorgenfrei in den Ruhestand geht
        </h1>

        <p className="article-lead text-muted-foreground mb-6">
          Heinz (74) und Maria (71) hatten ihr Leben lang gespart – und trotzdem Angst vor der Zukunft. Dann fanden sie etwas, das ihre Bank ihnen nie gezeigt hatte.
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 Min. Lesezeit</span>
          </div>
          <span>•</span>
          <span>30.01.2026, 11:30 Uhr</span>
        </div>

        <div className="share-bar mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Teilen</span>
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bookmark className="w-5 h-5" />
              <span className="text-sm">Merken</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">{comments.length} Kommentare</span>
          </div>
        </div>

        <figure className="mb-8">
          <img 
            src={ehepaarPortrait} 
            alt="Heinz und Maria aus Münster" 
            className="w-full rounded-lg"
          />
          <figcaption className="image-caption">
            Heinz und Maria K. in ihrem Garten in Münster: „Wir hätten das viel früher machen sollen"
          </figcaption>
        </figure>

        <div className="article-body">
          <p>
            <strong>Münster</strong> – „Wir haben unser ganzes Leben lang auf diesen Moment hingearbeitet", sagt Heinz K., während er seiner Frau Maria einen Kaffee einschenkt. Die beiden sitzen in ihrem gepflegten Reihenhaus in Münster-Hiltrup, umgeben von Fotos ihrer drei Kinder und sieben Enkel.
          </p>

          <p>
            48 Jahre Ehe, 45 Jahre Arbeit, 180.000 Euro auf dem Sparkonto. Eigentlich sollte der Ruhestand entspannt sein. Doch die Realität sah anders aus.
          </p>

          <blockquote className="article-quote">
            „Die Inflation hat uns aufgefressen. Jedes Jahr wurde unser Erspartes weniger wert. Wir haben uns gefragt: Reicht das Geld noch, wenn einer von uns Pflege braucht?"
          </blockquote>

          <p>
            Es war ihre Tochter Sabine, die den entscheidenden Hinweis gab. Als Bankkauffrau bei einer Großbank in Frankfurt wusste sie, was ihre Eltern nicht wussten: Dass es Anlagemöglichkeiten gibt, die normalen Kunden bewusst vorenthalten werden.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Was Sabine ihren Eltern verriet:</h3>
                <p className="text-sm">
                  „Es gibt bei jeder großen deutschen Bank ein Angebot, das nur für vermögende Kunden gedacht ist. Professionelles Depot-Management mit echten Renditen. Aber seit einer neuen EU-Richtlinie müssen sie es auch normalen Sparern anbieten – wenn die wissen, wo sie suchen müssen."
                </p>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">„Wir haben es einfach ausprobiert"</h2>

          <p>
            Heinz war skeptisch. 74 Jahre alt, Ingenieur im Ruhestand, ein Mann der Zahlen. Er wollte Beweise. Also überwies das Ehepaar zunächst nur 25.000 Euro – einen kleinen Teil ihrer Ersparnisse.
          </p>

          <p>
            „Die ersten Wochen habe ich täglich reingeschaut", erinnert sich Heinz. „Erst stieg es langsam. Dann schneller. Nach sechs Wochen waren aus 25.000 Euro über 31.000 geworden."
          </p>

          <div className="info-box">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Die Entwicklung von Heinz und Maria:
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>Startbetrag (November 2025)</span>
                <span className="font-bold">25.000 €</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Nach 6 Wochen</span>
                <span className="font-bold text-primary">31.200 €</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Erhöhung auf</span>
                <span className="font-bold">80.000 €</span>
              </div>
              <div className="flex justify-between">
                <span>Aktueller Stand (heute)</span>
                <span className="font-bold text-primary">103.400 €</span>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">„Das Wichtigste: Wir haben keine Angst mehr"</h2>

          <p>
            Heute, drei Monate später, haben Heinz und Maria 80.000 Euro angelegt. Der Rest bleibt auf dem Girokonto – für alle Fälle. Aber die Angst ist verschwunden.
          </p>

          <blockquote className="article-quote">
            „Wir planen jetzt eine Kreuzfahrt. Zum ersten Mal seit 20 Jahren. Und wir wissen: Selbst wenn wir das Geld ausgeben, wächst der Rest weiter."
          </blockquote>

          <p>
            Maria ergänzt: „Das Schönste ist, dass wir unseren Enkeln jetzt wirklich helfen können. Die Große will studieren. Dafür ist jetzt Geld da."
          </p>

          <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 my-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Warum sich Heinz sicher fühlt:</h3>
                <ul className="text-sm space-y-1">
                  <li>✓ Deutsche Großbank mit voller Einlagensicherung</li>
                  <li>✓ BaFin-reguliert, deutsches Recht</li>
                  <li>✓ Täglicher Zugriff auf das eigene Geld</li>
                  <li>✓ Keine Mindestlaufzeit, keine versteckten Gebühren</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="article-subheading">„Wir hätten es früher machen sollen"</h2>

          <p>
            Auf die Frage, ob er anderen Rentnern etwas raten würde, antwortet Heinz ohne Zögern:
          </p>

          <blockquote className="article-quote">
            „Fangt nicht groß an. Probiert es mit einem kleinen Betrag. Schaut, wie es sich entwickelt. Und wenn ihr seht, dass es funktioniert – dann legt nach. So haben wir es gemacht. Und wir bereuen nur eines: dass wir nicht schon mit 65 angefangen haben."
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-8">
          <p className="text-sm mb-4">
            <strong>Hinweis unserer Redaktion:</strong> Auf Nachfrage hat uns Familie K. den Zugang geteilt, den ihre Tochter ihnen empfohlen hat. Er ist auf der normalen Bank-Website nicht zu finden.
          </p>
          <OfferButton className="w-full">
            Zum versteckten Angebot für Rentner →
          </OfferButton>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Deutsche Großbank · 100.000€ Einlagensicherung · Auch für Ehepaare mit gemeinsamem Konto
          </p>
        </div>

        <section className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-6 font-spiegel-serif flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            {comments.length} Kommentare
          </h3>
          
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-secondary text-sm">
                      {comment.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{comment.text}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                        👍 {comment.likes}
                      </button>
                      <button className="text-xs text-muted-foreground hover:text-foreground">
                        Antworten
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t mt-12 py-8">
        <div className="max-w-[var(--container-max-width)] mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 | Impressum | Datenschutz | Nutzungsbedingungen</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage24;
