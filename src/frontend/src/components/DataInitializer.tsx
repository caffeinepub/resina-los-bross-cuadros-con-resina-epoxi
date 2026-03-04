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

        // Add realistic AI-generated resin epoxy art pieces
        const resinArtPieces = [
          // NEW: 3 landscape pieces with epoxy resin
          {
            id: "triptico-paisaje-resina-epoxi",
            title: "Tríptico de Paisaje con Resina Epoxi",
            description:
              "Tríptico de paisaje sobre lienzo con marcos de madera sellado con resina epoxi brillante de 2mm. Composición en tres paneles que crea un efecto panorámico impresionante.",
            imageUrl:
              "/assets/generated/triptico-paisaje-resina-epoxi.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: true,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "paisaje-atardecer-resina-epoxi",
            title: "Cuadro de Paisaje al Atardecer con Resina Epoxi",
            description:
              "Paisaje al atardecer sobre lienzo con marco de madera y acabado de resina epoxi brillante de 2mm. Los colores cálidos del atardecer se realzan con el efecto reflectante de la resina.",
            imageUrl:
              "/assets/generated/paisaje-atardecer-resina-epoxi.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "paisaje-montañoso-resina-epoxi",
            title: "Cuadro de Paisaje Montañoso con Resina Epoxi",
            description:
              "Paisaje montañoso sobre lienzo con marco de madera sellado con resina epoxi brillante de 2mm. La profundidad del paisaje se acentúa con el acabado brillante profesional.",
            imageUrl:
              "/assets/generated/paisaje-montañoso-resina-epoxi.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          // Canvas paintings with wooden frames encapsulated in 2mm resin
          {
            id: "noche-estrellada-resina-epoxy",
            title: "La Noche Estrellada con Resina Epoxi",
            description:
              "Pintura sobre lienzo con marco de madera encapsulada en resina epoxi de 2mm para un acabado brillante y protección duradera.",
            imageUrl:
              "/assets/generated/noche-estrellada-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "noche-estrellada-resina-marco",
            title: "La Noche Estrellada con Marco de Madera",
            description:
              "Obra sobre lienzo con marco de madera elegante y acabado de resina brillante de 2mm que realza los colores.",
            imageUrl:
              "/assets/generated/noche-estrellada-resina-marco.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "noche-estrellada-vertical-epoxy",
            title: "La Noche Estrellada Vertical",
            description:
              "Pintura vertical sobre lienzo con acabado de resina epoxi brillante de 2mm en formato alargado.",
            imageUrl:
              "/assets/generated/noche-estrellada-vertical-epoxy.dim_400x857.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-noche-estrellada-vertical-resina-epoxy",
            title: "Noche Estrellada Vertical con Resina",
            description:
              "Variante vertical con acabado de resina epoxi brillante de 2mm sobre marco de madera.",
            imageUrl:
              "/assets/generated/van-gogh-noche-estrellada-vertical-resina-epoxy.dim_400x857.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-triptico-epoxy-enhanced",
            title: "Tríptico con Resina Epoxi Brillante",
            description:
              "Tríptico artístico con acabado brillante de resina epoxi de 2mm que crea un efecto reflectante vívido.",
            imageUrl:
              "/assets/generated/van-gogh-triptico-epoxy-enhanced.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: true,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-triptico-resina-epoxy-enhanced",
            title: "Tríptico Artístico con Resina",
            description:
              "Composición en tres paneles con capa de resina epoxi brillante de 2mm sobre marcos de madera.",
            imageUrl:
              "/assets/generated/van-gogh-triptico-resina-epoxy-enhanced.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: true,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-triptico-resina-epoxi",
            title: "Tríptico con Acabado Epoxi",
            description:
              "Tríptico con acabado de resina epoxi brillante de 2mm sobre marcos de madera selecta.",
            imageUrl:
              "/assets/generated/van-gogh-triptico-resina-epoxi.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: true,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-triptico-resina-epoxi-alt",
            title: "Tríptico Alternativo con Resina",
            description:
              "Variante de tríptico con acabado de resina epoxi brillante de 2mm y marcos de madera.",
            imageUrl:
              "/assets/generated/van-gogh-triptico-resina-epoxi-alt.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: true,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-inspirado-resina-epoxy-realista",
            title: "Obra Artística con Resina Epoxi",
            description:
              "Pintura sobre lienzo con acabado brillante de resina epoxi de 2mm que realza colores y texturas.",
            imageUrl:
              "/assets/generated/van-gogh-inspirado-resina-epoxy-realista.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-noche-estrellada-resina-epoxy-realista",
            title: "Noche Estrellada Realista con Resina",
            description:
              "Interpretación realista con acabado de resina epoxi brillante de 2mm sobre marco de madera.",
            imageUrl:
              "/assets/generated/van-gogh-noche-estrellada-resina-epoxy-realista.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          {
            id: "van-gogh-paisaje-resina-epoxy-realista",
            title: "Paisaje Artístico con Resina Epoxi",
            description:
              "Paisaje sobre lienzo con acabado brillante de resina epoxi de 2mm sobre marco de madera.",
            imageUrl:
              "/assets/generated/van-gogh-paisaje-resina-epoxy-realista.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: true,
            isNew: false,
          },
          // Decorative mosaic-style pieces with liquor bottle fragments
          {
            id: "whisky-blue-label-fragmentos-resina-marco",
            title: "Mosaico Whisky Blue Label",
            description:
              "Pieza decorativa estilo mosaico con fragmentos de botella de Whisky Blue Label encapsulados en resina epoxi sobre marco de madera.",
            imageUrl:
              "/assets/generated/whisky-blue-label-fragmentos-resina-marco.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "whisky-fragmentos-resina-epoxy",
            title: "Mosaico de Whisky en Resina",
            description:
              "Fragmentos de botellas de whisky premium encapsulados en resina epoxi de 2mm con acabado brillante.",
            imageUrl:
              "/assets/generated/whisky-fragmentos-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "whisky-fragmentos-vidrio-marco-madera",
            title: "Mosaico de Whisky con Marco",
            description:
              "Fragmentos de vidrio de botellas de whisky en marco de madera con resina epoxi brillante de 2mm.",
            imageUrl:
              "/assets/generated/whisky-fragmentos-vidrio-marco-madera.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-fernet-branca-resina-epoxy",
            title: "Mosaico Fernet Branca",
            description:
              "Pieza decorativa con fragmentos de botella de Fernet Branca encapsulados en resina epoxi de 2mm.",
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
            id: "cuadro-fernet-branca-vidrio",
            title: "Mosaico Fernet Branca con Vidrio",
            description:
              "Fragmentos de vidrio de Fernet Branca en composición artística con resina epoxi brillante.",
            imageUrl:
              "/assets/generated/cuadro-fernet-branca-vidrio.dim_800x600.jpg",
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
            title: "Mosaico Grey Goose",
            description:
              "Fragmentos de botella de vodka Grey Goose encapsulados en resina epoxi de 2mm sobre marco de madera.",
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
            id: "cuadro-grey-goose-resina",
            title: "Mosaico Grey Goose Premium",
            description:
              "Pieza decorativa con fragmentos de Grey Goose en resina epoxi brillante de 2mm.",
            imageUrl:
              "/assets/generated/cuadro-grey-goose-resina.dim_800x600.jpg",
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
            title: "Mosaico Macallan",
            description:
              "Fragmentos de botella de whisky Macallan encapsulados en resina epoxi de 2mm con marco de madera.",
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
            id: "cuadro-macallan-vidrio-resina",
            title: "Mosaico Macallan con Vidrio",
            description:
              "Composición artística con fragmentos de vidrio de Macallan en resina epoxi brillante.",
            imageUrl:
              "/assets/generated/cuadro-macallan-vidrio-resina.dim_800x600.jpg",
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
            title: "Mosaico Vodka Beluga",
            description:
              "Fragmentos de cristal de botella de vodka Beluga encapsulados en resina epoxi de 2mm.",
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
          {
            id: "cuadro-vodka-beluga-resina-epoxy",
            title: "Mosaico Vodka Beluga Premium",
            description:
              "Pieza decorativa con fragmentos de Vodka Beluga en resina epoxi brillante de 2mm sobre marco de madera.",
            imageUrl:
              "/assets/generated/cuadro-vodka-beluga-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-whisky-blue-label-epoxy",
            title: "Mosaico Blue Label Epoxi",
            description:
              "Fragmentos de botella de Johnnie Walker Blue Label con acabado de resina epoxi de 2mm.",
            imageUrl:
              "/assets/generated/cuadro-whisky-blue-label-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-whisky-blue-label-resina-epoxy",
            title: "Mosaico Blue Label con Resina",
            description:
              "Composición artística con fragmentos de Blue Label encapsulados en resina epoxi brillante.",
            imageUrl:
              "/assets/generated/cuadro-whisky-blue-label-resina-epoxy.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-whisky-blue-label-resina",
            title: "Mosaico Blue Label Artístico",
            description:
              "Pieza decorativa estilo mosaico con fragmentos de Johnnie Walker Blue Label en resina epoxi de 2mm.",
            imageUrl:
              "/assets/generated/cuadro-whisky-blue-label-resina.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          {
            id: "cuadro-whisky-blue-label",
            title: "Mosaico Blue Label Clásico",
            description:
              "Fragmentos de botella de Blue Label en marco de madera con resina epoxi brillante de 2mm.",
            imageUrl:
              "/assets/generated/cuadro-whisky-blue-label.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera",
            isTriptych: false,
            isFragmented: true,
            isVanGogh: false,
            isNew: false,
          },
          // Trabajos reales del taller — piezas con conchas y elementos marinos
          {
            id: "trabajo-real-conchas-circular",
            title: "Pieza Real — Conchas y Resina Circular",
            description:
              "Trabajo real del taller: pieza circular con resina epoxi en tonos turquesa, encapsulando conchas, berberechos, pinzas de cangrejo y piedras del mar.",
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
              "Trabajo real del taller: pieza ovalada con resina epoxi brillante, conchas, pinzas de cangrejo, piedras y caracoles encapsulados en fondo verde-azulado.",
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
            title: "Pieza Real — Vieiras y Conchas en Resina",
            description:
              "Trabajo real del taller: composición circular con vieiras, piedras de río y conchas encapsuladas en resina epoxi turquesa brillante.",
            imageUrl: "/assets/uploads/IMG_2521-2.jpeg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Borde blanco",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          // Mesas gastronómicas generadas con IA
          {
            id: "mesa-mariscos-rectangular",
            title: "Mesa Gastronómica — Mar Profundo",
            description:
              "Mesa rectangular para restaurante de mariscos con superficie de resina epoxi en degradé oceánico, encapsulando conchas, ostras y pinzas de cangrejo. 180 x 80 cm, capacidad 6 personas.",
            imageUrl:
              "/assets/generated/mesa-mariscos-resina-epoxi-restaurante.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera maciza",
            isTriptych: false,
            isFragmented: false,
            isVanGogh: false,
            isNew: true,
          },
          {
            id: "mesa-mariscos-redonda",
            title: "Mesa Gastronómica Redonda — Arrecife",
            description:
              "Mesa redonda para restaurante con superficie de resina epoxi oceánica, encapsulando conchas, caracoles y piedras marinas. Ø 120 cm, pedestal de madera maciza, capacidad 4 personas.",
            imageUrl:
              "/assets/generated/mesa-redonda-mariscos-resina.dim_800x600.jpg",
            resinEffect: true,
            resinThickness: 2n,
            frameMaterial: "Madera maciza",
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
