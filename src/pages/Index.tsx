import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components to reduce initial bundle size
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <Contact />
        </Suspense>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 SPSS Analiz. Tüm hakları saklıdır. | Profesyonel Veri Analizi Hizmetleri
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
