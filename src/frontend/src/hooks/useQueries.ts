import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ResinArtPiece } from "../backend";
import type { ExternalBlob } from "../backend";
import { useActor } from "./useActor";

export function useGetAllResinArtPieces() {
  const { actor, isFetching } = useActor();

  return useQuery<ResinArtPiece[]>({
    queryKey: ["resinArtPieces"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllResinArtPieces();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddResinArtPiece() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      title,
      description,
      image,
      resinEffect,
      resinThickness,
      frameMaterial,
      isTriptych,
      isFragmented,
      isVanGogh,
      isNew,
    }: {
      id: string;
      title: string;
      description: string;
      image: ExternalBlob;
      resinEffect: boolean;
      resinThickness: bigint | null;
      frameMaterial: string | null;
      isTriptych: boolean;
      isFragmented: boolean;
      isVanGogh: boolean;
      isNew: boolean;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.addResinArtPiece(
        id,
        title,
        description,
        image,
        resinEffect,
        resinThickness,
        frameMaterial,
        isTriptych,
        isFragmented,
        isVanGogh,
        isNew,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["resinArtPieces"] });
    },
  });
}
