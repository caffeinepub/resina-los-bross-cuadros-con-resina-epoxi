import { useEffect, useRef, useState } from "react";

interface ArtPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isPortrait?: boolean;
}

// Galería 100% estática — no depende del backend ni de base de datos.
// Para agregar/quitar imágenes, editar este array directamente.
// CONTENIDO: Mesas principales únicamente. Cuadros whisky → sección Especialidades. Piezas marinas → sección Gastronómica.
const GALLERY_PIECES: ArtPiece[] = [
  {
    id: "mesa-comedor-rio-especialidad",
    title: "Mesa de Comedor — Río de Resina",
    description:
      "Mesa de madera maciza live-edge con río de resina epoxi turquesa cristal. Profundidad real, brillo tipo espejo. Cada pieza es irrepetible.",
    imageUrl:
      "/assets/generated/mesa-comedor-rio-resina-especialidad.dim_1200x800.jpg",
  },
  {
    id: "mesa-rio-resina-nueva",
    title: "Mesa de Resina — Río Azul",
    description:
      "Mesa a medida con madera maciza y río de resina epoxi cristal azul en el centro. Superficie ultra brillante. Medidas personalizadas.",
    imageUrl: "/assets/generated/mesa-rio-resina-nueva.dim_1200x800.jpg",
  },
  {
    id: "mesa-ratona-rio-turquesa",
    title: "Mesa Ratona — Río Turquesa",
    description:
      "Mesa ratona de madera maciza live-edge con río de resina epoxi turquesa cristal en el centro. Acabado ultra brillante. Patas hairpin negras.",
    imageUrl:
      "/assets/generated/mesa-ratona-rio-turquesa-nueva.dim_800x600.jpg",
  },
  {
    id: "mesa-ratona-oceano-topografico",
    title: "Mesa Ratona — Océano Topográfico",
    description:
      "Mesa ratona circular con diseño de mapa topográfico oceánico en tonos turquesa, verde y arena. Resina epoxi con profundidad y brillo ultra espejo.",
    imageUrl:
      "/assets/generated/mesa-ratona-redonda-oceano-editada.dim_800x600.jpg",
  },
  {
    id: "mesa-ratona-galaxia-azul",
    title: "Mesa Ratona — Galaxia Azul",
    description:
      "Mesa ratona redonda con diseño galaxia en azul, violeta y blanco con destellos de brillo. Resina epoxi con efecto nebulosa, acabado cristal espejo.",
    imageUrl:
      "/assets/generated/mesa-ratona-galaxia-azul-editada.dim_800x600.jpg",
  },
  {
    id: "mesa-ratona-rectangular-ambar",
    title: "Mesa Ratona — Ámbar Miel",
    description:
      "Mesa ratona rectangular con resina epoxi en tono ámbar/miel cálido sobre madera maciza. Diseño minimalista y elegante. Patas hairpin negras.",
    imageUrl:
      "/assets/generated/mesa-ratona-rectangular-ambar-miel-premium.dim_1200x800.jpg",
  },
];

function GalleryModal({
  piece,
  onClose,
}: { piece: ArtPiece; onClose: () => void }) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      onKeyDown={(e) => {
        if (e.target === backdropRef.current && e.key === "Enter") onClose();
      }}
      data-ocid="gallery.modal"
    >
      <div
        className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
        style={{
          background: "rgba(20,12,2,0.98)",
          border: "1px solid rgba(200,146,42,0.3)",
        }}
      >
        <button
          type="button"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={onClose}
          data-ocid="gallery.modal.close_button"
        >
          ✕
        </button>
        <img
          src={piece.imageUrl}
          alt={piece.title}
          className={`w-full ${piece.isPortrait ? "max-h-[70vh] object-contain" : "h-72 object-cover"}`}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: "#f0d89a" }}>
            {piece.title}
          </h3>
          <p style={{ color: "rgba(210,180,130,0.80)" }}>{piece.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [selectedPiece, setSelectedPiece] = useState<ArtPiece | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 relative"
      style={{ background: "#0f0a04" }}
    >
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#1a1008" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(135deg, #e8b84b 0%, #f5d07a 40%, #c8922a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Galería de Arte en Resina
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(220,190,140,0.72)" }}
          >
            Explora nuestra colección de obras y piezas decorativas con acabado
            brillante en resina epoxi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GALLERY_PIECES.map((piece, idx) => (
            <button
              key={piece.id}
              type="button"
              data-ocid={`gallery.item.${idx + 1}`}
              className="group text-left cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 w-full"
              style={{
                background: "rgba(20,12,2,0.85)",
                border: "1px solid rgba(200,146,42,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,146,42,0.5)";
                el.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(200,146,42,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,146,42,0.18)";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
              }}
              onClick={() => setSelectedPiece(piece)}
            >
              <div
                className={`overflow-hidden bg-black/40 ${piece.isPortrait ? "h-72" : "h-56"}`}
              >
                <img
                  src={piece.imageUrl}
                  alt={piece.title}
                  loading={idx < 4 ? "eager" : "lazy"}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${piece.isPortrait ? "object-contain" : "object-cover"}`}
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ color: "#f0d89a" }}
                >
                  {piece.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(210,180,130,0.75)" }}
                >
                  {piece.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal lightbox */}
      {selectedPiece && (
        <GalleryModal
          piece={selectedPiece}
          onClose={() => setSelectedPiece(null)}
        />
      )}

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path
            d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z"
            fill="#1a1008"
          />
        </svg>
      </div>
    </section>
  );
}
