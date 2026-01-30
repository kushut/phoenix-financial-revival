import { useState } from "react";
import { Menu, Search } from "lucide-react";
import ArticleSidebar from "./ArticleSidebar";

interface SpiegelHeaderProps {
  breadcrumbTitle?: string;
  showMenu?: boolean;
}

const SpiegelHeader = ({ breadcrumbTitle = "42.000 Euro verloren – wie eine Frau ihr finan...", showMenu = true }: SpiegelHeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {showMenu && <ArticleSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      
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
            <div className="flex items-center gap-3">
              <span className="text-white font-black text-2xl tracking-tight">
                SPIEGEL
              </span>
              <span className="text-white/90 font-normal text-lg">
                Wirtschaft
              </span>
            </div>

            {/* Right: Auth & Search */}
            <div className="flex items-center gap-4">
              <span className="hidden md:inline text-white text-sm underline cursor-pointer hover:opacity-80">
                Abonnement
              </span>
              <button className="hidden md:flex items-center gap-1 px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded text-white text-sm font-medium border border-white/30">
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
