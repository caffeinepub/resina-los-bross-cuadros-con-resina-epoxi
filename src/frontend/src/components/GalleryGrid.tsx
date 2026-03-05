import type { ResinArtPiece } from "../backend";
import GalleryItem from "./GalleryItem";

interface GalleryGridProps {
  artPieces: ResinArtPiece[];
  onSelectPiece: (piece: ResinArtPiece) => void;
}

export default function GalleryGrid({
  artPieces,
  onSelectPiece,
}: GalleryGridProps) {
  if (artPieces.length === 0) {
    return (
      <div className="flex flex-col items-center gap-8 py-12">
        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-amber-800/30">
          <img
            src="/assets/generated/mesa-ratona-rectangular-ambar-miel-premium.dim_1200x800.jpg"
            alt="Mesa Ratona Ámbar — Diseño en Resina Epoxi"
            loading="lazy"
            className="w-full h-72 object-cover"
          />
          <div className="p-5" style={{ background: "rgba(20,12,2,0.85)" }}>
            <h3 className="text-lg font-bold mb-1" style={{ color: "#f0d89a" }}>
              Mesa Ratona Rectangular — Ámbar Miel
            </h3>
            <p className="text-sm" style={{ color: "rgba(210,180,130,0.80)" }}>
              Madera maciza con río de resina epoxi en tono ámbar/miel. Patas
              hairpin negras. Diseño minimalista y elegante.
            </p>
            <p
              className="text-xs mt-3 font-semibold"
              style={{ color: "#e8b84b" }}
            >
              Desde $195.000 — Consultá por WhatsApp para disponibilidad
            </p>
          </div>
        </div>
        <p className="text-sm" style={{ color: "rgba(200,175,130,0.55)" }}>
          Próximamente más obras en galería.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {artPieces.map((piece) => (
        <GalleryItem
          key={piece.id}
          piece={piece}
          onClick={() => onSelectPiece(piece)}
        />
      ))}
    </div>
  );
}
