import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gem, Layers, MessageCircle, Settings2, Wine } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      icon: Layers,
      image: "/assets/generated/mesa-resina-rio.dim_1200x800.jpg",
      title: "Mesas de Resina",
      description:
        "Mesas a medida con madera maciza y río de resina epoxi en el centro. Diseños únicos con colores y formas personalizadas para cada espacio.",
      features: [
        "Madera maciza natural",
        "Resina epoxi cristal",
        "Medidas a pedido",
      ],
    },
    {
      icon: Settings2,
      image:
        "/assets/generated/mesa-ratona-resina-azul-realista.dim_1200x800.jpg",
      title: "Mesa Ratona Azul Océano",
      description:
        "Mesa ratona de living con río de resina epoxi en tonos azul océano y turquesa. Madera natural con patas hairpin negras. Perfecta para espacios modernos.",
      features: [
        "Baja altura de living",
        "Resina azul oceánica",
        "Patas hairpin negras",
      ],
    },
    {
      icon: Settings2,
      image:
        "/assets/generated/mesa-ratona-resina-verde-realista.dim_1200x800.jpg",
      title: "Mesa Ratona Verde Esmeralda",
      description:
        "Mesa ratona con madera live-edge y resina epoxi en verde esmeralda con destellos dorados. Acabado ultra brillante de profundidad y lujo.",
      features: [
        "Madera live-edge",
        "Resina verde con dorado",
        "Acabado espejo",
      ],
    },
    {
      icon: Gem,
      image:
        "/assets/generated/cuadro-blue-label-realista-45x60.dim_800x1067.jpg",
      title: "Cuadro Blue Label — 45×60 cm",
      description:
        "Cuadro decorativo exclusivo 45×60 cm con fragmentos de botella de whisky Blue Label rota, dispuestos artísticamente y encapsulados en resina epoxi cristal. Marco negro elegante.",
      features: [
        "Medidas: 45 cm × 60 cm",
        "Marco negro elegante",
        "Fragmentos de vidrio encapsulados",
        "Resina cristal brillante 2 mm",
      ],
    },
    {
      icon: Wine,
      image:
        "/assets/generated/cuadro-black-label-realista-45x60.dim_800x1067.jpg",
      title: "Cuadro Black Label — 45×60 cm",
      description:
        "Cuadro decorativo 45×60 cm con fragmentos de botella de whisky Black Label rota, sellados con resina epoxi cristal de 2 mm. Acabado premium con marco negro.",
      features: [
        "Medidas: 45 cm × 60 cm",
        "Marco negro premium",
        "Vidrio encapsulado en resina",
        "Brillo profundo tipo espejo",
      ],
    },
    {
      icon: Settings2,
      image: "",
      title: "Diseños Personalizados",
      description:
        "Creamos cualquier diseño con resina epoxi adaptado a tus gustos, medidas y espacio. Asesoramiento completo incluido. Distribuimos a todo el país.",
      features: [
        "100% a medida",
        "Asesoría incluida",
        "Distribuimos a todo el país",
      ],
      isCustom: true,
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestras Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con resina epoxi para crear piezas únicas, funcionales y
            decorativas — mesas, mesas ratonas y cuadros encapsulados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.title}
                data-ocid={`products.item.${idx + 1}`}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                {product.image ? (
                  <div className="h-56 overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <Icon className="h-16 w-16 text-primary/40 mx-auto mb-2" />
                      <span className="text-muted-foreground text-sm">
                        Diseño a tu medida
                      </span>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                    data-ocid={`products.item.${idx + 1}.button`}
                  >
                    <a
                      href={`https://wa.me/542974189779?text=${encodeURIComponent(`Hola! Me interesa "${product.title}". ¿Pueden darme más información?`)}`}
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
    </section>
  );
}
