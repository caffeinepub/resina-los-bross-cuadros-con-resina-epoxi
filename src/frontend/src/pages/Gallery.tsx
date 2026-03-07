import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GastronomicSection from "../components/GastronomicSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import ProductsSection from "../components/ProductsSection";
import ValueSection from "../components/ValueSection";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <ValueSection />
        <GastronomicSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
