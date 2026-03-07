import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Gem,
  Layers,
  MessageCircle,
  Settings2,
  Sparkles,
  Wine,
} from "lucide-react";

export default function ProductsSection() {
  const products = [
    // ── MESAS (productos principales) ────────────────────────────────────────
    {
      icon: Layers,
      image:
        "/assets/generated/mesa-comedor-rio-resina-especialidad.dim_1200x800.jpg",
      title: "Mesa de Comedor — Río de Resina",
      price: "Desde $633.000",
      marketRef: "Diseño equivalente importado: desde $900.000",
      uniqueTag: "Pieza única — ningún diseño se repite",
      description:
        "Mesa de madera maciza live-edge con un río de resina epoxi turquesa cristal fluyendo por el centro. Profundidad real, brillo tipo espejo y colores que brillan con la luz.",
      features: [
        "Madera maciza con bordes naturales",
        "Río de resina epoxi cristal multicapa",
        "Acabado espejo ultra brillante",
        "Medidas a pedido",
      ],
      isPortrait: false,
    },
    {
      icon: Settings2,
      image: "/assets/generated/mesa-ratona-rio-turquesa-nueva.dim_800x600.jpg",
      title: "Mesa Ratona — Río Turquesa",
      price: "Desde $399.000",
      marketRef: "Mesas ratonas de diseño en el mercado: desde $550.000",
      uniqueTag: "Pieza única — ningún diseño se repite",
      description:
        "Mesa ratona de madera maciza live-edge con río de resina epoxi turquesa cristal en el centro. Acabado ultra brillante con profundidad real. Patas hairpin negras.",
      features: [
        "Madera maciza live-edge",
        "Río de resina turquesa",
        "Patas hairpin negras",
      ],
      isPortrait: false,
    },
    {
      icon: Settings2,
      image:
        "/assets/generated/mesa-ratona-galaxia-azul-editada.dim_800x600.jpg",
      title: "Mesa Ratona — Galaxia Azul",
      price: "Desde $399.000",
      marketRef: "Mesas ratonas de diseño en el mercado: desde $550.000",
      uniqueTag: "Pieza única — ningún diseño se repite",
      description:
        "Mesa ratona redonda con diseño galaxia en azul, violeta y blanco con destellos de brillo. Resina epoxi con efecto nebulosa, acabado cristal espejo.",
      features: [
        "Diseño galaxia exclusivo",
        "Destellos brillantes en resina",
        "Acabado espejo cristal",
      ],
      isPortrait: false,
    },
    {
      icon: Settings2,
      image:
        "/assets/generated/mesa-ratona-redonda-oceano-editada.dim_800x600.jpg",
      title: "Mesa Ratona — Océano Topográfico",
      price: "Desde $399.000",
      marketRef: "Mesas ratonas de diseño en el mercado: desde $550.000",
      uniqueTag: "Pieza única — ningún diseño se repite",
      description:
        "Mesa ratona circular con diseño de mapa topográfico oceánico en tonos turquesa, verde y arena. Resina epoxi con profundidad y brillo ultra espejo. Patas hairpin negras.",
      features: [
        "Diseño topográfico oceánico",
        "Tonos turquesa, verde y arena",
        "Acabado cristal espejo",
      ],
      isPortrait: false,
    },
    // ── CUADROS (productos decorativos) ──────────────────────────────────────
    {
      icon: Gem,
      image:
        "/assets/generated/cuadro-blue-label-ultra-realista-45x60.dim_800x1067.jpg",
      title: "Cuadro Blue Label — 45×60 cm",
      price: "Desde $239.000",
      marketRef: null,
      uniqueTag: "Pieza única — ningún diseño se repite",
      description:
        "Cuadro decorativo exclusivo 45×60 cm con fragmentos de botella de whisky Blue Label rota, artísticamente encapsulados en resina epoxi con acabado brillante y relieve 3D. Marco negro elegante.",
      features: [
        "Medidas: 45 cm × 60 cm",
        "Marco negro elegante",
        "Fragmentos de vidrio encapsulados",
        "Resina negra brillante relieve 3D",
      ],
      isPortrait: true,
    },
    {
      icon: Wine,
      image:
        "/assets/generated/cuadro-black-label-ultra-realista-45x60.dim_800x1067.jpg",
      title: "Cuadro Black Label — 45×60 cm",
      price: "Desde $239.000",
      marketRef: null,
      uniqueTag: "Pieza única — ningún diseño se repite",
      description:
        "Cuadro decorativo 45×60 cm con fragmentos de botella de whisky Black Label rota, sellados con resina epoxi cristal de acabado brillante. Pieza premium con marco negro.",
      features: [
        "Medidas: 45 cm × 60 cm",
        "Marco negro premium",
        "Vidrio encapsulado en resina",
        "Brillo profundo tipo espejo",
      ],
      isPortrait: true,
    },
    // ── DISEÑOS PERSONALIZADOS ────────────────────────────────────────────────
    {
      icon: Settings2,
      image: "/assets/generated/mesa-resina-rio.dim_1200x800.jpg",
      title: "Diseños Personalizados",
      price: "Consultar",
      marketRef: null,
      uniqueTag: null,
      description:
        "Creamos cualquier diseño con resina epoxi adaptado a tus gustos, medidas y espacio. Asesoramiento personalizado incluido. Distribuimos a todo el país.",
      features: [
        "100% a medida",
        "Asesoría personalizada incluida",
        "Distribuimos a todo el país",
      ],
      isCustom: true,
      isPortrait: false,
    },
  ];

  return (
    <section
      id="products"
      className="py-24 relative"
      style={{ background: "#1a1008" }}
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
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 L0,0 Z" fill="#0f0a04" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              background: "rgba(200,146,42,0.10)",
              borderColor: "rgba(200,146,42,0.30)",
            }}
          >
            <Layers className="h-4 w-4" style={{ color: "#e8b84b" }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#e8b84b" }}
            >
              Nuestras Especialidades
            </span>
          </div>
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
            Lo Que Hacemos
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(220,190,140,0.72)" }}
          >
            Trabajamos con resina epoxi para crear piezas únicas, funcionales y
            decorativas — mesas, mesas ratonas y cuadros encapsulados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.title}
                data-ocid={`products.item.${idx + 1}`}
                className="overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col"
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
              >
                {/* Image container — taller for portrait cuadros */}
                <div
                  className={`overflow-hidden bg-black/40 relative ${product.isPortrait ? "h-72" : "h-56"}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className={`w-full h-full transition-transform duration-700 hover:scale-105 ${product.isPortrait ? "object-contain" : "object-cover"}`}
                  />
                  {/* Price badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                      color: "#1a0f00",
                    }}
                  >
                    {product.price}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                    style={{
                      background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                    }}
                  >
                    <Icon className="h-4 w-4" style={{ color: "#1a0f00" }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: "#f0d89a" }}>
                    {product.title}
                  </CardTitle>
                  <CardDescription
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(210,180,130,0.80)" }}
                  >
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "rgba(200,175,130,0.82)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "#e8b84b" }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Market comparison */}
                  {product.marketRef && (
                    <div
                      className="mb-3 px-3 py-2 rounded-lg text-xs font-medium"
                      style={{
                        background: "rgba(200,146,42,0.08)",
                        color: "rgba(230,200,140,0.80)",
                        borderLeft: "2px solid rgba(200,146,42,0.45)",
                      }}
                    >
                      {product.marketRef}
                    </div>
                  )}

                  {/* Unique tag */}
                  {product.uniqueTag && (
                    <div className="flex items-center gap-1.5 mb-4">
                      <Sparkles
                        className="h-3 w-3 shrink-0"
                        style={{ color: "#e8b84b" }}
                      />
                      <span
                        className="text-xs font-semibold italic"
                        style={{ color: "rgba(232,184,75,0.75)" }}
                      >
                        {product.uniqueTag}
                      </span>
                    </div>
                  )}

                  <Button
                    asChild
                    size="sm"
                    className="w-full font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                      color: "#1a0f00",
                      border: "none",
                    }}
                    data-ocid={`products.item.${idx + 1}.button`}
                  >
                    <a
                      href={`https://wa.me/542974189779?text=${encodeURIComponent(`Hola! Me interesa "${product.title}" (${product.price}). ¿Pueden darme más información?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Consultar por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

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
            fill="#0f0a04"
          />
        </svg>
      </div>
    </section>
  );
}
