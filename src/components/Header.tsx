import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import metrikLogo from "@/assets/metrik-istatistik-akademi-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={metrikLogo} 
              alt="Metrik İstatistik Akademi Logo" 
              className="h-24 w-auto max-w-md"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('anasayfa')}
              className="px-4 py-2 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection('hizmetler')}
              className="px-4 py-2 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection('hakkimda')}
              className="px-4 py-2 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection('iletisim')}
              className="px-4 py-2 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
            >
              İletişim
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('iletisim')}
              className="bg-gradient-primary text-primary-foreground hover:shadow-professional transition-professional"
            >
              Hemen İletişime Geçin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-professional"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('anasayfa')}
                className="text-left px-4 py-3 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('hizmetler')}
                className="text-left px-4 py-3 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection('hakkimda')}
                className="text-left px-4 py-3 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
              >
                Hakkımda
              </button>
              <button
                onClick={() => scrollToSection('iletisim')}
                className="text-left px-4 py-3 rounded-lg text-foreground hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out font-medium"
              >
                İletişim
              </button>
              <Button 
                onClick={() => scrollToSection('iletisim')}
                className="bg-gradient-primary text-primary-foreground w-full mt-4"
              >
                Hemen İletişime Geçin
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;