import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hola, me gustaría consultar sobre algún diseño en resina epoxi.",
  );

  return (
    <a
      href={`https://wa.me/542974189779?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      data-ocid="whatsapp.float.button"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-green-500/40"
      style={{
        background: "linear-gradient(135deg, #25d366, #128c7e)",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
      }}
    >
      <SiWhatsapp className="h-5 w-5" />
      <span className="hidden sm:inline">Consultar por WhatsApp</span>
    </a>
  );
}
