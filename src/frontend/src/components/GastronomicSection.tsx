import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, Ruler, Utensils } from "lucide-react";
import { useState } from "react";

interface TableProduct {
  id: string;
  name: string;
  image: string;
  shape: string;
  dimensions: string;
  thickness: string;
  weight: string;
  capacity: string;
  features: string[];
  description: string;
}

const tables: TableProduct[] = [
  {
    id: "mesa-marina-1",
    name: "Mesa Marina Turquesa",
    image: "/assets/generated/mesa-gastronomica-marina-1.dim_1200x800.jpg",
    shape: "Ovalada",
    dimensions: "120 cm x 80 cm",
    thickness: "5 cm de espesor total (resina 2 mm)",
    weight: "Aprox. 35 kg",
    capacity: "4 personas",
    features: [
      "Resina epoxi cristal de 2 mm de acabado",
      "Conchas, ostras y pinzas de cangrejo encapsuladas",
      "Base de madera maciza con patas negras",
      "Superficie 100% impermeable",
      "Diseño único e irrepetible",
      "Apto para uso interior y exterior cubierto",
    ],
    description:
      "Mesa ovalada con resina epoxi en tonos turquesa y verde. La superficie encapsula conchas, ostras, piedras y elementos marinos reales, creando una ventana al fondo del mar en cada mesa.",
  },
  {
    id: "mesa-marina-2",
    name: "Mesa Marina Océano Profundo",
    image: "/assets/generated/mesa-gastronomica-marina-2.dim_1200x800.jpg",
    shape: "Ovalada",
    dimensions: "100 cm x 70 cm — personalizable",
    thickness: "5 cm de espesor total (resina 2 mm)",
    weight: "Aprox. 30 kg",
    capacity: "2–4 personas",
    features: [
      "Resina epoxi cristal de 2 mm de acabado",
      "Elementos marinos: conchas, caracoles y piedras",
      "Marco de madera nogal oscuro",
      "Superficie resistente a golpes y rayado",
      "Colores personalizables por encargo",
      "Fácil limpieza y mantenimiento",
    ],
    description:
      "Mesa ovalada con tonos de azul océano profundo. El marco de madera oscura combina con la superficie de resina que muestra una composición marina con conchas y elementos del mar perfectamente encapsulados.",
  },
  {
    id: "mesa-marina-3",
    name: "Mesa Marina Esmeralda",
    image: "/assets/generated/mesa-gastronomica-marina-3.dim_1200x800.jpg",
    shape: "Ovalada",
    dimensions: "110 cm x 75 cm — personalizable",
    thickness: "Resina de 2 mm + base de madera",
    weight: "Aprox. 28 kg",
    capacity: "2–4 personas / decorativa",
    features: [
      "Trabajo artesanal hecho a mano",
      "Conchas, sombreritos, caracoles y pinzas",
      "Resina epoxi transparente brillante",
      "Borde redondeado con acabado impecable",
      "Diseño exclusivo para gastronomía",
      "Entregamos a todas las provincias",
    ],
    description:
      "Mesa ovalada en verde esmeralda y arena. Cada concha, piedra y elemento marino está cuidadosamente dispuesto a mano antes de ser sellado con resina cristal, logrando una pieza única para tu local.",
  },
];

export default function GastronomicSection() {
  const [selected, setSelected] = useState<TableProduct | null>(null);

  const whatsappMsg = (table: TableProduct) => {
    const text = encodeURIComponent(
      `Hola! Me interesa la "${table.name}" (${table.dimensions}) para mi local gastronómico. ¿Pueden darme más información y precio?`,
    );
    return `https://wa.me/542974189779?text=${text}`;
  };

  return (
    <section
      id="gastronomico"
      className="py-20 bg-gradient-to-br from-teal-950/30 via-background to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <Utensils className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium text-teal-400">
              Sector Gastronómico
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Mesas para Restaurantes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mesas a medida para locales gastronómicos de mariscos. Superficies
            de resina epoxi con conchas, ostras, pinzas de cangrejo y elementos
            del mar encapsulados — cada mesa es una obra única.
          </p>
        </div>

        {/* Table Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tables.map((table, idx) => (
            <Card
              key={table.id}
              data-ocid={`gastro.item.${idx + 1}`}
              className="overflow-hidden border-border/50 hover:border-teal-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() =>
                setSelected(selected?.id === table.id ? null : table)
              }
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={table.image}
                  alt={table.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-teal-500/90 text-white text-xs font-semibold">
                    {table.shape}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{table.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {table.description}
                </p>

                {/* Dimensions */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-teal-500/5 border border-teal-500/20">
                  <Ruler className="h-4 w-4 text-teal-400 shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">
                      Medidas
                    </span>
                    <span className="text-sm font-semibold">
                      {table.dimensions}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      · {table.thickness}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">
                      Capacidad:
                    </span>{" "}
                    {table.capacity}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Peso:</span>{" "}
                    {table.weight}
                  </div>
                </div>

                {/* Features */}
                {selected?.id === table.id && (
                  <div className="mb-4 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-xs font-semibold text-teal-400 uppercase tracking-wide mb-2">
                      Características
                    </p>
                    <ul className="space-y-1">
                      {table.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <Button
                  asChild
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white"
                  data-ocid={`gastro.item.${idx + 1}.button`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={whatsappMsg(table)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl border border-teal-500/20 bg-teal-500/5">
          <h3 className="text-2xl font-bold mb-2">
            ¿Tenés un local gastronómico?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Diseñamos mesas a medida con los elementos marinos que elijas.
            Consultanos por dimensiones, cantidad y diseño personalizado.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-500 text-white"
            data-ocid="gastro.cta.button"
          >
            <a
              href="https://wa.me/542974189779?text=Hola!%20Quiero%20consultar%20sobre%20mesas%20para%20mi%20restaurante%20de%20mariscos."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Escribinos al WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
