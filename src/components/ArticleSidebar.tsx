import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface ArticleSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const articles = [
  {
    slug: "/gelsenkirchener-sparkassen-fiasko",
    title: "65.000 Euro im Sparkassen-Fiasko verloren",
    category: "Sparkassen-Fiasko"
  },
  {
    slug: "/42000-euro-verloren",
    title: "42.000 Euro verloren – Seniorin stabilisiert Vermögen",
    category: "Seniorin-Geschichte"
  },
  {
    slug: "/maschmeyer-investment-geheimnis",
    title: "Löwen-Investor enthüllt Bank-Geheimnis",
    category: "Exklusiv-Interview"
  },
  {
    slug: "/frank-thelen-cheat-code",
    title: "Tech-Investor: Das ist wie ein Cheat-Code",
    category: "Exklusiv-Interview"
  },
  {
    slug: "/eu-bankenregeln-fair-access",
    title: "EU-Gesetz zwingt Banken zur Fairness",
    category: "EU-Regulierung"
  },
  {
    slug: "/vw-ingenieur-finanzielle-freiheit",
    title: "VW-Ingenieur findet finanzielle Freiheit",
    category: "Schicksalswende"
  },
  {
    slug: "/krankenschwester-entdeckt-bank-geheimnis",
    title: "Krankenschwester entdeckt Bank-Geheimnis",
    category: "Exklusiv-Bericht"
  },
  {
    slug: "/rentner-verdoppelt-alterseinkommen",
    title: "Rentner verdoppelt Alterseinkommen",
    category: "Ruhestand & Finanzen"
  },
  {
    slug: "/finanztest-warnung-rentner",
    title: "Finanztest warnt Rentner",
    category: "Verbraucherschutz"
  },
  {
    slug: "/stiftung-warentest-warnung-sparer",
    title: "Stiftung Warentest warnt Sparer",
    category: "Verbraucherschutz"
  }
];

const ArticleSidebar = ({ isOpen, onClose }: ArticleSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full w-[320px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-primary">
          <span className="text-white font-black text-xl">WIRTSCHAFT</span>
          <button 
            onClick={onClose}
            className="text-white hover:opacity-80 p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto h-[calc(100%-60px)]">
          {/* Home Link */}
          <Link 
            to="/"
            onClick={onClose}
            className={`block px-4 py-3 border-b hover:bg-secondary transition-colors ${
              currentPath === '/' ? 'bg-secondary font-semibold' : ''
            }`}
          >
            <span className="text-primary font-semibold">← Startseite</span>
          </Link>

          {/* Section Title */}
          <div className="px-4 py-3 bg-secondary/50 border-b">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
              Wirtschaft & Finanzen
            </span>
          </div>

          {/* Article Links */}
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={article.slug}
              onClick={onClose}
              className={`block px-4 py-3 border-b hover:bg-secondary transition-colors ${
                currentPath === article.slug ? 'bg-primary/10 border-l-4 border-l-primary' : ''
              }`}
            >
              <span className="category-tag text-xs mb-1">{article.category}</span>
              <p className={`text-sm leading-snug ${
                currentPath === article.slug ? 'font-semibold text-foreground' : 'text-foreground/80'
              }`}>
                {article.title}
              </p>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default ArticleSidebar;
