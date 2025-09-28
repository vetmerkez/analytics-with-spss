import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  Clock, 
  CheckCircle,
  BookOpen,
  Users,
  TrendingUp,
  Target
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "7+", label: "Yıllık Deneyim" },
    { icon: Users, number: "200+", label: "Mutlu Müşteri" },
    { icon: BookOpen, number: "500+", label: "Analiz Projesi" },
    { icon: TrendingUp, number: "%98", label: "Başarı Oranı" }
  ];

  const expertise = [
    "İstatistiksel Veri Analizi",
    "SPSS Yazılım Uzmanlığı", 
    "Araştırma Metodolojisi",
    "Veri Madenciliği",
    "Hipotez Testleri",
    "Regresyon Modelleri",
    "Faktör Analizi",
    "Güvenilirlik Analizi"
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Hızlı Teslimat",
      description: "Projelerinizi mümkün olan en kısa sürede teslim ediyoruz"
    },
    {
      icon: CheckCircle,
      title: "Kaliteli Sonuçlar",
      description: "Detaylı raporlama ve açıklamalarla profesyonel analiz"
    },
    {
      icon: Target,
      title: "Özel Çözümler",
      description: "Her projeye özel yaklaşım ve analiz stratejisi"
    },
    {
      icon: Users,
      title: "7/24 Destek",
      description: "Proje süresince sürekli iletişim ve destek"
    }
  ];

  return (
    <section id="hakkimda" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Hakkımda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesyonel SPSS analizi konusunda uzman, deneyimli bir analitik uzmanı
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <Card className="p-8 shadow-professional bg-card border-border">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Dr. SPSS Uzmanı</h3>
                    <p className="text-muted-foreground">İstatistiksel Veri Analizi Uzmanı</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  7 yılı aşkın deneyimle, sosyal bilimlerden sağlığa, eğitimden iş dünyasına kadar 
                  geniş bir yelpazede SPSS analizi hizmeti sunuyorum. Akademik geçmişim ve pratik 
                  deneyimimle, karmaşık veri setlerini anlamlı sonuçlara dönüştürme konusunda 
                  uzmanlaştım.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Her proje benim için benzersizdir ve müşterilerimin ihtiyaçlarına göre özelleştirilmiş 
                  çözümler sunarım. Kaliteli, hızlı ve güvenilir analiz sonuçları ile araştırmanızın 
                  başarıya ulaşması için buradayım.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover-lift shadow-card bg-card border-border">
                  <CardContent className="p-0">
                    <div className="p-3 bg-gradient-accent rounded-full w-fit mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-1">{stat.number}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Expertise & Advantages */}
          <div className="space-y-8">
            {/* Expertise */}
            <Card className="p-8 shadow-professional bg-card border-border">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                  Uzmanlık Alanlarım
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="p-3 justify-start text-sm bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advantages */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient-primary">
                Neden Beni Seçmelisiniz?
              </h3>
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 hover-lift shadow-card bg-card border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
                        <advantage.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{advantage.title}</h4>
                        <p className="text-sm text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;