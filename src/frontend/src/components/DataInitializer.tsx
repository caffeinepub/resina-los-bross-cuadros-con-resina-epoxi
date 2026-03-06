import { useEffect, useState } from "react";
import { ExternalBlob } from "../backend";
import { useActor } from "../hooks/useActor";

export default function DataInitializer() {
  const { actor, isFetching } = useActor();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      if (!actor || isFetching || initialized) return;

      try {
        // Check if data already exists
        const existingPieces = await actor.getAllResinArtPieces();

        // If we already have art pieces, don't re-initialize
        if (existingPieces.length > 0) {
          setInitialized(true);
          return;
        }

        // Resin epoxy art pieces — curated gallery
        const resinArtPieces = [
          // Mesas a medida — trabajos principales
          {
            id: "mesa-rio-resina-nueva",
            title: "Mesa de Resina — Río Azul",
            description:
              "Mesa a medida con madera maciza y río de resina epoxi cristal azul en el centro. Superficie ultra brillante. Medidas personalizadas.",
            imageUrl:
              "/assets/generated/mesa-rio-resina-nueva.dim_1200x800.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera maciza",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "mesa-ratona-oceano-topografico",
            title: "Mesa Ratona — Océano Topográfico",
            description:
              "Mesa ratona circular con diseño de mapa topográfico oceánico en tonos turquesa, verde y arena. Resina epoxi con profundidad y brillo ultra espejo. Patas hairpin negras.",
            imageUrl:
              "/assets/generated/mesa-ratona-redonda-oceano-editada.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera natural",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "mesa-ratona-galaxia-azul",
            title: "Mesa Ratona — Galaxia Azul",
            description:
              "Mesa ratona redonda con diseño galaxia en azul, violeta y blanco con destellos de brillo. Resina epoxi con efecto nebulosa, acabado cristal espejo.",
            imageUrl:
              "/assets/generated/mesa-ratona-galaxia-azul-editada.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Borde blanco",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "mesa-ratona-rio-turquesa",
            title: "Mesa Ratona — Río Turquesa",
            description:
              "Mesa ratona de madera maciza live-edge con río de resina epoxi turquesa cristal en el centro. Acabado ultra brillante con profundidad real. Patas hairpin negras.",
            imageUrl:
              "/assets/generated/mesa-ratona-rio-turquesa-nueva.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera live-edge",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          // Mesa gastronómica
          {
            id: "mesa-gastro-marina-nueva",
            title: "Mesa Gastronómica — Fondo del Mar",
            description:
              "Mesa para restaurante de mariscos con resina epoxi turquesa. Conchas, ostras, pinzas de cangrejo encapsuladas. 120 x 80 cm, capacidad 4 personas.",
            imageUrl:
              "/assets/generated/mesa-gastro-marina-nueva.dim_1200x800.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera maciza",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          // Cuadros con fragmentos de licor
          {
            id: "cuadro-blue-label-realista",
            title: "Cuadro Blue Label — 45×60 cm",
            description:
              "Cuadro decorativo 45×60 cm. Fragmentos de botella de Johnnie Walker Blue Label artísticamente encapsulados en resina epoxi negra con relieve 3D. Marco negro elegante.",
            imageUrl:
              "/assets/generated/cuadro-whisky-bluelabel-realista.dim_800x1000.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Marco negro",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "cuadro-black-label-realista",
            title: "Cuadro Black Label — 45×60 cm",
            description:
              "Cuadro decorativo 45×60 cm. Fragmentos de botella de Johnnie Walker Black Label encapsulados en resina epoxi cristal. Marco negro premium.",
            imageUrl:
              "/assets/generated/cuadro-whisky-blacklabel-realista.dim_800x1000.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Marco negro",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "cuadro-fernet-branca-resina-epoxy",
            title: "Cuadro Fernet Branca",
            description:
              "Cuadro decorativo con fragmentos de botella de Fernet Branca encapsulados en resina epoxi brillante. Marco de madera estético.",
            imageUrl:
              "/assets/generated/cuadro-fernet-branca-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-grey-goose-resina-epoxy",
            title: "Cuadro Grey Goose",
            description:
              "Fragmentos de botella de vodka Grey Goose encapsulados en resina epoxi sobre marco de madera.",
            imageUrl:
              "/assets/generated/cuadro-grey-goose-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-macallan-resina-epoxy",
            title: "Cuadro Macallan",
            description:
              "Fragmentos de botella de whisky Macallan encapsulados en resina epoxi brillante con marco de madera.",
            imageUrl:
              "/assets/generated/cuadro-macallan-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-vodka-beluga-cristal",
            title: "Cuadro Vodka Beluga",
            description:
              "Fragmentos de cristal de botella de vodka Beluga encapsulados en resina epoxi brillante. Diseño decorativo premium.",
            imageUrl:
              "/assets/generated/cuadro-vodka-beluga-cristal.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          // Trabajos reales del taller — piezas con conchas
          {
            id: "trabajo-real-conchas-circular",
            title: "Pieza Real — Conchas en Resina Circular",
            description:
              "Trabajo del taller: pieza circular con resina epoxi turquesa, encapsulando conchas, berberechos, pinzas de cangrejo y piedras del mar.",
            imageUrl: "/assets/uploads/IMG_2543-1.jpeg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Borde blanco",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "trabajo-real-conchas-ovalado",
            title: "Pieza Real — Composición Ovalada Marina",
            description:
              "Trabajo del taller: pieza ovalada con resina epoxi brillante, conchas, pinzas de cangrejo, piedras y caracoles encapsulados.",
            imageUrl: "/assets/uploads/IMG_2532-3.jpeg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Borde blanco",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "trabajo-real-conchas-vieiras",
            title: "Pieza Real — Vieiras y Conchas",
            description:
              "Trabajo del taller: composición circular con vieiras, piedras de río y conchas encapsuladas en resina epoxi turquesa.",
            imageUrl: "/assets/uploads/IMG_2521-2.jpeg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Borde blanco",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
        ];

        // Add each resin art piece to the backend
        for (const piece of resinArtPieces) {
          const imageBlob = ExternalBlob.fromURL(piece.imageUrl);
          await actor.addResinArtPiece(
            piece.id,
            piece.title,
            piece.description,
            imageBlob,
            piece.resinEffect,
            piece.resinThickness,
            piece.frameMaterial,
            piece.isTriptych,
            piece.isFragmented,
            piece.isVanGogh,
            piece.isNew,
          );
        }

        setInitialized(true);
      } catch (error) {
        console.error("Error initializing data:", error);
      }
    };

    initializeData();
  }, [actor, isFetching, initialized]);

  return null;
}
