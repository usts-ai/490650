import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { MaterialsSection } from '../components/MaterialsSection';
import { RealisationsSection } from '../components/RealisationsSection';
import { ReferencesSection } from '../components/ReferencesSection';
import { BoutiqueSection } from '../components/BoutiqueSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingDevisButton } from '../components/FloatingDevisButton';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#333333] antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MaterialsSection />
        <RealisationsSection />
        <ReferencesSection />
        <BoutiqueSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingDevisButton />
    </div>
  );
}
