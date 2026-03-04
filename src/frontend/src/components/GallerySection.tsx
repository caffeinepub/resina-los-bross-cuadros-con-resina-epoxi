import { useState } from "react";
import type { ResinArtPiece } from "../backend";
import GalleryGrid from "./GalleryGrid";
import ImageModal from "./ImageModal";

interface GallerySectionProps {
  artPieces: ResinArtPiece[];
}

export default function GallerySection({ artPieces }: GallerySectionProps) {
  const [selectedPiece, setSelectedPiece] = useState<ResinArtPiece | null>(
    null,
  );

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Galería de Arte en Resina
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra colección completa de obras de arte realistas
            encapsuladas en resina epoxi de 2mm
          </p>
        </div>

        <GalleryGrid artPieces={artPieces} onSelectPiece={setSelectedPiece} />

        <ImageModal
          piece={selectedPiece}
          isOpen={!!selectedPiece}
          onClose={() => setSelectedPiece(null)}
        />
      </div>
    </section>
  );
}
