import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import ArticleSidebar from "./ArticleSidebar";

interface SpiegelHeaderProps {
  breadcrumbTitle?: string;
  showMenu?: boolean;
}

const SpiegelHeader = ({ breadcrumbTitle = "42.000 Euro verloren – wie eine Frau ihr finan...", showMenu = true }: SpiegelHeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);

  return (
    <>
      {showMenu && <ArticleSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      
      {/* Warning Dialog */}
      {warningOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setWarningOpen(false)}
          />
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <button 
              onClick={() => setWarningOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-2">Hinweis</h2>
            <p className="text-muted-foreground mb-6">
              Du verlässt nun diesen Artikel und gehst zur Anmeldung über.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setWarningOpen(false)}
                className="px-4 py-2 border border-muted-foreground/30 rounded text-sm hover:bg-muted"
              >
                Fortfahren
              </button>
              <button 
                onClick={() => setWarningOpen(false)}
                className="px-4 py-2 bg-primary text-white rounded text-sm hover:bg-primary/90"
              >
                Nicht fortfahren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header - Orange Bar */}
      <header className="spiegel-header">
        <div className="max-w-[1020px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Left: Menu */}
            <div className="flex items-center gap-4">
              {showMenu && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="flex items-center gap-2 text-white hover:opacity-80"
                >
                  <Menu className="w-5 h-5" />
                  <span className="hidden md:inline font-semibold text-sm">Menü</span>
                </button>
              )}
            </div>

            {/* Center: Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-white font-black text-xl sm:text-2xl tracking-tight">
                SPIEGEL
              </span>
              <span className="text-white/90 font-normal text-base sm:text-lg hidden xs:inline">
                Wirtschaft
              </span>
            </div>

            {/* Right: Auth & Search */}
            <div className="flex items-center gap-4">
              <span 
                onClick={() => setWarningOpen(true)}
                className="hidden md:inline text-white text-sm underline cursor-pointer hover:opacity-80"
              >
                Abonnement
              </span>
              <button 
                onClick={() => setWarningOpen(true)}
                className="hidden md:flex items-center gap-1 px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded text-white text-sm font-medium border border-white/30"
              >
                Anmelden
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="text-white hover:opacity-80">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b">
        <div className="max-w-[1020px] mx-auto px-4 md:px-6">
          <nav className="breadcrumb overflow-x-auto">
            <a href="/" className="text-foreground hover:text-primary whitespace-nowrap">Startseite</a>
            <span className="breadcrumb-separator">›</span>
            <a href="#" className="text-foreground hover:text-primary whitespace-nowrap">Wirtschaft</a>
            <span className="breadcrumb-separator">›</span>
            <a href="#" className="text-foreground hover:text-primary whitespace-nowrap">Finanzen</a>
            <span className="breadcrumb-separator hidden md:inline">›</span>
            <span className="text-muted-foreground hidden md:inline truncate max-w-[300px]">
              {breadcrumbTitle}
            </span>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SpiegelHeader;
