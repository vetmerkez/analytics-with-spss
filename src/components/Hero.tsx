import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

import heroImage from "@/assets/hero-spss.jpg?url";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-primary">METRİK İSTATİSTİK AKADEMİ</span>
              <br />
              <span className="text-foreground">DANIŞMANLIK</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-gradient-primary font-bold">SPSS, AMOS ve R</span> programları üzerinden 
              <span className="text-gradient-accent font-semibold"> akademik çalışmalar, tezler ve bilimsel araştırmalar</span> için 
              profesyonel, güvenilir ve detaylı 
              <span className="text-gradient-primary font-semibold"> istatistiksel analiz hizmeti</span> sunmaktadır.
            </p>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" style={{ animationDelay: '0.4s' }}>
            <div className="animate-slide-in-left flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover-lift" style={{ animationDelay: '0.6s' }}>
              <div className="p-3 bg-gradient-primary rounded-full mb-4 animate-pulse-gradient">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-black">700+</h3>
              <p className="text-black font-medium">Tamamlanan Analiz Memnuniyeti</p>
            </div>
            
            <div className="animate-scale-in flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover-lift" style={{ animationDelay: '0.8s' }}>
              <div className="p-3 bg-gradient-primary rounded-full mb-4 animate-gradient-shift">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-black">6</h3>
              <p className="text-black font-medium">Farklı Disiplin</p>
            </div>
            
            <div className="animate-slide-in-right flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover-lift" style={{ animationDelay: '1.0s' }}>
              <div className="p-3 bg-gradient-primary rounded-full mb-4 animate-pulse-gradient">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-black">%99</h3>
              <p className="text-black font-medium">Müşteri Memnuniyeti</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('iletisim')}
              className="animate-pulse-gradient bg-gradient-primary text-primary-foreground px-8 py-4 text-lg hover:shadow-professional transition-professional transform hover:scale-105"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('hizmetler')}
              className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-professional transform hover:scale-105"
            >
              Hizmetlerimizi İnceleyin
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-scale-in animate-gradient-shift" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-scale-in animate-pulse-gradient" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default Hero;