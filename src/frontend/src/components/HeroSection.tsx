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
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0f00 0%, #2d1a00 25%, #3d2500 50%, #4a2e08 70%, #2d1a00 100%)",
      }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8922a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Resin-like glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, #c8922a, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #e8b84b, transparent)",
          }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-15"
          style={{
            background: "radial-gradient(circle, #7fb069, transparent)",
          }}
        />
      </div>

      {/* Floating resin drops decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "12px",
            height: "12px",
            background: "rgba(200,146,42,0.6)",
            left: "10%",
            top: "15%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "20px",
            height: "20px",
            background: "rgba(100,180,120,0.5)",
            left: "22%",
            top: "33%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "28px",
            height: "28px",
            background: "rgba(232,184,75,0.5)",
            left: "34%",
            top: "51%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "36px",
            height: "36px",
            background: "rgba(200,146,42,0.6)",
            left: "46%",
            top: "15%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "44px",
            height: "44px",
            background: "rgba(100,180,120,0.5)",
            left: "58%",
            top: "33%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "52px",
            height: "52px",
            background: "rgba(232,184,75,0.5)",
            left: "70%",
            top: "51%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "60px",
            height: "60px",
            background: "rgba(200,146,42,0.6)",
            left: "82%",
            top: "15%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: "68px",
            height: "68px",
            background: "rgba(100,180,120,0.5)",
            left: "18%",
            top: "69%",
            filter: "blur(1px)",
            boxShadow: "inset 0 2px 6px rgba(255,255,255,0.3)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{
              background: "rgba(200,146,42,0.15)",
              borderColor: "rgba(200,146,42,0.4)",
            }}
          >
            <Sparkles className="h-4 w-4" style={{ color: "#e8b84b" }} />
            <span className="text-sm font-medium" style={{ color: "#e8b84b" }}>
              Especialistas en Resina Epoxi · Córdoba, Argentina
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #e8b84b 0%, #f5d07a 30%, #c8922a 60%, #e8b84b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            Resina Los Bross
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: "rgba(240,220,180,0.85)" }}
          >
            Mesas a medida, mesas ratonas y cuadros decorativos únicos
            encapsulados en resina epoxi cristal.
          </p>
          <p
            className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(200,180,140,0.7)" }}
          >
            Cada pieza hecha a mano con materiales de calidad y acabado
            artesanal profesional.{" "}
            <span
              className="font-medium"
              style={{ color: "rgba(232,184,75,0.9)" }}
            >
              Distribuimos a todo el país.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToGallery}
              className="text-lg px-8 py-6 font-semibold shadow-lg"
              style={{
                background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                color: "#1a0f00",
                border: "none",
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
              className="text-lg px-8 py-6 font-semibold"
              style={{
                background: "transparent",
                color: "#e8b84b",
                border: "1.5px solid rgba(200,146,42,0.6)",
              }}
              data-ocid="hero.contact.button"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.98 0.005 60))",
        }}
      />
    </section>
  );
}
