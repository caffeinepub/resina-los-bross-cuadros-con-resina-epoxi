import { Hammer, MessageCircle, Palette, Truck } from "lucide-react";

interface Step {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Consulta",
    description:
      "Nos contás tu idea, medidas y espacio. Te asesoramos sin compromiso y te mostramos referencias de trabajos anteriores.",
  },
  {
    step: 2,
    icon: Palette,
    title: "Diseño",
    description:
      "Diseñamos juntos el acabado, colores y materiales. Elegís tonos, texturas y elementos a encapsular — todo a tu gusto.",
  },
  {
    step: 3,
    icon: Hammer,
    title: "Elaboración",
    description:
      "Fabrico tu pieza a mano en mi taller en Córdoba con resina epoxi cristal de alta calidad. Producción 100% artesanal.",
  },
  {
    step: 4,
    icon: Truck,
    title: "Entrega",
    description:
      "Empaqueto con cuidado y envío a cualquier provincia del país. Tu obra llega protegida y lista para lucir.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
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
          <path
            d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z"
            fill="#160e04"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                background: "rgba(200,146,42,0.10)",
                borderColor: "rgba(200,146,42,0.30)",
              }}
            >
              <Hammer className="h-4 w-4" style={{ color: "#e8b84b" }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#e8b84b" }}
              >
                Proceso Artesanal
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
              Cómo Trabajo
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(220,190,140,0.72)" }}
            >
              De tu idea a la pieza terminada — un proceso transparente y
              artesanal de principio a fin.
            </p>
          </div>

          {/* Desktop: image left + steps right / Mobile: image top + steps below */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Workshop Image */}
            <div className="w-full lg:w-[45%] shrink-0">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: "1.5px solid rgba(200,146,42,0.25)" }}
              >
                <img
                  src="/assets/generated/proceso-taller-resina-artesanal.dim_1200x800.jpg"
                  alt="Taller artesanal de resina epoxi en Córdoba"
                  loading="lazy"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
                {/* Subtle amber overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,15,0,0.88), transparent)",
                  }}
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
                  style={{
                    background: "rgba(15,10,4,0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(200,146,42,0.22)",
                  }}
                >
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ color: "#e8b84b" }}
                  >
                    Taller Resina Los Bross
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(200,180,140,0.72)" }}
                  >
                    Córdoba Capital · Producción 100% artesanal · Distribuimos a
                    todo el país
                  </p>
                </div>
              </div>
            </div>

            {/* Steps with vertical connector */}
            <div className="w-full lg:w-[55%] flex flex-col gap-0">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isLast = i === steps.length - 1;
                return (
                  <div key={s.step} className="flex gap-5">
                    {/* Left: number bubble + vertical line */}
                    <div className="flex flex-col items-center shrink-0">
                      {/* Large step bubble */}
                      <div
                        className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #c8922a 0%, #e8b84b 60%, #f5d07a 100%)",
                          boxShadow: "0 0 20px rgba(200,146,42,0.4)",
                        }}
                        data-ocid={`proceso.item.${s.step}`}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: "#1a0f00" }}
                        />
                        <span
                          className="text-[9px] font-black leading-none mt-0.5"
                          style={{ color: "rgba(26,15,0,0.7)" }}
                        >
                          0{s.step}
                        </span>
                      </div>
                      {/* Vertical connector (not on last) */}
                      {!isLast && (
                        <div
                          className="w-px flex-1 my-1"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(200,146,42,0.5), rgba(200,146,42,0.1))",
                            minHeight: "32px",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-5 rounded-2xl mb-4"
                      style={{
                        background: "rgba(200,146,42,0.06)",
                        border: "1px solid rgba(200,146,42,0.16)",
                      }}
                    >
                      <h3
                        className="text-xl font-bold mb-1.5"
                        style={{ color: "#f0d89a" }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(200,180,140,0.78)" }}
                      >
                        {s.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* CTA inside process section */}
              <div className="pl-[76px] mt-2">
                <a
                  href="https://wa.me/542974189779?text=Hola!%20Quiero%20consultar%20sobre%20un%20trabajo%20en%20resina%20epoxi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-base shadow-xl transition-all duration-200 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                    color: "#1a0f00",
                    boxShadow: "0 0 25px rgba(200,146,42,0.4)",
                  }}
                  data-ocid="proceso.whatsapp.button"
                >
                  <MessageCircle className="h-5 w-5" />
                  Empezá tu pedido
                </a>
              </div>
            </div>
          </div>
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
            d="M0,40 C480,0 960,60 1440,20 L1440,60 L0,60 Z"
            fill="#0f0a04"
          />
        </svg>
      </div>
    </section>
  );
}
