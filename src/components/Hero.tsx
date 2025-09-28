import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-spss.jpg";

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
              <span className="text-gradient-primary">SPSS Analizi</span>
              <br />
              <span className="text-foreground">Uzmanı</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Sosyal bilimlerden sağlığa, eğitimden iş dünyasına kadar tüm alanlarda 
              <span className="text-gradient-accent font-semibold"> profesyonel SPSS analizi</span> hizmeti. 
              Verilerinizi anlamlı sonuçlara dönüştürün.
            </p>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover-lift">
              <div className="p-3 bg-gradient-primary rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">500+</h3>
              <p className="text-muted-foreground">Tamamlanan Analiz</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover-lift">
              <div className="p-3 bg-gradient-accent rounded-full mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-accent">6</h3>
              <p className="text-muted-foreground">Farklı Disiplin</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-card hover-lift">
              <div className="p-3 bg-gradient-primary rounded-full mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">%98</h3>
              <p className="text-muted-foreground">Müşteri Memnuniyeti</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('iletisim')}
              className="bg-gradient-primary text-primary-foreground px-8 py-4 text-lg hover:shadow-professional transition-professional"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('hizmetler')}
              className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-professional"
            >
              Hizmetlerimizi İnceleyin
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-scale-in" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-scale-in" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default Hero;