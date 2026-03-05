import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 297 418 9779",
      link: "tel:+542974189779",
    },
    {
      icon: Mail,
      title: "Email",
      value: "magnociro1@gmail.com",
      link: "mailto:magnociro1@gmail.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Córdoba Capital, Argentina",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
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
            d="M0,20 C360,60 1080,0 1440,40 L1440,0 L0,0 Z"
            fill="#1a1008"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 pt-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                background: "rgba(200,146,42,0.10)",
                borderColor: "rgba(200,146,42,0.30)",
              }}
            >
              <MessageCircle className="h-4 w-4" style={{ color: "#e8b84b" }} />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#e8b84b" }}
              >
                Hablemos
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
              Contáctanos
            </h2>
            <p className="text-lg" style={{ color: "rgba(220,190,140,0.72)" }}>
              ¿Interesado en una pieza personalizada? Escribinos y te asesoramos
              sin compromiso.
            </p>
          </div>

          {/* Big WhatsApp CTA */}
          <div
            className="rounded-2xl p-8 mb-10 text-center"
            style={{
              background: "linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 100%)",
              border: "1.5px solid rgba(37,211,102,0.3)",
            }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: "rgba(37,211,102,0.7)" }}
            >
              ¿Listo para empezar?
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "#e8f5e9" }}
            >
              Hablemos por WhatsApp
            </h3>
            <p
              className="mb-6 max-w-xl mx-auto"
              style={{ color: "rgba(200,230,200,0.75)" }}
            >
              Escribinos para consultar precio, medidas y disponibilidad. Te
              respondemos al toque.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 font-bold shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c4a)",
                color: "#fff",
                border: "none",
              }}
              data-ocid="contact.whatsapp.primary_button"
            >
              <a
                href="https://wa.me/542974189779?text=Hola!%20Quiero%20consultar%20sobre%20un%20trabajo%20en%20resina%20epoxi."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Escribir al WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(20,12,2,0.85)",
                    border: "1px solid rgba(200,146,42,0.18)",
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                        boxShadow: "0 0 16px rgba(200,146,42,0.35)",
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color: "#1a0f00" }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: "#f0d89a" }}>
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm transition-colors"
                        style={{ color: "rgba(210,180,130,0.78)" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm"
                        style={{ color: "rgba(210,180,130,0.78)" }}
                      >
                        {info.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Distribución */}
          <div
            className="text-center mb-10 py-5 rounded-xl"
            style={{
              background: "rgba(200,146,42,0.06)",
              border: "1px solid rgba(200,146,42,0.18)",
            }}
          >
            <p className="text-lg font-bold mb-1" style={{ color: "#f0d89a" }}>
              Distribuimos a todas las provincias del país
            </p>
            <p className="text-sm" style={{ color: "rgba(210,180,130,0.68)" }}>
              Envíos seguros y garantizados desde Córdoba Capital
            </p>
          </div>

          {/* "Tu opinión importa" section */}
          <div
            className="rounded-2xl p-8 mb-10 text-center"
            style={{
              background: "rgba(200,146,42,0.05)",
              border: "1px solid rgba(200,146,42,0.22)",
            }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-6 w-6"
                  style={{ color: "#e8b84b", fill: "#e8b84b" }}
                />
              ))}
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "#f0d89a" }}
            >
              Tu opinión importa
            </h3>
            <p
              className="mb-6 max-w-lg mx-auto leading-relaxed"
              style={{ color: "rgba(210,180,130,0.80)" }}
            >
              Si ya tuviste una pieza de Resina Los Bross, nos encantaría
              escuchar tu experiencia. Una reseña real vale más que cualquier
              publicidad.
            </p>
            <Button
              asChild
              size="default"
              className="font-semibold"
              style={{
                background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                color: "#1a0f00",
                border: "none",
              }}
              data-ocid="contact.review.button"
            >
              <a
                href="https://wa.me/542974189779?text=Hola!%20Quiero%20dejar%20mi%20opini%C3%B3n%20sobre%20mi%20pieza%20de%20Resina%20Los%20Bross."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Dejá tu reseña por WhatsApp
              </a>
            </Button>
          </div>

          {/* Redes sociales — Próximamente */}
          <div className="text-center">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#f0d89a" }}
            >
              Seguinos en Redes
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(210,180,130,0.60)" }}
            >
              Próximamente en Instagram y TikTok
            </p>
            <div className="flex justify-center gap-4">
              {/* Instagram */}
              <div
                className="flex items-center gap-2 px-5 py-3 rounded-xl"
                style={{
                  background: "rgba(200,146,42,0.06)",
                  border: "1px solid rgba(200,146,42,0.18)",
                }}
              >
                <SiInstagram
                  className="h-5 w-5"
                  style={{ color: "rgba(200,160,100,0.5)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgba(200,160,100,0.5)" }}
                >
                  Instagram — Próximamente
                </span>
              </div>
              {/* TikTok */}
              <div
                className="flex items-center gap-2 px-5 py-3 rounded-xl"
                style={{
                  background: "rgba(200,146,42,0.06)",
                  border: "1px solid rgba(200,146,42,0.18)",
                }}
              >
                <SiTiktok
                  className="h-5 w-5"
                  style={{ color: "rgba(200,160,100,0.5)" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgba(200,160,100,0.5)" }}
                >
                  TikTok — Próximamente
                </span>
              </div>
              {/* WhatsApp activo */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transition-colors hover:text-green-400"
                style={{
                  border: "1px solid rgba(200,146,42,0.18)",
                  background: "rgba(200,146,42,0.06)",
                  color: "rgba(200,230,200,0.80)",
                }}
                data-ocid="contact.social.whatsapp.button"
              >
                <a
                  href="https://wa.me/542974189779"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
