import { Loader2 } from "lucide-react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import GastronomicSection from "../components/GastronomicSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import ProductsSection from "../components/ProductsSection";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { useGetAllResinArtPieces } from "../hooks/useQueries";

export default function Gallery() {
  const { data: artPieces, isLoading } = useGetAllResinArtPieces();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // Show all resin art pieces (Van Gogh artworks and liquor bottle mosaics)
  const allPieces = artPieces || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GallerySection artPieces={allPieces} />
        <ProductsSection />
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
