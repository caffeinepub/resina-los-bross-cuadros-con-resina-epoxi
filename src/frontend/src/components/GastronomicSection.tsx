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
    image: "/assets/generated/mesa-gastro-marina-nueva.dim_1200x800.jpg",
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
    image:
      "/assets/generated/mesa-gastro-restaurante-elegante-realista.dim_1200x800.jpg",
    shape: "Rectangular",
    dimensions: "100 cm x 70 cm — personalizable",
    thickness: "Resina epoxi sellada 2 mm + base de madera",
    weight: "Aprox. 30 kg",
    capacity: "2–4 personas",
    features: [
      "Superficie sellada con resina epoxi azul-verde agua",
      "Acabado espejo ultra brillante y suave al tacto",
      "Madera maciza como base estructural",
      "Diseño elegante apto para cualquier local",
      "Colores personalizables por encargo",
      "Fácil limpieza y mantenimiento",
    ],
    description:
      "Mesa rectangular para restaurante con superficie sellada en resina epoxi en tono azul-verde agua sutil. Diseño elegante y versátil, apto para cualquier tipo de local gastronómico. Acabado espejo impecable que refleja la luz ambiente.",
  },
  {
    id: "mesa-marina-3",
    name: "Mesa Marina Esmeralda",
    image:
      "/assets/generated/mesa-gastronomica-mariscos-premium.dim_1200x800.jpg",
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
  {
    id: "mesa-rectangular-sellada",
    name: "Mesa Rectangular — Superficie Sellada",
    image:
      "/assets/generated/mesa-rectangular-restaurante-resina-sellada.dim_1200x800.jpg",
    shape: "Rectangular",
    dimensions: "120 cm x 60 cm — hasta 120 cm x 80 cm",
    thickness: "Capa de resina uniforme sellada (sin espesor exagerado)",
    weight: "Aprox. 40 kg",
    capacity: "4–6 personas",
    features: [
      "Toda la superficie sellada con resina epoxi cristal",
      "Acabado espejo ultra brillante en toda la capa",
      "Madera maciza como base estructural",
      "Patas metálicas negras de diseño",
      "Superficie 100% impermeable y resistente",
      "Ideal para restaurantes y locales gastronómicos",
    ],
    description:
      "Mesa rectangular grande con toda la capa superior sellada en resina epoxi cristal, logrando una superficie espejo impecable. Sin espesor exagerado — solo el acabado brillante justo para destacar la madera y proteger la mesa por completo.",
  },
  {
    id: "mesa-cena-marina-rectangular",
    name: "Mesa de Cena Marina — Rectangular",
    image:
      "/assets/generated/mesa-gastronomica-marina-conchas.dim_1200x800.jpg",
    shape: "Rectangular",
    dimensions: "120 cm x 80 cm (personalizable hasta 120 cm x 100 cm)",
    thickness: "Toda la tabla sellada con resina epoxi (3–4 cm de profundidad)",
    weight: "Aprox. 45 kg",
    capacity: "4 personas",
    features: [
      "Toda la superficie de madera cubierta con resina epoxi",
      "Conchas, almejas, sombreritos de mar encapsulados",
      "Pinzas de cangrejo y abanico de conchas incluidos",
      "Colores de mar: turquesa, azul océano, arena y verde",
      "Objetos suspendidos a distintas profundidades (efecto 3D)",
      "Acabado espejo brillante en toda la capa",
      "Diseño único artesanal, irrepetible",
      "Entrega a todo el país",
    ],
    description:
      "Mesa rectangular de cena para 4 personas con toda la tabla de madera cubierta y sellada con resina epoxi. Encapsula abanico de conchas, almejas, sombreritos de mar y pinzas de cangrejo en colores de mar profundo — turquesa, azul y arena. Cada elemento está dispuesto a mano antes del sellado.",
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
      className="py-24 relative"
      style={{ background: "#160e04" }}
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
          <path
            d="M0,40 C360,0 1080,60 1440,20 L1440,0 L0,0 Z"
            fill="#0f0a04"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 pt-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              background: "rgba(200,146,42,0.10)",
              borderColor: "rgba(200,146,42,0.30)",
            }}
          >
            <Utensils className="h-4 w-4" style={{ color: "#e8b84b" }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: "#e8b84b" }}
            >
              Sector Gastronómico
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
            Mesas para Restaurantes
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(220,190,140,0.72)" }}
          >
            Mesas a medida para locales gastronómicos de mariscos. Superficies
            de resina epoxi con conchas, ostras, pinzas de cangrejo y elementos
            del mar encapsulados — cada mesa es una obra única.
          </p>
        </div>

        {/* Table Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {tables.map((table, idx) => (
            <Card
              key={table.id}
              data-ocid={`gastro.item.${idx + 1}`}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
              onClick={() =>
                setSelected(selected?.id === table.id ? null : table)
              }
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={table.image}
                  alt={table.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-semibold">
                    {table.shape}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#f0d89a" }}
                >
                  {table.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(210,180,130,0.80)" }}
                >
                  {table.description}
                </p>

                {/* Dimensions */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                  <Ruler className="h-4 w-4 text-amber-400 shrink-0" />
                  <div>
                    <span
                      className="text-xs block"
                      style={{ color: "rgba(200,175,130,0.65)" }}
                    >
                      Medidas
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#f0d89a" }}
                    >
                      {table.dimensions}
                    </span>
                    <span
                      className="text-xs ml-2"
                      style={{ color: "rgba(200,175,130,0.65)" }}
                    >
                      · {table.thickness}
                    </span>
                  </div>
                </div>

                <div
                  className="grid grid-cols-2 gap-2 mb-4 text-xs"
                  style={{ color: "rgba(200,175,130,0.78)" }}
                >
                  <div>
                    <span
                      className="font-semibold"
                      style={{ color: "#e8c96a" }}
                    >
                      Capacidad:
                    </span>{" "}
                    {table.capacity}
                  </div>
                  <div>
                    <span
                      className="font-semibold"
                      style={{ color: "#e8c96a" }}
                    >
                      Peso:
                    </span>{" "}
                    {table.weight}
                  </div>
                </div>

                {/* Features */}
                {selected?.id === table.id && (
                  <div className="mb-4 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-2">
                      Características
                    </p>
                    <ul className="space-y-1">
                      {table.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "oklch(0.82 0.04 68)" }}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <Button
                  asChild
                  className="w-full text-white font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                    color: "#1a0f00",
                  }}
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
        <div
          className="text-center p-8 rounded-2xl"
          style={{
            background: "rgba(200,146,42,0.07)",
            border: "1px solid rgba(200,146,42,0.22)",
          }}
        >
          <h3 className="text-2xl font-bold mb-2" style={{ color: "#f0d89a" }}>
            ¿Tenés un local gastronómico?
          </h3>
          <p
            className="mb-6 max-w-xl mx-auto"
            style={{ color: "rgba(210,180,130,0.80)" }}
          >
            Diseñamos mesas a medida con los elementos marinos que elijas.
            Consultanos por dimensiones, cantidad y diseño personalizado.
          </p>
          <Button
            asChild
            size="lg"
            className="text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #c8922a, #e8b84b)",
              color: "#1a0f00",
            }}
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
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#1a1008"
          />
        </svg>
      </div>
    </section>
  );
}
