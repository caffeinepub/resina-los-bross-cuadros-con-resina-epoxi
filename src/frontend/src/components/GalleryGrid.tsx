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
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No hay obras disponibles en este momento.
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
