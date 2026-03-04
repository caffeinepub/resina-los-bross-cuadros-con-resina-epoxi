import { Card, CardContent } from "@/components/ui/card";
import type { ResinArtPiece } from "../backend";

interface GalleryItemProps {
  piece: ResinArtPiece;
  onClick: () => void;
}

export default function GalleryItem({ piece, onClick }: GalleryItemProps) {
  const imageUrl = piece.image.getDirectURL();

  return (
    <Card
      className="overflow-hidden cursor-pointer group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={piece.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {piece.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {piece.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
