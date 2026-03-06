import { Award, Heart, MapPin, Truck } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Un solo artesano",
      description:
        "Cada pieza la diseño, fabrico y termino yo mismo. Sin intermediarios, sin producción en serie.",
    },
    {
      icon: Award,
      title: "Acabado cristal brillante",
      description:
        "Acabado espejo ultra brillante con resina epoxi de alta calidad, aplicada artesanalmente en cada trabajo.",
    },
    {
      icon: MapPin,
      title: "Córdoba Capital",
      description:
        "Fabricación 100% local y artesanal. Cada pieza nace en mi taller en Córdoba.",
    },
    {
      icon: Truck,
      title: "Todo el país",
      description:
        "Empaquetado con cuidado y envío protegido a todas las provincias de Argentina.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative"
      style={{ background: "#0f0a04" }}
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
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#1a1008"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                background: "rgba(200,146,42,0.10)",
                borderColor: "rgba(200,146,42,0.30)",
              }}
            >
              <Heart className="h-4 w-4" style={{ color: "#e8b84b" }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#e8b84b" }}
              >
                El artesano detrás de cada pieza
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
              Sobre Nosotros
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(220,190,140,0.72)" }}
            >
              Arte en resina epoxi hecho con las propias manos, pieza por pieza
            </p>
          </div>

          {/* Personal story card */}
          <div
            className="rounded-2xl p-8 md:p-10 mb-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(200,146,42,0.08) 0%, rgba(26,15,0,0.6) 100%)",
              border: "1px solid rgba(200,146,42,0.22)",
            }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-4 right-6 text-8xl font-serif leading-none select-none pointer-events-none"
              style={{ color: "rgba(200,146,42,0.08)" }}
              aria-hidden="true"
            >
              "
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed mb-6 font-light"
              style={{ color: "rgba(255,240,205,0.88)" }}
            >
              Soy el único artesano detrás de{" "}
              <span className="font-semibold" style={{ color: "#e8b84b" }}>
                Resina Los Bross
              </span>
              . Cada mesa, cada mesa ratona, cada cuadro decorativo lo diseño,
              fabrico y termino yo personalmente en mi taller en Córdoba
              Capital. No hay producción en serie, no hay intermediarios — hay
              una sola persona que pone el tiempo y la dedicación en cada
              detalle.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed font-light"
              style={{ color: "rgba(220,195,155,0.80)" }}
            >
              Empecé este emprendimiento con la convicción de que el trabajo
              artesanal bien hecho habla por sí solo. Cada pieza que sale de mi
              taller lleva resina epoxi cristal de primera calidad, aplicada
              artesanalmente para lograr ese{" "}
              <span className="font-medium" style={{ color: "#e8b84b" }}>
                acabado espejo brillante
              </span>{" "}
              que no se consigue en una fábrica. Mi objetivo es crecer con cada
              trabajo y que cada cliente reciba algo único e irrepetible.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: "rgba(200,146,42,0.06)",
                    border: "1px solid rgba(200,146,42,0.15)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                      boxShadow: "0 0 16px rgba(200,146,42,0.35)",
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: "#1a0f00" }} />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ color: "#f0d89a" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(200,175,130,0.78)" }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
