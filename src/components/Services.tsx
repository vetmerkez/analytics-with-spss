import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  HeartHandshake, 
  TrendingUp, 
  GraduationCap, 
  Cog, 
  Leaf,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Users,
  FileText
} from "lucide-react";
import analyticsImage from "@/assets/analytics-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Sosyal Bilimler",
      description: "Anket verilerinin analizi, hipotez testi ve değişkenler arası ilişkilerin incelenmesi. Sosyoloji, psikoloji ve siyaset bilimi araştırmaları.",
      features: ["Korelasyon Analizi", "T-Test", "ANOVA", "Regresyon Analizi"]
    },
    {
      icon: HeartHandshake,
      title: "Sağlık ve Tıp",
      description: "Klinik araştırmalar, epidemiyolojik çalışmalar ve hasta verilerinin istatistiksel analizi. İlaç etkinliği ve risk faktörü değerlendirmeleri.",
      features: ["Hayatta Kalma Analizi", "Lojistik Regresyon", "ROC Analizi", "Meta Analiz"]
    },
    {
      icon: TrendingUp,
      title: "Pazarlama ve İşletme",
      description: "Müşteri davranış analizi, pazar segmentasyonu ve satış tahminleri. İş zekası ve performans ölçümü çalışmaları.",
      features: ["Küme Analizi", "Faktör Analizi", "Zaman Serisi", "Müşteri Analizi"]
    },
    {
      icon: GraduationCap,
      title: "Eğitim Araştırmaları",
      description: "Öğrenci başarısını etkileyen faktörlerin analizi, öğretim yöntemlerinin değerlendirilmesi ve eğitim politikası araştırmaları.",
      features: ["Çok Düzeyli Analiz", "Eğitim İstatistikleri", "Başarı Ölçümü", "Tutum Analizi"]
    },
    {
      icon: Cog,
      title: "Mühendislik",
      description: "Kalite kontrol, süreç optimizasyonu ve deney tasarımı. Üretim süreçlerinde hata analizi ve performans değerlendirmeleri.",
      features: ["Kalite Kontrol", "Süreç Analizi", "Deney Tasarımı", "Güvenilirlik Analizi"]
    },
    {
      icon: Leaf,
      title: "Çevre Bilimleri",
      description: "Çevresel verilerin analizi, kirlilik seviyelerinin değerlendirilmesi ve ekolojik araştırmaların istatistiksel modellemesi.",
      features: ["Çevresel Modelleme", "İklim Analizi", "Ekolojik İstatistik", "Risk Değerlendirme"]
    }
  ];

  const analysisTypes = [
    { icon: BarChart3, title: "Betimsel İstatistikler", description: "Ortalama, medyan, standart sapma" },
    { icon: PieChart, title: "Grafik ve Görselleştirme", description: "Histogram, kutu grafiği, dağılım grafikleri" },
    { icon: Activity, title: "Hipotez Testleri", description: "T-test, Ki-kare, Mann-Whitney U" },
    { icon: Target, title: "İleri Analizler", description: "MANOVA, Faktör analizi, Küme analizi" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hizmetler" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Hizmet Alanlarımız
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Farklı disiplinlerde uzmanlaşmış SPSS analizi hizmetleri ile araştırmanızı güvenle tamamlayın
          </p>
        </div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift shadow-card border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analysis Types */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-primary">
                Sunduğumuz Analiz Türleri
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {analysisTypes.map((type, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-accent rounded-lg flex-shrink-0">
                      <type.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{type.title}</h4>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                onClick={scrollToContact}
                className="mt-8 bg-gradient-primary text-primary-foreground hover:shadow-professional transition-professional"
              >
                Projemi Değerlendirin
              </Button>
            </div>
            <div className="relative">
              <img 
                src={analyticsImage} 
                alt="SPSS Analytics Illustration" 
                className="w-full h-auto rounded-2xl shadow-professional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;