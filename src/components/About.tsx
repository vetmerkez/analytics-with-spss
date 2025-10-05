import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  BookOpen,
  Target,
  Clock,
  Shield,
  Zap,
  Heart
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Tamamlanan Proje", value: "700+", description: "Başarıyla tamamlanan analiz projesi" },
    { icon: GraduationCap, label: "Akademik Çalışma", value: "150+", description: "Desteklenen tez ve makale" },
    { icon: Award, label: "Deneyim Yılı", value: "7+", description: "İstatistiksel analiz alanında" },
    { icon: TrendingUp, label: "Müşteri Memnuniyeti", value: "%99", description: "Yüksek kalite standartları" }
  ];

  const expertise = [
    {
      icon: BookOpen,
      title: "Uzmanlık Alanlarım",
      description: "İstatistiksel Veri Analizi ve Araştırma Metodolojisi",
      details: [
        "İstatistiksel Veri Analizi (Eğitim, Sosyal Bilimler, Biyoistatistik)",
        "SPSS, AMOS ve R Yazılım Uzmanlığı",
        "Araştırma Metodolojisi ve Akademik Çalışma Desteği",
        "Veri Madenciliği ve Anket Verisi Analizi"
      ]
    },
    {
      icon: Target,
      title: "İstatistiksel Analizler",
      description: "Hipotez testleri ve ileri düzey analiz yöntemleri",
      details: [
        "Hipotez Testleri ve Karşılaştırmalı İstatistikler",
        "Regresyon Modelleri (Doğrusal, Lojistik, Çoklu)",
        "Faktör ve Kümeleme Analizleri",
        "Güvenilirlik ve Geçerlilik Analizleri (Cronbach's Alpha vb.)"
      ]
    },
    {
      icon: Clock,
      title: "Özel Analiz Alanları",
      description: "Biyoistatistik ve eğitim araştırmaları",
      details: [
        "Hayatta Kalma ve Klinik Veri Analizleri (Biyoistatistik)",
        "Eğitim Araştırmalarında Başarı Ölçümü",
        "Çok Düzeyli Analizler",
        "Yapısal Eşitlik Modellemesi"
      ]
    },
    {
      icon: Shield,
      title: "Hizmet Kalitesi",
      description: "Profesyonel ve güvenilir analiz hizmeti",
      details: [
        "7+ yıl deneyim",
        "Metrik İstatistik Akademi",
        "Hızlı ve güvenilir sonuçlar",
        "Bilimsel standartlarda raporlama"
      ]
    }
  ];

  const services = [
    {
      icon: Clock,
      title: "Hızlı Teslimat",
      description: "Projelerinizi mümkün olan en kısa sürede teslim ediyoruz",
      features: ["Express analiz", "Öncelikli destek", "Hızlı rapor"]
    },
    {
      icon: CheckCircle,
      title: "Kaliteli Sonuçlar",
      description: "Detaylı raporlama ve açıklamalarla profesyonel analiz",
      features: ["Detaylı yorumlama", "Görsel sunumlar", "Metodoloji açıklaması"]
    },
    {
      icon: Target,
      title: "Özel Çözümler",
      description: "Her projeye özel yaklaşım ve analiz stratejisi",
      features: ["Birebir görüşme", "Özel çözümler", "Sürekli destek"]
    },
    {
      icon: Users,
      title: "7/24 Destek",
      description: "Proje süresince sürekli iletişim ve destek",
      features: ["Sürekli iletişim", "Hızlı yanıt", "Teknik destek"]
    }
  ];



  return (
    <section id="hakkimizda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Hakkımızda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            7 yılı aşkın deneyimimle; eğitim, sosyal bilimler ve sağlık bilimleri (biyoistatistik) başta olmak üzere farklı disiplinlerde SPSS, AMOS ve R analiz hizmetleri sunuyoruz. Akademik geçmişim ve uygulamalı deneyimim sayesinde, karmaşık veri setlerini güvenilir ve anlamlı sonuçlara dönüştürme konusunda uzmanız.
          </p>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6 space-y-4">
            <p>
              Her proje bizim için benzersizdir. Bu nedenle tez, makale ve proje çalışmalarında, araştırmanın amacına uygun özelleştirilmiş istatistiksel çözümler geliştiriyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl mb-2">📌</div>
                <p className="font-semibold text-foreground">Sosyal Bilimler</p>
                <p className="text-sm">Anket analizi, tutum ve davranış ölçümleri, sosyal ağ analizi</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📌</div>
                <p className="font-semibold text-foreground">Eğitim Alanı</p>
                <p className="text-sm">Öğrenci başarısı, öğretim yöntemlerinin etkinliği, ölçek geliştirme</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📌</div>
                <p className="font-semibold text-foreground">Biyoistatistik</p>
                <p className="text-sm">Klinik veriler, epidemiyolojik çalışmalar, ilaç etkinliği, hayatta kalma analizleri</p>
              </div>
            </div>
            <p className="text-center mt-6">
              Kaliteli, hızlı ve güvenilir analiz sonuçları ile araştırmalarınızın bilimsel değerini artırmayı ve başarıya ulaşmasına katkı sağlamayı amaçlıyorum.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center shadow-professional hover-lift transition-professional bg-card border-border animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => (
            <Card 
              key={index}
              className="shadow-professional hover-lift transition-professional bg-card border-border animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gradient-primary">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Highlight */}
        <div className="mb-16 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">
               Neden Bizi Seçmelisiniz?
             </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesyonel yaklaşımımız, teknik uzmanlığımız ve müşteri odaklı hizmet anlayışımızla fark yaratıyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="shadow-professional hover-lift transition-professional bg-card border-border animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gradient-primary mb-2">{service.title}</h4>
                      <p className="text-muted-foreground mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
};

export default About;