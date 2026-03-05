import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <img
        src="/assets/generated/hero-mesa-resina-rio-premium-v2.dim_1600x900.jpg"
        alt="Mesa de resina epoxi premium artesanal"
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Layered dark overlay — deeper at top and bottom, lighter in center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.55) 75%, rgba(10,6,2,0.95) 100%)",
        }}
      />

      {/* Amber warm glow accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{
            background: "radial-gradient(circle, #d4a030, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{
            background: "radial-gradient(circle, #e8b84b, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8"
            style={{
              background: "rgba(200,146,42,0.12)",
              borderColor: "rgba(200,146,42,0.45)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Sparkles className="h-4 w-4" style={{ color: "#e8b84b" }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#e8c96a" }}
            >
              Producción 100% Artesanal · Córdoba, Argentina
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #e8b84b 0%, #f7e08a 35%, #d4902a 65%, #e8b84b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(200,146,42,0.35))",
            }}
          >
            Resina Los Bross
          </h1>

          {/* Subtitle — fully legible */}
          <p
            className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(255,240,210,0.95)" }}
          >
            Mesas a medida, mesas ratonas y cuadros decorativos únicos
            encapsulados en resina epoxi cristal.
          </p>
          <p
            className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(230,210,170,0.85)" }}
          >
            Cada pieza hecha a mano con materiales de calidad y acabado
            artesanal profesional.{" "}
            <span className="font-semibold" style={{ color: "#e8b84b" }}>
              Distribuimos a todo el país.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToGallery}
              className="text-lg px-9 py-6 font-bold shadow-2xl hover:scale-105 transition-transform duration-200"
              style={{
                background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                color: "#1a0f00",
                border: "none",
                boxShadow:
                  "0 0 30px rgba(200,146,42,0.5), 0 4px 20px rgba(0,0,0,0.5)",
              }}
              data-ocid="hero.gallery.button"
            >
              Ver Galería
            </Button>
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-9 py-6 font-semibold hover:bg-amber-900/20 transition-all duration-200"
              style={{
                background: "rgba(200,146,42,0.08)",
                color: "#f0d070",
                border: "1.5px solid rgba(200,146,42,0.55)",
              }}
              data-ocid="hero.contact.button"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Consultar
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <div
              className="w-px h-10 animate-pulse"
              style={{
                background: "linear-gradient(to bottom, transparent, #e8b84b)",
              }}
            />
            <span className="text-xs font-medium" style={{ color: "#e8b84b" }}>
              Deslizá para ver
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade to dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0f0a04)",
        }}
      />
    </section>
  );
}
