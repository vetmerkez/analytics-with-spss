import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Brain,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  Cog,
  Leaf,
  PieChart,
  Target,
  Users,
  Calculator,
  CheckCircle
} from "lucide-react";

// Placeholder image URL to avoid missing asset error
const analyticsImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='600' viewBox='0 0 500 600'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3Cg transform='translate(50,50)'%3E%3Ccircle cx='200' cy='150' r='80' fill='%23667eea' opacity='0.3'/%3E%3Crect x='100' y='250' width='200' height='120' rx='10' fill='%23764ba2' opacity='0.3'/%3E%3Cpath d='M50,400 Q200,350 350,400 T650,400' stroke='%23667eea' stroke-width='3' fill='none' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Sosyal Bilimler",
      description: "Anket verilerinin analizi, hipotez testleri ve değişkenler arası ilişkilerin incelenmesi konularında kapsamlı hizmet sunulmaktadır. Özellikle sosyoloji, psikoloji ve siyaset bilimi alanlarındaki araştırmalar için güvenilir ve detaylı istatistiksel çözümler sağlanmaktadır.",
      features: [
        "Korelasyon Analizi",
        "T-Testi (Bağımsız Örneklem, Eşleştirilmiş Örneklem)",
        "ANOVA (Tek Yönlü, Çok Yönlü)",
        "MANOVA",
        "ANCOVA",
        "Regresyon Analizi (Doğrusal, Lojistik, Çoklu)",
        "Faktör Analizi (Keşfedici, Doğrulayıcı)",
        "Güvenirlik Analizleri (Cronbach's Alpha vb.)",
        "Ki-Kare Testi",
        "Yapısal Eşitlik Modellemesi (AMOS, R)",
        "Non-parametrik Testler (Mann-Whitney U, Wilcoxon, Kruskal-Wallis vb.)"
      ]
    },
    {
      icon: GraduationCap,
      title: "Eğitim Araştırmaları",
      description: "Eğitim alanında; öğrenci başarısını etkileyen faktörlerin analizi, öğretim yöntemlerinin etkinlik değerlendirmesi ve eğitim politikalarına yönelik araştırmalar yapılmaktadır.",
      features: [
        "Çok Düzeyli (Multilevel) Analiz",
        "Eğitim İstatistikleri",
        "Başarı Ölçümü ve Değerlendirmesi",
        "Tutum Analizi",
        "Yapısal Eşitlik Modellemesi",
        "Ölçek Geliştirme ve Geçerlilik-Güvenirlik Analizleri"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Sağlık ve Tıp",
      description: "Klinik araştırmalar, epidemiyolojik çalışmalar ve hasta verilerinin istatistiksel analizi kapsamında; ilaç etkinliği, tedavi karşılaştırmaları ve risk faktörlerinin değerlendirilmesi yapılmaktadır.",
      features: [
        "Hayatta Kalma (Survival) Analizi",
        "Lojistik Regresyon",
        "ROC Analizi",
        "Meta Analiz",
        "Cox Regresyonu",
        "Kaplan-Meier Eğrileri",
        "Zaman Serisi Analizi (Klinik veriler için)"
      ]
    },
    {
      icon: TrendingUp,
      title: "Pazarlama ve İşletme",
      description: "Pazarlama ve işletme alanında; müşteri davranış analizi, pazar segmentasyonu, satış tahminleri, iş zekâsı uygulamaları ve performans ölçümleri yapılmaktadır.",
      features: [
        "Kümeleme Analizi",
        "Faktör Analizi",
        "Zaman Serisi Analizi",
        "Müşteri Analizi",
        "Regresyon Modelleri",
        "Tahminleme (Forecasting) Yöntemleri"
      ]
    },
    {
      icon: Cog,
      title: "Mühendislik",
      description: "Mühendislik alanında; kalite kontrol, süreç optimizasyonu, deney tasarımı ve üretim süreçlerinde hata analizi ile performans değerlendirmeleri gerçekleştirilmektedir.",
      features: ["Kalite Kontrol Analizleri", "Süreç Analizi ve İyileştirme", "Deney Tasarımı (DOE)", "Güvenilirlik Analizi", "Six Sigma ve SPC Uygulamaları", "Risk Analizi (FMEA vb.)"]
    },
    {
      icon: Leaf,
      title: "Çevre Bilimleri",
      description: "Çevre bilimleri alanında; çevresel verilerin analizi, kirlilik seviyelerinin değerlendirilmesi, sürdürülebilirlik çalışmaları ve ekolojik araştırmaların istatistiksel modellemesi gerçekleştirilmektedir.",
      features: ["Çevresel Modelleme", "İklim ve Hava Durumu Analizleri", "Ekolojik İstatistik", "Risk ve Etki Değerlendirmesi", "Coğrafi Bilgi Sistemleri (GIS) Tabanlı Analizler", "Zaman Serisi ve Trend Analizleri"]
    }
  ];

  const analysisTypes = [
    { 
      icon: TrendingUp,
      name: "Betimsel İstatistikler", 
      items: [
        "Ortalama, Medyan, Mod",
        "Varyans, Standart Sapma", 
        "Frekans Dağılımları",
        "Yüzdelik ve Çeyrek Değerler"
      ]
    },
    { 
      icon: PieChart, 
      name: "Grafik ve Görselleştirme", 
      items: [
        "Histogram",
        "Kutu (Boxplot) Grafiği",
        "Dağılım Grafikleri",
        "Çizgi ve Alan Grafikler",
        "Isı Haritaları"
      ]
    },
    { 
      icon: Calculator, 
      name: "Hipotez Testleri", 
      items: [
        "T-Testi (Bağımsız ve Eşleştirilmiş)",
        "Ki-Kare Testi",
        "Mann-Whitney U",
        "Wilcoxon Testi",
        "ANOVA ve ANCOVA",
        "Non-Parametrik Testler"
      ]
    },
    { 
      icon: Target,
      name: "İleri Analizler", 
      items: [
        "MANOVA",
        "Faktör Analizi (Keşfedici & Doğrulayıcı)",
        "Kümeleme Analizi",
        "Regresyon Analizleri (Doğrusal, Lojistik, Çoklu)",
        "Yapısal Eşitlik Modellemesi (AMOS, R, LISREL)",
        "Zaman Serisi Analizleri"
      ]
    },
    { 
      icon: Users, 
      name: "Sosyal Bilimler Analizleri", 
      items: [
        "Anket Verilerinin Analizi",
        "Tutum ve Davranış Analizleri",
        "Sosyal Ağ Analizi",
        "İçerik Analizi",
        "Ölçek Geliştirme ve Psikometrik Testler"
      ]
    },
    { 
      icon: GraduationCap, 
      name: "Eğitim İstatistikleri", 
      items: [
        "Öğrenci Başarısını Etkileyen Faktörlerin Analizi",
        "Çok Düzeyli (Multilevel) Analiz",
        "Başarı Ölçümü ve Değerlendirme",
        "Öğretim Yöntemlerinin Karşılaştırılması",
        "Geçerlilik ve Güvenirlik Analizleri"
      ]
    },
    { 
      icon: HeartHandshake, 
      name: "Biyoistatistik Analizleri", 
      items: [
        "Hayatta Kalma (Survival) Analizi",
        "Kaplan-Meier Eğrileri",
        "Cox Regresyonu",
        "ROC Eğrisi Analizi",
        "Meta Analiz",
        "Klinik ve Epidemiyolojik Çalışmalar"
      ]
    },
    { 
      icon: Cog, 
      name: "Mühendislik ve Endüstri Analizleri", 
      items: [
        "Kalite Kontrol (SPC, Six Sigma)",
        "Süreç Analizi ve Optimizasyonu",
        "Deney Tasarımı (DOE)",
        "Güvenilirlik Analizi",
        "Risk Analizi (FMEA vb.)"
      ]
    },
    { 
      icon: Leaf, 
      name: "Çevre Bilimleri Analizleri", 
      items: [
        "Çevresel Modelleme",
        "İklim ve Hava Durumu Analizleri",
        "Ekolojik İstatistik",
        "Risk ve Etki Değerlendirmesi",
        "GIS (Coğrafi Bilgi Sistemleri) Tabanlı Analizler"
      ]
    }
  ];



  return (
    <section id="hizmetler" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Hizmet Alanlarımız
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sosyal bilimler, eğitim ve sağlık bilimleri (biyoistatistik) alanlarında; tez, makale ve proje çalışmalarınız için SPSS, AMOS ve R analiz hizmetleri sunuyoruz. Araştırmalarınızı güvenilir, profesyonel ve eksiksiz şekilde tamamlamanıza destek oluyoruz.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group shadow-professional hover-lift transition-professional bg-card border-border animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-gradient-primary group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analysis Types Section */}
        <div className="bg-card rounded-2xl p-8 mb-16 border border-border animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">
              Sunduğumuz Analiz Türleri
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {analysisTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover-lift transition-professional animate-slide-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-gradient-primary text-lg">{type.name}</h4>
                </div>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">🔹</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:bg-gradient-primary/90 shadow-professional transition-professional"
              onClick={() => document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Analiz Talebi Oluştur
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Services;