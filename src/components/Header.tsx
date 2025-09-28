import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">
                SPSS Analiz
              </h1>
              <p className="text-xs text-muted-foreground">Profesyonel Veri Analizi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('anasayfa')}
              className="text-foreground hover:text-primary transition-professional"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => scrollToSection('hizmetler')}
              className="text-foreground hover:text-primary transition-professional"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection('hakkimda')}
              className="text-foreground hover:text-primary transition-professional"
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection('iletisim')}
              className="text-foreground hover:text-primary transition-professional"
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
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('anasayfa')}
                className="text-left text-foreground hover:text-primary transition-professional py-2"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('hizmetler')}
                className="text-left text-foreground hover:text-primary transition-professional py-2"
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection('hakkimda')}
                className="text-left text-foreground hover:text-primary transition-professional py-2"
              >
                Hakkımda
              </button>
              <button
                onClick={() => scrollToSection('iletisim')}
                className="text-left text-foreground hover:text-primary transition-professional py-2"
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