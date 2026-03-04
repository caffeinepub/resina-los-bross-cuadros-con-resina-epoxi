import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ResinArtPiece } from "../backend";

interface ImageModalProps {
  piece: ResinArtPiece | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({
  piece,
  isOpen,
  onClose,
}: ImageModalProps) {
  if (!piece) return null;

  const imageUrl = piece.image.getDirectURL();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{piece.title}</DialogTitle>
          <DialogDescription className="text-base">
            {piece.description}
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt={piece.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        {(piece.resinEffect || piece.frameMaterial || piece.isTriptych) && (
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            {piece.resinEffect && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Resina Epoxi{" "}
                {piece.resinThickness ? `${piece.resinThickness}mm` : ""}
              </span>
            )}
            {piece.frameMaterial && (
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Marco de {piece.frameMaterial}
              </span>
            )}
            {piece.isTriptych && (
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium">
                Tríptico
              </span>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
