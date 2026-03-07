import { Clock, Gem, Layers, Scale, Sparkles, TreePine } from "lucide-react";

const reasons = [
  {
    icon: TreePine,
    title: "Madera maciza seleccionada",
    detail: "A medida",
    description:
      "Cada tabla se manda a cortar a medida en madera maciza nativa. No hay aglomerado, no hay mdf — solo madera real que va a durar décadas.",
    comparacion: null,
  },
  {
    icon: Gem,
    title: "Resina epoxi cristal premium",
    detail: "Alta calidad",
    description:
      "Se usa resina epoxi de baja exotermia y curado profundo — la misma usada en ebanistería de diseño. Garantiza transparencia absoluta, sin burbujas ni amarillamiento.",
    comparacion: null,
  },
  {
    icon: Clock,
    title: "24 a 36 horas de trabajo artesanal",
    detail: "Por pieza",
    description:
      "Cada mesa lleva entre 24 y 36 horas de trabajo real: preparación de madera, vaciado de capas, curado, lijado progresivo (hasta grano 2000) y pulido espejo final.",
    comparacion: null,
  },
  {
    icon: Layers,
    title: "Curado de 36 a 48 horas",
    detail: "Sin apuros",
    description:
      "La resina necesita 36 a 48 horas de curado completo antes de poder trabajarla. No hay atajos — el tiempo de curado es lo que garantiza la dureza y brillo definitivos.",
    comparacion: null,
  },
  {
    icon: Sparkles,
    title: "Pieza única e irrepetible",
    detail: "Sin copias",
    description:
      "La forma en que fluye la resina, los vórtices y los patrones de color son imposibles de replicar exactamente. Cada pieza que sale del taller es literalmente la única en el mundo.",
    comparacion: null,
  },
  {
    icon: Scale,
    title: "Precio justo vs. diseño industrial",
    detail: "Comparación real",
    description:
      "Una mesa de diseño importada o de marca equivalente cuesta entre $900.000 y $1.500.000. La diferencia: la nuestra es 100% artesanal, hecha a medida y con materiales seleccionados.",
    comparacion: "Diseño de marca equivalente: desde $900.000",
  },
];

export default function ValueSection() {
  return (
    <section
      id="por-que-cuesta"
      className="py-24 relative"
      style={{ background: "#0f0a04" }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path d="M0,20 C480,60 960,0 1440,40 L1440,0 L0,0 Z" fill="#1a1008" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                background: "rgba(200,146,42,0.10)",
                borderColor: "rgba(200,146,42,0.30)",
              }}
            >
              <Scale className="h-4 w-4" style={{ color: "#e8b84b" }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#e8b84b" }}
              >
                Transparencia total
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
              ¿Por qué cuesta lo que cuesta?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(220,190,140,0.78)" }}
            >
              No es un precio caprichoso. Es el resultado de materiales de
              primera calidad, tiempo artesanal real y un proceso sin atajos.
            </p>
          </div>

          {/* Grid of reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  data-ocid={`value.item.${idx + 1}`}
                  className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(200,146,42,0.05)",
                    border: "1px solid rgba(200,146,42,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(200,146,42,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(200,146,42,0.15)";
                  }}
                >
                  {/* Icon + detail badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #c8922a 0%, #e8b84b 100%)",
                        boxShadow: "0 0 16px rgba(200,146,42,0.3)",
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#1a0f00" }} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(200,146,42,0.12)",
                        color: "#e8b84b",
                        border: "1px solid rgba(200,146,42,0.25)",
                      }}
                    >
                      {r.detail}
                    </span>
                  </div>

                  <h3
                    className="text-base font-bold leading-snug"
                    style={{ color: "#f0d89a" }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(210,185,140,0.82)" }}
                  >
                    {r.description}
                  </p>

                  {/* Comparación highlight */}
                  {r.comparacion && (
                    <div
                      className="mt-2 px-3 py-2 rounded-lg text-xs font-semibold"
                      style={{
                        background: "rgba(200,146,42,0.10)",
                        color: "rgba(240,216,154,0.85)",
                        borderLeft: "3px solid #e8b84b",
                      }}
                    >
                      {r.comparacion}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom callout banner */}
          <div
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(200,146,42,0.12) 0%, rgba(26,15,0,0.5) 100%)",
              border: "1px solid rgba(200,146,42,0.25)",
            }}
          >
            {/* Decorative glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 blur-3xl opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #e8b84b, transparent 70%)",
              }}
            />
            <p
              className="text-xl md:text-2xl font-semibold leading-relaxed relative z-10"
              style={{ color: "rgba(255,240,210,0.92)" }}
            >
              No estás pagando una mesa. Estás pagando{" "}
              <span style={{ color: "#e8b84b" }}>
                una pieza artesanal única
              </span>{" "}
              que ninguna fábrica puede replicar.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px]"
        >
          <path
            d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z"
            fill="#1a1008"
          />
        </svg>
      </div>
    </section>
  );
}
