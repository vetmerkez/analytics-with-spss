import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  Send, 
  Mail, 
  Phone,
  Clock,
  CreditCard,
  Banknote,
  CheckCircle,
  FileText,
  Calculator
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Merhaba, SPSS analizi hizmeti almak istiyorum.

İsim: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Proje Türü: ${formData.projectType}

Proje Detayları:
${formData.message}`;

    const whatsappUrl = `https://wa.me/905321234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Yönlendiriliyor",
      description: "WhatsApp üzerinden iletişime geçiliyor...",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Hızlı iletişim için",
      value: "+90 532 123 45 67",
      action: () => window.open('https://wa.me/905321234567', '_blank'),
      primary: true
    },
    {
      icon: Phone,
      title: "Telefon",
      description: "Direkt arama yapın",
      value: "+90 532 123 45 67",
      action: () => window.location.href = 'tel:+905321234567',
      primary: false
    },
    {
      icon: Mail,
      title: "E-posta",
      description: "Detaylı bilgi için",
      value: "info@spssanaliz.com",
      action: () => window.location.href = 'mailto:info@spssanaliz.com',
      primary: false
    }
  ];

  const projectTypes = [
    "Tez Analizi",
    "Makale Araştırması", 
    "İşletme Analizi",
    "Sağlık Araştırması",
    "Eğitim Çalışması",
    "Diğer"
  ];

  const priceFeatures = [
    "Proje karmaşıklığına göre uygun fiyatlandırma",
    "Nakit ödeme kabul edilir",
    "Havale/EFT ile ödeme imkanı",
    "Proje teslimi sonrası ödeme seçeneği",
    "Öğrenci indirimi mevcut"
  ];

  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            İletişime Geçin
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SPSS, AMOS ve R analiz hizmetleriniz için hemen iletişime geçin, tez, makale veya proje çalışmanız için ücretsiz ön değerlendirme fırsatından yararlanın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-professional bg-card border-border animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-primary">Proje Detayları</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Projeniz hakkında detaylı bilgi verin, size özel çözüm önerisi hazırlayalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                      <label htmlFor="name" className="text-foreground">Ad Soyad *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <label htmlFor="email" className="text-foreground">E-posta *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                      <label htmlFor="phone" className="text-foreground">Telefon</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    <div className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <label htmlFor="projectType" className="text-foreground">Proje Türü *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="" className="bg-background text-foreground">Proje türünü seçin</option>
                        <option value="thesis" className="bg-background text-foreground">Tez Analizi</option>
                        <option value="article" className="bg-background text-foreground">Makale Analizi</option>
                        <option value="research" className="bg-background text-foreground">Araştırma Projesi</option>
                        <option value="business" className="bg-background text-foreground">İş Analizi</option>
                        <option value="other" className="bg-background text-foreground">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                    <label htmlFor="message" className="text-foreground">Proje Detayları *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin: veri türü, analiz ihtiyacı, zaman çizelgesi vb."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground animate-scale-in"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Proje Talebini Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="shadow-professional bg-card border-border animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-primary">
                  Hızlı İletişim
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    onClick={method.action}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover-lift animate-slide-in-up ${
                      method.primary 
                        ? 'bg-blue-600 text-white border-blue-500/20 hover:bg-blue-700' 
                        : 'bg-card hover:bg-blue-50 hover:border-blue-200 border-border text-foreground hover:text-blue-700'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-center space-x-3">
                      <method.icon className="h-6 w-6" />
                      <div className="flex-1">
                        <h4 className="font-semibold">
                          {method.title}
                        </h4>
                        <p className="text-sm opacity-80">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="shadow-professional bg-card border-border animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg text-gradient-primary">
                  <Clock className="h-5 w-5" />
                  <span>Çalışma Saatleri</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="text-center p-4 bg-gradient-primary rounded-lg">
                    <span className="text-primary-foreground font-bold text-lg">Full Time Çalışma</span>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">
                      Projelerinize tam zamanlı odaklanıyoruz
                    </p>
                    <p className="text-foreground font-medium">
                      7 gün 24 saat proje desteği
                    </p>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">İletişim:</span>
                      <span className="text-foreground font-medium">Her zaman aktif</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Proje Takibi:</span>
                      <span className="text-foreground font-medium">Sürekli güncelleme</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <Card className="shadow-professional bg-card border-border animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg text-gradient-primary">
                  <Banknote className="h-5 w-5" />
                  <span>Ödeme Bilgileri</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {priceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 animate-slide-in-up" style={{animationDelay: `${index * 0.05}s`}}>
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;